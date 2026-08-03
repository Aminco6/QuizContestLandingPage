/**
 * pwa-guard.js
 * Place this on quiz.voddic.com.ng (the main app), loaded as the very
 * first script in <head>, before any app content renders.
 *
 * It only lets the page through when it's running as an installed PWA.
 * Anyone opening quiz.voddic.com.ng in a normal browser tab is bounced
 * to the download/landing page instead.
 */
(function () {
  var isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    window.matchMedia('(display-mode: minimal-ui)').matches ||
    window.navigator.standalone === true; // legacy iOS Safari home-screen flag

  // Also allow the internal handoff from the /app/ launcher page on
  // quizapp.voddic.com.ng, in case a browser's display-mode support is
  // momentarily unreliable right after launch.
  var fromLauncher = document.referrer.indexOf('quizapp.voddic.com.ng') !== -1;

  if (!isStandalone && !fromLauncher) {
    window.location.replace('https://quizapp.voddic.com.ng/');
  }
})();
