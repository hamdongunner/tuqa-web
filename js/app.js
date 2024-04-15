var scroll = new SmoothScroll('a[href*="#"]');
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  loop: true,
  mousewheel: {
    invert: false,
  },

  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  shadow: false,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});
