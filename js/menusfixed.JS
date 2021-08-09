$(document).ready(function() {

var menuFixed = $('#menuFixed');

$(window).on('scroll', function (){

    var offSetTop = $('#disclaimer').offset().top;

    if($(window).scrollTop()>=offSetTop/2) {

        menuFixed.css('margin-top', 0)
    }
})

});