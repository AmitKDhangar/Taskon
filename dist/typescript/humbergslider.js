"use strict";
// Mobile Humberg Functionality
let humBerg = document.querySelector(".ri-menu-4-fill");
let hideArrow = document.querySelector(".ri-expand-left-line");
let Menu = document.querySelector(".mobile-slide-menu");
humBerg.addEventListener("click", () => {
    Menu.style.display = "inline-flex";
    console.log("humberg clicked");
});
hideArrow.addEventListener("click", () => {
    Menu.style.display = "none";
    console.log("uparrow clicked");
});
