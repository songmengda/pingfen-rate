<template>
  <div class="my-rate">
    <!-- <rateMy :score="score" :disabled="true" @choice="choice"></rateMy> -->
    <rateMy :score="score" @choice="choice"></rateMy>
  </div>
</template>

<script>
// import { queryCoupon } from '@/api/service.js'
import rateMy from '@/components/rate/rate'
export default {
  components: {
    rateMy
  },

  data () {
    return {
      score: 2
    }
  },

  computed: {},

  mounted () { },

  created () {

  },

  methods: {
    choice (index) {
      this.score = index
    }
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
}
</style>