
// RAW_WAR_BETA_LOCAL – der rohe Rückmelde‑Cube
// Keine Harmonie, keine SAFE‑Filter, keine Norm – pure Reaktion

function rawwarKontakt() {
  const box = document.getElementById("cube-status");
  const anker = document.getElementById("cube-anker");

  if (!box || !anker) {
    console.warn("RAW_WAR: UI nicht gefunden.");
    return;
  }

  // Charakter: direkt, roh, ungeschönt
  anker.textContent = "CUBE_1 → RAW_WAR aktiviert → ungefilterte Rückmeldung aktiv.";
  box.textContent = "RAW_WAR → Reaktion läuft…";

  rawwarPulse();
}

// Visuelle Reaktion – RAWWAR pulsiert, nicht leuchtet
function rawwarPulse() {
  const cube = document.getElementById("cube1");
  if (!cube) return;

  cube.classList.add("rawwar-pulse");

  setTimeout(() => {
    cube.classList.remove("rawwar-pulse");
  }, 600);
}

// RAWWAR liefert eine rohe Systemantwort
function rawwarFeedback(input) {
  // keine Norm, keine Filter – nur rohe Rückmeldung
  return "RAW_WAR_FEEDBACK → " + input.toUpperCase();
}
