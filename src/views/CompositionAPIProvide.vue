<template>
  <CompositionAPIInject />
</template>

<script>
import { provide } from "vue";
import CompositionAPIInject from "@/views/CompositionAPIInject";

export default {
  name: "CompositionAPIProvide",
  components: {CompositionAPIInject},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {
    provide('title', 'Vue.js 프로젝트'); // provide 함수를 통해서 전달할 key, value 설정
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