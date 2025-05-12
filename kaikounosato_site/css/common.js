$(function() {
  $('.drawer-item>a').click(function() {
    $('#drawer-check').removeAttr('checked').prop('checked', false).change();
  });
});
$(".slick01").slick({
    dots: true,
	autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
	dotsClass: "slide-dots" //ここでclass名を変更する（デフォルトはslick-dots）
  });
$(function () {
  $("slick01").slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024, // 768〜1023px以下のサイズに適用
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


  // ふわっ
 function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-20;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
