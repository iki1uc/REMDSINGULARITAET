import { getState, renderRawwar } from "./RAWWAR_CORE.js";
import { rawwarPulse } from "./rawwar-pulse.js"; // ← WICHTIG

export function rawwarKontakt() {
  const box = document.getElementById("cube-status");
  const anker = document.getElementById("cube-anker");

  if (!box || !anker) return;

  const s = getState(); // aktueller Zustand

  anker.textContent =
    `CUBE_1 → RAW_WAR aktiv → Zustand ${s.IDX}/4`;

  box.textContent =
    `RAW_WAR LIVE → B:${s.BSTAT} R:${s.RGRAD} H:${s.HGRAD} K:${s.KGRAD}`;

  renderRawwar();  // Screen aktualisieren
  rawwarPulse();   // visueller Puls
}
