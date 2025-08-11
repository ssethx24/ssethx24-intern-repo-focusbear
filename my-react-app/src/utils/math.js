// /**
//  * Adds two numbers.
//  *
//  * @param {number} a - First number
//  * @param {number} b - Second number
//  * @returns {number} Sum of a and b
//  * @throws {TypeError} If either argument is not a number
//  */
// export function add(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new TypeError('Both arguments must be numbers');
//   }
//   return a + b;
// }


/**
 * Adds two finite numbers.
 *
 * @param {number} a - First number (finite)
 * @param {number} b - Second number (finite)
 * @returns {number} Sum of a and b
 * @throws {TypeError}  If a or b is missing or not a number
 * @throws {RangeError} If a or b is not finite, or the result is not finite
 */
export function add(a, b) {
  // Guard clauses: presence
  if (arguments.length < 2) {
    throw new TypeError('add(a, b) requires exactly two arguments.');
  }

  // Guard clauses: types
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError(
      `Both arguments must be numbers (received ${typeof a} and ${typeof b}).`
    );
  }

  // Guard clauses: numeric sanity
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError('Arguments must be finite numbers (not NaN/Infinity).');
  }

  const sum = a + b;

  // Post-condition: result sanity (protect against overflow)
  if (!Number.isFinite(sum)) {
    throw new RangeError('Sum is not finite (possible overflow).');
  }

  return sum;
}