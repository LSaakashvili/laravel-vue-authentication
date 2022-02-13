import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        }
    },
    getters: {},
    actions: {
        register: ({ commit }, user) => {
            if (user.password === user.confirmpassword) {
                return axios.post("http://localhost:8000/api/register",
                user
            )
                .then(res => {
                    commit("setUser", res.data)
                })
                .catch(err => {
                    return false;
                })
            }
            else {
                return false;
            }
        },
        login: ({ commit }, user) => {
            return axios.post("http://localhost:8000/api/login",
            user
            )
            .then(res => {
                commit("setUser", res.data)
            })
        },
        logout: ({ commit }) => {
            return axios.post("http://localhost:8000/api/logout")
            .then(res => {
                commit("removeUser")
            })
        }
    },
    mutations: {
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
        removeUser: (state) => {
            state.user.token = false;
            state.user.data = false;
            sessionStorage.removeItem("TOKEN");
        }
    },
    modules: {}
})

export default store