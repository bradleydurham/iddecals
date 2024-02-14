new Swiper("#swiper-1", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        800: {
            slidesPerView: 2
        },

        1100: {
            slidesPerView: 3
        },

        1500: {
            slidesPerView: 4,
            centeredSlides: false
        }
    }
});