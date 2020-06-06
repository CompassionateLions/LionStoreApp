//Dependencies
import Vuex from 'vuex';
import Vue from 'vue';

//Import modules
import shop from './modules/shop';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shop,
        auth
    }
});