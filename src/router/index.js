import { createRouter, createWebHistory } from "vue-router";
import store from '../store'

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/PokemonsList.vue"),
  },
  { 
    path: '/:name',
    name: 'detailed',
    component: () => import("@/views/PokemonDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if(to.path === '/') {
    store.commit('searchVisible', true)
    
  }
  else {
    store.commit('searchVisible', false)
  }
})

export default router
