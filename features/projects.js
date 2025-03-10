import { projects } from "../data-structures/projects.js";
import { getScreenSize, scrollReveal } from "../utils.js";

const projectsContainer = document.querySelector(".projects-container");
const loadMoreButton = document.querySelector("#projects button");
const select = document.querySelector("#projects select");

let displayedProjects = [];
let filteredProjects = [...projects];
let initialProjects = getInitialProjects();
let projectsToLoad = getProjectsToLoad();
let currentCount = initialProjects;

export const setupProjects = () => {
    setupFilters();
    filterProjects("all");
    loadMoreButton.addEventListener("click", loadMoreProjects);
    window.addEventListener("resize", handleResize);
    animations();
};

function getInitialProjects() {
    const screenSize = getScreenSize();
    if (screenSize === "desktop") return 6;
    if (screenSize === "tablet") return 4;
    return 3;
}

function getProjectsToLoad() {
    const screenSize = getScreenSize();
    if (screenSize === "desktop") return 3;
    if (screenSize === "tablet") return 2;
    return 1;
}

const renderProjects = () => {
    projectsContainer.innerHTML = "";
    displayedProjects.forEach((project) => {
        projectsContainer.appendChild(getProjectStructure(project));
    });

    const displayLoadMoreButton =
        displayedProjects.length < filteredProjects.length;

    loadMoreButton.classList.toggle("active", displayLoadMoreButton);
};

const loadMoreProjects = () => {
    const loadedProjects = filteredProjects.slice(
        currentCount,
        currentCount + projectsToLoad
    );
    displayedProjects = [...displayedProjects, ...loadedProjects];
    currentCount += projectsToLoad;
    renderProjects();
};

const filterProjects = (category) => {
    if (category === "all") {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter((p) => p.category === category);
    }
    initialProjects = getInitialProjects();
    projectsToLoad = getProjectsToLoad();
    displayedProjects = filteredProjects.slice(0, initialProjects);
    currentCount = initialProjects;
    renderProjects();
};

const setupFilters = () => {
    const uniqueCategories = new Set(projects.map((p) => p.category));
    const categories = ["all", ...uniqueCategories];

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
        filterProjects(event.target.value);
    });
};

const handleResize = () => {
    initialProjects = getInitialProjects();
    projectsToLoad = getProjectsToLoad();
};

const getProjectStructure = (project) => {
    const { image, name, description, skills, githubLink, websiteLink } =
        project;

    const skillIcons = skills
        .map((skill) => `<img src="./images/icons/skills/${skill}.svg" />`)
        .join("");

    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `
        <div class="image-container">
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
                    <img src="./images/icons/socials/github-black.svg" />
                    <a href="${githubLink}" target="_blank">View Code</a>
                </div>
                <div class="website">
                    <a href="${websiteLink}" target="_blank">Try It Out</a>
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

const animations = () => {
    scrollReveal.reveal("#projects .header", {
        origin: "top",
        delay: 300,
    });
    scrollReveal.reveal(".projects-container", {
        origin: "bottom",
        delay: 400,
    });
    scrollReveal.reveal("#projects button", {
        origin: "bottom",
        delay: 500,
    });
};
