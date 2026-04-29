/* quiz.js — Quiz logic + score (skeleton) */
/* senpai_scores: { lessonId: score } */

const SenpaiQuiz = {
  KEY: 'senpai_scores',
  saveScore: function (lessonId, score) {
    try {
      const scores = JSON.parse(localStorage.getItem(this.KEY)) || {};
      scores[lessonId] = score;
      localStorage.setItem(this.KEY, JSON.stringify(scores));
    } catch {}
  },
  getScore: function (lessonId) {
    try { return (JSON.parse(localStorage.getItem(this.KEY)) || {})[lessonId]; } catch { return null; }
  }
};
