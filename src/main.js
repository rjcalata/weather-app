import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(PrimeVue, {ripple: false})

app.component('Button', Button)

app.mount('#app')
