export const getSwiperSlideStructure = (reference) => {
    const {
        name,
        image,
        position,
        institution,
        content,
        recommendationLetter,
    } = reference;

    const div = document.createElement("div");
    div.className = "swiper-slide";
    div.innerHTML = `
        <div class="content">
            <div class="header">
                <img src="${image}" />
                <div class="author-info">
                    <span class="name">${name}</span>
                    <span class="info"
                        >${position}, ${institution}</span
                    >
                </div>
            </div>
            <div class="reference">
                <p>${content}</p>
                <a href="${recommendationLetter}" download>Read More</a>
            </div>
        </div>
        <img
            src="./images/icons/quotes.png"
            class="quotes"
        />
        <div class="line-decoration"></div>
    `;

    return div;
};

export const getSocialsLinkStructure = (link) => {
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank";
    a.innerHTML = `
        <img src="${link.icon}" />
    `;
    return a;
};
