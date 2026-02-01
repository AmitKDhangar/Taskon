// Mobile Humberg Functionality

let humBerg = document.querySelector(".ri-menu-4-fill") as HTMLElement;
let hideArrow = document.querySelector(".ri-expand-left-line") as HTMLElement;
let Menu = document.querySelector(".mobile-slide-menu") as HTMLElement;

humBerg.addEventListener("click", () => {
  Menu.style.display = "inline-flex";
  console.log("humberg clicked");
});

hideArrow.addEventListener("click", () => {
  Menu.style.display = "none";
  console.log("uparrow clicked");
});
