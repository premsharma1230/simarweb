$(document).ready(function () {
  $(".slider1").owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    // nav: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
