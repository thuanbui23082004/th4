$(document).ready(() => {
    $("span.bt1").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });

    $(".bt2 span").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings().hide();
        } else {
            $(this).addClass("active");
            $(this).siblings().show();
        }
    });
    $("li").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    });
    $("button").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings().hide();
        } else {
            $(this).addClass("active");
            $(this).siblings().show();
        }
    });
    $(".img__item").click(function () {
        const link = $(this).attr("src");
        $(".img__main").attr("src", link);
    });
});
