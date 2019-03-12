<template>
  <v-app app>
    <v-toolbar dark color="teal lighten-1">
      <v-toolbar-title center class="text--center"><h1> When is Nicki Due!?</h1></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
         <v-layout align-center justify-center row>
            <v-flex xs12> 
              <flip-countdown deadline="2019-05-25 00:00:00"></flip-countdown>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-center row>
            <v-flex xs6 offset-xs3>
              <v-btn prepend-icon="clear" dark color="teal darken-1" class="text--white" target="_blank" href="https://babybety.com/pool/john-and-nicki-baldwin/?accesspool="> Join the office pool!<v-icon right dark>child_friendly</v-icon> </v-btn>
            </v-flex>
          </v-layout> 
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Countdown from './components/Countdown.vue';
// import CountdownFlip from './components/CountdownFlip.vue';
import FlipCountdown from './components/FlipCountdown.vue';

export default {
  name: 'app',
  components: {
    Countdown,
    FlipCountdown
  }
}
</script>

<style>
#app {
  background-color: gray;
}
</style>
