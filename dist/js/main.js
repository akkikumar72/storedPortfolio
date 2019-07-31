/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function isMobile() {
  return $(window).width() < 992;
}
$(function() {
  if (
    ((soundEffects = $('html').hasClass('sound-effects')) &&
      ((wind = document.createElement('audio')).setAttribute('src', $('html').data('audio-wind')),
      (windReverse = document.createElement('audio')).setAttribute(
        'src',
        $('html').data('audio-wind-reverse')
      ),
      (tick = document.createElement('audio')).setAttribute('src', $('html').data('audio-tick'))),
    $('.header-wrap > img').length &&
      $('.header').css('background-image', 'url(' + $('.header-wrap > img').attr('src') + ')'),
    showLoader(),
    $('html').hasClass('one-page-layout'))
  ) {
    var e = $('.cover-media').data('image-url');
    if (void 0 !== e) {
      var t = new Image();
      (t.src = e),
        (t.onload = function() {
          $('html').addClass('is-card-loaded'),
            $('.card-3d-right-side, .card-3d-bottom-side').css(
              'background-image',
              'url(' + e + ')'
            ),
            $('.cover-media')
              .css('background-image', 'url(' + e + ')')
              .addClass('is-image-loaded');
        });
    }
    isMobile() &&
      ($('.one-page-layout .cover-media').height($(window).height()),
      $(window).on('resize', function() {
        $('.one-page-layout .cover-media').height($(window).height());
      })),
      $('#card-open, .cover-link').on('click', function(e) {
        e.preventDefault(), showCard();
      }),
      $('.close-card').on('click', function() {
        return (
          $('html').removeClass('is-card-open is-card-opened'),
          $('.close-card').removeClass('is-visible'),
          soundEffects && windReverse.play(),
          closePage(),
          !1
        );
      }),
      $('.card-nav li').each(function(e, t) {
        var a = $(this).find('a'),
          i = a.attr('href'),
          o = a.data('slug');
        a.attr('href', '#/' + o), a.data('file-url', i);
      }),
      (portfolioKeyword = $('#portfolio-link').data('slug')),
      setActivePage(),
      $.address.change(function() {
        setActivePage();
        var e = giveDetailUrl();
        -1 !== e
          ? showProjectDetails(e)
          : -1 !== $.address.path().indexOf('/' + portfolioKeyword) &&
            porftolioSingleActive &&
            (hideProjectDetails(!0, !1),
            (porftolioSingleJustClosed = !1),
            $('.card-content').is(':empty') && setActivePage());
      });
  }
  $('.search-toggle').on('click', function() {
    $('html').toggleClass('is-search-toggled-on'), $('.header-search input').trigger('focus');
  }),
    FastClick.attach(document.body),
    $("a[href='#card']").on('click', function() {
      return (
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo'), console.log('Yes'), !1
      );
    }),
    'ontouchstart' in window || navigator.msMaxTouchPoints
      ? $('html').addClass('touch')
      : $('html').addClass('no-touch'),
    $('html').removeClass('no-js'),
    $('html').addClass('ready'),
    setup();
}),
  $(window).on('load', function() {
    hideLoader(), $('html').addClass('loaded');
  }),
  (function(s) {
    'use strict';
    var a,
      i = '',
      o = !1;
    s(function() {
      if (
        ((o = s('html').hasClass('sound-effects')) &&
          (document.createElement('audio').setAttribute('src', s('html').data('audio-wind')),
          (a = document.createElement('audio')).setAttribute(
            'src',
            s('html').data('audio-wind-reverse')
          ),
          document.createElement('audio').setAttribute('src', s('html').data('audio-tick'))),
        s('.header-wrap > img').length &&
          s('.header').css('background-image', 'url(' + s('.header-wrap > img').attr('src') + ')'),
        NProgress.start(),
        s('html').hasClass('one-page-layout'))
      ) {
        var e = s('.cover-media').data('image-url');
        if (void 0 !== e) {
          var t = new Image();
          (t.src = e),
            (t.onload = function() {
              s('html').addClass('is-card-loaded'),
                s('.card-3d-right-side, .card-3d-bottom-side').css(
                  'background-image',
                  'url(' + e + ')'
                ),
                s('.cover-media')
                  .css('background-image', 'url(' + e + ')')
                  .addClass('is-image-loaded');
            });
        }
        isMobile() &&
          (s('.one-page-layout .cover-media').height(s(window).height()),
          s(window).on('resize', function() {
            s('.one-page-layout .cover-media').height(s(window).height());
          })),
          s('#card-open, .cover-link').on('click', function(e) {
            e.preventDefault(), showCard();
          }),
          s('.close-card').on('click', function() {
            return (
              s('html').removeClass('is-card-open is-card-opened'),
              s('.close-card').removeClass('is-visible'),
              o && a.play(),
              closePage(),
              !1
            );
          }),
          s('.card-nav li').each(function(e, t) {
            var a = s(this).find('a'),
              i = a.attr('href'),
              o = a.data('slug');
            a.attr('href', '#/' + o), a.data('file-url', i);
          }),
          (i = s('#portfolio-link').data('slug')),
          setActivePage(),
          s.address.change(function() {
            setActivePage();
            var e = giveDetailUrl();
            -1 !== e ? showProjectDetails(e) : s.address.path().indexOf('/' + i);
          });
      }
      s('.search-toggle').on('click', function() {
        s('html').toggleClass('is-search-toggled-on'), s('.header-search input').trigger('focus');
      }),
        FastClick.attach(document.body),
        s("a[href='#card']").on('click', function() {
          return s('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo'), !1;
        }),
        'ontouchstart' in window || navigator.msMaxTouchPoints
          ? s('html').addClass('touch')
          : s('html').addClass('no-touch'),
        s('html').removeClass('no-js'),
        s('html').addClass('ready'),
        setup();
    });
  })(jQuery);
var wind,
  windReverse,
  tick,
  pActive,
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
function setupAjax() {
  $('.one-page-layout .media-box .ajax, .one-page-layout .portfolio-nav .ajax a').on(
    'click',
    function(e) {
      e.preventDefault();
      var t = $(this).attr('href'),
        a = $.address.baseURL(),
        i = giveDetailUrl();
      if (-1 !== t.indexOf(a)) {
        var o = t.length;
        (i = t.slice(a.length + 1, o)), $.address.path('/' + i);
      } else (i = t), $.address.path(portfolioKeyword + '/' + i);
    }
  );
}
function fillBars() {
  $('.bar').length &&
    $('.bar').each(function() {
      var e = $(this),
        t = e.attr('data-percent');
      e.find('.progress')
        .css('width', t + '%')
        .html('<span>' + t + '</span>');
    });
}
function fluidMedia() {
  $('iframe,video').length && $('html').fitVids();
}
function setupForms() {
  $('#commentform').length &&
    ($('#commentform').addClass('validate-form'),
    $('#commentform')
      .find('input,textarea')
      .each(function(e, t) {
        'true' == $(this).attr('aria-required') && $(this).addClass('required'),
          'email' == $(this).attr('name') && $(this).addClass('email');
      }));
  var e = $('.mc4wp-form form');
  e.length && e.addClass('validate-form'),
    $('.validate-form').length &&
      $('.validate-form').each(function() {
        $(this).validate();
      });
}
function setupLightbox() {
  $('.lightbox, .gallery').length &&
    $('.media-box, .gallery').each(function(e, t) {
      $(this).magnificPopup({
        delegate:
          '.lightbox, .gallery-item a[href$=".jpg"], .gallery-item a[href$=".jpeg"], .gallery-item a[href$=".png"], .gallery-item a[href$=".gif"]',
        type: 'image',
        image: {
          markup:
            '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div>',
          cursor: 'mfp-zoom-out-cur',
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        gallery: { enabled: !0, tCounter: '<span class="mfp-counter">%curr% / %total%</span>' },
        iframe: {
          markup:
            '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>'
        },
        mainClass: 'mfp-zoom-in',
        tLoading: '',
        removalDelay: 300,
        callbacks: {
          markupParse: function(e, t, a) {
            var i = '';
            (i = a.el.parents('.gallery-item').length
              ? a.el
                  .parents('.gallery-item')
                  .find('.gallery-caption')
                  .text()
              : null == a.el.data('title')
                ? ''
                : a.el.data('title')),
              (t.title = i);
          },
          imageLoadComplete: function() {
            var e = this;
            setTimeout(function() {
              e.wrap.addClass('mfp-image-loaded');
            }, 16);
          },
          close: function() {
            this.wrap.removeClass('mfp-image-loaded');
          },
          beforeAppend: function() {
            var e = this;
            this.content.find('iframe[src*="soundcloud.com"]').length
              ? e.wrap.addClass('is-soundcloud')
              : e.wrap.removeClass('is-soundcloud'),
              this.content.find('iframe').on('load', function() {
                setTimeout(function() {
                  e.wrap.addClass('mfp-image-loaded');
                }, 16);
              });
          }
        },
        closeBtnInside: !1,
        closeOnContentClick: !0,
        midClick: !0
      });
    });
}
function showLoader() {
  NProgress.start();
}
function hideLoader() {
  NProgress.done();
}
function setupMasonry() {
  var e = $('.masonry, .gallery');
  e.length &&
    (e.each(function(e, t) {
      if (
        (refreshMasonry(),
        $(t).imagesLoaded(function() {
          $(t).isotope({ layoutMode: $(t).data('layout') ? $(t).data('layout') : 'masonry' }),
            refreshMasonry();
        }),
        !$(t).data('isotope'))
      ) {
        var a = $(t).siblings('.filters');
        a.length &&
          a.find('a').on('click', function() {
            var e = $(this).attr('data-filter');
            return (
              $(t).isotope({ filter: e }),
              $(this)
                .parent()
                .addClass('current')
                .siblings()
                .removeClass('current'),
              !1
            );
          });
      }
    }),
    $(window).on('resize debouncedresize', function() {
      setTimeout(function() {
        refreshMasonry();
      }, 100);
    }));
}
function refreshMasonry() {
  var e = $('.masonry');
  e.length &&
    e.each(function(e, t) {
      if ($(t).data('isotope')) {
        var a = $(t).data('item-width'),
          o = $(t).width(),
          i = $(t).children('.hentry'),
          s = Math.round(o / a);
        i.each(function(e, t) {
          var a = $(this).hasClass('x2') && 1 < s ? 2 : 1,
            i = ((100 * Math.floor(o / s)) / o) * a;
          $(this).css('width', i + '%');
        });
        var n = Math.floor(o / s);
        $(t).isotope('option', { masonry: { columnWidth: n } }), $(t).isotope('layout');
      }
    });
}
function showProjectDetails(e) {
  (porftolioSingleActive = porftolioSingleJustClosed = !0), showLoader();
  var t = $('.p-overlay:not(.active)').first();
  (pActive = $('.p-overlay.active')),
    t.empty().load(e + ' .portfolio-single', function() {
      NProgress.set(0.5),
        t.imagesLoaded(function() {
          hideLoader(),
            pActive.length && hideProjectDetails(),
            $('html').addClass('p-overlay-on'),
            setup(),
            $('html').addClass('p-animating'),
            soundEffects && tick.play(),
            t
              .removeClass('animate-in animate-out')
              .addClass('animate-in')
              .show(),
            t.addClass('active'),
            t.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
              $('html').removeClass('p-animating');
            });
        });
    });
}
function hideProjectDetails(e, t) {
  (porftolioSingleJustClosed = !0),
    soundEffects && tick.play(),
    $('html').addClass('p-animating'),
    e &&
      ((pActive = $('.p-overlay.active')),
      $('html').removeClass('p-overlay-on'),
      t || $.address.path(portfolioKeyword)),
    pActive
      .removeClass('active animate-in animate-out')
      .addClass('animate-out')
      .show(),
    pActive.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
      $('html').removeClass('p-animating'),
        pActive
          .hide()
          .removeClass('animate-out')
          .empty();
    }),
    setTimeout(function() {
      pActive
        .hide()
        .removeClass('animate-out')
        .empty();
    }, 550);
}
function giveDetailUrl() {
  var e,
    t = $.address.value();
  if (-1 != t.indexOf('/' + portfolioKeyword + '/') && t.length > portfolioKeyword.length + 2) {
    var a = t.length;
    e = t.slice(portfolioKeyword.length + 2, a);
  } else e = -1;
  return e;
}
function tabs() {
  $('.tabs').length &&
    ($('.tabs').each(function() {
      $(this).find('.tab-titles li a.active').length
        ? $(this)
            .find('.tab-content > div')
            .eq(
              $(this)
                .find('.tab-titles li a.active')
                .parent()
                .index()
            )
            .show()
        : ($(this)
            .find('.tab-titles li:first-child a')
            .addClass('active'),
          $(this)
            .find('.tab-content > div:first-child')
            .show());
    }),
    $('.tabs .tab-titles li a').on('click', function() {
      if (!$(this).hasClass('active'))
        return (
          $(this)
            .parent()
            .siblings()
            .find('a')
            .removeClass('active'),
          $(this).addClass('active'),
          $(this)
            .parents('.tabs')
            .find('.tab-content > div')
            .hide()
            .eq(
              $(this)
                .parent()
                .index()
            )
            .show(),
          !1
        );
    }));
}
function toggles() {
  if ($('.toggle').length) {
    $('.toggle h4.active + .toggle-content').show(),
      $('.toggle h4').on('click', function() {
        return (
          $(this).hasClass('active')
            ? ($(this).removeClass('active'),
              $(this)
                .next('.toggle-content')
                .stop(!0, !0)
                .slideUp(300))
            : ($(this).addClass('active'),
              $(this)
                .next('.toggle-content')
                .stop(!0, !0)
                .slideDown(300),
              $(this)
                .parents('.toggle-group')
                .hasClass('accordion') &&
                ($(this)
                  .parent()
                  .siblings()
                  .find('h4')
                  .removeClass('active'),
                $(this)
                  .parent()
                  .siblings()
                  .find('.toggle-content')
                  .stop(!0, !0)
                  .slideUp(300))),
          !1
        );
      });
  }
}
function setActivePage() {
  var e = $.address.path();
  if ('' === (e = e.slice(1, e.length))) closePage();
  else {
    if (porftolioSingleJustClosed) porftolioSingleJustClosed = !1;
    else if (-1 === giveDetailUrl()) {
      var t = $('a[data-slug=' + e + ']').data('file-url'),
        a = e + '.html';
      console.log('new url', t), console.log('path', e), showPage(a);
    }
    showCard();
  }
  setCurrentMenuItem();
}
function setCurrentMenuItem() {
  var e = $.address.path();
  '/' !== e
    ? $('.card-nav a[href="#' + e + '"]')
        .parent()
        .addClass('current_page_item')
        .siblings()
        .removeClass('current_page_item')
    : $('.card-nav li').removeClass('current_page_item');
}
function showCard() {
  'mobile' ===
  window
    .getComputedStyle(document.querySelector('.card-intro'), '::before')
    .getPropertyValue('content')
    .replace(/"/g, '')
    .replace(/'/g, '')
    ? $('body,html').animate({ scrollTop: $('#card').offset().top }, 200)
    : $('html').hasClass('is-card-open') ||
      ($('html').addClass('is-card-open'),
      $('.card-layout').one(
        'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function() {
          $('.close-card').addClass('is-visible'), $('html').addClass('is-card-opened'), setup();
        }
      ),
      soundEffects && !isMobile() && wind.play());
}
function showPage(e) {
  showLoader(), soundEffects && tick.play();
  var t = $('.card-content');
  t.removeClass('is-loaded').addClass('is-changing'), $('html').addClass('is-ajax-page-active');
  window
    .getComputedStyle(document.querySelector('.card-intro'), '::before')
    .getPropertyValue('content')
    .replace(/"/g, '')
    .replace(/'/g, '');
  jQuery.get(e, function(e) {
    $('html').addClass('is-ajax-page-loaded'),
      t.empty(),
      t.append($(e).filter('#elementor-frontend-inline-css')),
      t.append($(e).filter("link[id^='elementor-post-']")),
      t.append($(e).find('.page-single > .hentry')),
      t.imagesLoaded(function() {
        hideLoader(),
          t.removeClass('is-changing'),
          t.addClass('is-loaded'),
          setup(),
          setTimeout(function() {
            setup();
          }, 400);
      });
  });
}
function closePage() {
  $('.card-content').empty(),
    $.address.path(''),
    history.pushState('', document.title, window.location.pathname),
    $('html').removeClass('is-ajax-page-loaded is-ajax-page-active');
}
