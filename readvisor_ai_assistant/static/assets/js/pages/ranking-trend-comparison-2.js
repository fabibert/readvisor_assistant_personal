var options = {
        series: [{
            name: "Bon Appétit",
            data: [27, 25, 22, 21, 20, 22]
        },
            {
                name: "Cardinal",
                data: [40,43,45,44,40,39]
            }
        ],
        chart: {toolbar: {
                show: false
            },
            height: 250,
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

var chart = new ApexCharts(document.querySelector("#rankingTrendComparison-2"),options);
chart.render();