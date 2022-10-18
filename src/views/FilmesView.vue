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
  <div class="filmes">
    <div class="filme-info" v-for="result of results" :key="result.id">
      <p class="filem-title">{{ result.title }} - {{ result.id }}</p>
      <span class="filme-img">
        <img :src="getImgUrl(result.poster_path)" alt="" width="200"/>
      </span>
    </div>
  </div>
</template>
<style>
.filmes {
  display: flex;
  flex-wrap: wrap;
}

.filme-info{
  width: 200px;
  margin: 0 8.5px;
  display: grid;
  grid-template-rows: 15% auto;
  grid-template-areas:
    'filme-title'
    'filme-img';
}

.filme-title {
  grid-area: 'filme-title';
}

.filme-img {
  grid-area: 'filme-img';
}
</style>
