"use strict";

/*** HAMBURGER BUTTON ***/
let hamburgerBtn = document.getElementById('hamburger-btn');
let hamburgerBar1 = document.getElementById('hamburger-bar-1');
let hamburgerBar2 = document.getElementById('hamburger-bar-2');
let hamburgerBar3 = document.getElementById('hamburger-bar-3');
let mobileMenu = document.querySelector('.menu');
let body = document.querySelector('.body');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBar1.classList.toggle('clicked');
  hamburgerBar2.classList.toggle('clicked');
  hamburgerBar3.classList.toggle('clicked');
  mobileMenu.classList.toggle('menu--active');
  body.classList.toggle('body--fixed');
});

/*** ANIMATIONS ***/
console.log('script loaded')
/* HERO BLOCK */
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".animate");
  elements.forEach((el, i) => {
    setTimeout(() => el.classList.add("show"), i * 800);
  });
});

/* OTHER SECTIONS */
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("display");
      /* obs.unobserve(entry.target); */ // анимация сработает один раз
    }
  });
}, {
  threshold: 0.9,
  /* rootMargin: '0px 0px -100px 0px' */
});

// Наблюдаем все элементы animate-in на странице
document.querySelectorAll(".animate-in").forEach(el => observer.observe(el));

