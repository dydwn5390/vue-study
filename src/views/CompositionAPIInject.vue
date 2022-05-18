<template>
  <h1>{{title}}</h1>
</template>

<script>
import {inject} from "vue";

export default {
  name: "CompositionAPIInject",
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {
    const title = inject('title');
    // inject를 사용해서 provide 에서 정의한 키(key)로 데이터를 전달받음
    return {title};
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