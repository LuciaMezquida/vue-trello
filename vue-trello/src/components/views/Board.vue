<template>
  <section>
    <h3><span>Mis Paneles</span> ▶ {{ name }}</h3>
    <div>
      <input
        type="text"
        placeholder="Añade una lista"
        v-model="listName"
        @keyup.enter="add()"
      />
      <div class="container">
        <Column
          v-for="(list, index) in boardList"
          :key="index"
          :listId="list.id"
          :name="list.name"
        ></Column>
      </div>
    </div>
  </section>
</template>

<script>
import Column from "@/components/Column";
export default {
  name: "Board",
  components: { Column },
  props: {
    name: String,
    id: String,
  },
  data: () => {
    return {
      listName: "",
      boardList: [
        { id: "1", name: "ToDo" },
        { id: "2", name: "Doing" },
      ],
    };
  },
  methods: {
    add() {
      this.boardList.push({ name: this.listName });
    },
  },
};
</script>

<style scoped>
section {
  text-align: left;
}
h3 {
  color: #37474f;
  text-align: left;
  margin: 1.5rem;
}
span {
  color: #546e7a;
}
input {
  box-sizing: border-box;
  background-color: #607d8b;
  color: #607d8b;
  border: 0;
  border-radius: 3px;
  font-size: 1.2rem;
  outline: 0;
  margin: 0 1rem;
  padding: 0.5rem;
  transition: all 600ms ease;
}
input:focus,
input:active {
  background-color: #fafafa;
}
input::placeholder {
  color: #fafafa;
}
</style>