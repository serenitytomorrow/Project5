$(function() {
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function() {
        $("#carouselButton span").toggleClass("fa-pause fa-play");
        $("#carouselButton span").hasClass("fa-pause") ? $("#mycarousel").carousel('cycle') : $("#mycarousel").carousel('pause');
    });
});