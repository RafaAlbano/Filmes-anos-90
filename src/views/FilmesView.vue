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
  <h2>Filmes</h2>
  <div class="filmes">
    <div class="filme-info" v-for="genre of genres" :key="genre.id">
      <!-- <p class="filem-title">{{ result.title }} - {{ result.id }}</p> -->
      <!-- <span class="filme-img">
        <img :src="getImgUrl(genre.poster_path)" alt="" width="200" />
      </span> -->
      <h1 :id="genre.id">{{ genre.name }} - {{ genre.id }}</h1>
      <MoviesComp :genre="genre.id" quantidade="5" />
    </div>
  </div>
</template>
<style>
.filme-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
}
.filme-info.flex.scroller {
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  min-height: 355px;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: height 0.5s linear;
}
</style>
