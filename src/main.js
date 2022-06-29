import {createApp} from 'vue'
import App from './App.vue'
import store from "@/store";
import router from './router'
import mixins from './mixins'


createApp(App)
    .use(router)
    .use(store)
    .mixin(mixins)
    .directive('focus', {
        mounted(el) {
            el.focus()
        }
    })
    .mount('#app')
