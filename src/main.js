import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n/index.js'

const savedLocale = localStorage.getItem('locale') || 'fr'
document.documentElement.lang = savedLocale

createApp(App).use(router).use(i18n).mount('#app')
