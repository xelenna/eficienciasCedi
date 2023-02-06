let html = "";

for(let i = 0; i<30; i++){
    html += ` <li class="empleado">
    <div class="container-card">
        <div id="container-${i}">
        </div>
        <div class="card-right">
            <p id="cedula"><span>Cédula:</span> 1109661451</p>
            <p id="estacion"><span>Estación:</span> 5</p>
            <p id="efiHora"><span>Eficiencia-Hora:</span> 80%</p>

            <!--Deploy-->

            <button id="btn-deploy"><i class="fa-solid fa-arrow-down"></i></button>
        </div>
    </div>
    <div class="container-deploy container-card card-right p span ">
        <p id="nombre"><span>Nombre:</span> Fernando Pérez</p>
        <p id="n_paquetes"><span>Paquetes por hora:</span> 100</p>
        <p id="n_cajas"><span>Leyó Caja:</span> 58</p>
    </div>
</li>`
}

document.querySelector("#lista-empleado").innerHTML = html;