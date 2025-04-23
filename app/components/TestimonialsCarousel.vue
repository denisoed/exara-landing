<script setup lang="ts">
import { ref } from 'vue';

const containerRef = ref(null)

const SLIDES = [
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Ivan Petrov',
    title: 'Developer',
    text: 'Exara saves me a lot of time when reading technical articles. I highlighted a term - got a clear explanation. Super!',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Maria Sidorova',
    title: 'Student',
    text: 'I use it for studying. It helps me understand complex topics in English. The "Explain it simply" function is great.',
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Alexey Novikov',
    title: 'Manager',
    text: 'Finally, I don\'t need to constantly google unfamiliar terms. Very convenient, thank you!',
  },
]

useSwiper(containerRef, {
  direction: 'horizontal',
    loop: true, // Loop back to the beginning
    slidesPerView: 1, // Show 1 slide on mobile
    spaceBetween: 30, // Space between slides
    grabCursor: true,

    // Autoplay configuration
    autoplay: {
        delay: 5000,
        disableOnInteraction: false, // Stop autoplay when user interacts
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
        type: 'bullets',
    },
})
</script>

<template>
  <ClientOnly>
    <swiper-container ref="containerRef" :init="false" class="swiper testimonials-swiper">
      <swiper-slide
        v-for="(slide, idx) in SLIDES"
        :key="idx"
        class="swiper-slide testimonial-item"
      >
        <img :src="slide.avatar" alt="Фото пользователя" class="testimonial-avatar">
        <blockquote>
            {{ slide.text }}
        </blockquote>
        <cite>
            <span class="name">{{ slide.name }}</span>
            <span class="title">{{ slide.title }}</span>
        </cite>
      </swiper-slide>
    </swiper-container>
    <swiper-pagination class="swiper-pagination" />
  </ClientOnly>
</template>
