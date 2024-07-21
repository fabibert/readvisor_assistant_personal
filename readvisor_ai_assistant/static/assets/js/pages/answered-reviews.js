var options = {
    series: [70.9,58,71,100],
    chart: {
        height: 250,
        width: '100%',
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    fontSize: '18px',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return "90/127"
                    }
                }
            }
        }
    },
    labels: ['Total 90/127','Positive 40/68', 'Neutral 23/32', 'Negative 27/27'],
    legend: {
        show: true,
        fontSize: '14px',
        position: 'right',
        horizontalAlign: 'center',


    },

};

var chart = new ApexCharts(document.querySelector("#answered-reviews"), options);
chart.render();
