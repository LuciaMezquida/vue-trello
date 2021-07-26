<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "BoardName",
  props: {
    id: Number,
    name: String,
  },
};
</script>

<style scoped>
</style>