console.log("hello");

$(document).ready(function(){
 $('#open-btn').on('click',function(){
   $('#menu').slideToggle();
 });
});

/*1*/
"use strict";

$(() => {
  // クリックイベントハンドラ
  $(".opensection").on("click", (e) => {
    const $target = $(e.target);
    // $targetから遡って一番近い.accordionを探す
    const $accordion = $target.closest(".accordion");
    // $accordionから子要素の.bodyを探す
    const $accordionBody = $accordion.children(".closesection");

    // ボディが可視状態か判定する
    if ($accordionBody.is(":visible")){
      // 可視状態の場合
      $accordion.removeClass("show");
      $accordionBody.slideUp(220);
    } else {
      // 不可視状態の場合
      $accordion.addClass("show");
      $accordionBody.slideDown(220);
    }
  });
});

/*ボタンでスライドする*/
/*
var images = ['Photo/image1.jpg','Photo/image2.jpg','Photo/image3.jpg'];
var current = 0;
var chageImage = function(num) {
  if(current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('mainphoto').src = images[current];
  }
};

document.getElementById('prev').onclick = function() {
  chageImage(-1);
};

document.getElementById('next').onclick = function() {
  chageImage(1);
};
*/

/*スライドショー*/
(function($){

  $(document).ready(function(){
    var slides = $("#slideshow > li");
    var count = 0;

    function toggle_slide(){
      count = (count + 1) % 3;
      slides.removeClass("current").eq(count).addClass("current");
    }

    setInterval(toggle_slide, 2000);

  });

})(jQuery);
