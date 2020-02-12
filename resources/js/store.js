import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Welcome to our Vuex!',
        employerIdentificationNumber: 'XX-XXXXXXX'
    },
    getters: {
        returnTitle: state => {
            return state.title;
        },
        returnEmployerIdentificationNumber: state => {
            return state.employerIdentificationNumber;
        }

    },
    mutations: {
        updateEIN: (state, payload) => {
            state.employerIdentificationNumber = payload.employerIdentificationNumber;
        }
    },
    actions: {
        updateEIN: (context, payload) => {
            context.commit('updateEIN', { employerIdentificationNumber: payload })
        }
    }
})
