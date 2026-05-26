// CUBE‑1 · Cluster-Entscheidung
// ID: CUBE‑1 / FILE: c1.js / ROLE: Entscheidungsknoten

// 1) Kontext LESEN (nicht überschreiben)
// Warum? → Cube‑1 darf nur übernehmen, was Cube‑0 gesetzt hat.
const CUBE_ID = "CUBE-1";
const FILE_ID = "c1.js";
const ROLE = "Cluster-Entscheidung";

const PREV = localStorage.getItem("PREV") || "c0"; 
const MODE = localStorage.getItem("MODE") || "A"; // A/B/AB → Cluster-Modus

// 2) Gravitation (Zugkraft des Modus)
// Warum? → Cube‑1 ist der erste Punkt, der zieht.
function gravitation1() {
  if (MODE === "A") return "→A";
  if (MODE === "B") return "→B";
  return "↔"; // AB = symmetrisch
}

// 3) Schiene (Pfad c0 → c1 → c2)
// Warum? → Cube‑1 ist der Entscheidungsknoten zwischen Neutralität und Bewegung.
function schiene1() {
  return {
    vorher: PREV,
    jetzt: "c1",
    nachher: "c2",
    grav: gravitation1(),
    mode: MODE
  };
}

// 4) Quertier-Slot (A×B)
// Warum? → AB-Modus erzeugt eine Doppelsicht.
function quertierSlot(a, b) {
  return {
    A: a,
    B: b,
    AB: a + " | " + b
  };
}

// 5) Kernfunktion (Entscheidung)
// Warum? → Cube‑1 entscheidet, wie das System weiterzieht.
function cube1Core(input) {
  const s = schiene1();

  if (MODE === "A") return "A1:" + input + " " + s.grav;
  if (MODE === "B") return "B1:" + input + " " + s.grav;

  if (MODE === "AB") {
    const q = quertierSlot("A1:" + input, "B1:" + input);
    return q.AB + " " + s.grav;
  }
}

// 6) Wissenschaftlicher Output
function c1_out(ist, soll) {
  document.getElementById("out").innerHTML = `
    <div class="out-title">CUBE‑1 – Cluster-Entscheidung</div>
    <div class="out-ist"><b>IST:</b> ${ist}</div>
    <div class="out-soll"><b>SOLL:</b> ${soll}</div>
  `;
}

// 7) Startsignal
const s1 = schiene1();
c1_out(
  "Entscheidung aktiv",
  `Schiene: ${s1.vorher} → ${s1.jetzt} → ${s1.nachher} | MODE: ${s1.mode} | GRAV: ${s1.grav}`
);

// 8) Anzeige (optional, falls du modeDisplay nutzt)
const md = document.getElementById("modeDisplay");
if (md) {
  md.textContent =
    `CUBE‑1 | MODE: ${MODE} | vorher: ${PREV} | nachher: c2`;
}
