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
  },
};
</script>
<template>
  <CarroselComp />
  <p v-for="result of results" :key="result.id">
    {{ result.title }} - {{ result.id }}
  </p>
</template>
<style></style>
