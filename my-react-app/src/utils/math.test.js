import { add } from './math';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds -1 + 4 to equal 3', () => {
  expect(add(-1, 4)).toBe(3);
});

test('adds decimal numbers 2.5 + 1.5 to equal 4', () => {
  expect(add(2.5, 1.5)).toBe(4);
});

test('throws error if first argument is not a number', () => {
  expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
});

test('throws error if second argument is not a number', () => {
  expect(() => add(2, null)).toThrow('Both arguments must be numbers');
});

