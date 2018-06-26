<template>
  <div class="hello">
    <div id="main" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts-gl/dist/echarts-gl.min.js')
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var chart = document.getElementById('main');
            var myChart = echarts.init(chart);
            

var place = ['北京', '上海', '广州'];
var trans = ['飞机', '火车', '汽车'];
var data = [
    [0.5, 0.5, 100],
    [1, 1, 10],
    [0, 0, 39],
    [2, 2, 80],
    [1, 0, 50]
];
// var data = [
//     ['北京', '火车', 100],
//     ['北京', '汽车', 0],
//     ['上海', '飞机', 39],
//     ['广州', '汽车', 20],
//     ['上海', '汽车', 50]
// ];
var option = {
        tooltip: {},
        visualMap: {
            max: 20,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8']
            }
        },
        xAxis3D: {
            type: 'category',
            data: place
        },
        yAxis3D: {
            type: 'category',
            data: trans
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            top: '3%',

            light: {
                main: {
                    intensity: 1.2
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        legend: {
            show: true
        },
        series: [{
            type: 'bar3D',
            data: data.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]]
                }
            }),
            shading: 'color',

            label: {
                show: false,
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            
            itemStyle: {
                opacity: 1,
                color: 'red'
            },

            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#900'
                    }
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    }
            myChart.setOption(option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
