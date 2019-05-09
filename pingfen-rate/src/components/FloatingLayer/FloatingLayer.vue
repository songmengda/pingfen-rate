
<template>
  <div class="smd-floating-layer" v-if="showFloating"></div>
</template>

<script>
export default {
  props: {
    showFloating: {
      type: Boolean,
      default: false
    },
  }
}
</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
.smd-floating-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  max-width: 750px;
  margin: 0 auto;
}
</style>