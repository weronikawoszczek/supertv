app.common = {
    mainInit: () => {

        $('.nav-icon1').click(function(e){

            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('open');
            $('.topMenu').toggleClass('opened');
            if( $('.header-scroll').hasClass('scrolled') ) {
                $('.header-scroll').removeClass('scrolled');
            }

            $(document).on('click', function closeMenu (){
                if($('.topMenu').hasClass('opened')){
                    $('.topMenu').removeClass('opened');
                    $('.menuToggle').removeClass('open');

                } else {
                    $(document).on('click', closeMenu);
                }
            });
        });

        $('.nav-el').on('click', function(e) {
            $('.nav-el').removeClass('active');
            $(this).addClass('active');
        });

    }
}

$(function () {
    $(document).ready(() => {
        app.common.mainInit();
    })
});
