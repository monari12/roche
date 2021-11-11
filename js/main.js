// main.js
$(function(){
    // 2단계 메뉴
    $('#gnb .depth1 > li').hover(
        function(){
            $(this).find('.depth2').stop().slideDown();
        },
        function(){
            $(this).find('.depth2').stop().slideUp();
        }
    );

    // 검색창 열기 버튼
    $('#main-header .search > a').click(function(){
        $('#search-popup').show();
    });

    // 검색창 닫기
    $('#btn-close').click(function(){
        $('#search-popup').hide();
    });
})