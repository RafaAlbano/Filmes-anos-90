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
      <p class="avaliacao">{{ filme.vote_average }}</p>
      <h3>Data de Publicação:</h3>
      <p class="pub">{{ filme.release_date }}</p>
      <h3>Sinopse:</h3>
      <p class="sinopse">{{ filme.overview }}</p>
      <h3>Duração:</h3>
      <p class="duracao">{{ filme.runtime }} minutos.</p>
    </div>
    <!-- {{ filme }} -->
  </main>
</template>
<style scoped>
.sinopse {
  text-align: justify;
}
.img,
.movie_img {
  margin-top: 3.8em;
  margin-left: 40%;
  text-align: center;
  margin-bottom: 5.5%;
}
.nome {
  color: white;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
}
main {
  display: flex;
  margin-left: 100px;
}
.direita {
  margin-top: 3em;
  margin-left: 200px;
  margin-right: 20%;
  margin-bottom: 2.5%;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: rgb(141, 140, 140);
  background-color: rgb(19, 19, 19);
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 0.5em;
  width: 900px;
}
h3 {
  font-family: "Times New Roman", Times, serif;
  color: white;
}
</style>
