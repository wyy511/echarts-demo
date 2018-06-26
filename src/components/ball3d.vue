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
    backgroundColor: '#000',
    globe: {
        baseTexture: '/static/imgs/earth.jpg',
        heightTexture: '/static/imgs/bathymetry_bw_composite_4k.jpg',

        displacementScale: 0,

        shading: 'lambert',
        
        environment: '/static/imgs/clouds.jpg',
        
        light: {
            ambient: {
                intensity: 0.5
            },
            main: {
                intensity: 0.5
            }
        },

        layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture: '/static/imgs/clouds.jpg'
        }, {
            type: 'overlay',
            texture: '/static/imgs/clouds.png',
            shading: 'lambert',
            distance: 10
        }]
    },
    series: []
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
