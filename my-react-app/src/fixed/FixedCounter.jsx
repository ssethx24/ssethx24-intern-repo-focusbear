import React, { useEffect, useState } from 'react';

export default function BuggyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // intentionally buggy: stale closure + no cleanup
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    // no cleanup on purpose
  }, []);

  return (
    <div>
      <p>BuggyCounter (broken): {count}</p>
      <small>Uses stale state & no cleanup (for debugging practice)</small>
    </div>
  );
}
