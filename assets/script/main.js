// ハンバーガー
$(".hamburger-button").on("click", function() {
    console.log("run")
    $(".nav__group").fadeToggle(300);
    $(".nav__group").css("display", "flex")
});

// 画面幅を変更したときにメニューを閉じる
$(window).on('resize', function() {
    if ($(window).width() > 767) {
        $('.nav__group').css("display", "none")
    }
});

// アコーディオン
$(".faq__accordion-header").on("click", function () {
    // 現在クリックされたヘッダーのコンテンツをトグルする
    $(this).next(".faq__accordion-content").slideToggle();
    $(this).find(".faq__toggle").toggleClass('active');
});
