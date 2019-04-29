<template>
  <div>
    <!-- canvas的width和height是他的属性，并不是单纯的css -->
    <canvas id="canvas">您的浏览器不支持canvas标签</canvas>
  </div>
</template>

<script>
export default {
  components: {},

  data () {
    return {
    }
  },

  computed: {},

  mounted () { },

  created () {
    this.$nextTick(function () {
      //说明 画布的默认值是300 * 150
      var can = document.getElementById('canvas');
      //设置绘图环境  是2d还是3d
      var cxt = can.getContext('2d');
      //获取浏览器窗口的宽高
      var w = can.width = window.innerWidth
      var h = can.height = window.innerHeight
      //让画布的宽高跟随浏览器窗口的变化而变化
      window.onresize = function () {
        w = can.width = window.innerWidth
        h = can.height = window.innerHeight
      }

      //设置画笔的颜色
      // cxt.fillStyle='red';
      //绘制矩形
      //cxt.fillRect(0,0,100,100);//绘制的坐标点 x y   宽和高w h
      //cxt.fill() 填充方法 （实心儿的）cxt.stroke() 触笔方法（空心的）
      //cxt.rect(x,y,w,h) 规定矩形的路径 
      //绘制圆形
      //设置圆形的路径
      //cxt.arc(250,250,50,0,Math.PI*2,false);//圆心坐标：x，y ，半径r，
      // 从0度角绘制到360度（必须是弧度制 :Math.PI*角度/180） ，逆时针
      //cxt.fill() //绘制一下
      // var x=100 ,y=0
      /*
      setInterval(()=>{
          y++
          cxt.clearRect(0, 0, w, h);//清楚之前画布的内容
          
          cxt.fillRect(x,y,50,50)
      },1000/60)
      */
      /*
      function move(){
          y++
          cxt.clearRect(0, 0, w, h);//清楚之前画布的内容
          cxt.fillRect(x,y,50,50)
          requestAnimationFrame(move)//原生js的经动画
      }
      move()
      */


      var drops = []//用来保存所有的雨滴实例对象

      //创建雨滴对象
      function Drop () { }
      Drop.prototype = {
        init: function () {//初始化方法（设置每个雨滴的初始属性）
          this.x = random(0, w)   //水平方向上的距离
          this.y = 0
          //y方向的速度值
          this.vy = random(4, 5)
          this.l = random(0.8 * h, 0.9 * h)//雨滴夏下落的高度为浏览器80%-90%的高度
          //波纹半径
          this.r = 1;
          this.vr = 1;//半径的增大的速度

          //判断雨滴消失的透明度
          this.a = 1  //=>0
          this.va = 0.96  //透明度的变化系数
        },
        draw: function () {//绘制图形

          if (this.y > this.l) {//雨滴下落到指定位置 开始绘制圆形

            cxt.beginPath();//先初始化开始路径

            cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)

            cxt.strokeStyle = 'rgba(0,255,255,' + this.a + ')';

            cxt.stroke();

          } else {
            cxt.fillStyle = 'rgb(0,255,255)';
            cxt.fillRect(this.x, this.y, 2, 10);
          }
          this.updata()//每绘制完成一次就更新一次坐标       

        },
        updata: function () { //更新坐标的位置
          if (this.y < this.l) {
            this.y += this.vy
          } else { //雨滴下落到达指定位置，开始画圆
            if (this.a > 0.03) {
              this.r += this.vr
              if (this.r > 50) {
                this.a *= this.va
              }
            } else {
              //重新初始化雨滴数据
              this.init()
            }
          }
        }
      }

      //新建一个雨滴实例化对象  这个drop拥有init和draw的方法
      //var drop =new Drop();
      //drop.init()//初始化
      //drop.draw()//绘制
      for (var i = 0; i < 30; i++) {
        setTimeout(() => { //每一个雨滴延迟200毫秒
          var drop = new Drop();
          drop.init();
          drops.push(drop);
        }, i * 300);
      }

      function move () {
        //先绘制透明层，再绘制雨滴 雨滴就把先绘制的透明层覆盖，下一次在绘制透明层，就会把之前绘制的
        // 雨滴覆盖  若干透明层叠加就越来越不透明了
        cxt.fillStyle = 'rgba(0,0,0,0.1)'
        cxt.fillRect(0, 0, w, h)
        for (var i = 0; i < drops.length; i++) {
          drops[i].draw()
        }
        requestAnimationFrame(move);//原生js的经动画 (执行递归)  
      }
      move()

      //生成随机数的方法
      function random (min, max) {
        return Math.random() * (max - min) + min;//生成一个最大值到最小值之间的一个随机数
      }
    })
  },

  methods: {}

}

</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@r: 100;
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
#canvas {
  width: 100%;
  height: 100%;
  background: #000;
  display: block;
}
</style>