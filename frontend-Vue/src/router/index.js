import App from "../App.vue"
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Debt from '../views/Debt.vue'
import AcceptDebt from '../views/AcceptDebt.vue'
import Payment from '../views/Payment.vue'
import ShowPayments from '../views/ShowPayments.vue'


 
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
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/showPayments',
    name: 'ShowPayments',
    component: ShowPayments,
  }

];
 
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});
 
export default router;