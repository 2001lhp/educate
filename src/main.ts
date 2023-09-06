import './assets/main.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import 'vant/lib/index.css'
import pinia from './stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
