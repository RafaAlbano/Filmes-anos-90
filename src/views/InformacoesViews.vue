<script>
import GenresAPI from "@/api/genres";
const genreApi = new GenresAPI();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async created() {
    this.filme = await genreApi.buscarGenrePorId(this.id);
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
    <h1 class="nome">{{ genre.title }}</h1>
    <div class="genre_desc">
      <img
        :key="genre.id"
        :src="getImgUrl(genre.poster_path)"
        alt=""
        class="filme_img"
      />
      <form>
        <div class="desc">
          <h3 class="nome3">
            Gênero :
            <span class="genre" v-for="genre of genre.genres" :key="genre.id">{{
              genre.name
            }}</span>
          </h3>
          <h3 class="nome3">
            Data de lançamento: {{ formataData(genre.release_date) }}
          </h3>
          <h3 class="nome3">
            Avaliação: {{ parseFloat(genre.vote_average).toFixed(1) }}
          </h3>
          <h3 class="nome3">
            Duração do filme: {{ formataDuracao(genre.runtime) }}
          </h3>
        </div>
        <h3 class="nome4 sinopse">Sinopse: {{ genre.overview }}</h3>
        <h3 class="nome4 tagline">"{{ genre.tagline }}"</h3>
      </form>
    </div>
  </main>
</template>
