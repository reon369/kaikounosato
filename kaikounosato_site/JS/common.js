$(function () {
  // ドロワー
  $('.drawer-item>a').click(function() {
    $('#drawer-check').removeAttr('checked').prop('checked', false).change();
  });

  // slick
  $(".slick01").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dotsClass: "slide-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // fadeUp
  function fadeAnime() {
    $('.fadeUpTrigger').each(function () {
      var elemPos = $(this).offset().top - 20;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');
      } else {
        $(this).removeClass('fadeUp');
      }
    });
  }

  $(window).scroll(function () {
    fadeAnime();
  });

  // 初回実行
  fadeAnime();
});
