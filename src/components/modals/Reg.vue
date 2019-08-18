<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text dark>
            <v-form>
              <v-text-field
                :value="userLogin"
                label="Login"
                name="Login"
                prepend-icon="fa fa-user-circle"
                type="text"
                v-model="userLogin"
                required
              ></v-text-field>

              <v-text-field
                label="Email"
                name="Email"
                prepend-icon="fa fa-user-circle"
                type="email"
                v-model="userEmail"
                required
              ></v-text-field>

              <v-text-field
                :value="userLogin"
                id="password"
                label="Password"
                name="password"
                prepend-icon="fa fa-lock"
                type="password"
                v-model="userPassword"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark @click="login">Reg</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark @click="Logout">Logout</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark @click="Bum">Bum</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Reg",
  data: () => ({
    userLogin: "123",
    userEmail: "",
    userPassword: ""
  }),
  methods: {
    login() {
      const { userLogin, userEmail, userPassword } = this;

      this.$store
        .dispatch("user/AUTH_REQUEST", { userLogin, userEmail, userPassword })
        .then(() => {
          this.$router.push("/");
        });
    },
    Logout() {
      this.$store.dispatch("user/AUTH_LOGOUT").then(() => {
        this.$router.push("/");
      });
    },
    Bum() {
      console.log(this.userDara);
      // this.userLogin = this.userDara.userLogin
      // this.userEmail = this.userDara.userEmail
      // this.userPassword = this.userDara.userPassword
    }
  },
  computed: {
    ...mapGetters("user", {
      userDara: "user"
    })
  },
  mounted() {
    this.userLogin = this.userDara.userLogin
    this.userEmail = this.userDara.userEmail
    this.userPassword = this.userDara.userPassword
  }
};
</script>
<style scoped></style>
