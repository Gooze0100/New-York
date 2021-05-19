"use strict"

// Slideshow

// const i = 0; // Start point

// const images = []

// const time = 1000;

// // Image list
// images[0] = '/img/img1.jpg';
// images[1] = '/img/img2.jpg';
// images[2] = '/img/img3.jpg';

// Change image

// function changeImg() {
//     document.slide.src = images[i];

//     if(i < images.length - 1) {
//         i++
//     }   else {
//         i = 0;
//     }

//     setTimeout('changeImg()', time);
// }

// window.onload = changeImg;


// const slideIndex = 1;
// showSlides(slideIndex);

// funtion showSlides(n) {

// }


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