import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, user) {
      // 로그인 로직 (예: API 호출 후 사용자 정보 저장)
      commit('setUser', user);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});

export default store;
