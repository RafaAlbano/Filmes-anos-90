<script>
// import CarroselComp from "@/components/CarroselComp.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import { useMoviesStore } from "@/stores/movies";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  // components: { CarroselComp },
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
  <!-- <CarroselComp /> -->
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
@import url("http://fonts.cdnfonts.com/css/dubiel");

/* .filmes { */
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
/* } */

/* .filme-info { */
  /* width: 200px; */
  /* margin: 8px 8px 8px 8px; */
  /* display: grid; */
  /* grid-template-rows: 15% auto; */
  /* grid-template-areas: */
    /* "filme-title" */
    /* "filme-img"; */
/* } */

/* .filme-title { */
  /* grid-area: "filme-title"; */
/* } */

/* .filme-img { */
  /* grid-area: "filme-img"; */
/* } */
/* p { */
  /* color: rgba(248, 241, 241, 0.863); */
  /* font-family: Arial, Helvetica, sans-serif; */
  /* font-size: 0.9em; */
/* } */
/* h2 { */
  /* color: rgb(255, 0, 0); */
  /* padding-left: 2%; */
  /* margin-top: 1%; */
  /* font-family: "Dubiel", sans-serif; */
  /* font-family: "DubielPlain", sans-serif; */
/* } */
.filme-info{
display:flex;
overflow-y: auto;
height: auto;
width: 50%;
}
</style>
