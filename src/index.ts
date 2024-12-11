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
    throw new Error('input must be a string');
  }

  // Remove '#' and convert to uppercase
  const hex = input.replace(/^#/, '').toUpperCase();
  
  // Process based on input length
  switch (hex.length) {
    case 1:
    case 2:
      if (!HEX_PATTERN.test(input)) {
        throw new Error('Invalid hex color code');
      }
      return `#${hex.repeat(HEX_LENGTH / hex.length)}`;
    case 3:
      // Convert 3-digit hex to 6-digit (e.g., 'ABC' -> 'AABBCC')
      if (!HEX_PATTERN.test(input)) {
        throw new Error('Invalid hex color code');
      }
      return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
      
      
    case 4:
      // Convert 4-digit hex to 6-digit (e.g., 'ABCD' -> 'ABCDAB')
      return `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[0]}${hex[1]}`;
      
    case 5:
      // Convert 4-digit hex to 6-digit (e.g., 'ABCDE' -> 'ABCDEA')
      return `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[4]}${hex[0]}`;
      
    case 6:
      // Normal 6-digit hex
      if (!HEX_PATTERN.test(input)) {
        throw new Error('Invalid hex color code');
      }
      return `#${hex}`;
      
    default:
      throw new Error('Invalid hex color code length');
  }
};

export { normalizeHexColor };
