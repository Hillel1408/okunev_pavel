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

func = (phoneInput, nameInput, btn) => {
    const phoneMask = new IMask(phoneInput, {
        mask: '+{7}(000)000-00-00',
    });

    nameInput.addEventListener('input', phoneInputHandler);
    phoneInput.addEventListener('input', phoneInputHandler);
    btn.addEventListener('click', btnHandler);

    function phoneInputHandler() {
        if (phoneMask.masked.isComplete && nameInput.value) {
            btn.classList.add('btn-active');
        } else {
            btn.classList.remove('btn-active');
        }
    }

    async function btnHandler(e) {
        e.preventDefault();
        const body = {
            name: nameInput.value,
            phone: phoneMask.unmaskedValue,
        };
        try {
            await fetch('send_msg.php', {
                method: 'POST',
                body: body,
            });
            setTimeout(() => {}, 3000);
        } catch (err) {
            console.log(err);
        }
    }
};

const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const btn1 = document.querySelector('.btn1');
func(inp2, inp1, btn1);

const inp3 = document.querySelector('.input3');
const inp4 = document.querySelector('.input4');
const btn2 = document.querySelector('.btn2');
func(inp4, inp3, btn2);

const navIcon = document.querySelector('.header__nav-icon');
const navList = document.querySelector('.header__nav-list');

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('lock');
});

const headerNavLinks = document.querySelectorAll('.header__nav-link');
headerNavLinks.forEach((item) => {
    item.addEventListener('click', () => {
        navIcon.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.remove('lock');
    });
});
