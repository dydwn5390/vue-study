<template>
  <div class="container">
    <div class="header">{{ headerText }}</div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">{{ footerText }}</div>
  </div>
</template>

<script>
export default {
  name: "SpeechSlot",
  props: ['headerText', 'footerText'],
  components: {},
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
.container {
  width: 300px;
  margin: 10px;
  padding: 2px;
  border: solid 1px gray;
  float: left;
}

.header {
  padding: 4px 20px 4px 20px;
  background-color: orange;
  color: #000000;
  text-align: center;
}

.footer {
  padding: 4px 20px 4px 20px;
  background-color: #ffc8c8;
  text-align: left;
}

.content {
  padding: 10px;
  height: auto;
  min-height: 40px;
  text-align: left;
}
</style>