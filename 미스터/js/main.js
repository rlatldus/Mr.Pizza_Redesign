// $(document).ready(function(){
 //
// var container =$('.slideShow'),
// slideGroup = container.find('.slider'),
// slides = slideGroup.find('a'),
// nav = container.find('.control'),
// indicator = container.find('.indicator'),
// slidesCount = slides.length, //슬라이드 갯수
// indicatorHtml = '',
// currentIndex = 0, //들어가자마자 보여지는 화면 인덱스0
// duration = 500, //시간
// easing ='easeInOutExpo',
// interval = 3500, //3.5초
// timer;

// // 
// // 슬라이드 가로로 배열
// // slides 마다 할 일, left값 0%,100%,200%..
// console.log(slides);
// slides.each(function(i){
// // 
//     var newLeft = i*100 +'%';
//     $(this).css({left:newLeft});
//     // var i = 2; i +2; ==> i+=2;
//     // indicatorHtml = indicatorHtml +??
//     // indicatorHtml += +??
// // 
//     indicatorHtml += '<a href="">'+(i+1)+'</a>';
//     // console.log(indicatorHtml);
//   // 
//   }); //slides.each
//   // A.text(B); a요소의 b의 내용을 글씨 형태로 추가
//   // A.html(B); a요소의 b의 내용을 html 형태로 추가
// indicator.html(indicatorHtml);
// // 
// // var newContent = '<a href="">더 보기</a>';
// // $target.text(newContent);
// // 
// // 슬라이드 이동함수
// function goToSlide(index){
//                 slideGroup.animate({ left: -100 * index + '%' },
//                     duration, easing);
//                 currentIndex = index;

// 								updateNav(); //처음인지 마지막인지 구분
//             }
// 						function updateNav(){
// 							var navPrev = nav.find('.prev');
// 							var navNext = nav.find('.next');
// 							// 처음이라면 currenIndex 번호가 0
// 							// true라면 이전 버튼이 안보여야 함.
// 							if(currentIndex == 0){
// 							navPrev.addClass('disabled');
// 							}else{
// 							navPrev.removeClass('disabled');
// 							}
// 							if(currentIndex == slidesCount -1){
// 							navNext.addClass('disabled');
// 							}else {
// 								navNext.removeClass('disabled');
// 							}
// 							// 마지막이라면 currenIndex 번호가 2
// 							// true라면 다음 버튼이 안보여야 함.
// 						}

//             // 인디케이터
//             indicator.find('a').click(function(e) {
//                 e.prevenDefault();
//                 var idx = $(this).index();
//                 console.log(idx);
//                 goToSlide(idx);
//             });

// // 좌우버튼 이동
// // prev클릭 c-1
// nav.find('a').click(function(e){
// e.prevenDefault(); //기본 기능 막기
// // var i = currentIndex -1;
// // goToSlide(i);
// // });
// // next클릭 c+1 -> goToSlide(?);
// // nav.find('.next').click(function(){
//   // e.prevenDefault(); //기본 기능 막기
//   // var i = currentIndex +1;
//   // goToSlide(i); //i에 위 함수 넣어도 됨.
//   // });

// if($(this).hasClass('prev')){
//   goToSlide(currentIndex -1);
// }else {
//   goToSlide(currentIndex +1);
// }

//         });
// 				// updateNav();
//       });


/* // 메인배너
var mbNum = $('.slider li').length;
if (mbNum > 1) {
	$('.slider > ul').bxSlider({
		auto : true,
		autoHover : true,
		autoControls : true,
		autoControlsCombine : true,
		pause : 6000,
		startText : '시작',
		stopText : '정지',
		prevText : '이전',
		nextText : '다음',
		onSliderLoad : function($slideElement) {
			$('.slider_txt').css('display', 'block').animate({
				'left' : '80'
			}, 1000, 'easeOutQuad');
		},
		onSlideAfter : function($slideElement) {
			$('.slider_txt').stop().animate({
				'left' : '80'
			}, 1000, 'easeOutQuad');
		},
		onSlideNext : function($slideElement) {
			$('.slider_txt').stop().animate({
				'left' : '30'
			}, 100);
		},
		onSlidePrev : function($slideElement) {
			$('.slider_txt').stop().animate({
				'left' : '130'
			}, 100);
		}
	});
}
var mfNum = $('.main_fade li').length;
if (mfNum > 1) {
	$('.main_fade > ul').bxSlider({
		mode : 'fade',
		auto : true,
		autoHover : true,
		autoControls : true,
		autoControlsCombine : true,
		pause : 6000,
		startText : '시작',
		stopText : '정지',
		controls : false
	});
}
$('.main_campaign > ul').bxSlider({
	mode : 'fade',
	auto : true,
	autoHover : true,
	autoControls : true,
	autoControlsCombine : true,
	pause : 6000,
	startText : '시작',
	stopText : '정지',
	controls : false
});
PopLogin Enter Key Event
$("ul.pop_login input").keyup(function(e) {
	if (e.keyCode == '13') {
		onPopLogin();
	}
});
getLogin(); //cookie Check*/

// var slides = document.querySelector('.swiper-wrapper'),
// slide = document.querySelectorAll('.swiper-wrapper li.swiper-slide')
// currenIdx = 0;
// slideCount = slide.length,
// slideWidth =222,
// slideMargin=30,
// prevBtn = document.querySelector('.btn_prev'),
// nextBtn = document.querySelector('.btn_next');

// makeClone();
// function makeClone(){
// 	for(var i=0; i<slidesCount; i++){
// 		// a.cloneNode(),a.cloneNode(true)
// 		var cloneSlide = slide[i].cloneNode(true);
// 		cloneSlide.classList.add('clone');
// 		//a.appendChild(b)
// 		slides.appendChild(cloneSlide);
// 	}
// }

//변수지정
// var sliderWrapper = document.getElementsByClassName('container'), //클래스명
// sliderContainer = document.getElementsByClassName('slider-container'), //클래스명
// slides =document.getElementsByClassName('slide'); //클래스명
// slideCount =slides.lenght, //슬라이드갯수

// currrenIndex = 0,
// topHeight = 0,
// navPrev = document.getElementById('prev')//ID prev
// navNext = document.getElementById('next')//ID Next


// // console.log(slidesCount);

// //슬라이드 높이 확인하여 부모의 높이로 지정하기
// // topHeight = slides[0].offsetHeight;
// // console.log(topHeight);
// function calculateTallerstSlde(){

// 	for(var i = 0; i<slideCount; i++){
// 		if(slides[i].offsetHeight > topHeight){
// topHeight = slides[i].offsetHeight;
// 		}
// 	}
// 	sliderWrapper[0].style.height = topHeight+'px';
// 	sliderContainer[0].style.height = topHeight;+'px';
// }

// calculateTallerstSlde();

// // 슬라이드가 있으면 가로로 배열
// for(var i=0; i<slideCount; i++){
// 	slider[i].style.left = i*100+'%';
// }
// function goToSlide(idx){
// 	sliderContainer[0].style.left = idx *-100 +'%';
// 	currrenIndex = idx;
// }
$(document).ready(function() {
	//사용할 배너
	var $banner = $(".banner").find("ul");

	var $bannerWidth = $banner.children().outerWidth();//배너 이미지의 폭
	var $bannerHeight = $banner.children().outerHeight(); // 높이
	var $bannerLength = $banner.children().length;//배너 이미지의 갯수
	var rollingId;

	//정해진 초마다 함수 실행
	rollingId = setInterval(function() { rollingStart(); }, 3000);//다음 이미지로 롤링 애니메이션 할 시간차

	//마우스 오버시 롤링을 멈춘다.
	banner.mouseover(function(){
		//중지
		clearInterval(rollingId);
		$(this).css("cursor", "pointer");
	});
	//마우스 아웃되면 다시 시작
	banner.mouseout(function(){
		rollingId = setInterval(function() { rollingStart(); }, 9000);
		$(this).css("cursor", "default");
	});
	
	function rollingStart() {
		$banner.css("width", $bannerWidth * $bannerLength + "px");
		$banner.css("height", $bannerHeight + "px");
		//alert(bannerHeight);
		//배너의 좌측 위치를 옮겨 준다.
		$banner.animate({left: - $bannerWidth + "px"},180, function() { //숫자는 롤링 진행되는 시간이다.
			//첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
			$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
			//뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
			$(this).find("li:first").remove();
			//다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
			$(this).css("left",0);
			//이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
		});
	}
}); 

//마우스 오버시 롤링을 멈춘다.
$banner.mouseover(function(){
	//중지
	clearInterval(rollingId);
	$(this).css("cursor", "pointer");
});
//마우스 아웃되면 다시 시작
$banner.mouseout(function(){
	rollingId = setInterval(function() { rollingStart(); }, 9000);
	$(this).css("cursor", "default");
});

//-->  

// 혜택 공간 슬라이드

// --


// 메인 레이어팝업
