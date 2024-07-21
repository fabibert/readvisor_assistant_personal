var options = {
    series: [{
        name: "Bon Appétit (Me)",
        data: [22, 26, 27, 28, 24, 22]
    },
        {
            name: "Competitor A",
            data: [20, 15, 15, 14, 12, 12]
        },
        {
            name: 'Competitor B',
            data: [12, 13, 11, 18, 18, 20]
        },
        {
            name: "Competitor C",
            data: [25, 26, 26, 25, 27, 26]
        },
        {
            name: "Competitor D",
            data: [34, 33, 32, 36, 34, 34]
        }
    ],
    chart: {toolbar: {
            show: false
        },
        height: 450,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
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

var chart = new ApexCharts(document.querySelector("#benchmarking-trend-line-chart"), options);
chart.render();