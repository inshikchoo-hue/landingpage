let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".gnb");
let closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
    menu.classList.add("on");
});
closeBtn.addEventListener("click", function () {
    menu.classList.remove("on");
});

