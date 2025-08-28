import { references } from "../data-structures/references-data.js";
import { getSwiperSlideStructure } from "../utils/structures.js";

const referencesContainer = document.querySelector(".swiper-wrapper");

export const setupReferences = () => {
    references.map((reference) => {
        const swiperSlide = getSwiperSlideStructure(reference);
        referencesContainer.appendChild(swiperSlide);
    });

    setupSwiper();
};

const setupSwiper = () => {
    new Swiper(".swiper", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
        },
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            },
        },
    });
};
