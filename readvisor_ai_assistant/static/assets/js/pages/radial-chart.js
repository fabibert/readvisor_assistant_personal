var options = {
    chart: {
        height: 267,
        type: "radialBar"
    },
    colors: ['#00b0db'],
    series: [84],

    plotOptions: {
        radialBar: {
            hollow: {
                margin: 10,
                size: "70%"
            },


            dataLabels: {
                showOn: "always",
                name: {
                    offsetY: -10,
                    show: true,
                    color: "#888",
                    fontSize: "13px"
                },
                value: {
                    color: "#111",
                    fontSize: "20px",
                    show: true,
                },
                total: {
                    show: true,
                    label: '84',
                    fontSize: '50px',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "out of 100"
                    }
                }
            }
        }
    },

    stroke: {
        lineCap: "round",
    },
    labels: ["out of 100"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

