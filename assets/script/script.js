let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".gnb");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
    menu.classList.add("on");
});
closeBtn.addEventListener("click", function () {
    menu.classList.remove("on");
});

var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: "auto",       
  slidesPerGroup: 2,        // 한 번에 보이는 슬라이드 수
  loop: true,             // 무한 루프
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,       // 슬라이드 간 간격(px)
  pagination: {
    el: ".swiper1-pagination",  // pagination 적용할 엘리먼트
    clickable: true,           // 클릭 가능
  },
  navigation: {
    nextEl: ".swiper1-button-next", // 필요 시 버튼 추가 가능
    prevEl: ".swiper1-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",       
  slidesPerGroup: 3,        // 한 번에 보이는 슬라이드 수
  loop: true,             // 무한 루프
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,       // 슬라이드 간 간격(px)
  pagination: {
    el: ".swiper2-pagination",  // pagination 적용할 엘리먼트
    clickable: true,           // 클릭 가능
  },
  navigation: {
    nextEl: ".swiper2-button-next", // 필요 시 버튼 추가 가능
    prevEl: ".swiper2-button-prev",
  },
});


