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
let swiper = new Swiper(".price-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".indicator",
        clickable: true,
    },

});

