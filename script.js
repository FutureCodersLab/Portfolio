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

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_d9lzyps", // serviceId
            "template_dqcrvtw", // templateId
            "#contact-form", // formId
            "6DdhfNV_WGxG9gxiH" // publicKey
        )
        .then(() => {
            alert("✅ Message sent successfully");
        })
        .catch(() => {
            alert("❌ Message not sent (service error)");
        })
        .finally(() => contactForm.reset());
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
