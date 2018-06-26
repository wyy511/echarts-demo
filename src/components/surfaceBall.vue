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
            var option = {
    tooltip: {},
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    grid3D: {},
    series: [{
        type: 'surface',
        parametric: true,
        // shading: 'albedo',
        parametricEquation: {
            u: {
                min: -Math.PI,
                max: Math.PI,
                step: Math.PI / 20
            },
            v: {
                min: 0,
                max: Math.PI,
                step: Math.PI / 20
            },
            x: function (u, v) {
                return Math.sin(v) * Math.sin(u);
            },
            y: function (u, v) {
                return Math.sin(v) * Math.cos(u);
            },
            z: function (u, v) {
                return Math.cos(v);
            }
        }
    }]
};
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
