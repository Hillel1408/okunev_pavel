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
        el: '.swiper-scrollbar',
        // Makes the Scrollbar Draggable
        draggable: true,
        // Snaps slider position to slides when you release Scrollbar
        snapOnRelease: true,
        // Size (Length) of Scrollbar Draggable Element in px
        dragSize: 'auto',
    },
});
