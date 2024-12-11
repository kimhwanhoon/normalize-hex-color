import { normalizeHexColor } from '../index';

describe('normalizeHexColor', () => {
  it('should normalize single digit hex colors', () => {
    expect(normalizeHexColor('1')).toBe('#111111');
  });

  it('should normalize two digit hex colors', () => {
    expect(normalizeHexColor('12')).toBe('#121212');
  });

  it('should handle 3-digit hex colors', () => {
    expect(normalizeHexColor('123')).toBe('#123123');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#a')).toBe('#AAAAAA');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#aB')).toBe('#ABABAB');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#aBc')).toBe('#ABCABC');
  });

  it('should throw on invalid input', () => {
    expect(() => normalizeHexColor('')).toThrow();
    expect(() => normalizeHexColor('G')).toThrow();
  });
});