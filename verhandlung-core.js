import { next, prev, renderNC } from "./RAW_WAR_BETA_LOCAL.js";

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        next();
        renderNC();
    }
    if (e.key === "ArrowLeft") {
        prev();
        renderNC();
    }
});
