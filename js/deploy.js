document.getElementById('btn-deploy').addEventListener('click', function(){//clase que llama al ícono
    const menu = document.querySelector('.container-deploy'); //esta clase me dejará ver la info que se desplegará
    if(menu.classList.contains('container-deploy-visible')){//me dejará ver el contenido
        menu.classList.remove('container-deploy-visible');
    }else{
        menu.classList.add('container-deploy-visible');
    }
});