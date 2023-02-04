let openMenuBtn = document.querySelector(".open-menu"),
  closeMenuBtn = document.querySelector(".close-menu"),
  menu = document.querySelector("header .navbar ul"),
  overlay = document.querySelector(".overlay");

// Open/Close menu button behaviour
openMenuBtn.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.style.opacity = "1";
  overlay.style.zIndex = "0";
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.zIndex = "-1";
});
