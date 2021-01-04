import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Firebase from "@/firebase"

Firebase.init()
createApp(App).use(router).mount('#app')