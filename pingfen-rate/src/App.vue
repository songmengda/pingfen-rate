<template>
  <div id="app">
    <transition name="page-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 750px;
  margin: 0 auto;
  height: 100vh;
  background-color: #f5f5f5;
}
.page-fade-enter-active,.page-fade-leave-active {
  transition: all 0.5s ease;
}
.page-fade-enter, .page-fade-leave-to
{
  left:0;right: 0;
  transform: translateX(100%);
  opacity: 0;
}
</style>
