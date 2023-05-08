alert('a');

$(function () {
  $('form fieldset article').mouseenter(function () {
    $(this).children('i').stop().slideDown(1); //자식선택하기
    $(this).children('.menu_ops').css('height', '300px'); //자식선택하기
  });

  $('form fieldset article').mouseleave(function () {
    $(this).children('i').stop().slideUp(1);
    $(this).children('.menu_ops').css('height', '0px');
  });

  $('.gold').hide();
  // $('.menu_ops p').click(function (e) {
  //   e.preventDefault();
  //   $(this).siblings('.gold').slideDown(500); //자식선택하기
  // });
  // $('.menu_ops p').dblclick(function (e) {
  //   e.preventDefault();
  //   $(this).siblings('.gold').slideUp(500); //자식선택하기
  // });
  $(function () {
    var isClicked = false;

    $('.menu_ops p').click(function () {
      if (isClicked) {
        e.preventDefault();
        $(this).siblings('.gold').slideDown(500); // 기본값으로 되돌림
      } else {
        e.preventDefault();
        $(this).siblings('.gold').slideUp(500);
      }
      isClicked = !isClicked; // 클릭 여부를 반대로 변경
    });
  });
  $('.menu_ops p').mouseleave(function () {
    $(this).siblings('.gold').slideUp(500); //자식선택하기
  });
});
