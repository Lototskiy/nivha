if (document.querySelector('.product-slider')) {
    var swiper = new Swiper('.product-slider__big .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        // navigation: {
        //     nextEl: '.product-slider .swiper-button-next',
        //     prevEl: '.product-slider .swiper-button-prev',
        // },
        thumbs: {
            swiper: {
                el: '.product-slider__mini .swiper-container',
                spaceBetween: 4,
                slidesPerView: 4,
                speed: 1000,
                // breakpoints: {
                //     320: {
                //         slidesPerView: 4,
                //     },
                //     1025: {
                //         slidesPerView: 8,
                //     },
                // },
            }
        },
        // pagination: {
        //     el: '.product-slider .swiper-pagination',
        //     clickable: true,
        // },
        on: {
            init: function () {
                setTimeout(function () {
                    this.update();
                }.bind(this), 500);
            },
        }
    });
}