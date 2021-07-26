<template>
  <footer>
    <span>👩🏻‍💻 with 😸 &amp; <a href="//vuejs.org">Vue.js</a></span>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  box-sizing: border-box;
  background-color: #cfd8dc;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  width: 100%;
}
a {
  text-decoration: none;
  color: #546e7a;
}
</style>