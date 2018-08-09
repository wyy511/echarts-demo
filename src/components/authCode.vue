<template>
<div>
  <canvas id="authCode" width="80" height="34" @click="drawPic('authCode')"></canvas>
</div>

</template>
<script>
export default {
    name: 'authCode',
    components: {
    },
    props: {
    },
    data() {
        return {
        }
    },
    mounted () {
      this.drawPic('authCode')
    },
    methods: {
      // 生成随机数
      randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      },
      // 生成随机颜色
      randomColor (min, max) {
        let r = this.randomNum(min, max)
        let g = this.randomNum(min, max)
        let b = this.randomNum(min, max)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      },
      // 绘制文字
      drawTxt (ctx) {
        // 绘制文字,产生四位数
        for (let i = 0; i < 4; i++) {
          let txt = this.randomNum(-1, 10) // 产生0-9的随机数
          let x = 5 + i * 15
          let y = this.randomNum(25, 35)
          let deg = this.randomNum(-15, 15)
          ctx.fillStyle = this.randomColor(50, 160) // 生成字体的随机颜色
          ctx.font = this.randomNum(15, 25) + 'px SimHei'
          // 修改canvas坐标和旋转角度
          ctx.translate(x, y)
          ctx.rotate(deg * Math.PI / 100)
          ctx.fillText(txt, 0, 0)
          // 恢复坐标原点和旋转角度
          ctx.rotate(-deg * Math.PI / 100)
          ctx.translate(-x, -y)
        }
      },
      // 绘制干扰性
      drawDisturbLine (ctx, cw, ch, lw) {
        for (let i = 0; i < lw; i++) {
          ctx.strokeStyle = this.randomColor(40, 180)
          ctx.beginPath()
          ctx.moveTo(this.randomNum(0, cw), this.randomNum(0, ch))
          ctx.lineTo(this.randomNum(0, cw), this.randomNum(0, ch))
          ctx.stroke()
        }
      },
      // 绘制干扰点
      drawDisturbDot (ctx, cw, ch, num) {
        for (let i = 0; i < num; i++) {
          ctx.fillStyle = this.randomColor(0, 255)
          ctx.beginPath()
          ctx.arc(this.randomNum(0, cw), this.randomNum(0, ch), 1, 0, 2 * Math.PI)
          ctx.fill()
        }
      },
      drawPic (el) {
        let that = this
        let canvas = document.getElementById(el)
        let width = canvas.width
        let height = canvas.height
        let ctx = canvas.getContext('2d')
        ctx.textBaseline = 'bottom' // 文本基线是元素方框的底端。
        // 绘制背景色
        ctx.fillStyle = that.randomColor(180, 240) // 颜色太深可能导致看不清
        ctx.fillRect(0, 0, width, height)
        // 绘制文字
        this.drawTxt(ctx)
        // 绘制干扰线
        this.drawDisturbLine(ctx, width, height, 6)
        // 绘制干扰点
        this.drawDisturbDot(ctx, width, height, 50)
      }
    }
}
</script>
<style>
</style>