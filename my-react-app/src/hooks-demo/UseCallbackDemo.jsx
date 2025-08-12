import React, { useCallback, useState } from 'react';

// Memoized child in the same file to avoid path/export issues
const ChildButton = React.memo(function ChildButton({ onClick, label }) {
  console.log(`ChildButton render: ${label}`);
  return (
    <button onClick={onClick} style={{ padding: '8px 12px', marginRight: 8 }}>
      {label}
    </button>
  );
});

export default function UseCallbackDemo() {
  console.log('Parent render');

  const [count, setCount] = useState(0);
  const [text, setText]   = useState('');

  // Stable identity (doesn't change across renders)
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  // Changes identity when "text" changes
  const sendText = useCallback(() => {
    alert(`Sending: ${text || '(empty)'}`);
  }, [text]);

  return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
      <h3>useCallback demo</h3>

      <div style={{ marginBottom: 12 }}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type to change 'text' state"
          style={{ padding: 8, width: 280 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Count:</strong> {count}{' '}
        <ChildButton label="Increment" onClick={increment} />
        <ChildButton label="Send Text" onClick={sendText} />
      </div>
    </div>
  );
}
