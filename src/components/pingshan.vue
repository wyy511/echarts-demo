<template>
  <div>
    <img class="img" src="/static/imgs/pingshan.png"></img>
    <img class="img" src="/static/imgs/pingshan.png"></img>
    <div class="chart" id="main" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import pingshan from '../js/data/pingshan'
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
        var coordInfo = pingshan()
        echarts.registerMap('pingshan', coordInfo);
        // console.log(echarts.registerMap)
        var chart = document.getElementById('main');
        var myChart = echarts.init(chart);
    
        var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [
            {
                name: 'pingshan',
                type: 'map',
                mapType: 'pingshan',
                selectedMode : 'multiple',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                ]
            }
        ]
    };
    myChart.on('click', function(e) {
        console.log(e,e.event.target.invTransform[4], e.event.target.invTransform[5])
    })
    myChart.setOption(option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img, .chart {
    // display: inline-block;
    position: absolute;
    width: 500px;
    height: 500px;
}
.chart {
    right: 0;
}
</style>
