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

<style>
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
</style>
