global.window = global;
require('../src/cipher');

const { cipher } = window;

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
    it('debería retornar "HIJ" para "ABC" con offset 33', () => {
      expect(cipher.encode(33, 'ABC')).toBe('HIJ');
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
    it('debería retornar "ABC" para "HIJ" con offset 33', () => {
      expect(cipher.decode(33, 'HIJ')).toBe('ABC');
    });
  });
});
