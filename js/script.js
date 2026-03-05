const burger = document.querySelector(".burger");
const mobMenu = document.querySelector(".nav__list");
const header = document.querySelector(".header");

if (burger && mobMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    mobMenu.classList.toggle("nav--active-mob");
    header.classList.toggle("header__line");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1160) {
      mobMenu.classList.remove("nav--active-mob");
      burger.classList.remove("burger--active");
    }
  });
}

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    mobMenu.classList.remove("nav--active-mob");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".burger") && !e.target.closest(".nav")) {
    mobMenu.classList.remove("nav--active-mob");
    burger.classList.remove("burger--active");
  }
});
