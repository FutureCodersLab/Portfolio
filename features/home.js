const downloadResumeButton = document.querySelector("#home .download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setupHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
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
