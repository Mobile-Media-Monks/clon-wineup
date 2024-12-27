/**
 * Adds an alpha (opacity) value to a given color in hexadecimal format.
 *
 * @param {string} color - The color in hexadecimal format (e.g., "#RRGGBB").
 * @param {number} opacity - The opacity value as a number between 0 and 1.
 *                           Values outside this range are coerced to the nearest valid value (0 or 1).
 * @returns {string} - The color with the added alpha value in hexadecimal format (e.g., "#RRGGBBAA").
 *
 * @example
 * // Adding 50% opacity to a red color
 * const result = addAlpha("#FF0000", 0.5); // Returns "#FF00007F"
 *
 * @note
 * - The opacity is converted to an 8-bit integer (0-255) and appended to the color as a two-character hex string.
 * - If `opacity` is not provided, it defaults to 1 (fully opaque).
 */
export const addAlpha = (color: string, opacity: number) => {
  // Coerce the opacity value to ensure it is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};
