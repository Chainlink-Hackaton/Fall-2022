import App from "../App.vue"
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Debt from '../views/Debt.vue'
import AcceptDebt from '../views/AcceptDebt.vue'


 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/debt',
    name: 'Debt',
    component: Debt,
  },
  {
    path: '/accept',
    name: 'AcceptDebt',
    component: AcceptDebt,
  }

];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;