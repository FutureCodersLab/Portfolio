import { scrollReveal } from "../utils.js";

const downloadResumeButton = document.querySelector("#home .download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setupHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
    animations();
};

const downloadResume = () => {
    downloadResumeButton.disabled = true;
    downloadResumeButton.classList.add("complete");

    const originalSrc = buttonIcon.src;
    buttonIcon.src = "./images/icons/check.svg";

    buttonText.textContent = "Complete";

    setTimeout(() => {
        downloadResumeButton.classList.remove("complete");

        buttonIcon.src = originalSrc;

        buttonText.textContent = "Resume";
        downloadResumeButton.disabled = false;
    }, 3000);
};

const animations = () => {
    scrollReveal.reveal(".menu, .navigation, .logo, .nav-links, .open-menu", {
        origin: "top",
        delay: 200,
    });
    scrollReveal.reveal(".image-container", {
        origin: "left",
        delay: 300,
    });
    scrollReveal.reveal(".content h1, .content h4, .button-container", {
        origin: "right",
        delay: 400,
    });
};
