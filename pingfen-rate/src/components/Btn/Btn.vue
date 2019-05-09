
<template>
  <div class="smd-btn-cls" @click="smdBtn">{{btnText}}</div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    btnText: {
      type: String,
      default: ''
    },
  },
  methods: {
    smdBtn () {
      this.$emit('smdBtn')
    }
  }
}
</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@r: 100;
.smd-btn-cls {
  width: 686rem / @r;
  height: 100rem / @r;
  border-radius: 8rem / @r;
  font-size: 36rem / @r;
  color: #fff;
  line-height: 100rem / @r;
  text-align: center;
  margin: 0 auto;
  background: #4d7bfe;
}
</style>