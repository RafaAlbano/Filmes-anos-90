import { createRouter, createWebHistory } from "vue-router";
import FilmesView from "../views/FilmesView.vue";
import InformacoesView from "../views/InformacoesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Filmes",
      component: FilmesView,
    },
    {
      path: "/info/:id",
      name: "Informações",
      component: InformacoesView,
      props: true,
    },
  ],
});

export default router;
