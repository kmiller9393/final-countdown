<template>
  <div id="app">
    <ImageContainer />
  </div>
</template>

<script>
import ImageContainer from './components/ImageContainer.vue';

export default {
  name: 'app',
  components: {
    ImageContainer
  }
};
</script>

<style>
html {
  background-image: url('./assets/images/milky-way.jpg');
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
