
<template>
  <div class="smd-pop-bottom" :class="[showFloating?'smd-pop-bottom-t':'smd-pop-bottom-o']">
    <div class="pop-bottom-title">
      <span>{{popBottomTitle}}</span>
      <p class="pop-bottom-close" @click="closePopBottom"></p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PopBottom',
  props: {
    showFloating: {
      type: Boolean,
      default: false
    },
    popBottomTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    closePopBottom () {
      this.$emit('closePopBottom')
    }
  }
}
</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
@r: 100;
.smd-pop-bottom {
  width: 100%;
  height: 641rem / @r;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  max-width: 750px;
  border-radius: 10rem / @r 10rem / @r 0px 0px;
  z-index: 1500;
  transition: transform 0.5s;
  .pop-bottom-title {
    font-size: 40rem / @r;
    height: 136rem / @r;
    line-height: 136rem / @r;
    color: #333;
    font-weight: 600;
    position: relative;
    border-bottom: 1px solid #eeeeee;
    .pop-bottom-close {
      width: 60rem / @r;
      height: 60rem / @r;
      position: absolute;
      right: 30rem / @r;
      top: 50%;
      box-sizing: border-box;
      transform: translateY(-50%);
    }
    .pop-bottom-close::before {
      content: '';
      width: 32rem / @r;
      height: 32rem / @r;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-top: -9rem / @r;
      margin-left: -9rem / @r;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA3BJREFUWAm9mMlu00AYxxO3TS9wQkiQNnShpXDgwBM0JvAUvafp9jTdktz7FAhinqAHhIq6t3QTi+BadeP/C+MotbPYTuKRJp7lW36emW9mnOTCwsKLq6urYiKRmCmXy+d6xp7y+fxTOd0YGBgoWNfX1yVV7GQyWZmfn38SNw0+8Q0DLJaoZlTZvru7m7q5uXHihMIXPvENAyxJRmRxcTGtaaNjUtVv/f399tra2gV9vUpemFQqZa+srJxVgXAaJxQwmh6m6aWma0cjkwUGjhoQlTigWsH4gHoN1Q6mIVCvoILANAXqNlRQmJZA3YIKA9MWqFOosDCBgBAqFApD2qMqYfYpL4zC2y4Wi6fYa5XuhX0rwTBQUWHwHxgI4SBQncCEBmoH1SlMJCAX6vb21lF5QnlLZ99b2nUcfNLjlfKuZVnZIGsGvfoUasrqFZm+eijT1xEMNiIDoeyBoinyyKBMsv4/ov1qhB4qnB+42pRpc+tRnpGB5ubmpgTA3sQt8y+ZMm30RYFBJxIQ93Dd9KowAvjT19f3jkwZKPqQiQIVeg3Nzs5OyqkjZ2kB/FZ+r2jaxLnW1Bv1fVB+pOqZ+rKlUmmHvqAp1AhpnyHMuemllX8p51wYlROmnDN9yPDhgE7gFHiE9KnyXG/8WW8/JOs/lXP6bPrSyJNkX6v9o/Jj6ZxKZ1qye41kvW2BRggYKfIRMCQHP3QHtpvB4IA+ZJA1L+AYG17/vnpbIEXMuAwzTcN6XmjxZldXV7/6LHkakEEWHaNL9I17xHzVlkC69I+ZaMpI85zjQJ9HWz4rTRqQRUfd5xqpDLaw2US82tx0DSliRs3RMKK3POW80ltvtzLWrI8tgHPOTN+ROecOG8k3HCEZGHFhpHRipikSDE55EWxgS7lqGx8q+5JvhLT4nmlEiKZRSR/LkL2+vr7v04zQwBpi2qSKj0P5IPqO603dGyFg1Ek0jep5pM/bbLdgcIotbGLb+CD68FlLNSBtYBlRQ8+iO1DYTuvz9qAm2aUCNrGND+UxfOLbNV+dsqWlpeHLy0tHjWx++8y3IuS7K9SLJxCaPmZjXPb3BgcHs8vLyydJz51mVx02Hb2A8No0A1FRO8dL9S5lKZo2TMO25nc6Lhjg8IVPFYngCVj4wyqvaXLUUPtLROXYkvkbhh3dgeUf+Iptj84LozYAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
}
.smd-pop-bottom-t {
  transform: translate(0, 0);
}
.smd-pop-bottom-o {
  transform: translate(0, 100%) translateZ(0);
}
</style>