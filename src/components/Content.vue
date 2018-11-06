<template>
  <div class="content">
    <p>{{ description }}</p>
  </div>    
</template>

<script>
export default {
  name: 'content',
  props: ['description']
};
</script>

<style>
.content {
  color: #f7f7f7;
  font-weight: 600;
  max-height: 110px;
}
</style>