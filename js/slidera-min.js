!function(){var e={slider:document.getElementById("sliderA"),primerSlide:null},i={inicio:function(){setInterval(i.moverSlide,4e3)},moverSlide:function(){e.slider.style.transition="all 2s ease",e.slider.style.marginLeft="-100%",setTimeout((function(){e.primerSlide=e.slider.firstElementChild,e.slider.appendChild(e.primerSlide),e.slider.style.transition="unset",e.slider.style.marginLeft=0}),2e3)}};i.inicio()}();