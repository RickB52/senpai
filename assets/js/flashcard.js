/* flashcard.js — Flashcard + spaced repetition (skeleton) */
/* senpai_flashcards: [{ front, back, due }] */

const SenpaiFlashcard = {
  KEY: 'senpai_flashcards',
  getAll: function () {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch { return []; }
  },
  save: function (cards) {
    localStorage.setItem(this.KEY, JSON.stringify(cards));
  }
};
