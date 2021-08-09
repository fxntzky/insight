(function(){

    const text = document.querySelectorAll('.text');
    
            text.forEach(el => {
                el.addEventListener('click', ()=>{
                    el.classList.toggle('active');
                });
            });
    
    }())