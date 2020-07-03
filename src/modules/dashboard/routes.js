export default [
    {
        path: '/',
        component: () => import('../dashboard/Index'),
        children: [],
        meta: {top: true, noAuth: true}
    },
    // Dashboard
    {
        name: 'Dashboard',
        path: '',
        component: () => import('../dashboard/Dashboard')
    },
    // Pages
    {
        name: 'User Profile',
        path: 'pages/user',
        component: () => import('../dashboard/pages/UserProfile')
    },
    {
        name: 'Notifications',
        path: 'components/notifications',
        component: () => import('../dashboard/component/Notifications')
    },
    {
        name: 'Icons',
        path: 'components/icons',
        component: () => import('../dashboard/component/Icons')
    },
    {
        name: 'Typography',
        path: 'components/typography',
        component: () => import('../dashboard/component/Typography')
    },
    // Tables
    {
        name: 'Regular Tables',
        path: 'tables/regular-tables',
        component: () => import('../dashboard/tables/RegularTables')
    },
    // Maps
    {
        name: 'Google Maps',
        path: 'maps/google-maps',
        component: () => import('../dashboard/maps/GoogleMaps')
    },
    // Upgrade
    {
        name: 'Upgrade',
        path: 'upgrade',
        component: () => import('../dashboard/Upgrade')
    }

];
