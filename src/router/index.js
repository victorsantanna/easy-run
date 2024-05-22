import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/EventosView.vue')
    },
    {
      path: '/sobre-nos',
      name: 'sobrenos',
      component: () => import('../views/SobreNosView.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContatoView.vue')
    },
    {
      path: '/eventos/:id',
      name: 'eventoDetalhe',
      component: () => import('../views/DetalhesEvento.vue')
    },
  ]
})

export default router
