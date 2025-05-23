/**
 * Calculates the mood score based on emojis
 * @param {string[]} emojis - Array of emojis representing moods
 * @returns {number} Total mood score
 * @throws {Error} If unknown emoji is encountered or input is invalid
 */
export function interpretMood(emojis) {
  const emojiScores = {
    '😀': 2,
    '😐': 0,
    '😞': -2,
    '😡': -3,
    '🤩': 3,
    '🫤': -1,
  };

  if (!Array.isArray(emojis)) {
    throw new TypeError('Input must be an array of emojis');
  }

  let score = 0;

  for (const emoji of emojis) {
    if (typeof emoji !== 'string') {
      throw new TypeError('All elements in the emoji array must be strings');
    }
    if (!(emoji in emojiScores)) {
      throw new Error(`Unknown emoji: ${emoji}`);
    }
    score += emojiScores[emoji];
  }

  return score;
}