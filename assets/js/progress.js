/* progress.js — LocalStorage progress tracking (skeleton) */
/* senpai_progress: { lessonId: true }  */

const SenpaiProgress = {
  KEY: 'senpai_progress',
  get: function () {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch { return {}; }
  },
  mark: function (lessonId) {
    const p = this.get();
    p[lessonId] = true;
    localStorage.setItem(this.KEY, JSON.stringify(p));
  },
  isDone: function (lessonId) {
    return !!this.get()[lessonId];
  }
};
