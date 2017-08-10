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
    }
  })
}
export default store

// import Vuex from 'vuex'

// const store = new Vuex.Store({
//   state: {
//     counter: 0,
//     personalMessage: 'hi there this is ramiro'
//   },
//   mutations: {
//     increment (state) {
//       state.counter++
//     }
//   }
// })

// export default store
