(function(){       
       
    var checkbox = document.querySelector('input[name=disclaimerTop]');
    var estiloTittle = document.getElementById('tittle');
    var estiloParagraph = document.getElementById('paragraph');
     checkbox.addEventListener('change', function() {
         if(this.checked) {
             trans()
             document.estiloTittle.style.color = '#3535be';
             document.estiloParagraph.style.color = '#3535be';
             estiloParagraph.style.width = '1px';
            
         } else {
             trans()
             return none;
            
         }
     })

     let trans = () => {
         document.documentElement.classList.add('transition');
         window.setTimeout(() => {
             document.documentElement.classList.remove('transition')
         }, 1000)
     }

    

}())