import Vue from 'vue'
import VueRouter from 'vue-router';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { store } from './store'

import App from './App.vue'
import Index from "./components/Index"
import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Detail from './components/Detail'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false


const routes = [
  { name: "Index", path: "/", component: Index },
  { name: "NowPlaying", path: `/nowplaying`, component: NowPlaying },
  { name: "Popular", path: `/popular`, component: Popular },
  { name: "TopRated", path: `/topRated`, component: TopRated },
  { name: "Detail", path: `/detail/:id`, component: Detail }
]

const router = new VueRouter({ routes })

new Vue({
  store: store,
  render: h => h(App), router
}).$mount('#app')
