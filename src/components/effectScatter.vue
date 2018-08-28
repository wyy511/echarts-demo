<template>
  <div class="hello">
    <div id="main" style="width: 500px; height: 500px">
      <button>
        <span class="background"></span>
        <span class="content">涟漪效果</span>
      </button>
      
    </div>
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
    const button = document.querySelector('button')
    const background = document.querySelector('.background')
    const content = document.querySelector('.content')
    
    let active = false

    button.addEventListener('click', (event) => {
      active = !active
      button.className = active ? 'active' : 'inactive'
      let styles = active ? {
        left: event.offsetX + 'px',
        top: event.offsetY + 'px',
        width: button.clientWidth * 3 + 'px',
        height: button.clientWidth * 3 + 'px'
      } : {
        left: event.offsetX + 'px',
        top: event.offsetY + 'px',
        width: 0,
        height: 0
      }
      background.style.cssText = Object.keys(styles).reduce((style, key) => {
        style += `${key}: ${styles[key]};`
        return style
      }, '')
    }, false)
  },
  methods: {
    init() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  overflow: hidden;
  border: 1px solid #000;
  padding: 12px;
  cursor: pointer;
  position: relative;
  margin: 10px;
}

.content {
  position: relative;
  display: inline-block;
}

.active .content {
  color: #fff;
}

.background {
  transform: translate(-50%, -50%);
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 100%;
}

.active .background {
  background: #333;
  opacity: 1;
  transition: width 3s ease, height 3s ease, opacity 1s ease;
}

.inactive .background {
  opacity: 0;
  background: #fff;
}

</style>
