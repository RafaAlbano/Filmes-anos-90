<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";

export default {
  async created() {
    await this.get_genres();
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["get_genres"]),
  },
};
</script>
<template>
  <div class="esquerda">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Filmes</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li v-for="genre of genres" :key="genre.id">
                  <a :href="`#${genre.id}`">{{ genre.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="central">
    <h1>HRFilmes</h1>
  </div>
</template>
<style scoped>
@import url("http://fonts.cdnfonts.com/css/dubiel");
.central {
  text-decoration: none;
  padding-right: 47%;
}
.central h1 {
  color: rgb(255, 0, 0);
  text-decoration: none;
  font-size: 3.5em;
  font-family: "Dubiel", sans-serif;
  font-family: "DubielPlain", sans-serif;
  text-align: center;
}
</style>
