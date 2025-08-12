import React, { useMemo, useState } from 'react';

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Simulate heavy work
  const expensiveCalculation = (num) => {
    console.log('Running expensive calculation...');
    let total = 0;
    for (let i = 0; i < 100000000; i++) total += num * 2;
    return total;
  };

  // Only recompute when 'count' changes
  const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

  const themeStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem',
  };

  return (
    <div style={themeStyles}>
      <p><strong>Count:</strong> {count}</p>
      <p><strong>Calculated Value:</strong> {calculatedValue}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setDarkMode(dm => !dm)} style={{ marginLeft: 8 }}>
        Toggle Theme
      </button>
    </div>
  );
}

