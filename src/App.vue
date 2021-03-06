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
#app {
  font-family: "PT Sans", sans-serif;
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
