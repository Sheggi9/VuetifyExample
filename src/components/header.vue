<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      class="hidden-md-and-up"
    >
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            :key="`navigation${index}`"
            text
            v-for="(link, index) in navLinks"
            :to="link.href"
            active-class="red--text"
          >
            <v-list-item-action>
              <v-icon aria-hidden="true">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/home" tag="span">
          Application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          :key="`toolbar${index}`"
          text
          v-for="(link, index) in navLinks"
          :to="link.href"
          active-class="red--text"
        >
          <v-icon left aria-hidden="true">{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    navLinks: Array
  },
  data: () => ({
    activeLink: "",
    drawer: false
  }),
  methods: {
    goTo(link) {
      if (link === undefined) {
        link = this.$router.currentRoute.path;
      }
      let linkHref;
      if (link !== "/") {
        linkHref = "/" + link;
      } else {
        linkHref = link;
      }
      this.activeLink = link;
      if (linkHref === this.$router.currentRoute.path) {
        if (window.pageYOffset !== 0) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      } else {
        this.$router.push(link);
      }
    }
  },
  mounted() {
    this.goTo();
  }
};
</script>
