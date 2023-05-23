$(function () {

  //NOTE - 호버 시 피자 옵션 나옴 // 이거 맨 밑이랑 연결하기
  $('form fieldset article').mouseenter(function () {
    if($(this).children('.menu_ops').css('top') !== '20px'){
    $(this).children('i').stop().slideDown(1); //
    $(this).children('.menu_ops').css('height', '300px') // 실행
  };
  });

  $('form fieldset article').mouseleave(function () {
    if($(this).children('.menu_ops').css('top') !== '20px'){
    $(this).children('i').stop().slideUp(1);
    $(this).children('.menu_ops').css('height', '0px');
    }
  });

  if($('.menu_ops').css('top') == '20px'){
    $('.menu_ops')
    .show()
  }

  // 골드 메뉴 클릭 시 메뉴 나옴
  $('.gold').hide();
  
  $('.menu_ops p').each(function(){ 
    let isClicked = true;
    const gold = $(this).siblings('.gold');

    $(this).click(function (e) {
      e.preventDefault();
      isClicked ?  gold.stop().slideDown(500) : gold.stop().slideUp(500);
      isClicked = !isClicked;
    });
    $(this).siblings('.gold').mouseleave( function() {
      gold.stop().slideUp(500);
      isClicked = !isClicked;
    });
  });

//미리보기, 장바구니, 바로주문
  $('.menu_btn').each(function(){
    
    const origin= function () { // 기본값으로 되돌림
      $(this)
      .css('background', 'none')
      .css('text-indent', '0')
      .css('border', '2px solid #cb1919')
      .css('background-repeat', 'no-repeat')
      .css('background-position', ' center center')
    }
    const redColer = function () {//레드컬러로 수정
      $(this)
      .css(
        'background',
        `url(https://cdn.mrpizza.co.kr/2014_resources/images/product/ic_${$(this).attr("id")}.gif)`
      )
      .css('text-indent', '-9999em')
      .css('border', '1px solid #cccccc')
      .css('background-repeat', 'no-repeat')
      .css('background-position', ' center center')
      console.log($(this).attr("id"));
    }
    $(this).find('#memu01').hover(origin, redColer);
    $(this).find('#memu02').hover(origin, redColer);
    $(this).find('#memu03').hover(origin, redColer);
  })
  
  //FIXME -   나중에 좀 더 수정할것
// 클릭시 이미지 변경
  $('.option1').click(function (e) {
    e.preventDefault();
    $('article img.pizza1 ').attr('src', 'image/2023314151710070.jpg');
  });
  $('.option2').click(function (e) {
    e.preventDefault();
    $('article img.pizza1 ').attr('src', 'imge/20233141521172.jpg');
  });
  $('.option3').click(function (e) {
    e.preventDefault();
    $('article img.pizza1 ').attr('src', 'imge/2023314142859082.jpg');
  });
  $('.option4').click(function (e) {
    e.preventDefault();
    $('article img.pizza1 ').attr('src', 'imge/2023314153028392.jpg');
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

  // 메뉴 호버시 서브메뉴
  $('ul#main li').hover(
    function() {
      setTimeout(() => {
        $(this).find('li').stop().fadeIn(300);
      }, 300);
    },
    function() {
      setTimeout(() => {
      $(this).find('li').stop().fadeOut(300);
    }, 300);
    }
  );

    // 모바일 상단 메뉴 클릭 시 이미지 띄우기
$('.btn_gnb').click(function () {
  if ($('#left').css('left') === '0px') {
    $('#left').animate({ left: '-700px' }, 1000);
  } else {
    $('#left').animate({ left: '0' }, 'fast');
  }
});

//left 스크롤
const element = $('#left section')[0];
const computedStyle = window.getComputedStyle(element);
const topValue = computedStyle.getPropertyValue('top');

const screenHeight = window.innerHeight;
const currentPosition = parseInt($("#left section").css("top"));

$(window).scroll(function(){
  const position = $(window).scrollTop();
  $("#left section").stop().animate({"top":position+currentPosition+"px"},500); // 탑이 현제left와 스크롤 높이 합
  if( topValue>screenHeight){
    topValue=screenHeight;
    console.log(topValue);
  }
  
})




});
