function deploy(e) {
    var id = e.target.getAttribute("id");
    var contenedor = document.getElementById("c" + id);
    if (contenedor.classList.contains('container-deploy-visible')) {
        contenedor.classList.remove('container-deploy-visible');
    } else {
        contenedor.classList.add('container-deploy-visible');
    }
}

function drawCard(pCedula, pEstacion, pEfiHora, pEfiTurno) {

    var listaEmpleados, empleados, containerCard, cedula, containerDaddy, progresBar, span, cardRight,
        estacion, spanEstacion, efiHora, spanEfiHora, btnDeploy, iBtn, containerDeploy,
        dCedula, dCedulaSpan, dEstacion, dEstacionSpan, dEfiHora, dEfiHoraSpan,
        vEstacion, vCedula, vEfiTurno, vEfiHora;

    for (var i = 0; i < pCedula.length; i++) {

        vEstacion = "Estación" + pEstacion[i];
        vCedula = pCedula[i];
        vEfiTurno = pEfiTurno[i];
        vEfiHora = pEfiHora[i].toFixed(2) + '%';

        // if(vEfiTurno < 20){
        //    width: 20 
        // }else {
        //     width: vEfiTurno
        // }
        

        
        //Le proporcionamos el color a cada eficiencia
        if (vEfiTurno >= 0 && vEfiTurno <= 60) {
            estiloBarra = "width: " + `${vEfiTurno < '20' ? '20' : vEfiTurno}` + "%" + ";background-color: #DB2B30"
        } else if (vEfiTurno > 60 && vEfiTurno <= 85) {
            estiloBarra = "width: " + vEfiTurno + "%" + ";background-color: #F2E963"
        } else if (vEfiTurno > 85 && vEfiTurno <= 120) {
            estiloBarra = "width: " + vEfiTurno + "%" + ";background-color:#32CC1A"
        } else {
            estiloBarra = "width: " + vEfiTurno + "%" + ";background-color:#2C89CC"
        }


        listaEmpleados = document.getElementsByClassName('lista-empleados');

        empleados = document.createElement("div");

        /*crear elementos html de la tarjeta principal*/
        containerCard = document.createElement("div");
        cedula = document.createElement("p");
        containerDaddy = document.createElement("div");
        cardRight = document.createElement("div");
        progresBar = document.createElement("div");
        estacion = document.createElement("p");
        efiHora = document.createElement("p");
        btnDeploy = document.createElement('button');
        iBtn = document.createElement('i');
        span = document.createElement("span");
        spanEstacion = document.createElement("span");
        spanEfiHora = document.createElement("span");
        
        empleados.classList.add("empleado");
        containerCard.classList.add("container-card");
        cedula.setAttribute("id", "cedula");
        containerDaddy.classList.add("container-dady");
        cardRight.classList.add("card-rigth");
        cardRight.setAttribute("id", "prueba");
        progresBar.setAttribute("id", "progressBar");
        progresBar.setAttribute("style", estiloBarra);
        progresBar.insertAdjacentHTML("afterbegin", vEfiTurno + '%')
        estacion.setAttribute("id", "estacion");
        efiHora.setAttribute("id", "efiHora");
        btnDeploy.classList.add("btn-deploy");
        btnDeploy.addEventListener("click", deploy);
        btnDeploy.setAttribute("style", "background-color: transparent;cursor:pointer;border:none;font-size:25px");
        span.insertAdjacentHTML("afterbegin", vEstacion);
        spanEstacion.insertAdjacentHTML("afterbegin", vCedula);
        spanEfiHora.insertAdjacentHTML("afterbegin", "Eficiencia-Hora " + vEfiHora);
        iBtn.classList.add("fa-solid", "fa-chevron-down");
        iBtn.setAttribute("id", i);

        /*Crear elementos del Deploy*/
        containerDeploy = document.createElement("div");
        dCedula = document.createElement("p");
        dEstacion = document.createElement("p");
        dEfiHora = document.createElement("p");
        dCedulaSpan = document.createElement("span");
        dEstacionSpan = document.createElement("span");
        dEfiHoraSpan = document.createElement("span");

        containerDeploy.classList.add("container-deploy", "container-card", "card-right", "p", "span");
        containerDeploy.setAttribute("id", "c" + i)
        dCedula.setAttribute("id", "cedula");
        dCedulaSpan.insertAdjacentHTML("afterbegin", "Nombre:");
        dCedulaSpan.insertAdjacentHTML("beforeend", "Fernando Perez");
        dEstacion.setAttribute("id", "estacion");
        dEstacionSpan.insertAdjacentHTML("afterbegin", "Unidades Impresas:");
        dEstacionSpan.insertAdjacentHTML("beforeend", "100");
        dEfiHora.setAttribute("id", "efiHora");
        dEfiHoraSpan.insertAdjacentHTML("afterbegin", "Unidades Reimpresas:");
        dEfiHoraSpan.insertAdjacentHTML("beforeend", "58");
        estacion.appendChild(spanEstacion);
        efiHora.appendChild(spanEfiHora);
        btnDeploy.appendChild(iBtn);
        cardRight.appendChild(estacion)
        cardRight.appendChild(efiHora);
        cardRight.appendChild(btnDeploy);
        cedula.appendChild(span);
        containerDaddy.appendChild(progresBar)
        containerCard.appendChild(cedula);
        containerCard.appendChild(containerDaddy);
        containerCard.appendChild(cardRight);

        dCedula.appendChild(dCedulaSpan);
        dEstacion.appendChild(dEstacionSpan);
        dEfiHora.appendChild(dEfiHoraSpan);
        containerDeploy.appendChild(dCedula);
        containerDeploy.appendChild(dEstacion);
        containerDeploy.appendChild(dEfiHora);

        empleados.appendChild(containerCard);
        empleados.appendChild(containerDeploy);
        listaEmpleados[0].appendChild(empleados);
    }
}

var area = window.location.href.split('/')[3]

area = area.split('.')[0];

if (area == "E_Amigable") {
    area = "Entrega Amigable"
}

let request =
{
    area: area,
};

console.log(request)
let options =
{
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(request),
};

fetch('http://10.40.16.22:5000', options)
    .then(resp => resp.json())
    .then(data => {
        document.querySelector(".container-spinkit").remove();
        drawCard(data['cedula'], data['estacion'], data['eficienciaHora'], data['eficienciaTurno']);
    })