<template>
  <div class="tian-yy">
    <div class="content">
      <div class="msg1">第一步...</div>
      <div class="msg2">恭喜通过了</div>
      <div class="msg3">继续下一步</div>
    </div>
  </div>
</template>

<script>
// import { queryCoupon } from '@/api/service.js'
export default {
  components: {

  },

  data () {
    return {

    }
  },

  computed: {
  },

  methods: {

  }

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
  .tian-yy {
    .content {
      font-size: 48rem / @r;
      margin-top: 300rem / @r;
      .msg1 {
        animation: msg1 1s ease-out forwards;
      }
      .msg2 {
        animation: msg2 1s ease-out 0.25s forwards;
        opacity: 0;
      }
      .msg3 {
        animation: msg3 1s ease-out 0.5s forwards;
        opacity: 0;
      }
    }
  }
}
@keyframes msg1 {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    color: #333;
  }
  100% {
    transform: translate3d(0, -30px, 0) scale(0.9);
    color: #ccc;
  }
}
@keyframes msg2 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(1);
    color: #333;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, -30px, 0) scale(0.9);
    color: #ccc;
  }
}
@keyframes msg3 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(1);
    color: #ccc;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, -30px, 0) scale(0.9);
    color: #333;
  }
}
</style>