import { nextState, prevState } from "./RAWWARBETA.js";

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextState();
    if (e.key === "ArrowLeft") prevState();
});
