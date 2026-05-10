import { setA, setB } from "./RAWWARBETA.js";

document.addEventListener("keydown", e => {
  if (e.key === "1") setA(100, 80, 60, 40, "R1");
  if (e.key === "2") setB(90, 70, "R2");
});
