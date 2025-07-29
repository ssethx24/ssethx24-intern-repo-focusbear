import reducer, { increment, decrement, incrementAsync } from './counterSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('counter reducer tests', () => {
  it('should handle increment', () => {
    const initialState = { value: 0 };
    const nextState = reducer(initialState, increment());
    expect(nextState.value).toBe(1);
  });

  it('should handle decrement', () => {
    const initialState = { value: 2 };
    const nextState = reducer(initialState, decrement());
    expect(nextState.value).toBe(1);
  });
});
 