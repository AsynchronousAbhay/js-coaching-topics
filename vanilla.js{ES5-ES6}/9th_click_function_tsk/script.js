const button = document.querySelector("button");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", function () {
    overlay.style.transform = "translateX(0)";
});

cross.addEventListener("click", function () {
    overlay.style.transform = "translateX(100%)";
});
