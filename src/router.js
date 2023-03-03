import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppProject from './pages/AppProject.vue';


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
            path: '/projects/:id',
            name: 'project',
            component: AppProject
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AppAboutUs
        },
    ]
});

export { router }