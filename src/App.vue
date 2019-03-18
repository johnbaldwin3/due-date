<template>
  <v-app app>
    <v-toolbar dark color="teal lighten-1">
      <v-toolbar-title center class="text--center">
        <h1>When is Nicki Due!?</h1>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <flip-countdown v-if="!$vuetify.breakpoint.xsOnly" deadline="2019-05-25 00:00:00"></flip-countdown>
        <Countdown v-else deadline="2019-05-25 00:00:00"/>
        <NewsUpdates/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import FlipCountdown from "./components/FlipCountdown.vue";
import NewsUpdates from "./components/NewsUpdates.vue";
import Countdown from "./components/Countdown.vue";
export default {
  name: "app",
  components: {
    FlipCountdown,
    NewsUpdates,
    Countdown
  },
  data() {
    return {
      mobile: false
    };
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
    if (this.$vuetify.breakpoint) {
      this.mobile = true;
    }
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
#app {
  background-color: gray;
}
</style>
