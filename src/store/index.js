//Dependencies
import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";

//Import modules
import shop from './modules/shop';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shop,
        user
    },
    plugins: [createPersistedState()]
});