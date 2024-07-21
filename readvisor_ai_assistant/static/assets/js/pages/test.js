var s_vals = [100,1000,10000];
var s_total = s_vals.reduce(function (a, b) { return parseInt(a) + parseInt(b) }, 0);
var s_percs = s_vals.slice(0);

s_percs.forEach(function (val, idx, arr) {
    s_percs[idx] = 100 / (s_total / val);
});

var s_options = {
    title: {
        text: "Radial Bar Numbers",
        offsetX: -10,
    },
    chart: {
        height: 300,
        type: "radialBar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                value: {
                    show: true,
                    formatter: function (val) {
                        return s_vals[s_percs.findIndex(function (v) { return v == val; })];
                    }
                },
                total: {
                    show: true,
                    formatter: function (w) {
                        return s_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                }
            }
        },
    },
    noData: {
        text: "None found.",
    },
    legend: {
        show: true,
        showForSingleSeries: true,
    },
    theme: {
        monochrome: {
            enabled: true,
        }
    },
    series: s_percs,
    labels: ["First","Second","Third"],
};

var s_chart = new ApexCharts(
    document.querySelector("#s_chart"),
    s_options
);