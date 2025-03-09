import { setupReferences } from "./features/references.js";
import { setupHome } from "./features/home.js";
import { setupNavigation } from "./features/navigation.js";
import { setupContactMe } from "./features/contact-me.js";
import { setupProjects } from "./features/projects.js";
import { setupFooter } from "./features/footer.js";
import { setupAboutMe } from "./features/about-me.js";

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupHome();
    setupAboutMe();
    setupReferences();
    setupProjects();
    setupContactMe();
    setupFooter();
    setupScrollReveal();
});
