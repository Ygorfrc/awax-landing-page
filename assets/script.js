document.addEventListener("DOMContentLoaded", function() {

    function initSlider(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const sliders = container.querySelector('.sliders');
        const btns = container.querySelectorAll('.sliders-btns .btn');
        const totalSlides = btns.length;
        let currentSlide = 0;
        let sliderTimer;

        if (!sliders || totalSlides === 0) return;

        function updateSlider() {
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;

            sliders.style.marginLeft = `-${currentSlide * 100}%`;

            const activeBtn = container.querySelector('.sliders-btns .btn.active');
            if (activeBtn) activeBtn.classList.remove('active');
            if (btns[currentSlide]) btns[currentSlide].classList.add('active');
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

        startTimer();
    }

    initSlider('.banner');          
    initSlider('.bg-team');         
    initSlider('.section-clients'); 
    initSlider('.section-premium'); 

    const phoneButton = document.createElement('a');
    phoneButton.href = 'https://wa.me/5511999999999'; 
    phoneButton.target = '_blank';
    phoneButton.className = 'btn-phone-float';
    phoneButton.innerHTML = '<img src="assets/images/icons8-phone-32.png" alt="WhatsApp" style="width: 30px; height: 30px;">'; 
    document.body.appendChild(phoneButton);

    const backTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        if (scrollPos > 150) phoneButton.classList.add('visible');
        else phoneButton.classList.remove('visible');

        if (backTop) {
            if (scrollPos > 300) backTop.classList.add('visible');
            else backTop.classList.remove('visible');
        }
    });

    if (backTop) {
        backTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

