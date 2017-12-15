$(document).ready(function () {

    /*mobile menu*/
    $(document).on('click', '#mobile-menu', function (event) {
        event.preventDefault();
        var menu = $(this).next('.header__nav');
        if($(this).hasClass('js-trigger-active')){
            $(this).removeClass('js-trigger-active');
            menu.slideUp('slow');
        } else {
            $(this).addClass('js-trigger-active');
            menu.slideDown('slow');
        }
        return false;
    });
    if (window.innerWidth < 756) {
        $(document).mouseup(function (event){ 
            var block = $('.header__navigation'); 
            if (!block.is(event.target) 
                && block.has(event.target).length === 0) { 
                $('#mobile-menu').removeClass('js-trigger-active');
                $('.header__nav').slideUp('500');
            }
        });        
    }
    /*close*/

    /*header form*/
    $(document).on('click', '.header__toolbar--user', function (event) {
        event.preventDefault();
        var formBox = $(this).next('.header__form-box');
        $(this).toggleClass('js-form-active');
        formBox.slideToggle('slow');
        return false;
    });
    $(document).mouseup(function (event){ 
        var block = $('.header__toolbar');
        if (!block.is(event.target) 
            && block.has(event.target).length === 0) { 
            $('.header__toolbar--user').removeClass('js-form-active');
            $('.header__form-box').slideUp('500'); 
        }
    });   
    /*close*/

    /*gallerylider*/
    $(window).on('load resize', function () {
        gallerySlider();
        cardsSlider()
    });
    /*close*/

    /*show faq acardeon*/
    $(document).on('click', '.faq__wrapper--trigger', function (event) {
        event.preventDefault();
        var trigger = $(this).find('.faq__wrapper--icon'),
            text = $(this).next('.faq__wrapper--box'),
            wrapper = $(this).closest('.faq__wrapper--element');
        if ($(this).hasClass('js-faq-show')) {
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

/*gallery slider*/
function gallerySlider() {
    if ($(document).width() < 770) {
        $('#gallery-slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 696,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }
};

/*gallery slider*/
function cardsSlider() {
    if ($(document).width() < 770) {
        $('#cards-slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 696,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }
};