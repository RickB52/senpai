/* progress.js — LocalStorage progress tracking */
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
  },
  reset: function () {
    localStorage.removeItem(this.KEY);
  }
};

/* Global helpers dùng trong lesson pages và module index pages */
function isLessonComplete(lessonId) {
  return SenpaiProgress.isDone(lessonId);
}
function markLessonComplete(lessonId) {
  SenpaiProgress.mark(lessonId);
}
function calculateProgress(lessonIds) {
  if (!lessonIds || !lessonIds.length) return 0;
  const done = lessonIds.filter(function (id) { return SenpaiProgress.isDone(id); }).length;
  return Math.round((done / lessonIds.length) * 100);
}
