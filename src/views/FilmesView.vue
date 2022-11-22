<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import { useMoviesStore } from "@/stores/movies";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  components: { MoviesComp },
  async created() {
    await this.get_genres();
    for (const genre of this.genres) {
      await this.getMoviesByGenre(genre.id);
    }
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapStores(useMoviesStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["get_genres"]),
    ...mapActions(useMoviesStore, ["getMoviesByGenre"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    mostraFilme(filme) {
      alert(filme.id);
    },
  },
};
</script>
<template>
  <div class="filmes">
    <div class="filme-info" v-for="genre of genres" :key="genre.id">
      <h1>{{ genre.name }}</h1>
      <div class="lista-filmes">
        <MoviesComp :genre="genre.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.lista-filmes {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
}

.lista-filmes::-webkit-scrollbar {
  height: 8px;
  width: 8px;
}
.lista-filmes::-webkit-scrollbar-thumb {
  background-color: rgb(123, 120, 120);
  border-radius: 20px;
}

.lista-filmes:after {
  transition: linear 0.3s;
  opacity: 1;
  content: "";
  width: 60px;
  height: 1733vh;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    #fff 1000%
  );
  will-change: opacity;
  pointer-events: none;
}
</style>
