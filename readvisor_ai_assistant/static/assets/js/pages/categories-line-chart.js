var options = {
    series: [{
        name: "Meals",
        data: [4, 4.2, 3.5, 3.4, 3.9, 4]
    },
        {
            name: "Location",
            data: [4.5, 4.9, 4.5, 3.9, 4.2, 4.4]
        },
        {
            name: 'Services',
            data: [3, 2.7, 3.2, 3.6, 4.1, 3.6]
        },
        {
            name: "Ambiance",
            data: [4.5, 5, 4.9, 4.4, 4.9, 4.8]
        },
        {
            name: "Price",
            data: [4, 3.5, 3, 3.6, 4.1, 4.7]
        },
        {
            name: 'Features',
            data: [2, 2.5, 2.3, 2.7, 2, 2.4]
        }
    ],
    chart: {toolbar: {
            show: false
        },
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    colors: ['#00b0db','#00e396','#ffb01a', '#ff4560','#775cd0','#D3D3D3'],
    dataLabels: {
        enabled: false
    },

    legend: {
        tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
};

var chart = new ApexCharts(document.querySelector("#categories-line-chart"), options);
chart.render();