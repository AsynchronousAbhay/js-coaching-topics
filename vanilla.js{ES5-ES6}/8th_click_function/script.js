const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const menu_overlay = document.querySelector(".menu-overlay");

menu.addEventListener("click", function () {
    menu_overlay.style.transform = "translateX(0)";
});

cross.addEventListener("click", function () {
    menu_overlay.style.transform = "translateX(100%)";
});
