import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync } from '../store/counterSlice';
import { selectCounterValue } from '../store/selectors';

export default function Counter() {
  const value = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(5);

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <h3>Redux Counter</h3>
      <p style={{ fontSize: 18, marginBottom: 12 }}>
        Value: <strong>{value}</strong>
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementAsync(1))}>+1 async</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: 80 }}
        />
        <button onClick={() => dispatch(incrementAsync(amount))}>
          Add Amount (async)
        </button>
      </div>
    </div>
  );
}
