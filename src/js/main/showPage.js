// ------------------------------
// SET ACTIVE PAGE
function setActivePage() {
  var path = $.address.path();
  path = path.slice(1, path.length);
  // if hash tag doesnt exists - close page
  if (path === '') {
    closePage();
  } else {
    // show page change animation
    // change page only if url doesn't target portfolio single page
    //console.log(porftolioSingleJustClosed);

    if (porftolioSingleJustClosed) {
      porftolioSingleJustClosed = false;
    } else {
      if (giveDetailUrl() === -1) {
        //porftolioSingleJustClosed = false;
        var new_url = $('a[data-slug=' + path + ']').data('file-url');
        var new_link = path + '.html';
        console.log("new url",new_url);
        console.log("path", path);
        showPage(new_link);
      }
    }

    showCard();
  }

  setCurrentMenuItem();
}

// ------------------------------
// SET CURRENT MENU ITEM
function setCurrentMenuItem() {
  var activePageId = $.address.path();
  // set default nav menu
  //console.log(activePageId);
  if (activePageId !== '/') {
    $('.card-nav a[href="#' + activePageId + '"]')
      .parent()
      .addClass('current_page_item')
      .siblings()
      .removeClass('current_page_item');
  } else {
    $('.card-nav li').removeClass('current_page_item');
  }
}
// ------------------------------

// ------------------------------
// SHOW CARD
function showCard() {
  var mq = window
    .getComputedStyle(document.querySelector('.card-intro'), '::before')
    .getPropertyValue('content')
    .replace(/"/g, '')
    .replace(/'/g, '');
  if (mq === 'mobile') {
    $('body,html').animate({ scrollTop: $('#card').offset().top }, 200);
  } else {
    if (!$('html').hasClass('is-card-open')) {
      $('html').addClass('is-card-open');
      $('.card-layout').one(
        'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function() {
          $('.close-card').addClass('is-visible');
          $('html').addClass('is-card-opened');
          setup();
        }
      );

      // Wind Sound Effect
      if (soundEffects && !isMobile()) {
        wind.play();
      }
    }
  }
}
// ------------------------------

// ------------------------------
// SHOW PAGE
function showPage(url) {
  showLoader();
  // Play Sound Effect
  if (soundEffects) {
    tick.play();
  }

  /* OPEN PANEL : load and show new content */
  var cardContent = $('.card-content');
  cardContent.removeClass('is-loaded').addClass('is-changing');

  $('html').addClass('is-ajax-page-active');

  var mq = window
    .getComputedStyle(document.querySelector('.card-intro'), '::before')
    .getPropertyValue('content')
    .replace(/"/g, '')
    .replace(/'/g, '');
  if (mq !== 'mobile') {
    //$("html, body").animate({ scrollTop: $('.card-nav').offset().top - 20 }, 400);
  }

  // only jquery get() returns remote page's <head> content
  jQuery.get(url, function(data) {
    $('html').addClass('is-ajax-page-loaded');
    // clear container content
    cardContent.empty();

    // elementor inline styles
    cardContent.append($(data).filter('#elementor-frontend-inline-css'));
    // elementor external styles
    cardContent.append($(data).filter("link[id^='elementor-post-']"));
    cardContent.append($(data).find('.page-single > .hentry'));
    // console.log(data)
    // wait for images to be loaded
    cardContent.imagesLoaded(function() {
      hideLoader();
      cardContent.removeClass('is-changing');
      cardContent.addClass('is-loaded');
      setup();

      // fix masonry after card grow animation ended
      setTimeout(function() {
        setup();
      }, 400);
    });
  });
}

// CLOSE PAGE
function closePage() {
  $('.card-content').empty();
  $.address.path('');
  history.pushState('', document.title, window.location.pathname);
  $('html').removeClass('is-ajax-page-loaded is-ajax-page-active');
}
// ------------------------------
