var options = {
        series: [{
            name: "Bon Appétit",
            data: [78.5, 84.5, 81.5, 80, 84.5, 84]
        },
            {
                name: "Cardinal",
                data: [75.5,77,80,74.5,75,76]
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

var chart = new ApexCharts(document.querySelector("#rescoreTrendComparison"),options);
chart.render();