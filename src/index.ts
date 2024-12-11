/**
 * Normalizes a hex color code by repeating the input to create a full 6-digit hex color.
 *
 * @example
 * normalizeHexColor('1')     // returns '#111111'
 * normalizeHexColor('12')    // returns '#121212'
 * normalizeHexColor('123')   // returns '#112233'
 * normalizeHexColor('#a')    // returns '#AAAAAA'
 * normalizeHexColor('#aB')   // returns '#ABABAB'
 * normalizeHexColor('#aBc')  // returns '#AABBCC'
 *
 * @throws {Error} If input is not a valid hex color (0-9, a-f, A-F)
 */

const HEX_PATTERN = /^#?[0-9a-fA-F]{1,6}$/;

const validateInput = (input: string): string => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  if (!HEX_PATTERN.test(input)) {
    throw new Error('Invalid hex color code');
  }
  
  return input.replace(/^#/, '').toUpperCase();
};

const expandToSixDigits = (hex: string): string => {
  switch (hex.length) {
    case 1:
      return hex.repeat(6);
    case 2:
      return hex.repeat(3);
    case 3:
      return hex.split('').map(char => char + char).join('');
    case 4:
      return hex.slice(0, 4) + hex.slice(0, 2);
    case 5:
      return hex.slice(0, 5) + hex[0];
    case 6:
      return hex;
    default:
      throw new Error('Invalid hex color code length');
  }
};

const normalizeHexColor = (input: string): string => {
  const hex = validateInput(input);
  const normalizedHex = expandToSixDigits(hex);
  return `#${normalizedHex}`;
};

export { normalizeHexColor };
