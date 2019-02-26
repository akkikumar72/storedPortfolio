// ------------------------------
// FILL PROGRESS BARS
function fillBars() {

    var bar = $('.bar');
    if (bar.length) {
        $('.bar').each(function() {
            var bar = $(this);
            var percent = bar.attr('data-percent');
            bar.find('.progress').css('width', percent + '%' ).html('<span>'+percent+'</span>');
        });
    }

}
// ------------------------------