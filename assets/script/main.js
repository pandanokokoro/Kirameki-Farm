// ハンバーガー
$(".hamburger-button").on("click", function() {
    $(".nav__group").fadeToggle(300);
    $(".nav__group").css("display", "flex")
});

// 画面幅を変更したときにメニューを閉じる
$(window).on('resize', function() {
    if ($(window).width() > 767) {
        $('.nav__group').css("display", "none")
    }
});

// カルーセル
$(".price__gallery-slide").slick({
    autoplay: false,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});

// アコーディオン
$(".faq__accordion-header").on("click", function () {
    // 現在クリックされたヘッダーのコンテンツをトグルする
    $(this).next(".faq__accordion-content").slideToggle();
    $(this).find(".faq__toggle").toggleClass('active');
});
