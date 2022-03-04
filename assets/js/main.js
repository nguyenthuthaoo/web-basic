$(window).scroll(function() {
    if ($(document).scrollTop()) {
        $(".header").addClass("sticky");
    } else {
        $(".header").removeClass("sticky");
    }
});