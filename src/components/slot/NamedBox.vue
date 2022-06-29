<template>
  <layout>
    <template v-slot:header>
      <h1>헤더 영역</h1>
    </template>
    <template v-slot:sidebar>
      <div>
      <ul class="menu">
        <li v-for="sidebar in sidebars" :key="sidebar.menu">
          <a :href="sidebar.link">{{ sidebar.menu }}</a>
        </li>
      </ul>
      </div>
    </template>
    <template v-slot:content>
      <div>
        <h2>컨텐츠 영역</h2>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
        <p>김수한무 거북이와 두루미 ... (생략)</p>
      </div>
    </template>
  </layout>
</template>

<script>

export default {
  name: "NamedBox",
  components: {},
  data() {
    return {
      sidebars: [
        {menu: "Home", link: "#"},
        {menu: "About", link: "#"},
        {menu: "Contact", link: "#"},
        {menu: "Vue.js", link: "#"},
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
ul.menu {
  position: relative;
  padding: 5px 5px 5px 5px;
  list-style: none;
  font-style: italic;
}

ul.menu a {
  text-decoration: none;
}
</style>