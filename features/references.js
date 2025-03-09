import references from "../data-structures/references.js";
import { scrollReveal } from "../utils.js";

const referencesContainer = document.querySelector(".swiper-wrapper");

export const setupReferences = () => {
    references.map((reference) =>
        referencesContainer.appendChild(getSwiperSlideStructure(reference))
    );
    setupSwiper();
    animations();
};

const setupSwiper = () => {
    new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 2.5,
            },
        },
    });
};

const getSwiperSlideStructure = (reference) => {
    const {
        image,
        name,
        position,
        institution,
        content,
        recommendationLetter,
    } = reference;

    const div = document.createElement("div");
    div.className = "swiper-slide";
    div.innerHTML = `
        <div class="content">
            <div class="header">
                <img src="${image}" />
                <div class="author-info">
                    <span class="name">${name}</span>
                    <span class="info">
                        ${position}, ${institution}
                    </span>
                </div>
            </div>
            <div class="reference">
                <p>${content}</p>
                <a href="${recommendationLetter}" download>
                    Read More
                </a>
            </div>
        </div>
        <img
            src="./images/icons/quotes.png"
            class="quotes"
        />
        <div class="line-decoration"></div>
    `;
    return div;
};

const animations = () => {
    scrollReveal.reveal("#references h2", {
        origin: "top",
        delay: 300,
    });
    scrollReveal.reveal(".swiper", {
        origin: "bottom",
        delay: 400,
    });
};
