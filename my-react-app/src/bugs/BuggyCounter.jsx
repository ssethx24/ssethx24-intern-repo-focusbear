// src/bugs/BuggyCounter.jsx
import React, { useEffect, useState } from 'react';

export default function BuggyCounter() {
  const [count, setCount] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const id = setInterval(() => {
      // stale closure + no cleanup (on purpose for debugging practice)
      setCount(count + 1);
    }, 1000);
    // no cleanup on purpose
  }, []);

  return (
    <div style={{ border: '1px solid #f44336', padding: 12, borderRadius: 8 }}>
      <h3>BuggyCounter</h3>
      <p>Value: {count}</p>
      <small>Has stale state & no cleanup (for debugging demo)</small>
    </div>
  );
}

