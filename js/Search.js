document.getElementById("buscador").addEventListener("keyup", buscar);

  
  function buscar() {
    var consulta = document.getElementById("buscador").value;
    
    // Buscar en la fuente de datos y encontrar resultados que coincidan con la consulta de búsqueda
    var resultados = buscarResultadosEnFuenteDeDatos(consulta);
    
    // Mostrar los resultados de la búsqueda en el HTML
    var resultadosHTML = "";
    for (var i = 0; i < resultados.length; i++) {
      resultadosHTML += "<p>" + resultados[i] + "</p>";
    }
    document.getElementById("resultados").innerHTML = resultadosHTML;
  }
  