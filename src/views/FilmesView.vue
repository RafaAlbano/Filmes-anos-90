<script>
import CarroselComp from "@/components/CarroselComp.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useResultStore } from "@/stores/results";
export default {
  components: { CarroselComp },
  async created() {
    await this.get_results();
  },
  computed: {
    ...mapStores(useResultStore),
    ...mapState(useResultStore, ["results"]),
  },
  methods: {
    ...mapActions(useResultStore, ["get_results"]),
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
  <CarroselComp />
  <div class="filmes" v-for="result of results" :key="result.id">
    <p>{{ result.title }} - {{ result.id }}</p>
    <img :src="getImgUrl(result.poster_path)" alt="" />
  </div>
</template>
<style>
.filmes {
  display: inline-block;
  /* max-width: 350px;
  max-height: 500px;
  width: auto;
  height: auto;
  margin: 2% 3%; */
}
</style>
