<template>
  <div id="app">
    <ImageContainer />
    <Navigate />
  </div>
</template>

<script>
import ImageContainer from './components/ImageContainer.vue';
import Navigate from './components/Navigate.vue';

export default {
  name: 'app',
  components: {
    ImageContainer,
    Navigate
  }
};
</script>

<style>
html {
  background-color: navy;
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
