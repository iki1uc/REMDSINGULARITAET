// rawwar-core.js
import { getState } from "./RAW_WAR_BETA_LOCAL.js";
import { renderRawwar } from "./RAWWAR_CORE.js";
import { rawwarPulse } from "./rawwar-pulse.js";

export function rawwarKontakt() {
    const box = document.getElementById("cube-status");
    const anker = document.getElementById("cube-anker");

    // Falls HTML noch nicht geladen ist → kein Fehler
    if (!box || !anker) return;

    const s = getState(); // aktueller RAWWAR-Zustand

    // ANKER-AUSGABE
    anker.textContent =
        `CUBE_1 → RAW_WAR aktiv → Zustand ${s.IDX}/4`;

    // STATUS-AUSGABE
    box.textContent =
        `RAW_WAR LIVE → B:${s.BSTAT} R:${s.RGRAD} H:${s.HGRAD} K:${s.KGRAD}`;

    // RAWWAR-SCREEN aktualisieren
    renderRawwar();

    // visueller Puls am Würfel
    rawwarPulse();
}
