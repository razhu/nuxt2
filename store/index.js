import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      personalMessage: 'hi there this is ramiro',
      counter: 0,
      posts: [],
      post: {}
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    },
    actions: {
      incrementAction ({commit}) {
        commit('increment')
      }
    }
  })
}
export default store

