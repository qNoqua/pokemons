import { createRouter, createWebHistory } from "vue-router";
import store from '../store'
const publicPath = process.env.BASE_URL


const routes = [
  {
    path: publicPath,
    name: "main",
    component: () => import("@/views/PokemonsList.vue"),
  },
  { 
    path: `${publicPath}:name`,
    name: 'detailed',
    component: () => import("@/views/PokemonDetails.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.path === publicPath) {
    store.commit('searchVisible', true)
  }
  else {
    store.commit('searchVisible', false)
  }
  if (publicPath !== '/' && to.path === '/'){
    next({name: 'main'})
  }
  next();
})

export default router
