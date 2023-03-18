"use strict";

// Class Definition
var Base = function () {

    /**
     * Initialize swiper slider
     * Plugin: Swiper [https://swiperjs.com/]
     *--------------------------------------------------------------*/
    var initSwiper = function() {
        var desktopSpace = 24;
        var mobileSpace = 16;

        $('.swiper').each(function() {
            var slides = parseInt(this.getAttribute('data-swiper-slides'));
            var carousel = this.parentElement;
            var loop = this.getAttribute('data-swiper-loop');
            var autoplay = this.getAttribute('data-swiper-autoplay');
            var next = carousel.querySelector('.swiper-button-next');
            var prev = carousel.querySelector('.swiper-button-prev');
            var pagination = carousel.querySelector('.swiper-pagination');
            var paginationType = this.getAttribute('data-swiper-pagination') ? this.getAttribute('data-swiper-pagination') : 'bullets';
            var scrollbar = carousel.querySelector('.swiper-scrollbar');

            // Set responsive slide
            var desktop = slides;
            var tablet = 1;
            var mobile = 2;

            if (slides === 1) {
                tablet = mobile = 1;

            } else {
                if (slides > 1 && slides < 5) {
                    tablet = 2;
                    mobile = 1;
                } else if (slides >= 5) {
                    tablet = 3;
                    mobile = 2;
                }
            }

            // Swiper options
            var options = {
                speed: 500,
                slidesPerView: mobile,
                slidesPerGroup: mobile,
                spaceBetween: mobileSpace,

                a11y: true,

                breakpoints: {
                    576: {
                        slidesPerView: tablet,
                        slidesPerGroup: tablet
                    },
                    1200: {
                        slidesPerView: desktop,
                        slidesPerGroup: desktop,
                        spaceBetween: desktopSpace
                    }
                }
            }

            if (loop) {
                options.loop = loop;
            }

            if (autoplay) {
                options.autoplay = {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                };
            }

            // Add next & prev controls in swiper option if element is exist.
            if (next && prev) {
                options.navigation = {
                    nextEl: next,
                    prevEl: prev,
                }
            }

            // Add pagination control in swiper option if element is exist.
            if (pagination) {
                options.pagination = {
                    el: pagination,
                    type: paginationType,
                    clickable: true,
                    dynamicBullets: true
                }
            }

            // Add scrollbar control in swiper option if element is exist.
            if (scrollbar) {
                options.scrollbar = {
                    el: scrollbar,
                    draggable: true
                }
            }

            // Bind swiper slider with element.
            new Swiper(this, options);
            
        });
    }

    var features = function() {
        var $head = $('.landing-feature__head');
        var $item = $('.landing-feature__item');
        var $hero = $('.landing-feature-hero li');
        var show = 'show';
        var index = 0;
        var delay = 3000;
        var timer;

        var toggleItem = function() {
            $item.removeClass(show);
            $hero.removeClass(show);
            $item.eq(index).addClass(show);
            $hero.eq(index).addClass(show);
        }

        var itemTimer = function() {
            if (timer) {
                clearInterval(timer);
            }

            timer = setInterval(() => {
                toggleItem();
                if (index === $item.length - 1) {
                    index = -1;
                }
                index++;
            }, delay);
        }

        itemTimer();

        $head.on('click', function() {
            index = $(this).parent().index();
            toggleItem();
        });


    }

    return {
        init: function() {
            initSwiper();
            features();
        }
    }

}();

// Class initialization on page load
$(document).ready(function() {
    Base.init();
});