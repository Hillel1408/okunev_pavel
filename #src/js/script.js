const swiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});
const workSwiper = new Swiper('.work__swiper', {
    direction: 'horizontal',
    allowTouchMove: false,
    navigation: {
        nextEl: '.work__swiper-button-next',
        prevEl: '.work__swiper-button-prev',
    },
    scrollbar: {
        el: '.work__swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 'auto',
    },
});
const certificatesSwiper = new Swiper('.certificates__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    scrollbar: {
        el: '.certificates__swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
        dragSize: 'auto',
    },
    navigation: {
        nextEl: '.certificates__swiper-button-next',
        prevEl: '.certificates__swiper-button-prev',
    },
});
