import Vue from 'vue';
import Vuex from 'vuex';
import Portfolio from "./portfolio";
import Stocks from "./stocks";

Vue.use(Vuex);

export const store = new Vuex.Store({
    mutations: {
        restoreState: (state, payload) => {
            console.log("restore state");
            state.Portfolio.funds = payload.funds;
            state.Stocks.stocks = payload.stocks; 
            state.Portfolio.portfolio = payload.portfolio; 
        }
    },
    actions: {
        restore( { commit } ) {
            /* Restore saved state */
            console.log("commit state");
            Vue.http.get('https://udemy-vuejs-7a74d.firebaseio.com/state.json')
                .then(response => {
                    
                    commit("restoreState",response.body);

                });
        }
    },
    modules: {
        Portfolio,
        Stocks
    }
});