let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".gnb");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
  menu.classList.add("on");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("on");
});

const swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  slidesPerGroup: 2,        // 한 번에 보이는 슬라이드 수
  loop: true,             // 무한 루프
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
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

const swiper2 = new Swiper(".mySwiper2", {
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

// 페이지 책갈피

$(function () {
  const headerHeight = 150; // 🟡 상단 고정 헤더 높이(px)

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const href = $(this).attr('href');
    if (href === '#' || href === '') return; // 빈 링크 예외처리

    const $target = $(href);
    if ($target.length === 0) return; // 타깃이 없으면 종료

    // 섹션별 오프셋 조정값 (필요 시 수정)
    const offsets = {
      '#plan': 0,
      '#price': 0,
      '#partnership': -100,
      '#review': -100
    };

    const extraOffset = offsets[href] || 0; // 섹션별 세밀 조정값
    const targetTop = $target.offset().top; // 섹션의 실제 Y좌표
    const finalPosition = targetTop - headerHeight - extraOffset;

    // 부드럽게 이동
    $('html, body').stop().animate({
      scrollTop: finalPosition
    }, 800, 'swing'); // (속도, 이징)
  });
});

// 플로팅메뉴
document.addEventListener("DOMContentLoaded", () => {
  const floatMenu = document.querySelector(".float-menu");
  if (!floatMenu) return; // 안전장치

  // 스크롤 시 show 클래스 추가/삭제
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 600) {
      console.log("show 클래스 추가됨");
      floatMenu.classList.add("show");
    } else {
      floatMenu.classList.remove("show");
      console.log("show 클래스 추가됨");
    }
  });

  // ▲ 맨 위로 부드럽게 이동
  const topBtn = document.querySelector(".float-menu a[href='#top']");
  if (topBtn) {
    topBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("맨 위로 버튼 클릭됨");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

