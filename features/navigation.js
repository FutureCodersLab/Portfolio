import { sectionsData } from "../data-structures/sections.js";

const navLinksContainer = document.querySelectorAll(".nav-links");
const navLinks = document.querySelectorAll("nav .nav-links a");
const menu = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".close-menu");
const openMenuButtons = document.querySelectorAll(".open-menu");
const nav = document.querySelector("nav");
const homeNavigation = document.querySelector("#home .navigation");
const scrollUp = document.querySelector(".scroll-up");
const sections = document.querySelectorAll("section[id]");

export const setupNavigation = () => {
    sectionsData.forEach((section, index) => {
        const className = index === 0 ? "active" : "";
        navLinksContainer.forEach((container) =>
            container.appendChild(getNavLinkStructure(section, className))
        );
    });

    navLinks.forEach((link) =>
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        })
    );

    openMenuButtons.forEach((button) =>
        button.addEventListener("click", () => {
            menu.classList.add("active");
        })
    );

    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    window.addEventListener("scroll", () => {
        revealNavbar();
        revealScrollToTop();
        highlightCurrentSection();
    });
};

const revealNavbar = () => {
    const { bottom } = homeNavigation.getBoundingClientRect();
    nav.classList.toggle("active", bottom < 0);
};

const revealScrollToTop = () => {
    scrollUp.classList.toggle("active", window.scrollY >= 350);
};

const highlightCurrentSection = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const id = section.id;
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const isActive = scrollY > top && scrollY <= bottom;

        const navLinks = document.querySelectorAll(
            `.nav-links a[href*="${id}"]`
        );

        navLinks.forEach((link) => link.classList.toggle("active", isActive));
    });
};

const getNavLinkStructure = (section, className) => {
    const a = document.createElement("a");
    a.href = section.id;
    a.textContent = section.name;
    a.className = className;
    return a;
};
