/*let request = 
{area:'Preimpresion',
};
let options = 
{
method: 'POST',
headers:{'Content-Type': 'application/json',},
body: JSON.stringify(request),
};

fetch('http://10.40.81.101:5000',options)
.then(resp => resp.json())
.then(data =>
{
    console.log(data);
})*/

var tarjeta = 
'<div class="container-card">'
'<p id="cedula"><span> Estación 5</span></p>'+
'<div class="container-dady">'+
'<div id="progressBar">'+
'</div>'+
'</div>'+
'<div class="card-right" id ="prueba">'+
'<p id="estacion"><span>#CEDULA#</span></p>'+
'<p id="efiHora"><span>Eficiencia-Hora</span> #EFIHORA#%</p>'+
'<button id="btn-deploy"><i class="fa-solid fa-chevron-down"></i></button>'+
'</div>'+
'</div>'+
'</div>';

tarjeta = tarjeta.replace('#CEDULA#','1193031578');
tarjeta = tarjeta.replace('#EFIHORA#','80')
const div = document.querySelector(".empleado");
div.innerHTML =tarjeta;