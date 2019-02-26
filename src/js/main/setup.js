
/* global variables */
var portfolioKeyword = "";
var porftolioSingleActive = false;
var porftolioSingleJustClosed = false;
var soundEffects = false;
var wind, windReverse, tick;

// SETUP : plugins
function setup() {

    // MASONRY
    setupMasonry();

    // LIGHTBOX
    setupLightbox();

    // FILL SKILL BARS
    fillBars()

    // PORTFOLIO SINGLE AJAX
    setupAjax();

    // FORMS
    setupForms();

    // MAP
    setupMap();

    // TABS
    tabs();

    // TOGGLES
    toggles();

    // FLUID MEDIA
    fluidMedia();

}
// ------------------------------
