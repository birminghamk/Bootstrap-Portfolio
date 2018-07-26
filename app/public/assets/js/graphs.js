$(function() {
    var skills = $("#skillsChart");
    var controls = $("#productiveChart");
    var interests = $("#interestsChart");
    Chart.defaults.global.defaultFontFamily = 'Federo, sans-serif';

    var skillsChart = new Chart(skills, {
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

    var thingsIdoChart = new Chart(controls, {
        type: 'pie',
        data: {
            labels: ["Running", "Working at Coffee Shops", "Eating", "Drinking Tea", "Watching Tutorials"],
            datasets: [{
                label: 'doing things(%)',
                data: ["15", "35", "20", "15", "15"],
                backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
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
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
        }
    });

    var funChart = new Chart(interests, {
        type: 'pie',
        data: {
            labels: ["Staring at amusing memes/gifs", "Watching Rick & Morty", "Mountain Activities", "Watching Baking Championships", "Making Art"],
            datasets: [{
                label: 'doing fun things(%)',
                data: ["30", "20", "25", "15", "25"],
                backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
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
                yAxes: {
                    display:false
                }
            },
        }
    });

});