//App logic in here

const fetch = require('node-fetch');

const state = {
    allProducts: [],
    filter: {
        title: '',
        genres: [],
        years: [0, 9999],
        price: [0, 999]
    },
    filteredProducts: [],
    cartProducts: [],
};

const getters = {
    allProducts: (state) => state.allProducts,
    filteredProducts: (state) => state.filteredProducts,
    allGenres: (state) => {
        const genres = Array.from(new Set(state.allProducts.map(movie => movie.genre).map(genres => genres.split(', ')).flat())).sort();
        console.log(genres);
        return genres.map(genre => {
            return { name: genre, checked: state.filter.genres.includes(genre) }
        });
    },
    searchTerm: (state) => state.filter.title,

    cartProducts: (state) => state.cartProducts,

};

const actions = {
    queryApiAllProducts({ commit }) {

        return fetch('/api/products').then(response => {
            return response.json()
        }).then(json => {
            if (json.error) return //do some error handling

            commit('updateProducts', json);
        })
    },
    applyFilters({ commit, state }) {
        const allProducts = state.allProducts;
        const { filter } = state

        const filteredProducts = allProducts.filter((title) => {

            const yearFilter = title.year >= filter.years[0] && title.year <= filter.years[1];
            const priceFilter = title.price >= filter.price[0] && title.price <= filter.price[1];
            const nameFilter = filter.title.length
                ? title.name.toLowerCase().includes(filter.title.toLowerCase())
                : true;
            const genreFilter = filter.genres.length > 0
                ? filter.genres.some(genre => {
                    console.log()
                    return title.genre.includes(genre)
                })
                : true;

            // console.log(`${title.name}, Year: ${yearFilter}, Price: ${priceFilter}, Name: ${nameFilter}, Genre: ${genreFilter}`);
            return (yearFilter && priceFilter && nameFilter && genreFilter)
        })

        commit('updateFiltered', filteredProducts)
    },
    updateGenreFilter({ state, dispatch }, genre) {

        if (state.filter.genres.includes(genre)) {

            state.filter.genres = state.filter.genres.filter(filtergenre => filtergenre !== genre);
        } else {
            state.filter.genres.push(genre);
        }

        console.log(state.filter.genres);

        dispatch("applyFilters");

    },
    updateYearFilter({ state, dispatch }, years) {
        state.filter.years = years;
        dispatch("applyFilters");
    },
    updatePriceFilter({ state, dispatch }, prices) {
        state.filter.price = prices;
        dispatch("applyFilters");
    },
    searchTermUpdateHandler({ commit, dispatch }, searchTerm) {
        commit('updateFilterSearchTerm', searchTerm);
        dispatch("applyFilters");
    },
    getAllOrders({ rootState }) {

        // const token = getToken
        const token = rootState.user.token;

        return fetch('/api/order/all', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(json => {
            if (json.error) return

            return json
        })
    },
    getAllUsers({ rootState }) {
        
        const token = rootState.user.token;

        return fetch('/api/users/all', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(json => {
            if (json.error) throw json.error

            return json
        })
    },
    getOneOrder({ rootState }, orderId) {
        const token = rootState.user.token;

        return fetch(`/api/order/${orderId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            if (json.error) throw "No order found"
            return json
        })
    },
    getOneUser({ rootState }, userId) {
        const token = rootState.user.token;

        return fetch(`/api/users/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            if (json.error) throw json.error
            return json
        })
    },
    addProductToStore({ dispatch, rootState }, product) {
        const token = rootState.user.token;


        return fetch(`/api/products/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: product
        }).then(response => response.json()).then(json => {
            console.log(json);
            if (json.error) throw json.error
            dispatch('queryApiAllProducts');
            return json
        })
    },
    getOneProduct(state, productId) {
        console.log(state.nothing);
        return fetch(`/api/products/${productId}`, {
            method: 'GET',
            headers: {


            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            return json
        })
    },
    updateProduct({ dispatch, rootState }, product) {
        const token = rootState.user.token;

        return fetch(`/api/products/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(response => response.json()).then(json => {
            console.log(json);
            if (json.error) return json
            dispatch('queryApiAllProducts');
            return json
        })
    },
    deleteProduct({ dispatch, rootState }, productId) {
        const token = rootState.user.token;

        return fetch(`/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => response.json()).then(json => {
            if (json.error) return json
            dispatch('queryApiAllProducts');
            return json
        })

    },  
    
    deleteCart({dispatch, rootState}){
        const token = rootState.user.token;

        return fetch(`/api/products/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => response.json()).then(json => {
            if (json.error) return json
            dispatch('queryApiAllProducts');
            return json
        })
        
    },
 
    getCartProducts({rootState, commit}) {

        const token = rootState.user.token;

        fetch("/api/cart/", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            return res.json();
        })
            .then(json => {
                if (json.error) {
                    return "No Product In Cart"
                }
                console.log(json);
                commit("updateCartProducts", json)

            });
    },
    removeProductFromCart({rootState, commit}, productId) {

        const token = rootState.user.token;

        //Fetch DELETE reqest
        fetch(`/api/cart/remove/${productId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            return res.json();
        })
            .then(json => {
                if (json.error) {
                    return "No Product In Cart"
                }
                console.log(json);
                commit("updateCartProducts", json)

            });

        //In the then block
        //commit("updateCartProducts", json)
    },

    updateCartQuantity({ commit, rootState }, body) {

        const token = rootState.user.token;

        fetch('/api/cart/update', {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.error) {
                return
            }
            console.log(json)
            commit("updateCartProducts", json)

        })
    },
    removeCartProduct({rootState, commit}) {

        const token = rootState.user.token;

        //Fetch DELETE reqest
        fetch(`/api/cart/remove/`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            return res.json();
        })
            .then(json => {
                if (json.error) {
                    return "No Product In Cart"
                }
                console.log(json);
                commit("clearCart", json)

            });

        //In the then block
        //commit("updateCartProducts", json)
    },
    getUserOrders({rootState}){

        const token = rootState.user.token;

        return fetch("/api/order/", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            return res.json();
        })
            .then(json => {
                if (json.error) {
                    return json
                }
                return json
            });
    }
};

const mutations = {
    updateProducts(state, products) {
        state.allProducts = products;
    },
    updateFiltered(state, filteredProducts) {
        state.filteredProducts = filteredProducts;
    },
    updateFilterSearchTerm(state, searchTerm) {
        state.filter.title = searchTerm
    },
    updateCartProducts(state, cartProducts) {
        state.cartProducts = cartProducts;
    }
    ,
    clearCart(state){
        state.cartProducts = [];
    }

};

export default {
    state,
    getters,
    actions,
    mutations
}