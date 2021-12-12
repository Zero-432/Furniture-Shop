$(document).ready(function(){
    $('.hero-gallery__list').slick({
      dots: true,
      Infinity: true,
      speed: 300,
      arrows: true,
      prevArrow: $(".arrow-left"),
      nextArrow: $(".arrow-right"),
      variableWidth: true,
      slidesToShow: 2,
      centerMode: true, 
    });
  });

$(document).ready(function(){
    $('.preview-list').slick({
      dots: true,
      Infinity: true,
      speed: 300,
      arrows: true,
      prevArrow: false,
      nextArrow: $(".preview-arrow__right"),
      variableWidth: true,
      slidesToShow: 1,
      centerMode: true,
    });
  });

// const sliderImage = document.querySelectorAll(".preview-item");
// const slider = document.querySelector(".preview-list");
// const nextBtn = document.querySelector(".preview-arrow__right");
// const navDots = document.querySelector(".preview-dots");
// let numberOfImages = sliderImage.length;
// let slideWidth = sliderImage[0].clientWidth;
// let currentSlide = 0;

// function init() {
//   sliderImage.forEach (img => {
//     img.setAttribute("style", `transform:scale(0.92, 0.84); top: -47px;`);
//   });
//   sliderImage[0].setAttribute("style", 'transfrom: scale(1);');
//   sliderImage[0].classList.add("active");
//   createNavigationDots();
  
// };
// init();

// // Create navigation dots

// function createNavigationDots() {
//   for (let i=0; i < numberOfImages; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("single-dot");
//     navDots.appendChild(dot);
//   }
//   navDots.children[0].classList.add("active");
// };

// // Next button
// nextBtn.addEventListener("click", () => {
//   if (currentSlide >= numberOfImages -1) {
//     goToSlide(0);
//     currentSlide = 0;
//     return;
//   }
//   currentSlide++;
//   goToSlide(currentSlide);
// });

// function goToSlide(slidenumber) {
//   slider.style.transform = "translateX(-" + 404 * slidenumber + "px)";
// };

$(document).ready(function(){
  $('.tutorial-list').slick({
    dots: true,
    Infinity: true,
    speed: 300,
    arrows: true,
    prevArrow: $(".tutorial-arrow__left"),
    nextArrow: $(".tutorial-arrow__right"),
    variableWidth: true,
    slidesToShow: 1,
    centerMode: true,
  });
});