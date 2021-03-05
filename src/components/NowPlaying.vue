<template>
  <div>
    <hr />
    <h2>Now Playing</h2>
    <hr />
    <div class="posters">
      <div v-for="data in datas" :key="data.id" class="poster">
        <div class="card">
          <div class="card-header">
            <img
              :src="poster_image + data.poster_path"
              alt="poster_img"
              class="posterImg"
            />
          </div>
          <div class="card-body">
            <h4>{{ data.title }}</h4>
            <p>{{ data.overview }}</p>
          </div>
          <div class="card-footer">
            <router-link :to="{ path: `/detail/${data.id}` }">
              <button class="btn btn-outline-success">상세보기</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      poster_image: "http://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    ...mapGetters({
      datas: "getNowPlaying",
    }),
  },
  methods: {},
};
</script>
<style>
</style>