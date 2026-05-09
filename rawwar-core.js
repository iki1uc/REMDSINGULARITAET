function rawwarKontakt() {
  const box = document.getElementById("cube-status");
  const anker = document.getElementById("cube-anker");

  if (!box || !anker) return;

  anker.textContent = "CUBE_1 → RAW_WAR aktiviert → ungefilterte Rückmeldung aktiv.";
  box.textContent = "RAW_WAR → Reaktion läuft…";

  rawwarPulse();
}

function rawwarPulse() {
  const cube = document.getElementById("cube1");
  if (!cube) return;

  cube.classList.add("rawwar-pulse");

  setTimeout(() => {
    cube.classList.remove("rawwar-pulse");
  }, 600);
}
