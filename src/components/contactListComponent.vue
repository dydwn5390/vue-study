<template>
  <div>
    <table id="list">
      <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
      </tr>
      </thead>
      <tbody id="concats">
      <tr v-for="(contact, index) in contacts" :key=index>
        <td>{{ contact.no }}</td>
        <td>{{ contact.name }}</td>
        <td>{{ contact.tel }}</td>
        <td>{{ contact.address }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "contactListComponent",
  components: {},
  props: ['contacts'],
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

* {
  box-sizing: border-box;
}

#list {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
}

#list td, #list th {
  border: 1px solid black;
  text-align: center;
}

#list > thead > tr {
  color: yellow;
  background-color: #757575;
}
</style>