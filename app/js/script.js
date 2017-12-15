$(document).ready(function () {

    /*show faq acardeon*/
    $(document).on('click', '.faq__wrapper--trigger', function (event) {
       event.preventDefault();
       var trigger = $(this).find('.faq__wrapper--icon'),
           text = $(this).next('.faq__wrapper--box'),
           wrapper = $(this).closest('.faq__wrapper--element');
        if($(this).hasClass('js-faq-show')){
            $(this).removeClass('js-faq-show');
            wrapper.removeClass('js-faq-wrapper');
            trigger.removeClass('js-faq-icon');
            text.slideUp('600');
        } else {
            $(this).addClass('js-faq-show');
            wrapper.addClass('js-faq-wrapper');
            trigger.addClass('js-faq-icon');
            text.slideDown('600');            
        }
    });
    /*close*/

});