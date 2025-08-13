// my-react-app/src/utils/math.test.js
import { add } from './math';

describe('add()', () => {
  // ✅ Happy paths
  it('adds two positive integers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds negatives correctly', () => {
    expect(add(-1, 4)).toBe(3);
    expect(add(-5, -7)).toBe(-12);
  });

  it('adds decimals (use closeTo for FP)', () => {
    expect(add(2.5, 1.5)).toBeCloseTo(4);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 10); // floating-point safety
  });

  // ❌ Argument presence
  it('throws if arguments are missing', () => {
    expect(() => add(1)).toThrow(TypeError);
    expect(() => add(1)).toThrow(/requires exactly two/i);
    expect(() => add()).toThrow(/requires exactly two/i);
  });

  // ❌ Type validation
  it('throws if arguments are not numbers', () => {
    expect(() => add('2', 3)).toThrow(TypeError);
    expect(() => add('2', 3)).toThrow(/numbers \(received/i);

    expect(() => add(2, null)).toThrow(TypeError);
    expect(() => add(2, null)).toThrow(/numbers \(received/i);

    expect(() => add({}, [])).toThrow(/numbers \(received/i);
  });

  // ❌ Finite number validation (NaN / Infinity)
  it('throws if arguments are not finite numbers', () => {
    expect(() => add(NaN, 1)).toThrow(RangeError);
    expect(() => add(NaN, 1)).toThrow(/finite numbers/i);

    expect(() => add(1, Infinity)).toThrow(RangeError);
    expect(() => add(1, Infinity)).toThrow(/finite numbers/i);

    expect(() => add(-Infinity, 5)).toThrow(/finite numbers/i);
  });

  // ❌ Result sanity (overflow)
  it('throws if the sum is not finite (overflow)', () => {
    const big = Number.MAX_VALUE;
    expect(() => add(big, big)).toThrow(RangeError);
    expect(() => add(big, big)).toThrow(/not finite/i);
  });
});

