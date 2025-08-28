import { socialLinks } from "../data-structures/links-data.js";
import { getSocialsLinkStructure } from "../utils/structures.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setupContactMe = () => {
    socialLinks.map((link) => {
        const socialsLink = getSocialsLinkStructure(link);
        socialsContainer.appendChild(socialsLink);
    });

    form.addEventListener("submit", sendEmail);
};

const sendEmail = async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        await emailjs.sendForm(
            "service_o6gvq8i", // serviceId
            "template_q846iqg", // templateId
            "#form", // formId
            "7Qh49BigECmhkUjWL" // publicKey
        );
        alert("Message sent successfully");
    } catch (error) {
        alert("Message not sent (service error)");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        form.reset();
    }
};
