let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".gnb");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
    menu.classList.add("on");
});
closeBtn.addEventListener("click", function () {
    menu.classList.remove("on");
});

// Initialize Swiper
// let swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 1000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

