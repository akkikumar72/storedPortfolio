
// ------------------------------
// PORTFOLIO SINGLE AJAX
function setupAjax() {

    // PORTFOLIO DETAILS
    // Show details
    $(".one-page-layout .media-box .ajax, .one-page-layout .portfolio-nav .ajax a").on('click',function(event) {

        event.preventDefault();

        var url = $(this).attr('href');
        var baseUrl = $.address.baseURL();
        var detailUrl = giveDetailUrl();

        if(url.indexOf(baseUrl) !== -1) { // full url
            var total = url.length;
            detailUrl = url.slice(baseUrl.length+1, total);
            $.address.path('/' + detailUrl );
        } else { // relative url
            detailUrl = url;
            $.address.path(portfolioKeyword + '/' + detailUrl );
        }

    });

}
// ------------------------------