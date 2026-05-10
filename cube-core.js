// --------------------------------------
// NC-CORE – EINHEITLICHES 4/4 SYSTEM
// --------------------------------------
export function getActive() {
    const a = document.getElementById("NC-ANCHOR");
    return parseInt(a.dataset.active);
}

export function getState(n = getActive()) {
    const a = document.getElementById("NC-ANCHOR");
    const raw = a.dataset["s" + n].split(",");
    return {
        BSTAT: parseInt(raw[0]),
        RGRAD: parseInt(raw[1]),
        HGRAD: parseInt(raw[2]),
        KGRAD: parseInt(raw[3])
    };
}

export function setState(n, bstat, rgrad, hgrad, kgrad) {
    const a = document.getElementById("NC-ANCHOR");
    a.dataset["s" + n] = `${bstat},${rgrad},${hgrad},${kgrad}`;
}

export function next() {
    const a = document.getElementById("NC-ANCHOR");
    let n = parseInt(a.dataset.active);
    n = n === 4 ? 1 : n + 1;
    a.dataset.active = n;
    return getState(n);
}

export function prev() {
    const a = document.getElementById("NC-ANCHOR");
    let n = parseInt(a.dataset.active);
    n = n === 1 ? 4 : n - 1;
    a.dataset.active = n;
    return getState(n);
}

// --------------------------------------
// LIVE-RENDER FÜR index.html
// --------------------------------------
export function renderNC() {
    const s = getState();
    document.getElementById("a-bstat").innerText = s.BSTAT;
    document.getElementById("a-rgrad").innerText = s.RGRAD;
    document.getElementById("a-hgrad").innerText = s.HGRAD;
    document.getElementById("a-kgrad").innerText = s.KGRAD;
}
