function renderizarGraficoSemicircular(id, nome, valor, cor) {
    var options = {
      chart: {
        height: 250,
        type: "radialBar"
      },
  
      series: [valor],
  
      colors: [cor],
  
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 15,
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
              fontSize: "30px",
              show: true
            }
          }
        }
      },
  
      stroke: {
        lineCap: "round",
      },
      labels: ["" + nome]
    };
  
    var chart = new ApexCharts(document.querySelector("#" + id), options);
  
    chart.render();
    document.querySelector("#" + id).setAttribute("style","pointer-events: none;min-height: 161.379px;")
  }
  
  function renderizarGraficoArea(id) {
    var options = {
            series: [{
            name: 'Cobertura',
            type: 'area',
            data: [44, 55, 31, 47]
          }],
            chart: {
            height: 350,
            type: 'line',
            toolbar: {
              show: false
            }
          },
          stroke: {
            curve: 'straight'
          },
          fill: {
            type:'solid',
            opacity: [1, 1],
          },
          labels: ['Micro 01', 'Micro 02','Micro 03','Micro 04','Micro 05','Micro 06','Micro 07','Micro 08','Micro 09 ','Micro 10',
                   'Micro 11', 'Micro 12','Micro 13','Micro 14','Micro 15','Micro 16','Micro 17','Micro 18','Micro 19','Micro 20'],
          markers: {
            size: 0
          },
          yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        logBase: 10,
        tickAmount: 6,
        min: 0,
        max: 100,
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if(typeof y !== "undefined") {
                  return  y.toFixed(0) + "%";
                }
                return y;
              }
            }
          }
          };
  
          var chart = new ApexCharts(document.querySelector("#"+id), options);
          chart.render();
  }
  

  function obterCorPercentual(meta,valor) {
    console.log([valor,((meta*28)/70)]);

    if (valor >= meta) {
      return "#3498db"
    }

    if (valor > ((meta*48.21)/70)) {
      return "#27ae60"
    }

    if (valor > ((meta*18)/70)) {
      return "#e67e22"
    }

    return "#c0392b"
  }