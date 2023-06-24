//팝업창 열고 닫기 시작 --
$(function () {
  $('#pop_close').click(function () {
    $('#todayPop').hide();
  });

  $('#pop_close2').click(function () {
    $('#todayPop2').hide();
  });
});
// 팝업창 열고 닫기 종료 --//
$(function () {
  // 이벤트당첨자 팝업    //
  var getCookie = function (cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
  };

  // 24시간 기준 쿠키 설정하기
  var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
    document.cookie = cname + '=' + cvalue + '; ' + expires;
  };
  var couponClose = function () {
    if ($("input[name='todayChk2']").is(':checked') == true) {
      //오늘하루동안보지않기 name
      setCookie('pop_close2', 'Y', 1); //기간( ex. 1은 하루, 7은 일주일) 닫기 버튼 id
    }
    $('#todayPop2').hide(); //전체를 감싸는 요소가 숨겨짐
  };

  $(document).ready(function () {
    var cookiedata = document.cookie;
    if (cookiedata.indexOf('pop_close2=Y') < 0) {
      $('#todayPop2').show();
    } else {
      $('#todayPop2').hide();
    }
    $('#pop_close2').click(function () {
      couponClose();
    });
  });
});

//이벤트 당첨자 팝업 끝 ----//




//오늘 하루 동안 다시 보지 않기 ------------//

// 창업안내 팝업 영역
// 쿠키 가져오기
$(function () {
  var getCookie = function (cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
  };

  // 24시간 기준 쿠키 설정하기
  var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
    document.cookie = cname + '=' + cvalue + '; ' + expires;
  };
  var couponClose = function () {
    if ($("input[name='todayChk']").is(':checked') == true) {
      //오늘하루동안보지않기 name
      setCookie('pop_close', 'Y', 1); //기간( ex. 1은 하루, 7은 일주일) 닫기 버튼 id
    }
    $('#todayPop').hide(); //전체를 감싸는 요소가 숨겨짐
  };

  $(document).ready(function () {
    var cookiedata = document.cookie;
    if (cookiedata.indexOf('pop_close=Y') < 0) {
      $('#todayPop').show();
    } else {
      $('#todayPop').hide();
    }
    $('#pop_close').click(function () {
      couponClose();
    });
  });
  // 창업안내 팝업 끝 -----//
});


