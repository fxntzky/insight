$(document).ready(function (){

    var scroll = $('#scroll');
    
    scroll.on('click', function (e){
        e.preventDefault();
    
    if ($(window).scrollTop() !=0) {
        $('html,body').animate({scrollTop: 0}, 1500);
    
    }
    
    })
    
    });