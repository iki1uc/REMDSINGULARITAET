// c1.js – Cube‑1 Logik

// Maske laden
fetch("mask.html")
  .then(r => r.text())
  .then(t => {
    document.getElementById("mask").innerHTML = t;
  });

// Kernbereich initialisieren
document.getElementById("core").innerHTML = `
  <div class="core-title">Cube‑1 Kern</div>
  <div class="core-info">Bereich 1 aktiv</div>
`;

// Wissenschaftlicher Output für Cube‑1
function c1_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑1</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

// Beispielstart
c1_out("Initialisiert", "Bereit für Verbund");

