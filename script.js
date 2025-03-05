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

const homeNavigation = document.querySelector("#home .navigation");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector(".scroll-up");

const navLinksContainer = document.querySelector("nav .menu .links");
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

const navMenu = document.querySelector("nav .menu");
const navOpen = document.querySelector("nav .open-menu");
const navClose = document.querySelector("nav .menu .close");
if (navOpen) {
    navOpen.addEventListener("click", () => {
        navMenu.classList.add("active");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
}

const navLink = document.querySelectorAll("nav .links a");

const linkAction = () => {
    navMenu.classList.remove("active");
};
navLink.forEach((link) => link.addEventListener("click", linkAction));

window.addEventListener("scroll", () => {
    const { bottom } = homeNavigation.getBoundingClientRect();
    nav.classList.toggle("active", bottom < 0);

    scrollUp.classList.toggle("active", window.scrollY >= 350);
});

const contactForm = document.querySelector("form");

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_d9lzyps", // serviceId
            "template_dqcrvtw", // templateId
            "#contact-form", // formId
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
        const sectionClass = document.querySelector(
            "nav .menu a[href*= " + sectionId + "]"
        );
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionClass.classList.add("active");
        } else {
            sectionClass.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", scrollActive);

const downloadCVButton = document.querySelector("#home .download-resume");
const buttonText = downloadCVButton.querySelector(".text");
const buttonIcon = downloadCVButton.querySelector(".icon");

downloadCVButton.addEventListener("click", () => {
    if (downloadCVButton.disabled) return;
    downloadCVButton.disabled = true;
    downloadCVButton.classList.add("complete");

    const a = downloadCVButton.querySelector("a");
    a.click();

    const currentIcon = buttonIcon.querySelector("i");
    const newCheckIcon = document.createElement("i");
    newCheckIcon.className = "ri-check-line entering";

    iconTransition(currentIcon, newCheckIcon);

    buttonText.textContent = "Complete";

    setTimeout(() => {
        downloadCVButton.classList.remove("complete");

        const resetIcon = buttonIcon.querySelector("i");
        const newDownloadIcon = document.createElement("i");
        newDownloadIcon.className = "ri-download-2-fill entering";

        iconTransition(resetIcon, newDownloadIcon);

        buttonText.textContent = "Download CV";
        downloadCVButton.disabled = false;
    }, 3000);
});

const iconTransition = (oldIcon, newIcon) => {
    oldIcon.classList.remove("active");
    oldIcon.classList.add("exiting");

    oldIcon.addEventListener(
        "transitionend",
        () => {
            oldIcon.remove();

            buttonIcon.appendChild(newIcon);

            setTimeout(() => {
                newIcon.classList.remove("entering");
                newIcon.classList.add("active");
            }, 50);
        },
        { once: true }
    );
};
