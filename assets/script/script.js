let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".gnb");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
    menu.classList.add("on");
});
closeBtn.addEventListener("click", function () {
    menu.classList.remove("on");
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    spaceBetween: 26,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

