const navMenu = document.querySelector(".nav-menu"),
    navToggle = document.querySelector(".nav-toggle"),
    navClose = document.querySelector(".nav-close");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", linkAction));

const shadowHeader = () => {
    const header = document.getElementById("header");
    window.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

const contactForm = document.getElementById("contact-form");
const contactMessage = document.querySelector(".contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // serviceId, templateId, #form, publicKey
    emailjs
        .sendForm(
            "service_d9lzyps",
            "template_dqcrvtw",
            "#contact-form",
            "6DdhfNV_WGxG9gxiH"
        )
        .then(
            () => {
                contactMessage.textContent = " Message sent successfully ✅";

                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 5000);

                contactForm.reset();
            },
            () => {
                contactMessage.textContent =
                    "  Message not sent (service error) ❌";
            }
        );
};

contactForm.addEventListener("submit", sendEmail);

const scrollUp = () => {
    const scrollUp = document.querySelector(".scroll-up");
    window.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav-menu a[href*= " + sectionId + "]"
            );

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
});

sr.reveal(".home-profile, .about-image, .contact-mail", { origin: "right" });
sr.reveal(
    ".home-name, .home-info, .about-container .section-title-1, .about-info, .contact-social, .contact-data",
    {
        origin: "left",
    }
);
sr.reveal(".services-card, .projects-card", { interval: "100" });
