import Vue from "vue";
import Vuex from "vuex";
import user from "./store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    navLinks: [
      { name: "Home", href: "home", icon: "fa fa-home" },
      { name: "About Us", href: "about", icon: "fa fa-newspaper" },
      { name: "Team", href: "team", icon: "fa fa-users" },
      { name: "Services", href: "services", icon: "fa fa-cogs" },
      { name: "Blog", href: "blog", icon: "fa fa-book" },
      { name: "Contact Us", href: "contact-us", icon: "fa fa-tty" },
      { name: "Login", href: "login", icon: "fa fa-tty" }
    ],
    song: "Mutter",
    band: "Rummstain",

  },
  getters: {
    navLinks: state => {
      return state.navLinks;
    },
    song: state => {
      return state.song;
    },
    band: state => {
      return state.band;
    }
  },
  mutations: {
    setBandInfo(state, bandInfo) {
      state.band = bandInfo.band;
      state.song = bandInfo.song;
    }
  },
  actions: {
    getSongNameStore(store) {
      store.dispatch("user/getSongNameUser2");
      // user.actions.getSongNameUser2()
    }
  }
});
