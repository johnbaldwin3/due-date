<template>
  <v-layout row wrap>
    <v-flex xs12 mt-4 mb-1>
      <h3
        class="white--text text-xs-center"
      >Join our office pool, a "just for fun pool" where you can place a friendly wager on when you think Baby John will be born.</h3>
    </v-flex>
    <v-flex xs12>
      <div>
        <v-btn
          prepend-icon="clear"
          dark
          color="teal darken-1"
          class="text--white"
          target="_blank"
          href="https://babybety.com/pool/john-and-nicki-baldwin/?accesspool="
        >Join the office pool!
          <v-icon right dark>child_friendly</v-icon>
        </v-btn>
      </div>
    </v-flex>
      <v-flex align-center xs12>
        <v-btn
          prepend-icon="clear"
          dark
          color="indigo darken-1"
          class="text--white"
          target="_blank"
          href="https://smile.amazon.com/baby-reg/johnbaldwin-iii-nicki-baldwin-may-2019-simpsonville/1EWSAIEUIV1XJ"
        > Amazon Baby Registry
          <v-icon right dark>shopping_cart</v-icon>
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BettyButton"
};
</script>

<style scoped>
</style>