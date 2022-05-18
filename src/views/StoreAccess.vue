<template>
  <p>Count: {{count}}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
  name: "StoreAccess",
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    count(){
      return this.$store.state.count;
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
    increment() {
      this.$store.commit('increment');
    }
  }
}
</script>

<style scoped>

</style>