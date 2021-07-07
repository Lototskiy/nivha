if (document.querySelector('.toogles')) {
    window.allow = true;
    $(document).ready(function () {
        $('.toogles__item-title').on('click', function () {

            if (window.allow) {
                window.allow = false;
                var need = $(this).closest('.toogles__item');
                var need_t = $(this);
                var need_c = need.find('.toogles__item-box');

                if (need.hasClass('toogles__item--active')) {
                    $(need_c).slideToggle(500, function () {
                        $(need).removeClass('toogles__item--active');
                        // ScrollTrigger.refresh();
                        window.allow = true;
                    });
                } else {
                    if (need.closest('.toogles').find('.toogles__item').is('.toogles__item--active')) {
                        var need2 = need.closest('.toogles').find('.toogles__item--active').closest('.toogles__item');
                        var need_t2 = need.closest('.toogles').find('.toogles__item--active .toogles__item-title');
                        var need_c2 = need.closest('.toogles').find('.toogles__item--active .toogles__item-box');



                        $(need_c2).slideToggle(500, function () {
                            var destination = need.offset().top - 100;
                            $('html').animate({
                                scrollTop: destination
                            }, 500);

                            $(need2).removeClass('toogles__item--active');
                            $(need_c).slideToggle(500, function () {
                                $(need).addClass('toogles__item--active');
                                // ScrollTrigger.refresh();
                                window.allow = true;
                            });

                        });

                    } else {
                        $(need_c).slideToggle(500, function () {
                            $(need).addClass('toogles__item--active');
                            // ScrollTrigger.refresh();
                            window.allow = true;
                        });

                    }

                }


            }

        });
    });
}