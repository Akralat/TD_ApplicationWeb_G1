let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll < lastScrollY && currentScroll > 100) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }

  lastScrollY = currentScroll;
});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

});