import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../components/Scroll.vue')

        },
        {
            path: '/form',
            name: 'form',
            component: () => import(/* webpackChunkName: "form" */ '../components/Form.vue')
        },

    ]
})

