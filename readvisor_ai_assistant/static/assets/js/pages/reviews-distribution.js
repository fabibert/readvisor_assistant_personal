var options = {
  series: [{
      name: "Positive Reviews",
      data: [55.5,51,50.6,50.5,50.2,50.1]
    },
    {
      name: "Neutral Reviews",
      data: [20,26,27,30,32,33]
    },
    {
      name: "Negative Reviews",
      data: [24.5, 23, 22.4, 19.5, 17.8, 16.9]
    }
  ],
  chart: {toolbar: {
      show: false
    },
    type: 'area',
    height: 480,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      }
    },
  },
  colors: ['#03c03c', '#FFFF00', '#F28268'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    fontSize: '15px'
  },
  xaxis: {
    categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
  },
  yaxis: [{
    min: 0,
    max: 100,
    tickAmount: 4,
  }],
  tooltip: {
    y: {
      formatter: function(value, opts) {
        return value + '%'
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#reviews-distribution"), options);
chart.render();

