// ------------------------------
// TABS
function tabs() {

    var tabs = $('.tabs');
    if (tabs.length) {

        $('.tabs').each(function() {
            if(!$(this).find('.tab-titles li a.active').length) {
                $(this).find('.tab-titles li:first-child a').addClass('active');
                $(this).find('.tab-content > div:first-child').show();
            } else {
                $(this).find('.tab-content > div').eq($(this).find('.tab-titles li a.active').parent().index()).show();
            }
        });

        $('.tabs .tab-titles li a').on("click", function() {
            if($(this).hasClass('active')) { return; }
            $(this).parent().siblings().find('a').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.tabs').find('.tab-content > div').hide().eq($(this).parent().index()).show();
            return false;
        });

    }

}
// ------------------------------
