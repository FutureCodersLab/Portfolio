import { setupContactMe } from "./features/contact-me.js";
import { setupHome } from "./features/home.js";
import { setupReferences } from "./features/references.js";

document.addEventListener("DOMContentLoaded", () => {
    setupHome();
    setupReferences();
    setupContactMe();
});
