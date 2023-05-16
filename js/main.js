//메인배너 슬라이드 효과
$(document).ready(function () {
  //사용할 배너
  var $banner = $('.banner').find('ul');

  var $bannerWidth = $banner.children().outerWidth(); //배너 이미지의 폭
  var $bannerHeight = $banner.children().outerHeight(); // 높이
  var $bannerLength = $banner.children().length; //배너 이미지의 갯수
  var rollingId;

  //정해진 초마다 함수 실행
  rollingId = setInterval(function () {
    rollingStart();
  }, 3000); //다음 이미지로 롤링 애니메이션 할 시간차

  function rollingStart() {
    $banner.css('width', '1160px');
    $banner.css('height', $bannerHeight + 'px');
    //alert(bannerHeight);
    //배너의 좌측 위치를 옮겨 준다.
    $banner.animate({ left: '-1160px' }, 180, function () {
      //숫자는 롤링 진행되는 시간이다.
      //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
      $(this).append('<li>' + $(this).find('li:first').html() + '</li>');
      //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
      $(this).find('li:first').remove();
      //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
      $(this).css('left', 0);
      //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
    });
  }
});

//     -->
// 공지사항
let pages = 0; //현재 인덱스 번호
let positionValue = 0; //images 위치값
const IMAGE_WIDTH = 280; //한번 이동 시 IMAGE_WIDTH만큼 이동한다.
//DOM
const backBtn = document.querySelector('.nt_prev');
const nextBtn = document.querySelector('.nt_next');
const images = document.querySelector('.nt_wrapper');

function next() {
  if (pages < 3) {
    backBtn.removeAttribute('disabled'); //뒤로 이동해 더이상 disabled가 아니여서 속성을 삭제한다.
    positionValue -= IMAGE_WIDTH; //IMAGE_WIDTH의 증감을 positionValue에 저장한다.
    images.style.transform = `translateX(${positionValue}px)`;
    //x축으로 positionValue만큼의 px을 이동한다.
    pages += 1; //다음 페이지로 이동해서 pages를 1증가 시킨다.
  }
  if (pages === 3) {
    //
    nextBtn.setAttribute('disabled', 'true'); //마지막 장일 때 next버튼이 disabled된다.
  }
}

function back() {
  if (pages > 0) {
    nextBtn.removeAttribute('disabled');
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    pages -= 1; //이전 페이지로 이동해서 pages를 1감소 시킨다.
  }
  if (pages === 0) {
    backBtn.setAttribute('disabled', 'true'); //마지막 장일 때 back버튼이 disabled된다.
  }
}

function init() {
  //초기 화면 상태
  backBtn.setAttribute('disabled', 'true'); //속성이 disabled가 된다.
  backBtn.addEventListener('click', back); //클릭시 다음으로 이동한다.
  nextBtn.addEventListener('click', next); //클릭시 이전으로 이동한다.
}
init();
