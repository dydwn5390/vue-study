<template>
  <parent-component :buttons="buttons"></parent-component>
  <hr/>
  <search-contact-component></search-contact-component>
</template>

<script>
import parentComponent from "@/components/parentComponent";
import SearchContactComponent from "@/components/searchContactComponent";

export default {
  name: "QuickStart",
  components: {SearchContactComponent, parentComponent},
  data() {
    return {
      buttons : [
        {text:"Hello", value: "영어"},
        {text:"씬짜오", value: "베트남어"},
        {text:"니하오", value: "중국어"},
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
  methods: {

  }
}
</script>

<style scoped>

</style>