// SWIPER FOR BEST IN WORLD SECTION 
const best_swiper = new Swiper('.best-swiper', {
    // Optional parameters
    loop: true,
    speed: 500,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30
        },
    }

});


// SWIPER FOR COMMENTS
const commets_swiper = new Swiper('.commets-swiper', {
    // Navigation arrows
    navigation: {
        nextEl: '.comment-button-next',
        prevEl: '.comment-button-prev',
    },
    speed: 900,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        786: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});


new WOW().init();