/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
var wind,
  windReverse,
  tick,
  portfolioKeyword = '',
  porftolioSingleActive = !1,
  porftolioSingleJustClosed = !1,
  soundEffects = !1;
function setup() {
  setupMasonry(),
    setupLightbox(),
    fillBars(),
    setupAjax(),
    setupForms(),
    tabs(),
    toggles(),
    fluidMedia();
}
