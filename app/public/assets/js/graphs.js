$(function() {
    var controls = $("#productiveChart");
    var interests = $("#interestsChart");
    Chart.defaults.global.defaultFontFamily = 'Federo, sans-serif';

    var thingsIdoChart = new Chart(controls, {
        type: 'pie',
        data: {
            labels: ["Working at Coffee Shops", "Looking for New Coffee Shops", "Drinking Tea", "Watching Tutorials", "Writing & Sketching"],
            datasets: [{
                label: 'doing things(%)',
                data: ["35", "10", "30", "15", "10"],
                backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    drawOnChartArea: false,
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            plugins: {
                deferred: {
                    delay: 2,
                    yOffset: 200,
                }
            }
        }
    });

    var funChart = new Chart(interests, {
        type: 'pie',
        data: {
            labels: ["Staring at amusing memes/gifs", "Mountain Activities", "Watching Baking Championships", "Ping Pong", "Long Distance Running"],
            datasets: [{
                label: 'doing fun things(%)',
                data: ["20", "20", "25", "15", "20",],
                backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: {
                    display:false
                }
            },
            plugins: {
                deferred: {
                    delay: 2,
                    yOffset: 200,
                }
            }
        }
    });

});