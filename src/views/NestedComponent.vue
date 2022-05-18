<template>
  <div>
    <PageTitle title="부모 컴포넌트에서 전달된 제목입니다."/>
  </div>
  <div>
    <PageTitle v-bind:title="title"/>
  </div>
  <div>
    <child-component @send-message="sendMessage" ref="child_component"/>
  </div>
  <div>
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
  <hr>
  <div>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component"></child-component>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle"; // 컴포넌트 import
import ChildComponent from "@/views/ChildComponent";

export default {
  name: "NestedComponent",
  components: {PageTitle, ChildComponent},  // 현재 페이지에서 사용할 컴포넌트 등록
  data() {
    return {
      title: "동적 Prop 전달",
    }
  },
  setup() {
  },
  created() {
  },
  mounted() {
    //this.$refs.child_component.$refs.btn.click(); // 주석처리 안하면 mount 될때 바로 실행됨..
    this.$refs.child_component.callFromParent();
  },
  unmounted() {
  },
  computed: {
    msg(){
      return this.$refs.child_component.msg3;
    }
  },
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
    },
    sendMessage(data) {
      console.log(data);
    },
    checkChild() {
      alert(this.msg);
    }
  }
}
</script>

<style scoped>

</style>