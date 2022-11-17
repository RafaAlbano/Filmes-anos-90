<script>
import MoviesAPI from "@/api/movies";
const movieApi = new MoviesAPI();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async mounted() {
    this.filme = await movieApi.buscarMoviePorId(this.id);
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    formataData(data) {
      return new Date(data).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    },
    formataDuracao(duracao) {
      const min = duracao % 60;
      duracao = duracao - min;
      const hora = duracao / 60;
      return `${hora}h${min}min`;
    },
  },
};
</script>
<template>
  <main>
    <h1 class="nome">{{ filme.title }}</h1>
    <div class="movie_desc">
      <img :src="getImgUrl(filme.poster_path)" alt="" class="movie_img" />
      {{ filme.vote_average }}
      {{ filme.overview }}
      {{ filme.runtime }}
    </div>
  </main>
</template>
