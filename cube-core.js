// -------------------------
// RAW-NC ZUSTAND A (MODUS 1)
// -------------------------
export const NCA = {
  BSTAT: 0,
  RGRAD: 0,
  HGRAD: 0,
  KGRAD: 0,
  R: "R0"
};

// -------------------------
// RAW-NC ZUSTAND B (MODUS 2)
// -------------------------
export const NCB = {
  PREAL: 0,
  PVALID: 0,
  PRISK: "R0"
};

// -------------------------
// RENDER
// -------------------------
export function renderNC() {
  document.getElementById("a-bstat").innerText = NCA.BSTAT;
  document.getElementById("a-rgrad").innerText = NCA.RGRAD;
  document.getElementById("a-hgrad").innerText = NCA.HGRAD;
  document.getElementById("a-kgrad").innerText = NCA.KGRAD;
  document.getElementById("a-risk").innerText = NCA.R;

  document.getElementById("b-preal").innerText = NCB.PREAL;
  document.getElementById("b-pvalid").innerText = NCB.PVALID;
  document.getElementById("b-prisk").innerText = NCB.PRISK;
}

// -------------------------
// SETTER
// -------------------------
export function setA(bstat, rgrad, hgrad, kgrad, rlabel) {
  NCA.BSTAT = bstat;
  NCA.RGRAD = rgrad;
  NCA.HGRAD = hgrad;
  NCA.KGRAD = kgrad;
  NCA.R = rlabel;
  renderNC();
}

export function setB(preal, pvalid, prisk) {
  NCB.PREAL = preal;
  NCB.PVALID = pvalid;
  NCB.PRISK = prisk;
  renderNC();
}
