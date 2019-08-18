const state = {
  band: "BumBam",
  song: "dick",
  token: localStorage.getItem("user-token") || "",
  status: "",
  user: { login: "", email: "", pass: "" }
};

const getters = {
  band: state => state.band,
  song: state => state.song,
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user
};

const mutations = {
  AUTH_SUCCESS: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  AUTH_LOGOUT: state => {
    state.status = "";
    state.token = "";
    state.user = { login: "", email: "", pass: "" };
  },
  setUserInfo: (state, userInfo) => {
    state.user = userInfo;
  }
};

const actions = {
  changeInfo({ getters, commit, dispatch, rootState }) {
    console.log("Rootstate song: " + rootState.song);
    console.log("Rootstate band: " + rootState.band);
    console.log("State song: " + getters.song);
    console.log("State band: " + getters.band);
    commit(
      "setBandInfo",
      { song: getters.song, band: getters.band },
      { root: true }
    );
    // commit("setBandName", rootState.song);
    // dispatch("sdfgsdfg", rootState.song, { root: true });
  },
  getSongNameUser({ getters }) {
    console.group("getSongNameUser");
    console.log("User song: " + getters.song);
    console.log("User band: " + getters.band);
    console.groupEnd();
  },
  getSongNameUser2({ getters }) {
    console.group("getSongNameUser2");
    console.log("User song: " + getters.song);
    console.log("User band: " + getters.band);
    console.groupEnd();
  },
  AUTH_REQUEST: ({ state, commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      const token = "user-blablabla";
      commit("AUTH_SUCCESS", token);
      localStorage.setItem("user-token", token);
      resolve(user);
    }).then(user => {
      commit("setUserInfo", user);
    });
  },
  AUTH_LOGOUT: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit("AUTH_LOGOUT");
      localStorage.removeItem("user-token");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
