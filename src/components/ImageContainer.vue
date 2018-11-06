<template>
    <div class="image-container">
        <h1>NASA Astronomy Picture of The Day</h1>
        <div :onload="fetchPic()">
          <img :src="spaceImage" height="450" width="650" />
          <button v-on:click="navigateBack()">Yesterday</button>
          <button v-on:click="resetImage()">Today</button>
        </div>
    </div>
</template>

<script>
import key from '../assets/key/key.js';
const currentDate;
const previousDate;

export default {
  name: 'image-container',
  data() {
    return {
      spaceImage: '',
      images: null
    };
  },
  methods: {
    async fetchPic() {
      let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=2018-11-04&end_date=2018-11-05`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        this.images = result;
        if (this.spaceImage) {
          return;
        }
        this.spaceImage = result[result.length - 1].url;
      } catch (error) {
        return error.message;
      }
    },
    navigateBack() {
      this.spaceImage = this.images[0].url;
    },
    resetImage() {
      this.spaceImage = this.images[1].url;
    }
  }
};
</script>

<style scoped>
h1 {
  color: #f7f7f7;
  font-size: 3rem;
}
</style>