// Поместите это в файл script.js и подключите его в конце <body>
document.addEventListener('DOMContentLoaded', function () {

    // --- FAQ Accordion --- //
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
            }

            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // --- Set current year in footer --- //
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Testimonials Slider --- //
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true, // Loop back to the beginning
        slidesPerView: 1, // Show 1 slide on mobile
        spaceBetween: 30, // Space between slides
        grabCursor: true,

        // Autoplay configuration
        autoplay: {
            delay: 5000,
            disableOnInteraction: true, // Stop autoplay when user interacts
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2, // Show 2 slides on tablet
                spaceBetween: 40
            },
             // when window width is >= 992px
             /* Optional: uncomment if you want 3 slides on larger desktops
            992: {
                slidesPerView: 3,
                spaceBetween: 50
            } */
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});