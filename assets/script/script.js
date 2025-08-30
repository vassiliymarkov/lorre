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