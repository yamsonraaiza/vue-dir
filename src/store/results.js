
import Vue from "vue";
const state = {
    searchParam: '',
    searchResults: [],
    bookmarks: JSON.parse(window.localStorage.getItem('bookmarks'))
}
const getters = {
    getSearchResults: state => state.searchResults,
    getSearchParam: state => state.searchParam,
    getBookmarks: state => {
        return state.bookmarks
    }
}
const actions = {
    async fetchSearchResult ({ commit }, searchItem) {
         
        const res = await Vue.axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=$'4000f9ca'&app_key=$'ca87512908a4d1edd22d970ee692a779    —'&from=0&to=20`)
        const results = res.data.hits
        commit('updateSearchResults', results)
    },
    async fetchSearchItem ({ commit }, item) {
        commit('updateSearchItem', item)
    }
}
const mutations = {
    updateSearchResults: (state, results) => {
        state.searchResults = results
    },
    updateSearchItem: (state, item) => {
        state.searchParam = item
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}