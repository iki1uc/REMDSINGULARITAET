
// rawwar-pulse.js
export function rawwarPulse() {
    const cube = document.getElementById("cube");

    if (!cube) return;

    cube.classList.add("rawwar-pulse");

    setTimeout(() => {
        cube.classList.remove("rawwar-pulse");
    }, 600);
}
