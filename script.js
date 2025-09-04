import { setupContactMe } from "./features/contact-me.js";
import { setupHome } from "./features/home.js";
import { setupProjects } from "./features/projects.js";
import { setupReferences } from "./features/references.js";
import { setupNavigation } from "./features/navigation.js";
import { setupFooter } from "./features/footer.js";
import { setupAboutMe } from "./features/about-me.js";

document.addEventListener("DOMContentLoaded", () => {
    setupHome();
    setupAboutMe();
    setupReferences();
    setupProjects();
    setupContactMe();
    setupNavigation();
    setupFooter();
});
