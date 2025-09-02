export const getScreenSize = () => {
    if (window.innerWidth >= 1200) {
        return "desktop";
    }

    if (window.innerWidth >= 768) {
        return "tablet";
    }

    return "mobile";
};
