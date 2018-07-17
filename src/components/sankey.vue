<template>
  <div class="hello">
    <div id="main" style="width: 500px; height: 500px"></div>
    <a @click="download" id="down">下载</a>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'HelloWorld',
  data () {
    return {
        picInfo: null,
        myChart: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    download () {
        // var myChart = 
        this.picInfo = this.myChart.getDataURL();
        var a = document.getElementById("down");
        console.log(this.myChart)
        a.href = this.picInfo;
        a.download = 'name11';
        a.click();
        
    },
    init() {
    var chart = document.getElementById('main');
    this.myChart = echarts.init(chart);
    var option = {
        backgroundColor: 'red',
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true,
                    type: 'png',
                    name: 'test'
                }
            }
        },
            series: {
                type: 'sankey',
                layout:'none',
                data: [{
                    name: 'a'
                }, {
                    name: 'b'
                }, {
                    name: 'a1'
                }, {
                    name: 'a2'
                }, {
                    name: 'b1'
                }, {
                    name: 'c'
                }],
                links: [{
                    source: 'a',
                    target: 'a1',
                    value: 5
                }, {
                    source: 'a',
                    target: 'a2',
                    value: 3
                }, {
                    source: 'b',
                    target: 'b1',
                    value: 8
                }, {
                    source: 'a',
                    target: 'b1',
                    value: 3
                }, {
                    source: 'b1',
                    target: 'a1',
                    value: 1
                }, {
                    source: 'b1',
                    target: 'c',
                    value: 2
                }]
            }
        };
        this.myChart.setOption(option);
        
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
