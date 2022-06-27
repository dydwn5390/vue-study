<template>
  <div>
    <child-component v-for="(s, index) in buttons" :key="index" v-bind:button-info="s" @timeclick="timeClickEvent">
    </child-component>
    <hr/>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import childComponent from "@/components/childComponent";

export default {
  name: "parentComponent",
  components: {childComponent},
  data() {
    return {
      msg: ''
    }
  },
  props: ['buttons'],
  setup() {
  },
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    timeClickEvent: function (k, v) {
      this.msg = k + ", " + v;
    }
  }
}
</script>

<style scoped>

</style>