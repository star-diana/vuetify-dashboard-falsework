import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routeList = [];
const context = require.context('../modules', true, /routes\.js$/);
context.keys().forEach(r => {
    const {default: routes} = context(r);
    routeList = routeList.concat(routes);
});

const topRouteList = routeList.filter(r => r?.meta?.top);
const children = routeList.filter(r => !r?.meta?.top);
const Index = topRouteList.find(r => r?.path === '/');
Index.children = children;

const router = new Router({
    mode: 'history',
    routes: topRouteList
});

// router.beforeEach((to, from, next) => {
//     window.np.start();
//     next();
// });
//
// router.afterEach(() => {
//     window.np.done();
// });

export default router;
