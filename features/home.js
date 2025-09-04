import { scrollReveal } from "../utils/scroll-reveal.js";

const downloadResumeButton = document.querySelector("#home .download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setupHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
    animations();
};

const downloadResume = () => {
    downloadResumeButton.style.pointerEvents = "none";

    downloadResumeButton.classList.add("complete");

    const originalIcon = buttonIcon.src;

    buttonText.textContent = "Complete";
    buttonIcon.src = "./images/icons/check.svg";

    setTimeout(() => {
        downloadResumeButton.classList.remove("complete");
        buttonIcon.src = originalIcon;
        buttonText.textContent = "Resume";
        downloadResumeButton.style.pointerEvents = "all";
    }, 3000);
};

const animations = () => {
    scrollReveal.reveal(
        ".menu, .navigation, .logo, #home .nav-links, .open-menu",
        {
            origin: "top",
            delay: 200,
        }
    );

    scrollReveal.reveal(".images-container", {
        origin: "right",
        delay: 300,
    });

    scrollReveal.reveal(".content h1, .content h4, .buttons-container", {
        origin: "left",
        delay: 400,
    });
};
