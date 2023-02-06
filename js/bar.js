// let efiTurno;
// let listaUsuariosEfi;
// fetch('../api/eficiencias.json')
// .then(response => response.json())  // convertir a json
// .then(json => {
//     document.getElementById("cedula").innerHTML= json['cedula'];
//     document.getElementById("estacion").innerHTML= json['estacion'];
//     document.getElementById("efiHora").innerHTML= json['efiHora']; 
//     document.getElementById("nombre").innerHTML= json['nombre'];document.getElementById("cedula").innerHTML= json['cedula'];
//     document.getElementById("paquetes").innerHTML= json['estacion'];
//     document.getElementById("cajas").innerHTML= json['cajas'];
    
//     efiTurno = json['efiTurno']
// }
// )

var bar = new ProgressBar.Circle("#container", {
    color: 'black',
    strokeWidth: 16,
    
    trailWidth: 9,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 8 },
    to: { color: '#38b6ff', width: 11 },
   
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      } 
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(0.7);  

