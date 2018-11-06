<template>
    <div class="image-container">
        <h1>SpaceView</h1>
        <div :onload="fetchPic()">
          <img :src="spaceImage" height="420" width="630" />
          <Content v-bind:description="description"/>
          <div class="button-container">
            <button v-on:click="navigateBack()">Yesterday</button>
            <button v-on:click="resetImage()">Today</button>
          </div>
        </div>
    </div>
</template>

<script>
import key from '../assets/key/key.js';
import Content from './Content.vue';

const getCurrentDate = () => {
  let date = new Date(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const getPreviousDate = () => {
  let date = new Date(),
    month = '' + (date.getMonth() + 1),
    day = '' + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + (day - 1);

  return [year, month, day].join('-');
};

const previousDate = getPreviousDate();

const currentDate = getCurrentDate();

export default {
  name: 'image-container',
  data() {
    return {
      spaceImage: '',
      images: null,
      description: ''
    };
  },
  components: {
    Content
  },
  methods: {
    async fetchPic() {
      let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${previousDate}&end_date=${currentDate}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        this.images = result;
        if (this.spaceImage) {
          return;
        }
        this.spaceImage = result[1].url;
        this.description = result[1].explanation;
      } catch (error) {
        return error.message;
      }
    },
    navigateBack() {
      this.spaceImage = this.images[0].url;
      this.description = this.images[0].explanation;
    },
    resetImage() {
      this.spaceImage = this.images[1].url;
      this.description = this.images[1].explanation;
    }
  }
};
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column;
}
button {
  border-radius: 15px;
  font-size: 15px;
  height: 50px;
  margin: 2rem 1rem 0 1rem;
  width: 90px;
}
button:focus {
  outline: 0;
}
h1 {
  color: #f7f7f7;
  font-family: 'Space Mono', monospace;
  font-size: 3.4rem;
  margin-top: -4rem;
}
</style>