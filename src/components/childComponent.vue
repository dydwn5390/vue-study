<template>
  <div>
    <button class="buttonstyle" @click="clickEvent" v-bind:data-lang="buttonInfo.value">{{ buttonInfo.text }}</button>
  </div>
</template>

<script>
export default {
  name: "childComponent",
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  props: ['buttonInfo'],
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    clickEvent: function (e) {
      this.$emit('timeclick', e.target.innerText, e.target.dataset.lang);
    }
  }
}
</script>

<style scoped>
.buttonstyle {
  width: 120px;
  height: 30px;
  text-align: center;
}
</style>