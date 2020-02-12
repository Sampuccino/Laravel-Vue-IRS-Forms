import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Welcome to our Vuex!',
        employerIdentificationNumber: 'XXXXXXXXX',
        name: 'John Doe',
        tradeName: 'John Doe Inc.',
        address: 'Your Address Here',
        city: 'Big City',
        state: 'AA',
        zip: '99999',
        foreignCountryName: 'Country Name',
        foreignCountryProvince: 'province',
        foreignCountryZip: '99999',
        reportForThisQuarter: 4,
        calendarYear: 'YYYY',
        form941Line5AColumn2: 0.00,
        form941Line5BColumn2: 0.00,
        form8974Line12: 0.00
    },
    getters: {
        returnTitle: state => {
            return state.title;
        },
        returnEmployerIdentificationNumber: state => {
            return state.employerIdentificationNumber;
        },
        returnName: state => {
            return state.name;
        },
        returnTradeName: state => {
            return state.tradeName;
        },
        returnAddress: state => {
            return state.address;
        },
        returnCity: state => {
            return state.city;
        },
        returnState: state => {
            return state.state;
        },
        returnZip: state => {
            return state.zip;
        },
        returnForeignName: state => {
            return state.foreignCountryName;
        },
        returnForeignProvince: state => {
            return state.foreignCountryProvince;
        },
        returnForeignZip: state => {
            return state.foreignCountryZip;
        },
        returnCalendarYear: state => {
            return state.calendarYear;
        },
        returnQuarterSelected: state => {
            return parseInt(state.reportForThisQuarter);
        },
        returnForm941Line5AColumn2: state => {
            return state.form941Line5AColumn2;
        },
        returnForm941Line5BColumn2: state => {
            return state.form941Line5BColumn2;
        },
        returnForm8974Line12: state => {
            return state.form8974Line12;
        }

    },
    mutations: {
        updateEIN: (state, payload) => {
            state.employerIdentificationNumber = payload.employerIdentificationNumber;
        },
        updateName: (state, payload) => {
            state.name = payload.name;
        },
        updateTradeName: (state, payload) => {
            state.tradeName = payload.tradeName;
        },
        updateAddress: (state, payload) => {
            state.address = payload.address;
        },
        updateCity: (state, payload) => {
            state.city = payload.city;
        },
        updateState: (state, payload) => {
            state.state = payload.state;
        },
        updateZip: (state, payload) => {
            state.zip = payload.zip;
        },
        updateForeignCountryName: (state, payload) => {
            state.foreignCountryName = payload.foreignCountryName;
        },
        updateForeignCountryProvince: (state, payload) => {
            state.foreignCountryProvince = payload.foreignCountryProvince;
        },
        updateForeignCountryZip: (state, payload) => {
            state.foreignCountryZip = payload.foreignCountryZip;
        },
        updateCalendarYear: (state, payload) => {
            state.calendarYear = payload.calendarYear;
        },
        updateQuarterRadio: (state, payload) => {
            state.reportForThisQuarter = parseInt(payload.radioSelected);
        },
        storeForm941Line5AColumn2: (state, payload) => {
            state.form941Line5AColumn2 = parseFloat(payload.amount);
        },
        storeForm941Line5BColumn2: (state, payload) => {
            state.form941Line5BColumn2 = parseFloat(payload.amount);
        },
        storeForm8974Line12: (state, payload) => {
            state.form8974Line12 = parseFloat(payload.amount);
        }
    },
    actions: {
        updateEIN: (context, payload) => {
            context.commit('updateEIN', { employerIdentificationNumber: payload })
        },
        updateName: (context, payload) => {
            context.commit('updateName', { name: payload })
        },
        updateTradeName: (context, payload) => {
            context.commit('updateTradeName', { tradeName: payload })
        },
        updateAddress: (context, payload) => {
            context.commit('updateAddress', { address: payload })
        },
        updateCity: (context, payload) => {
            context.commit('updateCity', { city: payload })
        },
        updateState: (context, payload) => {
            context.commit('updateState', { state: payload })
        },
        updateZip: (context, payload) => {
            context.commit('updateZip', { zip: payload })
        },
        updateForeignCountryName: (context, payload) => {
            context.commit('updateForeignCountryName', { foreignCountryName: payload })
        },
        updateForeignCountryProvince: (context, payload) => {
            context.commit('updateForeignCountryProvince', { foreignCountryProvince: payload })
        },
        updateForeignCountryZip: (context, payload) => {
            context.commit('updateForeignCountryZip', { foreignCountryZip: payload })
        },
        updateCalendarYear: (context, payload) => {
          context.commit('updateCalendarYear', { calendarYear: payload })
        },
        updateQuarterRadio: (context, payload) => {
          context.commit('updateQuarterRadio', { radioSelected: parseInt(payload) })
        },
        storeForm941Line5AColumn2: (context, payload) => {
          context.commit('storeForm941Line5AColumn2', { amount: parseFloat(payload) })
        },
        storeForm941Line5BColumn2: (context, payload) => {
          context.commit('storeForm941Line5BColumn2', { amount: parseFloat(payload) })
        },
        storeForm8974Line12: (context, payload) => {
          context.commit('storeForm8974Line12', { amount: parseFloat(payload) })
        }
    }
})