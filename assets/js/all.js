"use strict";

$(function () {
  $('.problem-box1').click(function () {
    $('.problem-content1').toggle();
    $('.problem-title1').toggleClass('active');
    $('img', this).toggle();
  });
  $('.problem-box2').click(function () {
    $('.problem-content2').toggle();
    $('.problem-title2').toggleClass('active');
    $('img', this).toggle();
  });
  $('.problem-box3').click(function () {
    $('.problem-content3').toggle();
    $('.problem-title3').toggleClass('active');
    $('img', this).toggle();
  });
});

function gototop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
//# sourceMappingURL=all.js.map
