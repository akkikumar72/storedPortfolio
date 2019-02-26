(function($) {
  'use strict';

  /* global variables */
  var portfolioKeyword = '';
  var porftolioSingleActive = false;
  var porftolioSingleJustClosed = false;
  var soundEffects = false;
  var wind, windReverse, tick;

  /* DOCUMENT LOAD */
  $(function() {
    // ------------------------------
    // SOUND EFFECTS
    soundEffects = $('html').hasClass('sound-effects');

    if (soundEffects) {
      wind = document.createElement('audio');
      wind.setAttribute('src', $('html').data('audio-wind'));

      windReverse = document.createElement('audio');
      windReverse.setAttribute('src', $('html').data('audio-wind-reverse'));

      tick = document.createElement('audio');
      tick.setAttribute('src', $('html').data('audio-tick'));
    }
    // ------------------------------

    // SET BG IMAGES
    if ($('.header-wrap > img').length) {
      $('.header').css('background-image', 'url(' + $('.header-wrap > img').attr('src') + ')');
    }

    // ------------------------------
    // start loader
    showLoader();
    // ------------------------------

    // ------------------------------
    // ONE PAGE LAYOUT FUNCTIONS
    if ($('html').hasClass('one-page-layout')) {
      // SET BG IMAGES
      var bigImageUrl = $('.cover-media').data('image-url');
      if (bigImageUrl !== undefined) {
        var bigImage = new Image();
        bigImage.src = bigImageUrl;
        bigImage.onload = function() {
          $('html').addClass('is-card-loaded');
          $('.card-3d-right-side, .card-3d-bottom-side').css(
            'background-image',
            'url(' + bigImageUrl + ')'
          );
          $('.cover-media')
            .css('background-image', 'url(' + bigImageUrl + ')')
            .addClass('is-image-loaded');
        };
      }
      debugger

      // MOBILE HEIGHT FIX
      if (isMobile()) {
        $('.one-page-layout .cover-media').height($(window).height());
        $(window).on('resize', function() {
          $('.one-page-layout .cover-media').height($(window).height());
        });
      }

      // show card
      $('#card-open, .cover-link').on('click', function(event) {
        event.preventDefault();
        showCard();
      });
      // close card
      $('.close-card').on('click', function() {
        $('html').removeClass('is-card-open is-card-opened');
        $('.close-card').removeClass('is-visible');

        // Wind Reverse Sound Effect
        if (soundEffects) {
          windReverse.play();
        }

        closePage();
        return false;
      });

      // add hash to links
      $('.card-nav li').each(function(index, element) {
        var menu_link = $(this).find('a');
        var file_url = menu_link.attr('href');
        var slug = menu_link.data('slug');

        menu_link.attr('href', '#/' + slug);
        menu_link.data('file-url', file_url);
      });

      // PORTFOLIO DETAILS
      // if url contains a portfolio detail url
      portfolioKeyword = $('#portfolio-link').data('slug');

      // SET ACTIVE PAGE - load from hash if exists
      setActivePage();

      // FULL BROWSER BACK BUTTON SUPPORT
      $.address.change(function() {
        //console.log('addres changed');
        setActivePage();
        var detailUrl = giveDetailUrl();
        if (detailUrl !== -1) {
          showProjectDetails(detailUrl);
        } else {
          // if url contains portfolio keyword
          if ($.address.path().indexOf('/' + portfolioKeyword) !== -1) {
            if (porftolioSingleActive) {
              hideProjectDetails(true, false);
              porftolioSingleJustClosed = false;

              if ($('.card-content').is(':empty')) {
                setActivePage();
              }
            }
          }
        }
      });
    }
    // ------------------------------

    // ------------------------------
    // HEADER FUNCTIONS
    $('.search-toggle').on('click', function() {
      $('html').toggleClass('is-search-toggled-on');
      $('.header-search input').trigger('focus');
    });
    // ------------------------------

    // ------------------------------
    // remove click delay on touch devices
    FastClick.attach(document.body);
    // ------------------------------

    // ------------------------------
    // BACK TO TOP
    $("a[href='#card']").on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
      return false;
    });
    // ------------------------------

    // ------------------------------
    // DETECT TOUCH DEVICE
    var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (isTouch) {
      $('html').addClass('touch');
    } else {
      $('html').addClass('no-touch');
    }
    // ------------------------------

    // ------------------------------
    // Remove no-js class
    $('html').removeClass('no-js');
    // Remove no-js class
    $('html').addClass('ready');
    // ------------------------------

    // ------------------------------
    // SETUP
    setup();
    // ------------------------------
  });
  // DOCUMENT READY

  // ------------------------------
  // AJAX LOADER
  function showLoader() {
    NProgress.start();
  }
  function hideLoader() {
    NProgress.done();
  }
  // ------------------------------
})(jQuery);
