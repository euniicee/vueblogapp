
import { createRouter, createWebHistory } from 'vue-router';

// Lazy load views for better performance
const HomePage = () => import('../views/HomePage.vue');
const DetailPage = () => import('../views/DetailPage.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Vue Blog - Home'
    }
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: DetailPage,
    meta: {
      title: 'Post Detail'
    },
    props: true // Pass route params as props to component
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404 - Page Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

// Set page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Vue Blog';
  next();
});

export default router;