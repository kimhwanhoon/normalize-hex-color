import { normalizeHexColor } from '../index';

describe('normalizeHexColor', () => {
  it('should normalize single digit hex colors', () => {
    expect(normalizeHexColor('1')).toBe('#111111');
  });

  it('should normalize two digit hex colors', () => {
    expect(normalizeHexColor('12')).toBe('#121212');
  });

  it('should handle 3-digit hex colors', () => {
    expect(normalizeHexColor('123')).toBe('#112233');
  });

  it('should handle 4-digit hex colors', () => {
    expect(normalizeHexColor('1234')).toBe('#123412');
  });

  it('should handle 5-digit hex colors', () => {
    expect(normalizeHexColor('12345')).toBe('#123451');
  });

  it('should handle 6-digit hex colors', () => {
    expect(normalizeHexColor('123456')).toBe('#123456');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#a')).toBe('#AAAAAA');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#aB')).toBe('#ABABAB');
  });

  it('should handle hash prefix', () => {
    expect(normalizeHexColor('#aBc')).toBe('#AABBCC');
  });

  it('should throw on invalid input', () => {
    expect(() => normalizeHexColor('')).toThrow();
    expect(() => normalizeHexColor('G')).toThrow();
  });
});