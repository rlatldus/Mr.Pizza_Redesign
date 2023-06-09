//.신규오픈점 슬라이드
$(document).ready(function () {

    var $panel = $(".bxslider").find("ul");

    var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
    var itemLength = $panel.children().length;      // 아이템 수

    // Auto 롤링 아이디
    var rollingId;

    auto();

    // 배너 마우스 오버 이벤트
    $panel.mouseover(function () {
        clearInterval(rollingId);
    });

    // 배너 마우스 아웃 이벤트
    $panel.mouseout(function () {
        auto();
    });

    // 이전 이벤트
    $(".bx-prev").on("click", prev);

    $(".bx-prev").mouseover(function (e) {
        clearInterval(rollingId);
    });

    $(".bx-prev").mouseout(auto);

    // 다음 이벤트
    $(".bx-next").on("click", next);

    $(".bx-next").mouseover(function (e) {
        clearInterval(rollingId);
    });

    $(".bx-next").mouseout(auto);

    function auto() {

        // 2초마다 start 호출
        rollingId = setInterval(function () {
            start();
        }, 50000);
    }

    function start() {
        $panel.css("width", itemWidth * itemLength);
        $panel.animate({ "left": - itemWidth + "px" }, function () {

            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");

            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();

            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }

    // 이전 이벤트 실행
    function prev(e) {
        $panel.css("left", - itemWidth);
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({ "left": "0px" }, function () {
            $(this).find("li:last").remove();
        });
    }

    // 다음 이벤트 실행
    function next(e) {
        $panel.animate({ "right": + itemWidth + "px" }, function () {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});


// 신규오픈점 슬라이드 종료 --//






    // top메뉴
//      TOP 버튼 
// function topBtn() {
//     $('.btn_top').click(function() {
// 		$("html,body").animate( {scrollTop:0 }, 500, 'easeInOutQuart' );
// 		return false;
//     });
// }


//할인이벤트 슬라이드

$(document).ready(function () {
    var $panel = $(".dc_wra").find("ul");
    
    var itemWidth = $panel.children().outerWidth(); // 아이템 가로 길이
    var itemLength = $panel.children().length;      // 아이템 수
    
    // Auto 롤링 아이디
    var rollingId;
    
    auto();
    
    // 배너 마우스 오버 이벤트
    $panel.mouseover(function () {
        clearInterval(rollingId);
    });
    
    // 배너 마우스 아웃 이벤트
    $panel.mouseout(function () {
        auto();
    });
    
    // 이전 이벤트
    $(".dc_btn_prev").on("click", prev);
    
    $(".dc_btn_prev").mouseover(function (e) {
        clearInterval(rollingId);
    });
    
    $(".dc_btn_prev").mouseout(auto);
    
    // 다음 이벤트
    $(".dc_btn_next").on("click", next);
    
    $(".dc_btn_next").mouseover(function (e) {
        clearInterval(rollingId);
    });
    
    $(".dc_btn_next").mouseout(auto);
    
    function auto() {
    
        // 2초마다 start 호출
        // rollingId = setInterval(function () {
        //     start();
        // }, 100000);
    }
    
    function start() {
        $panel.css("width", itemWidth * itemLength);
        $panel.animate({ "left": - itemWidth + "px" }, function () {
    
            // 첫번째 아이템을 마지막에 추가하기
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
    
            // 첫번째 아이템을 삭제하기
            $(this).find("li:first").remove();
    
            // 좌측 패널 수치 초기화
            $(this).css("left", 0);
        });
    }
    
    // 이전 이벤트 실행
    function prev(e) {
        $panel.css("left", + itemWidth);
        $panel.prepend("<li>" + $panel.find("li:last").html() + "</li>");
        $panel.animate({ "left": "0px" }, function () {
            $(this).find("li:last").remove();
        });
    }
    
    // 다음 이벤트 실행
    function next(e) {
        $panel.animate({ "right": - itemWidth + "px" }, function () {
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
        });
    }
});
// 할인이벤트 배너 종료 -- //


    // top메뉴
//      TOP 버튼 
// function topBtn() {
//     $('.btn_top').click(function() {
// 		$("html,body").animate( {scrollTop:0 }, 500, 'easeInOutQuart' );
// 		return false;
//     });
// }
