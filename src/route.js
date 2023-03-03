import { createRoute, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHpmhe.vue';

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AppAboutUs
        },
    ]
});

export { router }