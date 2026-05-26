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
// MODE: A / B / AB
let MODE = localStorage.getItem("MODE") || "A";

// vorher/nachher (IST–SOLL)
let PREV = localStorage.getItem("PREV") || "c0";
localStorage.setItem("PREV", "c1");

// Anzeige aktualisieren
document.getElementById("modeDisplay").textContent =
  "MODE: " + MODE + " | vorher: " + PREV + " | nachher: c1";

// Neutralraum (Cube-0)
function backToNeutral() {
  localStorage.setItem("PREV", "c1");
  window.location.href = "c0.html";
}

// Quertier-Slot (A×B / AB)
function quertierSlot(a, b) {
  return {
    A: a,
    B: b,
    AB: a + " | " + b
  };
}

// Cube-1 Kernfunktion (neutral, ohne Fremd-Cubes)
function cube1Core(input) {
  if (MODE === "A") return "A:" + input;
  if (MODE === "B") return "B:" + input;
  if (MODE === "AB") {
    const q = quertierSlot("A:" + input, "B:" + input);
    return q.AB;
  }
}
