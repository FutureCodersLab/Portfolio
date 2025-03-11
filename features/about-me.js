import { scrollReveal } from "../utils/utils.js";

export const setupAboutMe = () => {
    animations();
};

const animations = () => {
    scrollReveal.reveal("#about-me .images-container .image", {
        origin: "left",
        interval: 200,
    });
    scrollReveal.reveal("#about-me .content", {
        origin: "right",
        delay: 400,
    });
};
