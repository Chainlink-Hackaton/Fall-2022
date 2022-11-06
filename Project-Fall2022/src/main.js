import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import { createPinia } from "pinia"

//import router from "./router/index"

const pinia = createPinia()

createApp(App).use(pinia)/*.use(router)*/.mount('#app')