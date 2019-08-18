<template>
  <v-app>
    <header-component :navLinks="navLinks"></header-component>
    <transition name="fade" mode="out-in" @after-leave="afterLeave">
      <router-view></router-view>
    </transition>
    <v-content>
      <v-container>
        <button @click="getBand">getBand</button>
        <br>
        <button @click="getSongName">getSongName</button>
        <div>{{band}}</div>
        <div>{{song}}</div>
        <div>{{userDara}}</div>
      </v-container>
    </v-content>
    <footer-component :navLinks="navLinks" :showNav="false"></footer-component>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent
  },
  computed: {
    ...mapGetters(["navLinks", "band", "song", "songMod"]),
    ...mapGetters('user', {
      userDara: 'user',
    })
  },
  data: () => ({}),
  methods: {
    afterLeave() {
      this.$root.$emit("triggerScroll");
    },
    getBand() {
      this.$store.dispatch("user/changeInfo");
    },
    getSongName(){
      this.$store.dispatch("user/getSongNameUser");
      this.$store.dispatch("getSongNameStore");
    }
  }
};
</script>
