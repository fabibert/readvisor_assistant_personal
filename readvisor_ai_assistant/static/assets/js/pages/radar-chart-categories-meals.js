var options = {
    series: [{
        name: 'Rating',
        data: [4.2, 4.8, 3.1, 3.8, 3.5, 2.9,4.2, 4.8, 4.1, 4.8, 4.5, 4.8],
    }],
    chart: { toolbar: {
            show: false
        },
        height: 350,
        type: 'radar',
    },
    colors: ['#00b0db'],
    xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
    },
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius:2,
        }
    },

};

var chart = new ApexCharts(document.querySelector("#radar-chart-categories-meals"), options);
chart.render();
