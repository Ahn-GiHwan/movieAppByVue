<template>
  <div id="app">
    <Header></Header>
    <router-view class="container"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style scope>
@font-face {
  font-family: "MaplestoryOTFLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: MaplestoryOTFLight;
}
.posters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
.poster {
  width: 300px;
}
.posterImg {
  width: 100%;
  height: 300px;
}
.card-body h4 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-body p {
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 765px) {
  .posters {
    display: block;
  }
  .poster {
    margin: 20px auto;
  }
  .card-header {
    text-align: center;
  }
  .posterImg {
    width: 50%;
    height: 150px;
  }
}
</style>
