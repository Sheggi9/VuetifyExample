<template>
  <v-content>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>

        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to Vuetify
          </h1>
          <p class="subheading font-weight-regular">
            For help and collaboration with other Vuetify developers,
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {}
};
</script>
