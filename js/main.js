'use strict';
var menu = document.querySelector('.nav');
var btnOpen = document.querySelector('.nav-trigger');
var btnClosed = document.querySelector('.nav-close');

menu.classList.add('closed');
function toggle() {
  if (menu.classList.contains('closed')) {
    menu.classList.remove('closed');
    btnOpen.classList.add('closed')
  } else {
    menu.classList.add('closed');
    btnOpen.classList.remove('closed')
  }

}
btnOpen.addEventListener('click', toggle);
btnClosed.addEventListener('click', toggle);

// menu.classList.add('closed');
//
// menu.classList.remove('nav');
//
// function openMenu() {
//     menu.classList.remove('closed');
//     menu.classList.add('nav');
// }
//
// function closeMenu() {
//     menu.classList.add('closed');
//     menu.classList.remove('nav');
// }
//
// btnOpen.addEventListener('click', openMenu);
//
// btnClosed.addEventListener('click', closeMenu);
