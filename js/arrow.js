$(document).ready(function () {

    // Mostrar y ocultar botón "Volver arriba"
  
    var arrow = $('#arrow');
  
    $(window).on('scroll', function () {
  
      var newsOffsetTop = $('#news').offset().top;
  
      if ($(window).scrollTop() >= newsOffsetTop) {
  
        arrow.css('margin-right', 0);
  
      }else if ($(window).scrollTop() <= newsOffsetTop) {
  
        arrow.css('margin-right', '-120px');
  
      }
  
    })
  
    var arrow = $('#arrow');
    
    arrow.on('click', function (e){
        e.preventDefault();
    
    if ($(window).scrollTop() !=0) {
        $('html,body').animate({scrollTop: 0}, 1500);
    
    }
    
    })
    
    });