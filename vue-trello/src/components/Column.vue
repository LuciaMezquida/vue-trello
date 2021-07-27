<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <TaskList :listId="listId" :tasks="tasksList"></TaskList>
  </section>
</template>

<script>
import TaskList from "./TaskList";
export default {
  name: "Column",
  props: {
    listId: String,
    name: String,
  },
  components: {
    TaskList,
  },
  data: () => {
    return {
      tasksList: [
        { id: "1", title: "Aprender Vue", completed: false },
        { id: "2", title: "Aprender Vuex", completed: false },
      ],
    };
  },
};
</script>

<style scoped>
section {
  box-sizing: border-box;
  background-color: #eceff1;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5 rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin: 1rem;
  width: 100%;
}
@media screen and(min-width: 600px) {
  section {
    width: calc(50% - 2rem - 2px);
  }
}
@media screen and(min-width: 1024) {
  section {
    width: calc(33% - 2rem - 2px);
  }
}
@media screen and(min-width: 1200) {
  section {
    width: calc(25% - 2rem - 2px);
  }
}
header {
  color: #37474f;
  margin: 0;
  padding-bottom: 1rem;
}
h3 {
  margin: 0;
}
</style>
