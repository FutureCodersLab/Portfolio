import { contactMeLinks } from "./data-structures/links.js";
import references from "./data-structures/references.js";
import projects from "./data-structures/projects.js";
import sectionLinks from "./data-structures/sections.js";
import {
    getLinkStructure,
    getNavLinkStructure,
    getProjectStructure,
    getSwiperSlideStructure,
} from "./structures.js";

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

const menuNavLinks = document.querySelector(".menu .nav-links");
const homeNavigation = document.querySelector("#home .navigation");
const homeNavLinks = document.querySelector("#home .nav-links");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector(".scroll-up");

const navLinksContainer = document.querySelector("nav .nav-links");
const referencesContainer = document.querySelector(".swiper-wrapper");
const projectsContainer = document.querySelector(".projects-container");
const contactMeLinksContainer = document.querySelector("#contact-me .links");
const footerLinks = document.querySelector("footer .links");

document.addEventListener("DOMContentLoaded", () => {
    references.map((reference) =>
        referencesContainer.appendChild(getSwiperSlideStructure(reference))
    );
    projects.map((project) =>
        projectsContainer.appendChild(getProjectStructure(project))
    );
    contactMeLinks.map((link) => {
        contactMeLinksContainer.appendChild(getLinkStructure(link));
    });
    sectionLinks.map((section, index) => {
        const className = index === 0 ? "active" : "";
        navLinksContainer.appendChild(getNavLinkStructure(section, className));
        homeNavLinks.appendChild(getNavLinkStructure(section, className));
        menuNavLinks.appendChild(getNavLinkStructure(section, className));
        footerLinks.appendChild(getNavLinkStructure(section));
    });

    scrollReveal.reveal(".home-profile, .about-image, .contact-mail", {
        origin: "right",
    });
    scrollReveal.reveal(
        ".home-name, .home-info, .about-container .section-title-1, .about-info, .contact-social, .contact-data",
        {
            origin: "left",
        }
    );
    // scrollReveal.reveal(".services-card, .project", { interval: "100" });
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
});

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu .close-menu");
const navOpenMenu = document.querySelector("nav .open-menu");
const homeOpenMenu = document.querySelector("#home .open-menu");

navOpenMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

homeOpenMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});

const navLink = document.querySelectorAll("nav .nav-links a");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    })
);

window.addEventListener("scroll", () => {
    const { bottom } = homeNavigation.getBoundingClientRect();
    nav.classList.toggle("active", bottom < 0);

    scrollUp.classList.toggle("active", window.scrollY >= 350);
});

const contactForm = document.querySelector("#form");

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_d9lzyps", // serviceId
            "template_dqcrvtw", // templateId
            "#form", // formId
            "6DdhfNV_WGxG9gxiH" // publicKey
        )
        .then(() => {
            alert("✅ Message sent successfully");
        })
        .catch(() => {
            alert("❌ Message not sent (service error)");
        })
        .finally(() => contactForm.reset());
};

contactForm.addEventListener("submit", sendEmail);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const navLinks = document.querySelector(
            `nav .nav-links a[href*="${sectionId}"]`
        );
        const homeLinks = document.querySelector(
            `#home .nav-links a[href*="${sectionId}"]`
        );
        const sectionClass = document.querySelector(
            `.menu .nav-links a[href*="${sectionId}"]`
        );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            navLinks.classList.add("active");
            homeLinks.classList.add("active");
            sectionClass.classList.add("active");
        } else {
            navLinks.classList.remove("active");
            homeLinks.classList.remove("active");
            sectionClass.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", scrollActive);

const downloadResume = document.querySelector("#home .download-resume");
const buttonText = downloadResume.querySelector(".text");
const buttonIcon = downloadResume.querySelector(".icon");

downloadResume.addEventListener("click", () => {
    if (downloadResume.disabled) return;
    downloadResume.disabled = true;
    downloadResume.classList.add("complete");

    const a = downloadResume.querySelector("a");
    a.click();

    const originalSrc = buttonIcon.src;
    buttonIcon.src = "./images/icons/check.svg";

    buttonText.textContent = "Complete";

    setTimeout(() => {
        downloadResume.classList.remove("complete");

        buttonIcon.src = originalSrc;

        buttonText.textContent = "Resume";
        downloadResume.disabled = false;
    }, 3000);
});
