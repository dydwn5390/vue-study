<template>
  <speech-slot :header-text="A.header" :footer-text="A.footer">
    <div>
      <p>
        {{ A.message }}
      </p>
    </div>
  </speech-slot>
  <speech-slot class="sanders" :header-text="B.header" :footer-text="B.footer">
    <div>
      <p class="sanders-content">
        {{ B.message }}
      </p>
    </div>
  </speech-slot>
</template>

<script>
import SpeechSlot from "@/components/slot/SpeechSlot";

export default {
  name: "SpeechBox",
  components: {SpeechSlot},
  data() {
    return {
      A: {
        header: "오바마 대통령 고별 연설문",
        footer: "2017.01.10-시카고",
        message: `저의 동료 국민 여러분, ... (지면 관계상 생략)`
      },
      B: {
        header: "버니 샌더스 경선 패배 연설문",
        footer: "2016.07.25-필라델피아 웰스파고",
        message: `감사합니다. 여러분 정말 감사합니다. ... (지면 관계상 생략)`
      }
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
.sanders {
  background-color: antiquewhite;
}

.sanders-content {
  font-family: sans-serif;
  text-decoration: underline;
}
</style>