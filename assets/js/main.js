$(document).ready(function () {
  var swiper = new Swiper(".amySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {  
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
    },
      '667': {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      '480': {
        slidesPerView: 1,
        spaceBetween: 20,},
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {  
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20,
    },
      '767': {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      '480': {
        slidesPerView: 1,
        spaceBetween: 20,},
    },
  });


  var swiper = new Swiper(".logo3_slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {  
        '1199': {
          slidesPerView: 3,
          spaceBetween: 20,
      },
        '767': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '480': {
          slidesPerView: 1,
          spaceBetween: 20,},

      },
  });
});
