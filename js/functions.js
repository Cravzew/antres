$(document).ready(function() {
    //fancybox init
    $("[data-fancybox]").fancybox();

    //phone mask
    $(".phone").mask("+7 (999) 999-99-99");

    //menu
    $('.navbar-toggle').click(function(){
        $('#navbar-main').toggleClass('in');
        $('.header').toggleClass('menu-open');
        $('body').toggleClass('menu-opened');
        return false;
    });

    //scroll
    $('[data-scroll]').on('click', function() {
        var elem = $(this).attr('data-scroll');
        $("html, body").animate({scrollTop: $(elem).offset().top}, 800);
        return false;
    });

    //fix header
    var menuTop = $('.header__menu').offset().top;
    $(window).on('load scroll resize', function(){
        if ($(window).scrollTop() > menuTop) {
            $('.header').addClass('header_fixed');
            $('.header__search .search-form').fadeOut();
            $('.header__search-show').fadeIn();
        } else {
            $('.header').removeClass('header_fixed');
            $('.header__search .search-form').fadeIn();
            $('.header__search-show').fadeOut();
        }
    });

    $('.header__search-show').on('click', function() {
        $('.header__search .search-form').toggle();
    });

    //feedback form in header
    $('#headerFeedbackBtn').on('click', function() {
        $('.header__form').toggleClass('showed');
        return false;
    });
    $('.header__form button').on('click', function() {
        $('.header__form').toggleClass('showed');
        return false;
    });

    $('.catalog-slider__slick').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('.discont-slider__slick').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.offers-slider__slick').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $(window).on('load resize', function() {
        if ($(window).width() >= 768) {
            $('.services-slider__slick').slick({
                dots: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } else {
            $('.services-slider__slick.slick-initialized').slick('unslick');
        }
    });


    // галерея
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true
    });

    $('.slider-for-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
        fade: true,
        asNavFor: '.slider-nav-gallery'
    });

    $('.slider-nav-gallery').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for-gallery',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    //баннер на главной
    $('.main-slider__slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        appendArrows: $('.main-slider__nav'),
        appendDots: $('.main-slider__nav'),
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="#slick-prev"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="#slick-next"/></svg></button>',
        fade: true,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ]
    });

    // новости на главной
    $(window).on('load resize', function() {
        if ($(window).width() < 768) {
            $('.main-news__list').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            });
        } else {
            $('.main-news__list.slick-initialized').slick('unslick');
        }
    });

    // акции на главной
    $(window).on('load resize', function() {
        if ($(window).width() < 768) {
            $('.offers-list .row').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            });
        } else {
            $('.offers-list .row.slick-initialized').slick('unslick');
        }
    });

    // декоры боковые фильтры
    $('.catalog-aside__all-filters').on('click', function () {
       $(this).hide();
       $('.catalog-aside__group').attr('all-filters-hidden', 'false');
    });

    $('.show-hidden-filters-items').on('click', function () {
       $(this).hide();
       $(this).closest('.catalog-aside__group').find('[group-filters-hidden="true"]').attr('group-filters-hidden', 'false');
    });

    $('.catalog-filter__btn, .catalog-aside__close').on('click', function () {
       $('.catalog-aside__wrap').toggle();
    });


});

new WOW().init();

