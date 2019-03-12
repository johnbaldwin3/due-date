<template>
  <v-app app>
    <v-toolbar dark color="teal lighten-1">
      <v-toolbar-title center class="text--center"><h1> When is Nicki Due!?</h1></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>

              <flip-countdown deadline="2019-05-25 00:00:00"></flip-countdown>
              <NewsUpdates />

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Countdown from './components/Countdown.vue';
// import CountdownFlip from './components/CountdownFlip.vue';
import FlipCountdown from './components/FlipCountdown.vue';
import NewsUpdates from './components/NewsUpdates.vue';
export default {
  name: 'app',
  components: {
    Countdown,
    FlipCountdown,
    NewsUpdates
  }
}
</script>

<style>
#app {
  background-color: gray;
}
</style>
