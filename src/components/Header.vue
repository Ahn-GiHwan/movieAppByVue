<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link :to="{ name: 'Index' }" class="nav-link">
          M-M
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'NowPlaying' }" class="nav-link">
          Now Playing
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Popular' }" class="nav-link">
          Popular
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'TopRated' }" class="nav-link">
          Top Rated
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      addNowPlaying: "addNowPlaying",
      addPopular: "addPopular",
      addTopRated: "addTopRated",
    }),
  },
  created: function () {
    this.addNowPlaying();
    this.addPopular();
    this.addTopRated();
  },
};
</script>

<style>
</style>