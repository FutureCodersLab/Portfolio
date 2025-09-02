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

export const getProjectStructure = (project) => {
    const { image, name, description, websiteLink, githubLink, skills } =
        project;

    const skillIcons = skills
        .map((skill) => `<img src="./images/icons/skills/${skill}.svg" />`)
        .join("");

    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
        <div class="images-container">
            <img src="${image}" />
        </div>
        <div class="content">
            <div class="info">
                <h3>${name}</h3>
                <p>${description}</p>
            </div>
            <div class="skills-container">
                <span>Skills:</span>
                <div class="skills">
                    ${skillIcons}
                </div>
            </div>
            <div class="links">
                <div class="code">
                    <img
                        src="./images/icons/socials/github-black.svg"
                    />
                    <a href="${websiteLink}" target="_blank">View Code</a>
                </div>
                <div class="website">
                    <a href="${githubLink}" target="_blank">Try It Out</a>
                    <img src="./images/icons/arrow.svg" />
                </div>
            </div>
        </div>
    `;

    div.addEventListener("click", (e) => {
        if (!e.target.closest("a")) {
            window.open(websiteLink, "_blank");
        }
    });

    return div;
};

export const getOptionStructure = (category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    return option;
};
