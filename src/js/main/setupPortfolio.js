
// ------------------------------
// AJAX PORTFOLIO DETAILS
var pActive;

function showProjectDetails(url) {


    porftolioSingleJustClosed = true;
    porftolioSingleActive = true;

    showLoader();

    var p = $('.p-overlay:not(.active)').first();
    pActive = $('.p-overlay.active');

    // ajax : fill data
    p.empty().load(url + ' .portfolio-single', function() {

        NProgress.set(0.5);

        // wait for images to be loaded
        p.imagesLoaded(function() {

            hideLoader();

            if(pActive.length) {
                hideProjectDetails();
            }

            $('html').addClass('p-overlay-on');
            //$("body").scrollTop(0);

            // setup plugins
            setup();

            $('html').addClass('p-animating');

            // Play Sound Effect
            if (soundEffects) {
                tick.play();
            }

            p.removeClass('animate-in animate-out').addClass('animate-in').show();
            p.addClass('active');



            p.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function(e) {
                    $('html').removeClass('p-animating');
                });



        });
    });
}

function hideProjectDetails(forever, safeClose) {

    porftolioSingleJustClosed = true;

    // Play Sound Effect
    if (soundEffects) {
        tick.play();
    }

    $('html').addClass('p-animating');

    // close completely by back link.
    if(forever) {
        pActive = $('.p-overlay.active');

        $('html').removeClass('p-overlay-on');

        if(!safeClose) {
            // remove detail url
            $.address.path(portfolioKeyword);
        }
    }

    pActive.removeClass('active animate-in animate-out').addClass('animate-out').show();


    pActive.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function(e) {
            $('html').removeClass('p-animating');
            pActive.hide().removeClass('animate-out').empty();
        });

    setTimeout(function() { pActive.hide().removeClass('animate-out').empty(); } ,550);

}

function giveDetailUrl() {

    var address = $.address.value();
    var detailUrl;

    if (address.indexOf("/"+ portfolioKeyword + "/")!=-1 && address.length > portfolioKeyword.length + 2 ) {
        var total = address.length;
        detailUrl = address.slice(portfolioKeyword.length+2,total);
    } else {
        detailUrl = -1;
    }
    return detailUrl;
}
// ------------------------------