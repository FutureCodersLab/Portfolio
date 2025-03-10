import { sectionsData } from "../data-structures/sections.js";
import { socialLinks } from "../data-structures/links.js";

const footerLinks = document.querySelector("footer .links");
const socialsContainer = document.querySelector("footer .socials");

export const setupFooter = () => {
    sectionsData.map((section) => {
        footerLinks.appendChild(getLinkStructure(section));
    });
    socialLinks.forEach((link) =>
        socialsContainer.appendChild(getSocialsStructure(link))
    );
};

const getLinkStructure = (section) => {
    const a = document.createElement("a");
    a.href = section.id;
    a.textContent = section.name;
    return a;
};

const getSocialsStructure = (link) => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = link.href;
    a.innerHTML = `
        <img src="${link.icon}" />
    `;
    return a;
};
