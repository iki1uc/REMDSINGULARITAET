import { next, prev, renderNC, getState } from "./RAW_WAR_BETA_LOCAL.js";

function updateHUDGlow() {
    const hud = document.getElementById("NC-HUD");
    const s = getState();
    hud.className = "r" + s.RGRAD;
}

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {
        next();        // Zustand + RAWWAR + Pulse + Screen
    }

    if (e.key === "ArrowLeft") {
        prev();        // Zustand + RAWWAR + Pulse + Screen
    }

    renderNC();        // NC-HUD aktualisieren
    updateHUDGlow();   // HUD-Farbe setzen
});
