"use strict"

// Menu

// Arrows
// document.querySelector('#chevronRight1').addEventListener('click', rotate1);
// document.querySelector('#chevronRight2').addEventListener('click', rotate2);;
// document.querySelector('#chevronRight3').addEventListener('click', rotate3);;
// document.querySelector('#chevronRight4').addEventListener('click', rotate4);;

// function rotate1() {
//     document.querySelector('#arrowDown').style.transform = 'none';
//     document.querySelector('#active1').style.color = '#dd4b39';
// }

// function rotate2() {
//     document.querySelector('#arrowDown1').style.transform = 'rotate(90deg)';
//     document.querySelector('#active2').style.color = '#dd4b39';
// }

// function rotate3() {
//     document.querySelector('#arrowDown2').style.transform = 'rotate(90deg)';
//     document.querySelector('#active3').style.color = '#dd4b39';
// }

// function rotate4() {
//     document.querySelector('#arrowDown3').style.transform = 'rotate(90deg)';
//     document.querySelector('#active4').style.color = '#dd4b39';
// }


// Slideshow

// naudoti foreach 

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

// function showSlides(n) {

// }

const bgImg1 = document.querySelector('#bgImg1')
const bgImg2 = document.querySelector('#bgImg2')
const bgImg3 = document.querySelector('#bgImg3')
// const leftArr = document.querySelector('#leftArr').addEventListener('click', currentSlide(-1));
// const rightArr = document.querySelector('#rightArr').addEventListener('click', currentSlide(1));
// const dot1 = document.querySelector('#dot1');
// const dot2 = document.querySelector('#dot2');
// const dot3 = document.querySelector('#dot3');

// const slideIndex = 1;
// changeImg(slideIndex);

// function plusSlides(n) {
//     changeImg(slideIndex += n);
// }
  
// function currentSlide(n) {
//     changeImg(slideIndex = n);
// }

// function changeImg(n) {
//     const slides = document.querySelector("#bgImg");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.zIndex = "-2";  
//     }
//     slides[slideIndex-1].style.zIndex = "2";
// }

// globalus kintamasis

// Counter
const quantity = document.querySelector('#quantity');
document.querySelector('#minus').addEventListener('click', extract);
document.querySelector('#plus').addEventListener('click', add);

function extract() {
    if (quantity.value > 1) {
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