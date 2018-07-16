$(function() {
    var ctx = $("#skillsChart");
    Chart.defaults.global.defaultFontFamily = 'Federo, sans-serif';

    var skillsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "Git"],
            datasets: [{
                label: 'language experience(%)',
                data: ["92", "92", "85", "88", "90", "90"],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    drawOnChartArea: false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

});