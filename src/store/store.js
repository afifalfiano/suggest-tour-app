import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    state: {
        link: {
            url: 'https://suggesttour.herokuapp.com'
        }
    },
    getters: {
        baseUrl: state => {
            return state.link.url;
        }
    },
    mutations: {
    },
    actions: {
    }
});