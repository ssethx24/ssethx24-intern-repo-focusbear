import { createSelector } from '@reduxjs/toolkit';

/** Root slice selector (adjust key if your store uses a different name) */
export const selectCounterSlice = (state) => state.counter;

/** Basic value selector */
export const selectCounterValue = createSelector(
  [selectCounterSlice],
  (counter) => counter.value
);

/** Some handy derived selectors (examples) */
export const selectIsEven = createSelector(
  [selectCounterValue],
  (value) => value % 2 === 0
);

export const selectMessageForValue = createSelector(
  [selectCounterValue],
  (value) => {
    if (value < 0) return "You're below zero — careful!";
    if (value === 0) return 'Back to zero.';
    if (value >= 10) return 'Double digits! Nice!';
    return 'Keep going!';
  }
);
