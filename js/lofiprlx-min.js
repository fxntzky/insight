!function(){var o={seccion:document.querySelector(".lofi"),recorrido:null,limite:null},i={inicio:function(){window.addEventListener("scroll",i.scrollParallax)},scrollParallax:function(){o.recorrido=window.pageYOffset,o.limite=o.seccion.offsetTop+o.seccion.offsetHeight,o.recorrido>o.seccion.offsetTop-window.outerHeight&&o.recorrido<=o.limite?o.seccion.style.backgroundPositionY=(o.recorrido-o.seccion.offsetTop)/1.8+"px":o.seccion.style.backgroundPositionY=0}};i.inicio()}();