<template>
  <v-container>
    <v-layout row>
      <v-flex mb-2 xs12>
        <h2 class="text-xs-center white--text">Nicki is currently {{handleWeeks}} weeks pregnant...</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex mb-2 xs12>
        <h2 class="text-xs-center white--text">At last checkup, Baby John was 2 lbs. and 2 oz.</h2>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card elevation-2>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex v-for="(image, index) in imageUrls" :key="index" xs4 d-flex>
                <v-card flat tile class="d-flex">
                  <v-img :src="image.src" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <!-- <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular> -->
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout align-center justify-space-around mt-4 column>
        <v-flex xs12> 
          <youtube-media :video-id="genderReveal"></youtube-media>
        </v-flex>
      <!-- </v-layout>
      <v-layout align-center justify-center> -->
         <v-flex xs12> 
          <youtube-media :video-id="announcementVid"></youtube-media>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  name: "NewsUpdates",
  data() {
    return {
      imageUrls: [
        { src: require("@/assets/images/1.jpg") },
        { src: require("@/assets/images/2.jpg") },
        { src: require("@/assets/images/3.jpg") },
        { src: require("@/assets/images/4.jpg") },
        { src: require("@/assets/images/5.jpg") },
        { src: require("@/assets/images/6.jpg") },
        { src: require("@/assets/images/7.jpg") },
        { src: require("@/assets/images/8.jpg") },
        { src: require("@/assets/images/9.jpg") }
      ],
      genderReveal: "wFZE_HzKsFw",
      announcementVid: "oZoQ75kK464"
    };
  },
  computed: {
    handleWeeks() {
      const today = moment();
      const day = "30";
      const month = "08";
      const year = "2018";
      const conceptDate = moment(year + "/" + month + "/" + day, "YYYY-MM-DD");
      return Math.ceil((today.diff(conceptDate, "days") + 3) / 7);
    }
  },
  methods: {
    returnUrls(image) {
      return `require(${image})`;
    }
  }
};
</script>

<style scoped>
</style>