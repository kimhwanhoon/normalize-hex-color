/**
 * Normalizes a hex color code by repeating the input to create a full 6-digit hex color.
 *
 * @example
 * normalizeHexColor('1')     // returns '#111111'
 * normalizeHexColor('12')    // returns '#121212'
 * normalizeHexColor('123')   // returns '#123123'
 * normalizeHexColor('#a')  // returns '#AAAAAA'
 * normalizeHexColor('#aB')  // returns '#ABABAB'
 * normalizeHexColor('#aBc')  // returns '#ABCABC'
 *
 * @throws {Error} If input is not a valid hex color (0-9, a-f, A-F)
 */

const HEX_PATTERN = /^(?:#[0-9a-fA-F]{1,7}|[0-9a-fA-F]{1,6})$/;
const HEX_LENGTH = 6;

const normalizeHexColor = (input: string): string => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  if (!HEX_PATTERN.test(input)) {
    throw new Error(
      'Invalid hex color code. Must be 1-6 hex digits (0-9, a-f, A-F), with optional #'
    );
  }

  const hex = input.replace(/^#/, '').toUpperCase();
  const normalizedHex = hex.repeat(HEX_LENGTH / hex.length);

  return `#${normalizedHex}`;
};

export { normalizeHexColor };
