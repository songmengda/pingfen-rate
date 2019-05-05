<template>
  <div class="my-rate">
    <i
      class="iconfont icon-xingxingshixin"
      v-for="(item,index) in 5"
      :key="index"
      @click="disabled?'':choice(index)"
      :class="isChoice(index)"
    >
      <i
        v-if="disabled&&index==Math.floor(childScore+1)"
        class="iconfont icon-xingxingshixin icon-star floor"
        :style="'width:'+width"
      ></i>
    </i>
  </div>
</template>

<script>
export default {
  props: {
    score: { // 评分数值
      type: Number,
      default: 0
    },
    disabled: { // 是否禁用评分选择  默认是false 即可以进行评分
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      width: '', // 最后那个星的百分数
      childScore: this.score // 避免直接修改props的值，将props的评分数值保存在当前组件管理的data中
    }
  },

  watch: {
    score (nv) { // 监听props的值 将变化的值赋值给变量
      this.childScore = nv
    }
  },
  computed: {
  },

  mounted () { },

  created () {
    this.init() // 去设置半颗星的宽度
  },

  methods: {
    choice (index) { //点击设置分数
      this.$emit('choice', index + 1)
    },
    init () {
      this.width = Number(this.childScore * 100 - Math.floor(this.childScore) * 100) + '%'
    },
    isChoice (index) {
      return index < this.childScore ? 'icon-star' : 'icon-star-o'
    }
  }

}

</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@import url('./iconfont.css');
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
.icon-xingxingshixin {
  font-size: 62rem / @r;
  position: relative;
}
.icon-star {
  color: #ef4034;
}

.icon-star-o {
  color: #ccc;
}
.floor {
  position: absolute;
  left: 0;
  top: -3rem / @r;
  overflow: hidden;
}
</style>