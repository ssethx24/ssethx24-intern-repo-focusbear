// src/components/Counter.js
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // ✅ Correct way — using setState
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h3>Simple Counter (useState)</h3>
      <p style={{ fontSize: 18, marginBottom: 12 }}>
        Value: <strong>{count}</strong>
      </p>

      <button onClick={handleIncrement}>+1</button>
    </div>
  );
}
