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
      slidesToShow: 2,
      centerMode: true, 
    });
  });