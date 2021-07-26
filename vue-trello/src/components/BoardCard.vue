<template>
  <router-link class="board-card" :to="{ name: 'board', params: { name, id } }">
    <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: "BoardName",
  props: {
    id: String,
    name: String,
  },
};
</script>

<style scoped>
.board-card {
  background-color: #546e7a;
  box-shadow: 0 0 0 0.5 rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 5px;
  color: #fafafa;
  text-decoration: none;
  text-align: left;
  padding: 1rem;
  margin: 0.5rem 1.5rem;
  transition: all 600ms ease;
  width: 100%;
  height: 100px;
}
.board-card-title {
  font-size: 1.2rem;
}
.board-card:hover {
  font-weight: bold;
  background-color: #90a4ae;
}

@media screen and(min-width: 600px) {
  .board-card {
    width: 33%;
  }
}
@media screen and(min-width: 1024) {
  .board-card {
    width: 250px;
  }
}
</style>