//Menú hamburguesa


document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("show-menu").classList.toggle('show-lateral');
}