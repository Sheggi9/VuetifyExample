<template>
  <v-footer app dark fixed>
    <v-row justify="center" no-gutters>
      <v-row justify="center" v-if="showNav">
        <v-btn
          v-for="(link, index) in navLinks"
          :key="index"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.name }}
        </v-btn>
      </v-row>
      <v-col class="lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    navLinks: Array,
    showNav: Boolean
  },
  name: "footerComponent",
  data: () => ({}),
  mounted() {}
};
</script>

<style scoped></style>
