export function getActive() {
    const a = document.getElementById("NC-ANCHOR");
    const n = a.dataset.active;
    return parseInt(n);
}

export function getState(n = getActive()) {
    const a = document.getElementById("NC-ANCHOR");
    const raw = a.dataset["s" + n].split(",");
    return {
        BSTAT: raw[0],
        RGRAD: raw[1],
        HGRAD: raw[2],
        KGRAD: raw[3]
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
