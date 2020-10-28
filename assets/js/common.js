app.common = {
    mainInit: () => {

        $('.text-banner__content').marquee({
            //speed in milliseconds of the marquee
            duration: 10000,
            //gap in pixels between the tickers
            // gap: 50,
            // duplicated: true
            pauseOnHover:true,
            pauseOnCycle:false,
        });


        $('.nav-icon1').click(function (e) {

            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            $('body').toggleClass('freeze');
            if ($('.header-scroll').hasClass('scrolled')) {
                $('.header-scroll').removeClass('scrolled');
            }

            $(document).on('click', function closeMenu() {
                if ($('.topMenu').hasClass('opened')) {
                    $('.topMenu').removeClass('opened');
                    $('.menuToggle').removeClass('open');
                    $('body').toggleClass('freeze');

                } else {
                    $(document).on('click', closeMenu);
                }
            });
        });

        $('.nav-el').on('click', function (e) {
            $('.nav-el').removeClass('active');
            $(this).addClass('active');
        });

    }
}

$(function () {
    $(document).ready(() => {
        app.common.mainInit();

    })

    var videoWidth = $('.video').outerWidth();
    $(".video").height(videoWidth * 9 / 16);
});

$(window).resize(function () {
    var videoWidth = $('.video').outerWidth();
    $(".video").height(videoWidth * 9 / 16);
});

