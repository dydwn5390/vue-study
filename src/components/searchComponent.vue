<template>
  <p>
    이름:
    <input type="text" v-model.trim="name" :placeholder="placeholder" @keyup.enter="keyupEvent">
  </p>
</template>

<script>
export default {
  name: "searchComponent",
  components: {},
  props: ['placeholder'],
  data() {
    return {
      name: ''
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
    keyupEvent: function (e) {
      let val = e.target.value;
      if (val.length >= 2) {
        this.$emit('search', val);
      } else {
        this.$emit('search', '');
      }
    }
  }
}
</script>

<style scoped>

</style>