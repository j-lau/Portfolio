jQuery.fn.random = function () {
    var randomIndex = Math.floor(Math.random() * 3);
    return jQuery(this[randomIndex]);
};
var prev;
var timer = window.setInterval(function () {
    if (prev) {
        prev.mouseleave();
    }
    prev = $('.intro-text a').random().mouseenter();
    console.log(prev)
}, 3000);

$('.intro-text a').hover(function () {
    $(this).addClass('hover-rand');
}, function () {
    $(this).removeClass('hover-rand');
})