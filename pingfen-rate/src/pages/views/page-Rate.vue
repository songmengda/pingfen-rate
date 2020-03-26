<template>
  <div class="my-rate">
    <Rate :score="score1" :disabled="true"></Rate>
    <Rate :score="score2" @choice="choice"></Rate>
    <Btn @smdBtn="showPopBottom" btnText="星星打分"></Btn>
    <FloatingLayer :showFloating="showFloating"></FloatingLayer>
    <PopBottom :showFloating="showFloating" popBottomTitle="服务评价" @closePopBottom="closePopBottom">
      <Rate :score="score2" @choice="choice"></Rate>
      <div class="score-msg">{{scoreMsg}}</div>
      <Btn @smdBtn="submit" btnText="提交" style="margin-top:20px"></Btn>
    </PopBottom>
  </div>
</template>

<script>
// import { queryCoupon } from '@/api/service.js'
// ../../ /components/index.js
import { Rate, FloatingLayer, PopBottom, Btn } from '../../components/index'
export default {
  components: {
    Rate,
    FloatingLayer,
    PopBottom,
    Btn
  },

  data () {
    return {
      showFloating: false,
      score1: 4.4,
      score2: 4.4,
    }
  },

  computed: {
    scoreMsg () {
      let _scoreMsg = ''
      if (this.score2 >= 0 && this.score2 <= 1) {
        _scoreMsg = '非常不满意'
      } else if (this.score2 > 1 && this.score2 <= 2) {
        _scoreMsg = '不满意'
      } else if (this.score2 > 2 && this.score2 <= 3) {
        _scoreMsg = '一般满意'
      } else if (this.score2 > 3 && this.score2 <= 4) {
        _scoreMsg = '比较满意'
      } else {
        _scoreMsg = '非常满意'
      }
      return _scoreMsg
    }
  },
  created () { },
  mounted () { },

  methods: {
    showPopBottom () {
      this.showFloating = true
    },
    choice (index) {
      this.score2 = index
      window.console.log('当前分数为:', this.score2)
    },
    submit () {

    },
    closePopBottom () {
      this.showFloating = false
    },
  }

}

</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@r: 100;
.score-msg {
  font-size: 32rem / @r;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
}
</style>