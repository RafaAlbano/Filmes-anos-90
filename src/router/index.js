import { createRouter, createWebHistory } from "vue-router";
import FilmesView from "../views/FilmesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Filmes",
      component: FilmesView,
    },
  ],
});

export default router;
