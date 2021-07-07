if (document.querySelector('.toogles2')) {
    window.allow = true;
    $(document).ready(function () {
        $('.toogles2__item-title').on('click', function () {

            if (window.allow) {
                window.allow = false;
                var need = $(this).closest('.toogles2__item');
                var need_t = $(this);
                var need_c = need.find('.toogles2__item-box');

                if (need.hasClass('toogles2__item--active')) {
                    $(need_c).slideToggle(500, function () {
                        $(need).removeClass('toogles2__item--active');
                        // ScrollTrigger.refresh();
                        window.allow = true;
                    });
                } else {
                    if (need.closest('.toogles2').find('.toogles2__item').is('.toogles2__item--active')) {
                        var need2 = need.closest('.toogles2').find('.toogles2__item--active').closest('.toogles2__item');
                        var need_t2 = need.closest('.toogles2').find('.toogles2__item--active .toogles2__item-title');
                        var need_c2 = need.closest('.toogles2').find('.toogles2__item--active .toogles2__item-box');



                        $(need_c2).slideToggle(500, function () {
                            var destination = need.offset().top - 100;
                            $('html').animate({
                                scrollTop: destination
                            }, 500);

                            $(need2).removeClass('toogles2__item--active');
                            $(need_c).slideToggle(500, function () {
                                $(need).addClass('toogles2__item--active');
                                // ScrollTrigger.refresh();
                                window.allow = true;
                            });

                        });

                    } else {
                        $(need_c).slideToggle(500, function () {
                            $(need).addClass('toogles2__item--active');
                            // ScrollTrigger.refresh();
                            window.allow = true;
                        });

                    }

                }


            }

        });
    });
}