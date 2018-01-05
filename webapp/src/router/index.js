import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'Index',
    components: {
        header: () => import('@/components/layout/header'),
        menu: () => import('@/components/layout/menu'),
        body: () => import('@/components/layout/body')
    },
    children: [{
        path: '/moduleA',
        name: 'ModuleA',
        component: () => import('@/components/layout/main')
    }]
}];

const router = new Router({routes});
export default router;