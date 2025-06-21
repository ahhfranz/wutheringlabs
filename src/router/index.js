import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Introduccion from '@/views/Introduccion.vue'
import Iniciantes from '@/views/Iniciantes.vue'
import Gacha from '@/views/Gacha.vue'
import Tierlist from '@/views/Tierlist.vue'
import Resonadores from '@/views/Resonadores.vue'
import Armas from '@/views/Armas.vue'
import Politicas from '@/views/Politicas.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/introduccion',
        name: 'Introduccion',
        component: Introduccion
    },
    {
        path: '/iniciantes',
        name: 'Iniciantes',
        component: Iniciantes
    },
    {
        path: '/gacha',
        name: 'Gacha',
        component: Gacha
    },
    {
        path: '/tierlist',
        name: 'Tierlist',
        component: Tierlist
    },
    {
        path: '/resonadores',
        name: 'Resonadores',
        component: Resonadores
    },
    {
        path: '/armas',
        name: 'Armas',
        component: Armas
    },
    {
        path: '/politicas',
        name: 'Politicas',
        component: Politicas
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router