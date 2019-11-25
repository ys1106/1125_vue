import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
    {path: '/', component: 'MainPage', name: 'main' },
    {path: '/mypage', component: 'MyPage', name: 'mypage' },
    {path: '/preference', component: 'Preference', name: 'preference' },
    {path: '*', redirect:'/' }
]

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/components/${route.component}.vue`)
    }
})

Vue.use(Router)

export default new Router({
    routes,
    mode: 'history'
})