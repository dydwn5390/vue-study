<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </div>
    <todo-component></todo-component>
  </div>
</template>

<script>
import InputTodo from "@/components/todo/InputTodo";
import TodoComponent from "@/components/todo/TodoComponent";

export default {
  name: "TodoList",
  components: {TodoComponent, InputTodo},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {}
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.header {
  background-color: #707070;
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

</style>