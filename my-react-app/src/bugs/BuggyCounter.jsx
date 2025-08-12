import React, { useEffect, useState } from 'react';

export default function BuggyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // BUG: stale closure pattern (intentionally wrong)
    const id = setInterval(() => {
      setCount(count + 1); // uses stale "count"
    }, 1000);
    // intentionally missing cleanup
  }, []);

  return (
    <div>
      <p>BuggyCounter (broken): {count}</p>
      <small>Uses stale state & no cleanup (for debugging practice)</small>
    </div>
  );
}
