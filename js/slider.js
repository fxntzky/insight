(function(){

	//SLIDER PROPPETY
	
	var propSlider = {
	
		slider: document.getElementById('slider'),
		primerSlide: null
	
	}
	
	//SLIDER METHODS
	
	var metSlider = {
	
		inicio: function(){
			setInterval(metSlider.moverSlide,5000);
		},
		moverSlide: function(){
			propSlider.slider.style.transition = 'all 2s ease';
			propSlider.slider.style.marginLeft = '-100%';
	
			setTimeout(function(){
				propSlider.primerSlide = propSlider.slider.firstElementChild;
	
				propSlider.slider.appendChild(propSlider.primerSlide)
	
				propSlider.slider.style.transition = 'unset';
				propSlider.slider.style.marginLeft = 0;
	
				
			}, 2000);
	
	
	
		}
	}
	
	metSlider.inicio();
	
	}())
	