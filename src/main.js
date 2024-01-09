import { createApp } from "vue";
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductsPage from './pages/ProductsPage.vue'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ShoppingCartPage
        },
        {
            path: '/products',
            component: ProductsPage
        },
        {
            path: '/products/:productID',
            component: ProductDetailPage
        }
    ]
})
const app = createApp(App)
app.use(routes)
app.mount('#app')