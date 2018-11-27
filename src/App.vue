<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div>When is Nicki due?</div>
    <Countdown deadline="May 25, 2019"></Countdown>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';

export default {
  name: 'app',
  components: {
    Countdown
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
