let progressBar = document.querySelector("#progressBar");

function updateProgress(percent) {
  progressBar.style.width = percent + "%";
  progressBar.textContent = percent + "%";
}

updateProgress(50); // Actualiza la barra de progreso al 50%
