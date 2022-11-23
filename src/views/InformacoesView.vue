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
      return `https://image.tmdb.org/t/p/w400${poster_path}`;
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
    <div class="movie_desc">
      <img :src="getImgUrl(filme.poster_path)" alt="" class="movie_img" />
    </div>
    <div class="direita">
      <h1 class="nome">{{ filme.title }}</h1>
      <h3>Avaliação:</h3>
      {{ filme.vote_average }}
      <h3>Sinopse:</h3>
      {{ filme.overview }}
      <h3>Duração:</h3>
      {{ filme.runtime }}
    </div>
  </main>
</template>
<style scoped>
.img,
.movie_img {
  margin-top: 4.5em;
  margin-left: 20%;
  text-align: center;
}
.nome {
  color: white;
  font-family: 'Times New Roman', Times, serif;
}
main {
  display: flex;
  margin-left: 100px;
}
.direita {
  margin-top: 3em;
  margin-left: 200px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: rgb(218, 214, 214);
  margin-right: 20%;
  background-color: rgb(19, 19, 19);
  padding-left: 3em;
}
</style>
