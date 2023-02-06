
// Menú
document.getElementById('btn-menu').addEventListener('click', function(){
    const menu = document.querySelector('.menu');
    if(menu.classList.contains('menu-visible')){
        menu.classList.remove('menu-visible');
    }else{
        menu.classList.add('menu-visible');
    }
});



