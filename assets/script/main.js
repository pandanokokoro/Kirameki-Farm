// ハンバーガー
$(".hamburger-button").on("click", function() {
    $(".nav__group").toggleClass("nav__group-active");
});

// 画面幅を変更したときにメニューを閉じる
$(window).on('resize', function() {
    $(".nav__group").removeClass("nav__group-active");
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
