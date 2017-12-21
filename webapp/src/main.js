import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import App from './App';
import router from './router';

// import '../static/test.css';
// import '../static/test.scss';
// import '../static/test.sass';
// import '../static/test.less';

Vue.use(ElementUI, { size: 'small' });

Vue.component('App', App);
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});