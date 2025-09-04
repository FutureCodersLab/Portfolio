import { projects } from "../data-structures/projects-data.js";
import { getScreenSize } from "../utils/screen-size.js";
import { scrollReveal } from "../utils/scroll-reveal.js";
import {
    getOptionStructure,
    getProjectStructure,
} from "../utils/structures.js";

const projectsContainer = document.querySelector(".projects-container");
const select = document.querySelector("#projects select");
const loadMoreProjectsButton = document.querySelector("#projects button");

let initialProjectsCount = getInitialProjectsCount();
let projectsToLoadCount = getProjectsToLoadCount();
let displayedProjects = projects.slice(0, initialProjectsCount);
let filteredProjects = projects;
let currentScreenSize = getScreenSize();

export const setupProjects = () => {
    displayProjects();
    createFilterOptions();

    loadMoreProjectsButton.addEventListener("click", loadMoreProjects);
    select.addEventListener("change", filterProjects);
    window.addEventListener("resize", resize);
    animations();
};

const loadMoreProjects = () => {
    const currentProjectCount = displayedProjects.length;

    const loadedProjects = filteredProjects.slice(
        currentProjectCount,
        currentProjectCount + projectsToLoadCount
    );

    displayedProjects.push(...loadedProjects);
    displayProjects();
};

const filterProjects = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "all") {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(
            (project) => project.category === selectedCategory
        );
    }

    displayedProjects = filteredProjects.slice(0, initialProjectsCount);
    displayProjects();
};

const createFilterOptions = () => {
    const uniqueCategories = new Set(
        projects.map((project) => project.category)
    );

    const categories = ["all", ...uniqueCategories];

    categories.map((category) => {
        const option = getOptionStructure(category);
        select.appendChild(option);
    });
};

const displayProjects = () => {
    projectsContainer.innerHTML = "";

    displayedProjects.map((project) => {
        const projectStructure = getProjectStructure(project);
        projectsContainer.appendChild(projectStructure);
    });

    const hasMoreProjects = displayedProjects.length < filteredProjects.length;
    loadMoreProjectsButton.classList.toggle("active", hasMoreProjects);
};

const resize = () => {
    const newScreenSize = getScreenSize();

    if (currentScreenSize === newScreenSize) return;

    currentScreenSize = newScreenSize;

    initialProjectsCount = getInitialProjectsCount();
    projectsToLoadCount = getProjectsToLoadCount();
    displayedProjects = projects.slice(0, initialProjectsCount);
    displayProjects();
};

function getInitialProjectsCount() {
    const screenSize = getScreenSize();

    if (screenSize === "desktop") {
        return 6;
    }

    if (screenSize === "tablet") {
        return 4;
    }

    return 3;
}

function getProjectsToLoadCount() {
    const screenSize = getScreenSize();

    if (screenSize === "desktop") {
        return 3;
    }

    if (screenSize === "tablet") {
        return 2;
    }

    return 1;
}

const animations = () => {
    scrollReveal.reveal("#projects .header", {
        origin: "top",
        delay: 300,
    });

    scrollReveal.reveal(".projects-container", {
        origin: "bottom",
        delay: 400,
    });
};
