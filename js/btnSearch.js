function buscarPersona() {
    var cedulaBuscada = document.getElementById("searchPersona").value;
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    var filtrados;
    if (typeof cedulaBuscada === 'string') {
        filtrados = personas.filter(x => x.cedula === cedulaBuscada || x.nombre.includes(cedulaBuscada));
    }
    var personaEncontrada = false;
    for (var i = 0; i < filtrados.length; i++) {
        if (filtrados[i].cedula === cedulaBuscada) {
            personaEncontrada = true;
            resultados.innerHTML = "<table>" +
                "<tr><td>Cédula</td><td>" + filtrados[i].cedula + "</td></tr>" +
                "<tr><td>Nombre</td><td>" + filtrados[i].nombre + "</td></tr>" +
                "<tr><td>Estación</td><td>" + filtrados[i].estacion + "</td></tr>" +
                "<tr><td>Eficiencia hora</td><td>" + filtrados[i].eficienciaHora + "</td></tr>" +
                "</table>";
            break;
        }
    }

    if (!personaEncontrada) {
        resultados.innerHTML = "No se encontraron resultados para la cédula " + cedulaBuscada;
    }
}
