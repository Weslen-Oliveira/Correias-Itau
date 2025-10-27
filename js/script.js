document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Configurações do Swiper
        slidesPerView: 5,
        centeredSlides: false,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
            breakpoints: {
            320: {
                slidesPerView: 1,
                loop: true,
            },
                // Telas >= 640px
            640: {
                slidesPerView: 2,
            },
                // Telas >= 1024px
            1024: {
                slidesPerView: 3,
            },
            1400:{
                slidesPerView: 4
            }
        }
    });
});

