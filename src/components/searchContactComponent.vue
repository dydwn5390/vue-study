<template>
  <div>
    <search-component placeholder="두글자 이상 입력 후 엔터"
                      @search="searchEvent"></search-component>
    <contact-list-component :contacts="contactlist"></contact-list-component>
    <div v-show="isProcessing === true">조회 중</div>
  </div>
</template>

<script>
import SearchComponent from "@/components/searchComponent";
import ContactListComponent from "@/components/contactListComponent";
import _ from "lodash";

export default {
  name: "searchContactComponent",
  components: {ContactListComponent, SearchComponent},
  data() {
    return {
      contactlist: [],
      isProcessing: false
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
    searchEvent: function (name) {
      if (name == '')
        this.contactlist = [];
      else this.fetchContacts(name);
    },
    fetchContacts: _.debounce(function (name) {
      this.contactlist = [];
      this.isProcessing = true;
      var url = "http://sample.bmaster.kro.kr/contacts_long/search/" + name;
      var vm = this;
      fetch(url)
          .then(function (response) {
            return response.json()
          }).then(function (json) {
        vm.contactlist = json;
        vm.isProcessing = false;
      }).catch(function (ex) {
        console.log('parsing failed', ex);
        vm.contactlist = [];
        vm.isProcessing = false;
      })
    }, 300)
  }
}
</script>

<style scoped>

</style>