// out1.js – Wissenschaftlicher Output für Cube‑1

function out1_write(ist, soll, ableitung) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">Wissenschaftlicher Output – Cube‑1</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
    <div class="out-ableitung"><b>Ableitung:</b> ${ableitung}</div>
  `;
}

// Beispielstart
out1_write(
  "Bereich 1 aktiv",
  "Verbund bereit",
  "Cube‑1 liefert Ergänzungsdaten für den Master‑Cube."
);

