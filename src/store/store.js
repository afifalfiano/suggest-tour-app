import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // strict: true,
    state: {
        user: [
            {
                id: 1,
                username: 'afif',
                isRegistered: false,
                count: 0,
            },
            {
                id: 2,
                username: 'afif',
                isRegistered: false,
                count: 0,
            },
            {
                id: 3,
                username: 'afif',
                isRegistered: false,
                count: 0,
            },
        ]
    },
    getters: {
        allUser: state => {
            return state.user;
        }
    },
    mutations: {
        registerAllUser(state, payload){
            console.log('mumtate');
           const data =  state.user.map((item, index) => {
                return item.count * (payload +  index);
            });

            return data;
        }
    },
    actions: {
        registerUser(context, payload){
            console.log(payload, 'py')
            console.log(context, 'cek');
            try {
                // setTimeout(() => {
                    context.commit('registerAllUser', payload);
                // }, 1000)
              } catch (error) {
                console.error(error)
              }
        }
    }
});