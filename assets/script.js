document.addEventListener("DOMContentLoaded", function () {

    function initSlider(containerSelector) {

        const container = document.querySelector(containerSelector);
        if (!container) return;

        const sliders = container.querySelector('.sliders');
        const slides = sliders ? sliders.querySelectorAll('.slide') : [];

        if (!sliders || slides.length === 0) return;

        const slidesPerPage =
            containerSelector === '.bg-team' &&
            window.matchMedia('(min-width:450px) and (max-width:800px)').matches
                ? 2
                : 1;

        const totalPages = Math.ceil(slides.length / slidesPerPage);

        let btnsContainer = container.querySelector('.sliders-btns');

        if (!btnsContainer) {
            btnsContainer = document.createElement('div');
            btnsContainer.className = 'sliders-btns';
            container.appendChild(btnsContainer);
        }

        btnsContainer.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {

            const btn = document.createElement('div');

            btn.className = 'btn';

            if (i === 0) {
                btn.classList.add('active');
            }

            btnsContainer.appendChild(btn);
        }

        const btns = btnsContainer.querySelectorAll('.btn');

        let currentSlide = 0;
        let sliderTimer;

        function updateSlider() {

            if (currentSlide >= totalPages) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = totalPages - 1;
            }

            const slide = slides[0];

            const slideStyle = window.getComputedStyle(slide);

            const slideWidth =
                slide.offsetWidth +
                parseInt(slideStyle.marginRight);

            const moveDistance =
                slideWidth * slidesPerPage * currentSlide;

            sliders.style.marginLeft = `-${moveDistance}px`;

            const activeBtn =
                container.querySelector('.sliders-btns .btn.active');

            if (activeBtn) {
                activeBtn.classList.remove('active');
            }

            if (btns[currentSlide]) {
                btns[currentSlide].classList.add('active');
            }
        }

        function startTimer() {

            sliderTimer = setInterval(() => {

                currentSlide++;

                updateSlider();

            }, 5000);
        }

        btns.forEach((btn, index) => {

            btn.addEventListener('click', () => {

                clearInterval(sliderTimer);

                currentSlide = index;

                updateSlider();

                startTimer();
            });

        });

        updateSlider();

        startTimer();
    }

    initSlider('.banner');
    initSlider('.bg-team');
    initSlider('.section-clients');
    initSlider('.section-premium');




    const menuOpener = document.querySelector('.menu-opener');

    const nav = document.querySelector('nav');

    if (menuOpener && nav) {

        menuOpener.addEventListener('click', () => {

            if (nav.style.display === 'flex') {

                nav.style.display = 'none';

            } else {

                nav.style.display = 'flex';
            }

        });

    }




    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {

        link.addEventListener('click', () => {

            if (window.innerWidth <= 800) {

                nav.style.display = 'none';
            }

        });

    });




    const phoneButton = document.createElement('a');

    phoneButton.href = 'https://wa.me/5511999999999';

    phoneButton.target = '_blank';

    phoneButton.className = 'btn-phone-float';

    phoneButton.innerHTML =
        '<img src="assets/images/icons8-phone-32.png" alt="WhatsApp" style="width: 30px; height: 30px;">';

    document.body.appendChild(phoneButton);




    const backTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {

        const scrollPos = window.scrollY;

        if (scrollPos > 150) {

            phoneButton.classList.add('visible');

        } else {

            phoneButton.classList.remove('visible');
        }

        if (backTop) {

            if (scrollPos > 300) {

                backTop.classList.add('visible');

            } else {

                backTop.classList.remove('visible');
            }
        }
    });

    if (backTop) {

        backTop.addEventListener('click', function (e) {

            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        });
    }

});