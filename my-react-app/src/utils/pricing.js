// utils/pricing.js (after)

/**
 * Return 10% of the final total (subtotal + tax).
 * Helps estimate discount/tax scenarios consistently.
 *
 * @param {number} subtotal - The base price before tax.
 * @param {number} tax - The tax amount to be added.
 * @returns {number} - Ten percent of the final total.
 */
export function calculateDiscountedTotal(subtotal, tax) {
  const total = subtotal + tax;
  return total * 0.1;
}