import { sectionsData } from "../data-structures/sections-data.js";
import { getNavLinkStructure } from "../utils/structures.js";

const menu = document.querySelector(".menu");
const openMenuButtons = document.querySelectorAll(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");
const navLinksContainers = document.querySelectorAll(".nav-links");
const nav = document.querySelector("nav");
const homeNavigation = document.querySelector("#home .navigation");
const scrollUp = document.querySelector(".scroll-up");
const sections = document.querySelectorAll("section");

export const setupNavigation = () => {
    openMenuButtons.forEach((button) =>
        button.addEventListener("click", () => {
            menu.classList.add("active");
        })
    );

    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    navLinksContainers.forEach((container) =>
        sectionsData.forEach((section, index) => {
            const className = index === 0 ? "active" : "";
            const linkStructure = getNavLinkStructure(section, className);
            container.appendChild(linkStructure);
        })
    );

    window.addEventListener("scroll", () => {
        revealNavbar();
        revealScrollUp();
        highlightCurrentSection();
    });
};

const revealNavbar = () => {
    const { bottom } = homeNavigation.getBoundingClientRect();

    const isNavbarActive = bottom < 0;
    nav.classList.toggle("active", isNavbarActive);
};

const revealScrollUp = () => {
    const isScrollUpActive = window.scrollY > 350;
    scrollUp.classList.toggle("active", isScrollUpActive);
};

const highlightCurrentSection = () => {
    sections.forEach((section) => {
        const id = section.id;

        const { top, bottom } = section.getBoundingClientRect();
        const midpoint = window.innerHeight / 2;
        const isActive = midpoint > top && midpoint <= bottom;

        const navLinks = document.querySelectorAll(
            `.nav-links a[href*="${id}"]`
        );

        navLinks.forEach((link) => {
            link.classList.toggle("active", isActive);
        });
    });
};
