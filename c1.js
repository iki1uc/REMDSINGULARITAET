// c1.js – Cube‑1 Logik

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
