(function(){

    // Propiedades de menu movil
    
    
    
    
    
    
    
    
    
    
    
    
    var propMenu = {
    
        menu_logo: document.getElementById('menuFront'),
        slideMenu: document.getElementById('slideMenuFront'),
        menu_activo: false,
        elem_menu: document.querySelectorAll('#slideMenuFront .menu a')
    
    }
    
    // Métodos de menu movil
    
    var metMenu = {
        
        inicio: function () {
            
            propMenu.menu_logo.addEventListener('click', metMenu.toggleMenu);
    
            for (var i = 0; i < propMenu.elem_menu.length; i++) {
                propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
            }
    
        },
    
        toggleMenu: function () {
            if ( propMenu.menu_activo == false ) {
    
                propMenu.menu_activo = true;
                propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
    
            } else{
    
                propMenu.menu_activo = false;
                propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    
            }
        },
    
        ocultarMenu: function () {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        }
    
    }
    
    metMenu.inicio();
    
    
    }())