import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/styles/main.scss'
import Home from './views/Home.vue'

const routes: any[] = [
    {path: '/', component: Home},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')