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
    // document.querySelector('.label-wrap').addEventListener('click', () => {
    //    if (document.querySelector('.checkbox').checked) {
    //        document.querySelector('.checkbox-svg').style.display = 'none';
    //    } else{
    //     document.querySelector('.checkbox-svg').style.display = 'block';
    //    }
    // });
    var labels = document.querySelectorAll('.label-wrap');
    labels.forEach((item, i) => {
        item.addEventListener('click', () => {
            console.log('клик');
            if (document.querySelector('.checkbox').checked) {
                document.querySelector('.checkbox-svg').style.display = 'none';
            } else{
            document.querySelector('.checkbox-svg').style.display = 'block';
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
        $('.nav-list').toggleClass('nav-list--active');
        $('body').toggleClass('ovh');
        $('.menu-text').toggleClass('none');
        $('.close-text').toggleClass('none');
    });

    // service btns
   $('.scroll-btn').click(function(e) {
        e.preventDefault(e);
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
   });

    //gallery
    $('[data-fancybox="gallery"]').fancybox({});    
});
