<template>
  <div>
    <PageTitle title="부모 컴포넌트에서 전달된 제목입니다."/>
  </div>
  <div>
    <PageTitle v-bind:title="title"/>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle"; // 컴포넌트 import
export default {
  name: "NestedComponent",
  components: {PageTitle},  // 현재 페이지에서 사용할 컴포넌트 등록
  data() {
    return {
      title: "동적 Prop 전달"
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