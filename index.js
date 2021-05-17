"use strict"

// Menu
const subMenu = document.querySelector('#subMenu')
document.querySelector('#openSubMenu').addEventListener('mouseover', openMenu);
document.querySelector('#openSubMenu').addEventListener('mouseout', closeMenu);

function openMenu() {
    subMenu.style.visibility = 'visible';
    subMenu.style.opacity = '1';
}

function closeMenu() {
    subMenu.style.visibility = 'hidden';
    subMenu.style.opacity = '0';
}

// Carousel



// Counter
const quantity = document.querySelector('#quantity');
document.querySelector('#minus').addEventListener('click', extract);
document.querySelector('#plus').addEventListener('click', add);

function extract() {
    if(quantity.value > 1) {
        quantity.value--
    }
}

function add() {
    quantity.value++
}

// Youtube video appears after click
const youtubeVideo = document.querySelector('#youtubeVideo')

document.querySelector('#playVideo').addEventListener('click', openVideo);

function openVideo() {
    youtubeVideo.style.zIndex = '1';
    youtubeVideo.style.visibility = 'visible';
}