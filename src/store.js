import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nowPlaying: [],
        popular: [],
        topRated: []
    },
    getters: {
        getNowPlaying(state) {
            return state.nowPlaying;
        },
        getPopular(state) {
            return state.popular;
        },
        getTopRated(state) {
            return state.topRated;
        }
    },
    mutations: {
        addNowPlaying(state) {
            axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a721dd910292becd0d78ed436463db21&language=en-US&page=1")
                .then(res => {
                    console.log(res.data);
                    return state.nowPlaying = res.data.results
                })
        },
        addPopular(state) {
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a721dd910292becd0d78ed436463db21&language=en-US&page=1")
                .then(res => {
                    return state.popular = res.data.results
                })
        },
        addTopRated(state) {
            axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a721dd910292becd0d78ed436463db21&language=en-US&page=1")
                .then(res => {
                    return state.topRated = res.data.results
                })
        }
    },
    actions: {
        addNowPlaying(context) {
            return context.commit('addNowPlaying');
        },
        addPopular(context) {
            return context.commit('addPopular');
        },
        addTopRated(context) {
            return context.commit('addTopRated');
        }
    }
})

