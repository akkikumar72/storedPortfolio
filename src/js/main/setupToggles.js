
// ------------------------------
// TOGGLES
function toggles() {

    if ($('.toggle').length) {

        var toggleSpeed = 300;
        $('.toggle h4.active + .toggle-content').show();

        $('.toggle h4').on("click", function() {
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.toggle-content').stop(true,true).slideUp(toggleSpeed);
            } else {

                $(this).addClass('active');
                $(this).next('.toggle-content').stop(true,true).slideDown(toggleSpeed);

                //accordion
                if($(this).parents('.toggle-group').hasClass('accordion')) {
                    $(this).parent().siblings().find('h4').removeClass('active');
                    $(this).parent().siblings().find('.toggle-content').stop(true,true).slideUp(toggleSpeed);
                }

            }
            return false;
        });

    }

}
// ------------------------------