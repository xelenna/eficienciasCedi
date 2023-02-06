var data = [60, 78, 90, 45]; //porcentaje de cada área
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Entrega Amigable", "PreImpresión", "Islas", "Muleros"],
        datasets: [{
            label: '% Eficiencia',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',               
                'rgba(75, 192, 192, 0.6)',            
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255,99,132, 2)',
                'rgba(54, 162, 235, 2)',               
                'rgba(75, 192, 192, 2)',
                'rgba(255, 159, 64, 2)'
            ],
            borderWidth: 2,
            yAxisID: 'y-axis-1'
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                position: 'left',
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%';
                    },
                    min: 0,
                    max: 150,
                }
            }]
        }
    }
});
