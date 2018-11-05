<template>
   <div class="navigate">
     <button v-on:click="navigate()">Previous</button>
   </div>
</template>

<script>
export default {
  name: 'navigate',
  methods: {
    navigate() {
      console.log('navigate');
    }
  }
};
</script>