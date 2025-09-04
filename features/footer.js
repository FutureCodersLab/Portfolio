import { socialLinks } from "../data-structures/links-data.js";
import { sectionsData } from "../data-structures/sections-data.js";
import {
    getNavLinkStructure,
    getSocialsLinkStructure,
} from "../utils/structures.js";

const footerLinks = document.querySelector("footer .links");
const socialsContainer = document.querySelector("footer .socials");

export const setupFooter = () => {
    sectionsData.map((section) => {
        const navLink = getNavLinkStructure(section);
        footerLinks.appendChild(navLink);
    });

    socialLinks.forEach((link) => {
        const socialsLink = getSocialsLinkStructure(link);
        socialsContainer.appendChild(socialsLink);
    });
};
