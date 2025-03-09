export const getScreenSize = () => {
    if (window.innerWidth >= 1024) return "desktop";
    if (window.innerWidth >= 768) return "tablet";
    return "mobile";
};

export const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1000,
    delay: 300,
    reset: false,
});
