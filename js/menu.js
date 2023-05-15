// alert('a');

$(function () {
  //NOTE - 호버 시 이미지 나옴
  $('form fieldset article').mouseenter(function () {
    $(this).children('i').stop().slideDown(1); //자식선택하기
    $(this).children('.menu_ops').css('height', '300px'); //자식선택하기
  });

  $('form fieldset article').mouseleave(function () {
    $(this).children('i').stop().slideUp(1);
    $(this).children('.menu_ops').css('height', '0px');
  });

  $('.gold').hide();
  $('.menu_ops p').click(function (e) {
    e.preventDefault();
    $(this).siblings('.gold').slideDown(500); //자식선택하기
  });
  $('.menu_ops p').dblclick(function (e) {
    e.preventDefault();
    $(this).siblings('.gold').slideUp(500); //자식선택하기
  });
});

$(function () {
  let isClicked = true;

  $('.menu_ops p').click(function (e) {
    e.preventDefault();
    if (isClicked) {
      $(this).siblings('.gold').stop().slideDown(500); // 기본값으로 되돌림
    } else {
      $(this).siblings('.gold').stop().slideUp(500);
    }
    isClicked = !isClicked; // 클릭 여부를 반대로 변경
  });
});
$('.menu_ops p').mouseleave(function () {
  $(this).siblings('.gold').slideUp(500); //자식선택하기
});

$(function () {
  $('.menu_btn ul li .aaa').hover(
    function () {
      $('.menu_btn ul li .aaa').css('background', 'none'); // 기본값으로 되돌림
      $('.menu_btn ul li .aaa').css('text-indent', '0');
      $('.menu_btn ul li .aaa').css('border', '2px solid #cb1919');
      $('.menu_btn ul li .aaa').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .aaa').css('background-position', ' center center');
    },
    function () {
      $('.menu_btn ul li .aaa').css(
        'background',
        'url(https://cdn.mrpizza.co.kr/2014_resources/images/product/ic_memu01.gif)'
      ); // 기본값으로 되돌림
      $('.menu_btn ul li .aaa').css('text-indent', '-9999em');
      $('.menu_btn ul li .aaa').css('border', '1px solid #cccccc');
      $('.menu_btn ul li .aaa').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .aaa').css('background-position', ' center center');
    }
  );
});

$(function () {
  $('.menu_btn ul li .b').hover(
    function () {
      $('.menu_btn ul li .b').css('background', 'none'); // 기본값으로 되돌림
      $('.menu_btn ul li .b').css('text-indent', '0');
      $('.menu_btn ul li .b').css('border', '2px solid #cb1919');
      $('.menu_btn ul li .b').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .b').css('background-position', ' center center');
    },
    function () {
      $('.menu_btn ul li .b').css(
        'background',
        'url(https://cdn.mrpizza.co.kr/2014_resources/images/product/ic_memu02.gif)'
      ); // 기본값으로 되돌림
      $('.menu_btn ul li .b').css('text-indent', '-9999em');
      $('.menu_btn ul li .b').css('border', '1px solid #cccccc');
      $('.menu_btn ul li .b').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .b').css('background-position', ' center center');
    }
  );
});

$(function () {
  $('.menu_btn ul li .c').hover(
    function () {
      $('.menu_btn ul li .c').css('background', 'none'); // 기본값으로 되돌림
      $('.menu_btn ul li .c').css('text-indent', '0');
      $('.menu_btn ul li .c').css('border', '2px solid #cb1919');
      $('.menu_btn ul li .c').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .c').css('background-position', ' center center');
    },
    function () {
      $('.menu_btn ul li .c').css(
        'background',
        'url(https://cdn.mrpizza.co.kr/2014_resources/images/product/ic_memu03.gif)'
      ); // 기본값으로 되돌림
      $('.menu_btn ul li .c').css('text-indent', '-9999em');
      $('.menu_btn ul li .c').css('border', '1px solid #cccccc');
      $('.menu_btn ul li .c').css('background-repeat', 'no-repeat');
      $('.menu_btn ul li .c').css('background-position', ' center center');
    }
  );
});

//FIXME -   나중에 좀 더 수정할것
$('.option1').click(function (e) {
  e.preventDefault();
  $('article img.pizza1 ').attr('src', 'imge/../image/2023314151710070.jpg'); // 기본값으로 되돌림
});
$('.option2').click(function (e) {
  e.preventDefault();
  $('article img.pizza1 ').attr('src', 'imge/20233141521172.jpg'); // 기본값으로 되돌림
});
$('.option3').click(function (e) {
  e.preventDefault();
  $('article img.pizza1 ').attr('src', 'imge/2023314142859082.jpg'); // 기본값으로 되돌림
});
$('.option4').click(function (e) {
  e.preventDefault();
  $('article img.pizza1 ').attr('src', 'imge/2023314153028392.jpg'); // 기본값으로 되돌림
});

$('ul#main li').hover(
  function () {
    $(this).children('ul').css('z-index', '20');
    $(this).children('ul li').css('border', '2px solid red');
  },
  function () {
    $(this).children('ul').css('z-index', '0');
  }
);

$('ul.sub').css('display', 'none');

$('ul#main li').hover(function () {
  $('ul.sub li').css('display', 'none');
});
// 상단 메뉴 클릭 시 이미지 띄우기
$('.btn_gnb').click(function () {
  if ($('#left').css('left') === '0px') {
    $('#left').animate({ left: '-600px' }, 1000);
  } else {
    $('#left').animate({ left: '0' }, 'fast');
  }
});
