$(document).ready(function () {
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
});

$('owl-carousel').owlCarousel({
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },

    680: {
      items: 2
    },

    960: {
      items: 3
    }
  }
});































