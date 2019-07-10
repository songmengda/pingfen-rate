<template>
  <div class="my-picker">
    <div class="picker--header">
      <div class="picker--header__cancel">取消</div>
      <div class="picker--header__title">标题</div>
      <div class="picker--header__confirm">确定</div>
    </div>
    <div class="picker--columns">
      <ul class="picker--columns__ul">
        <li class="picker--column__li" v-for="(item,index) in columnList" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { queryCoupon } from '@/api/service.js'
import BScroll from 'better-scroll'
export default {
  components: {

  },

  data () {
    return {
      popBottomTitle: '',
      columnList: [
        '杭州',
        '宁波',
        '温州',
        '嘉兴',
        '福州',
        '湖州',
      ]
    }
  },

  computed: {

  },
  created () { },
  mounted () {
    /* eslint-disable */
    new BScroll('.picker--columns', {
      wheel: {
        selectedIndex: 4,
        rotate: 10
      }
    })
  },

  methods: {
    closePopBottom () { }
  }

}

</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@import '../../assets/_css/common.less';
@r: 100;
.my-picker {
  background: #fff;
  border-radius: 16rem / @r 16rem / @r 0 0;
  font-size: 32rem / @r;
  .picker--header {
    height: 120rem / @r;
    line-height: 120rem / @r;
    display: flex;
    justify-content: space-between;
    position: relative;
    .picker--header__cancel {
      margin-left: 32rem / @r;
      color: @btn_text_gray;
    }
    .picker--header__confirm {
      margin-right: 32rem / @r;
      color: @btn_text_bule;
    }
    &:after {
      .border-bottom-1px();
    }
  }
  .picker--columns {
    font-size: 36rem / @r;
    height: 538rem / @r;
    overflow: hidden;
    .picker--columns__ul {
      transition: all 0ms ease 0s;
      transform: translate3d(0px, 88px, 0px);
      .picker--column__li {
        height: 98rem / @r;
        line-height: 98rem / @r;
        color: @content_text_gray;
      }
      .picker--column__li_selected {
        position: relative;
        color: @btn_text_bule;
        .border-top-1px();
        .border-bottom-1px();
      }
    }
  }
}
</style>