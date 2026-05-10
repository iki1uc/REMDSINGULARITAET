export function getActiveState() {
    const a = document.getElementById("NC-ANCHOR");
    const active = a.dataset.active;
    const raw = a.dataset["a" + active].split(",");
    return {
        BSTAT: raw[0],
        RGRAD: raw[1],
        HGRAD: raw[2],
        KGRAD: raw[3]
    };
}

export function setState(n, bstat, rgrad, hgrad, kgrad) {
    const a = document.getElementById("NC-ANCHOR");
    a.dataset["a" + n] = `${bstat},${rgrad},${hgrad},${kgrad}`;
}

export function nextState() {
    const a = document.getElementById("NC-ANCHOR");
    let n = parseInt(a.dataset.active);
    n = n === 4 ? 1 : n + 1;
    a.dataset.active = n;
    renderNC();
}

export function prevState() {
    const a = document.getElementById("NC-ANCHOR");
    let n = parseInt(a.dataset.active);
    n = n === 1 ? 4 : n - 1;
    a.dataset.active = n;
    renderNC();
}

export function renderNC() {
    const s = getActiveState();
    document.getElementById("a-bstat").innerText = s.BSTAT;
    document.getElementById("a-rgrad").innerText = s.RGRAD;
    document.getElementById("a-hgrad").innerText = s.HGRAD;
    document.getElementById("a-kgrad").innerText = s.KGRAD;
}
