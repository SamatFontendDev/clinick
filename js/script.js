$(document).ready(function(){
   // sliders
    $('.akcii-slider__list').slick({
        prevArrow: $('.slider-button-prev'),
        nextArrow: $('.slider-button-next')
    });
    $('.specialists-slider__list').slick({
        slidesToShow: 3,
        prevArrow: $('.specialists-slider-prev'),
        nextArrow: $('.specialists-slider-next'),
        responsive: [
            {
                breakpoint: 960,

                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,

                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.docs-slider__list').slick({
        slidesToShow: 3,
        prevArrow: $('.slider-buttons--about-prev'),
        nextArrow: $('.slider-buttons--about-next'),
        responsive: [
            {
                breakpoint: 960,

                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,

                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.doctors-slider__list').slick({
        prevArrow: $('.slider-button-doctors-prev'),
        nextArrow: $('.slider-button-doctors-next')
    });

    $('.reviews-slider__list').slick({
        prevArrow: $('.slider-button--reviews-prev'),
        nextArrow: $('.slider-button--reviews-next')
    });
    // checkbox
    var labels = document.querySelectorAll('.consent');
    labels.forEach((item, i) => {
      item.addEventListener('click', (e) => {
            var input = item.querySelector('.checkbox');
            var checkboxSvg = item.querySelector('.checkbox-svg');
            if (!input.checked) {
               
                checkboxSvg.style.display = 'none';
            } else{
                checkboxSvg.style.display = 'block';
        }
     });
    });
    

    // modals
    $('.sign-up').click(function(){
        $('.overlay').fadeIn();
        $('.modal-form').fadeIn();
    });
    $('.overlay').click(function(){
        $(this).fadeOut();
        $('.modal-form').fadeOut();
    });
    $('.close').click(function(){
        $(this).parent().fadeOut();
        $('.overlay').fadeOut();
        $('body').css('overflow', 'visible');
    });
    $('.menu-button').click(function(){
        $('.full-screen-menu').fadeIn();
        $('body').css('overflow','hidden');
    });

    // mask
    $(".input-tel").mask("+7 (999) 99-99-999");

    // mobile menu
    $('.mobile-menu-button').click(function(){
        $('.nav-list').addClass('nav-list--active');
        $('body').addClass('ovh');
        $('.close--nav').css('display', 'block');
    });
    $('.close--nav').click(function(){
        $('.nav-list').removeClass('nav-list--active');
        $('body').removeClass('ovh');
        $('.close--nav').css('display', 'none');
    });

    // service btns
   $('.scroll-btn').click(function(e) {
        e.preventDefault(e);
        var id  = $(this).attr('href');
        var top = $(id).offset().top - 150;
        $('body,html').animate({scrollTop: top}, 1000);
   });

    //gallery
    $('[data-fancybox="gallery"]').fancybox({});
    $('[data-fancybox="gallery-service-photos"]').fancybox({
        arrows: false,
        buttons: ["close"],
        touch : false
    });

    // ajax
});

 // top menu 
jQuery(function($) {
    var headerHeight = $('.header__bottom').height();

    $(window).scroll(function(){
        if($(this).scrollTop()>headerHeight){
            $('.header__top').addClass('f-nav');
        }
        else if ($(this).scrollTop()<headerHeight){
            $('.header__top').removeClass('f-nav');
        }
    });
});
 