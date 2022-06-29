<template>
  <parent-component :buttons="buttons"></parent-component>
  <hr/>
  <search-contact-component></search-contact-component>
  <hr/>
  <todo-list></todo-list>
  <hr/>
  <SpeechBox></SpeechBox>
</template>

<script>
import parentComponent from "@/components/parentComponent";
import SearchContactComponent from "@/components/searchContactComponent";
import TodoList from "@/components/todo/TodoList";
import SpeechBox from "@/components/slot/SpeechBox";

export default {
  name: "QuickStart",
  components: {SpeechBox, TodoList, SearchContactComponent, parentComponent},
  data() {
    return {
      buttons: [
        {text: "Hello", value: "영어"},
        {text: "씬짜오", value: "베트남어"},
        {text: "니하오", value: "중국어"},
      ]
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

</style>