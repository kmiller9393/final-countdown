<template>
    <div class="image-container">
        <h1>NASA Astronomy Picture of The Day</h1>
        <div :onload="fetchPic()">
          <img :src="spaceImage" height="450" width="650" />
        </div>
    </div>
</template>

<script>
import { fetchSpacePic } from '../utils/apiCalls';
import key from '../assets/key';

export default {
  name: 'image-container',
  data() {
    return {
      spaceImage: ''
    };
  },
  methods: {
    fetchPic() {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(response => response.json())
        .then(spaceData => (this.spaceImage = spaceData.url));
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