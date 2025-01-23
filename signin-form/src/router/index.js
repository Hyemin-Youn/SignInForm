import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Login 컴포넌트
import Home from '../components/Home.vue'; // Home 컴포넌트

const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
