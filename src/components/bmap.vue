<template>
  <div class="hello">
    <div id="main" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/extension/bmap/bmap')
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
        // var chart = document.getElementById('main');
        // var myChart = echarts.init(chart);
        // var option = {
        //     // 加载 bmap 组件
        //     bmap: {
        //         // 百度地图中心经纬度
        //         center: [110.13066322374, 30.240018034923],
        //         // 百度地图缩放
        //         zoom: 14,
        //         // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        //         roam: true,
        //         // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        //         mapStyle: {}
        //     },
        //     series: [{
        //         type: 'scatter',
        //         // 使用百度地图坐标系
        //         coordinateSystem: 'bmap',
        //         // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        //         data: [ [120, 30, 1] ]
        //     }]
        // };
        // 获取百度地图实例，使用百度地图自带的控件
        // var bmap = myChart.getModel().getComponent('bmap').getBMap();
        // bmap.addControl(new BMap.MapTypeControl());
        
        var map = new BMap.Map('main');
        var point = new BMap.Point(116.404, 39.915)
        map.centerAndZoom(point, 15)
        map.addControl(new BMap.NavigationControl())
        var marker = new BMap.Marker(point);
        map.addOverlay(marker)
        map.addEventListener('click', function (e) {
            console.log(e.point.lng + ", " + e.point.lat);
            let point = new BMap.Point(e.point.lng, e.point.lat)
            map.centerAndZoom(point, 15)
        })
        var myGeo = new BMap.Geocoder();
        myGeo.getPoint('深圳市南山区高新园九洲电器大厦', function (point) {
            if(point) {
                console.log(point)
                map.centerAndZoom(point)
                map.addOverlay(new BMap.Marker(point))
            }
        })
        // myChart.setOption(option);
            
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
