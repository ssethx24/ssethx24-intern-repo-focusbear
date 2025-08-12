import React from 'react';
import { useSelector } from 'react-redux';
import { selectCounterValue, selectIsEven, selectMessageForValue } from '../store/selectors';

export default function CounterMessage() {
  const value = useSelector(selectCounterValue);
  const isEven = useSelector(selectIsEven);
  const message = useSelector(selectMessageForValue);

  const bg = value < 0 ? '#fde2e2' : value === 0 ? '#eef' : value >= 10 ? '#e6ffed' : '#fffbe6';
  const border = value < 0 ? '#fca5a5' : value === 0 ? '#93c5fd' : value >= 10 ? '#86efac' : '#fde68a';

  return (
    <div style={{ marginTop: 12, padding: 12, border: `1px solid ${border}`, background: bg, borderRadius: 8 }}>
      <strong>Status:</strong> {message} &nbsp;
      <em>({isEven ? 'even' : 'odd'})</em>
    </div>
  );
}
