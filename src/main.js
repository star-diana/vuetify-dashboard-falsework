import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import store from './plugins/store';
import vuetify from './plugins/vuetify';
import api from './plugins/api';
import './plugins/base';
import './plugins/chartist';
import './plugins/vee-validate';
import { optionalChaining } from './lib/utils';

Vue.config.productionTip = false;

Vue.prototype.$$ = optionalChaining;

window.api = api;

export default new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
