// Variable
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change background header
function scrollheader() {
  const header = document.querySelector("#header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollheader);

// Show scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__img, .new__container, .footer__container`);
sr.reveal(`.home__data`, { delay: 500 });
sr.reveal(`.giving__content, .gift__card`, { interval: 100 });
sr.reveal(`.celebrate__data, .message__form, .footer__img1`, {
  origin: "left",
});
sr.reveal(`.celebrate__img, .message__img, .footer__img2`, { origin: "right" });
