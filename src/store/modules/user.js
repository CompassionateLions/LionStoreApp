const state = {
    id: '',
    token: '',
    role: '',
    email:'',
    loggedIn: false
}

const getters = {

}

const actions = {
    loginUser({commit}, data){

        return fetch(`/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(json => {
            if(json.error) return json

            commit('setUser', json);
            return json

        })
    },
    // signUpUser({commit}, data){
    //same as login but to signup endpoint instead

    signupUser({commit}, data){

        return fetch(`/api/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then(json => {
            if(json.error) return json

            commit('setUser', json);
            return json

        })
    },
    logoutUser({commit}){
        commit('clearUser');
    }
}

const mutations = {
    clearUser(state){
        state.id = '',
        state.token = '',
        state.role = '',
        state.email = '',
        state.loggedIn = false
    },
    setUser(state, user){
        state.id = user.id,
        state.token = user.token,
        state.role = user.role,
        state.email = user.email,
        state.loggedIn = true
    }

}

module.exports = {
    state,
    getters,
    actions,
    mutations
}