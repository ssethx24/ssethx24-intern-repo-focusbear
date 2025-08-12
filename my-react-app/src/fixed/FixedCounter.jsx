// src/fixed/FixedCounter.jsx
import React, { useEffect, useState } from 'react';

export default function FixedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1); // functional update uses latest state
    }, 1000);
    return () => clearInterval(id); // proper cleanup
  }, []);

  return (
    <div style={{ border: '1px solid #4caf50', padding: 12, borderRadius: 8 }}>
      <h3>FixedCounter</h3>
      <p>Value: {count}</p>
      <small>Functional updates + cleanup</small>
    </div>
  );
}
