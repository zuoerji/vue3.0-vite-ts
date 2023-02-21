import home from '../views/home/index.vue'
import mine from '../views/mine/index.vue'

import { createRouter,createMemoryHistory,createWebHashHistory,createWebHistory } from 'vue-router'

const routes = [
    {
        path:"/home",
        name:'name',
        component:home,
        meta:{
            title:'',
            keepAlive:false
        }
    },
    {
        path:"/mine",
        name:'mine',
        component:mine,
        meta:{
            title:'',
            keepAlive:false
        }
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router