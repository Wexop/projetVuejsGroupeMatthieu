import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'paysList'
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/paysList',
      name: 'paysList',
      component: () => import('../views/PaysInformations.vue')
    },
    {
      path: '/paysList/:id',
      name: 'Detail',
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/gameOver',
      name: 'gameOver',
      component: () => import('../views/GOView.vue'),
      props: true
    }
  ]
})

export default router
