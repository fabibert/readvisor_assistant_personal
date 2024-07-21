var options = {
    series: [614, 100, 86, 35, 90, 75],
    chart: {
        type: 'donut',
        height: 450
    },
    xaxis: {
        categories: ['German', 'English', 'French', 'Italian', 'Dutch', 'Other']
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
    responsive: [{
        breakpoint: 100,
        options: {
            chart: {
                width: 10
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#review-language"), options);
chart.render();


