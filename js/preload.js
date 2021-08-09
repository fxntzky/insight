(function(){

window.addEventListener('load', () => {
    const preloaderTop = document.querySelector('.top');
    preloaderTop.classList.add('preloaderFinishTop');

    const preloaderImg = document.querySelector('.img');
    preloaderImg.classList.add('preloaderImg');

    const preloaderTextTop = document.querySelector('.textTop');
    preloaderTextTop.classList.add('preloaderTextFinishTop');

    const preloaderBottom = document.querySelector('.bottom');
    preloaderBottom.classList.add('preloaderFinishBottom');

});
	
}())