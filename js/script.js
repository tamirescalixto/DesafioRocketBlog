// Menu hamburguer
const Hamburguer = document.querySelector(".hamburguer");
const NavList = document.querySelector(".navList");

Hamburguer.addEventListener("click", () => {
  Hamburguer.classList.toggle("active");
  NavList.classList.toggle("active");
});
