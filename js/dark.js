(function(){       
       
       var checkbox = document.querySelector('input[name=theme]');
        
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
                window.localStorage.setItem('dark', 'true');
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
                window.localStorage.setItem('dark', 'false');
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }

        if(localStorage.getItem('dark') === 'true'){
            document.documentElement.setAttribute('data-theme', 'dark');
            $('input[type="checkbox"]').attr("checked", "checked"); 
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

}())

