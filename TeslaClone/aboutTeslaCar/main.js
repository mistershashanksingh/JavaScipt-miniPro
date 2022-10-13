window.addEventListener("load", () =>
{
    document.body.classList.remove("preload");
});

const nav = document.querySelector(".nav");

document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("nav-open");
});
document.querySelector(".navOverlay").addEventListener("click", () => {
    nav.classList.remove("nav-open");
});
