import { createStore } from 'vuex'

export default createStore({
  state: {
    navList: [
      {
        name: "Цены",
        link: "#!",
      },
      {
        name: "Отзывы",
        link: "#!",
      },
      {
        name: "Особенности платформы",
        link: "#!",
      },
    ],
  },
  getters: {
    navList(state){
      return state.navList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
