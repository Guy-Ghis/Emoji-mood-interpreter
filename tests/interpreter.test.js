import { interpretMood } from '../src/interpreter.js';

describe('Emoji Mood Interpreter', () => {
  test('should return correct score for valid emoji list', () => {
    const input = ['😀', '😐', '🤩', '😞'];
    expect(interpretMood(input)).toBe(3); // 2 + 0 + 3 - 2
  });

  test('should return 0 for all neutral emojis', () => {
    const input = ['😐', '😐'];
    expect(interpretMood(input)).toBe(0);
  });

  test('should throw error for unknown emoji', () => {
    const input = ['😀', '👽'];
    expect(() => interpretMood(input)).toThrow('Unknown emoji: 👽');
  });

  test('should throw TypeError if input is not an array', () => {
    const input = '😀😐';
    expect(() => interpretMood(input)).toThrow(TypeError);
  });

  test('should throw TypeError if array contains non-string', () => {
    const input = ['😀', 5];
    expect(() => interpretMood(input)).toThrow(TypeError);
  });
});
