
// ------------------------------
// SETUP FORMS : FORM VALIDATION
function setupForms() {

    // comment form validation fix
    if ($('#commentform').length) {

        $('#commentform').addClass('validate-form');
        $('#commentform').find('input,textarea').each(function(index, element) {
            if($(this).attr('aria-required') == "true") {
                $(this).addClass('required');
            }
            if($(this).attr('name') == "email") {
                $(this).addClass('email');
            }
        });
    }

    // mailchimp form validation fix
    var mailchimpForm = $('.mc4wp-form form');
    if (mailchimpForm.length) {
        mailchimpForm.addClass('validate-form');
    }

    // validate form
    if($('.validate-form').length) {
        $('.validate-form').each(function() {
            $(this).validate();
        });
    }

}
// ------------------------------