const menuBar = document.querySelector(".icon");
const menuClose = document.querySelector(".iconClose");
const navId = document.querySelector(".NavUL");
const navBar = document.querySelector(".navClass");
const aClick = document.querySelector(".aClick");
const bClick = document.querySelector(".bClick");
const cClick = document.querySelector(".cClick");
const dClick = document.querySelector(".dClick");
const eClick = document.querySelector(".eClick");

aClick.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});
bClick.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});
cClick.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});
dClick.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});
eClick.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});

menuBar.addEventListener("click", () => {
    navId.classList.add("show");
    menuBar.classList.add("hide");
    menuClose.classList.add("show");
});
menuClose.addEventListener("click", () => {
    navId.classList.remove("show");
    menuBar.classList.remove("hide");
    menuClose.classList.remove("show");
});




// Scroll
const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = () => {
    this.scrollY > 20 ? navBar.classList.add("scroll") : navBar.classList.remove("scroll");

    // Scroll
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos = container.getBoundingClientRect();
    diff = containerHeight + containerPos.top;
    progressPercentage = diff / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);
    highlight.style.width = cssWidth + "%";
}