$(function() {
    var controls = $("#productiveChart");
    var interests = $("#interestsChart");
    Chart.defaults.global.defaultFontFamily = 'Federo, sans-serif';

    var thingsIdoChart = new Chart(controls, {
        type: 'pie',
        data: {
            labels: ["Working at Local Coffee Shops", "Looking for New Coffee Shops", "Drinking Loose Leaf Tea", "Watching Tutorials", "Writing & Sketching"],
            datasets: [{
                label: 'doing things(%)',
                data: ["35", "10", "30", "15", "10"],
                backgroundColor: [
                'rgba(161, 217, 255, 0.8)',
                'rgba(202, 130, 248, 0.8)',
                'rgba(237, 147, 203, 0.8)',
                'rgba(242, 187, 187, 0.8)',
                'rgba(250, 227, 217, 0.8)'
            ],
                borderColor: [
                'rgba(161, 217, 255, 1)',
                'rgba(202, 130, 248, 1)',
                'rgba(237, 147, 203, 1)',
                'rgba(242, 187, 187, 1)',
                'rgba(250, 227, 217, 1)'
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
            labels: ["Staring at Amusing Memes/Gifs", "Mountain Activities", "Watching Baking Championships", "Ping Pong", "Long Distance Running"],
            datasets: [{
                label: 'doing fun things(%)',
                data: ["20", "20", "25", "15", "20",],
                backgroundColor: [
                'rgba(161, 217, 255, 0.8)',
                'rgba(202, 130, 248, 0.8)',
                'rgba(237, 147, 203, 0.8)',
                'rgba(242, 187, 187, 0.8)',
                'rgba(250, 227, 217, 0.8)'
            ],
                borderColor: [
                'rgba(161, 217, 255, 1)',
                'rgba(202, 130, 248, 1)',
                'rgba(237, 147, 203, 1)',
                'rgba(242, 187, 187, 1)',
                'rgba(250, 227, 217, 1)'
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