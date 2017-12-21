import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '/',
    name: 'Index',
    components: {
        header: () => import('../components/layout/header'),
        // header: resolve => require(['../components/layout/header.vue'], resolve)
        // sidebar: resolve => require(['../components/layout/SideBar'], resolve),
        // body: resolve => require(['../components/layout/Body'], resolve),
    }
}];

const router = new Router({routes});
export default router;