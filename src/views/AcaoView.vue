<script>
// import PostComp from "../components/PostComp.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useActionStore } from "@/stores/actions";
export default {
  async created() {
    await this.get_actions();
  },
  computed: {
    ...mapStores(useActionStore),
    ...mapState(useActionStore, ["actions"]),
  },
  methods: {
    ...mapActions(useActionStore, ["get_actions"]),
  },
};
</script>
<template>
  <h1>Ação</h1>
  <!-- <br />
  <br />
  <PostComp />
  <PostComp /> -->
  <p v-for="action of action" :key="action">
    <RouterLink to="/acao">{{ action.name }} - {{ action.id }}</RouterLink>
  </p>
</template>
<style></style>
