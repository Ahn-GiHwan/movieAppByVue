<template>
  <div>
    <hr />
    <h2>Detail - {{ data.title }}</h2>
    <hr />
    <div class="detail_body">
      <img
        :src="poster_image + data.poster_path"
        alt="이미지"
        class="detailImg"
      />
      <div class="detail_info">
        <h3>{{ data.title }}</h3>
        <p>{{ data.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data: function () {
    return {
      data: [],
      poster_image: "http://image.tmdb.org/t/p/w500",
    };
  },
  methods: {
    init: function () {
      this.axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$router.history.current.params.id}?api_key=a721dd910292becd0d78ed436463db21&language=en-US`
        )
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
        });
    },
  },
  created: function () {
    if (this.$router.history.current.params.id === undefined) {
      this.$router.push("/");
      return;
    }
    this.init();
    // console.log(this.$router.history.current.params.id);
  },
};
</script>
<style>
.detail_body {
  display: flex;
}
.detailImg {
  border-radius: 10px;
  width: 50%;
  height: 100%;
  margin: 20px;
}
.detail_info {
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  margin: 20px;
}
</style>