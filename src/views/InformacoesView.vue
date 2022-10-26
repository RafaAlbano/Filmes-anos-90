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
  async created() {
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
    {{ filme }}
    <!-- <h1 class="nome">{{ movie.title }}</h1>
    <div class="movie_desc">
      <img
        :key="movie.id"
        :src="getImgUrl(movie.poster_path)"
        alt=""
        class="movie_img"
      />
      <form>
        <div class="desc">
          <h3 class="nome3">
            Gênero :
            <span class="movie" v-for="genre of movie.genres" :key="genre.id">{{
              genre.name
            }}</span>
          </h3>
          <h3 class="nome3">
            Data de lançamento: {{ formataData(movie.release_date) }}
          </h3>
          <h3 class="nome3">
            Avaliação: {{ parseFloat(movie.vote_average).toFixed(1) }}
          </h3>
          <h3 class="nome3">
            Duração do filme: {{ formataDuracao(movie.runtime) }}
          </h3>
        </div>
        <h3 class="nome4 sinopse">Sinopse: {{ movie.overview }}</h3>
        <h3 class="nome4 tagline">"{{ movie.tagline }}"</h3>
      </form>
    </div> -->
  </main>
</template>
