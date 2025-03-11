import { socialLinks } from "../data-structures/links.js";
import { scrollReveal } from "../utils/utils.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setupContactMe = () => {
    socialLinks.map((link) => {
        socialsContainer.appendChild(getLinkStructure(link));
    });

    form.addEventListener("submit", sendEmail);
    animations();
};

const sendEmail = async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        await emailjs.sendForm(
            "service_d9lzyps", // serviceId
            "template_dqcrvtw", // templateId
            "#form", // formId
            "6DdhfNV_WGxG9gxiH" // publicKey
        );
        alert("✅ Message sent successfully");
    } catch (error) {
        alert("❌ Message not sent (service error)");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        form.reset();
    }
};

const getLinkStructure = (link) => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = link.href;
    a.innerHTML = `<img src="${link.icon}" />`;
    return a;
};

const animations = () => {
    scrollReveal.reveal("#contact-me h2", {
        origin: "top",
        delay: 300,
    });
    scrollReveal.reveal("#contact-me .content form", {
        origin: "left",
        delay: 400,
    });
    scrollReveal.reveal("#contact-me .content .info", {
        origin: "right",
        delay: 400,
    });
};
