<template>
  <v-container
    style="max-width: 600px; margin: auto"
    fluid
    fill-height
  >
    <v-row
      align="center"
      class="pt-16"
    >
      <v-col
        cols="12"
        align-self="center"
        class="d-flex-row align-center justify-center"
      >
        <div class="py-20 px-10">
          <h1 class="text-center pb-10 display-1">Masuk Akun Anda</h1>
          <v-form
            ref="form"
            v-model="valid"
            v-on:submi.prevent="submit"
            lazy-validation
          >

            <v-text-field
              v-model="email"
              filled
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              filled
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <div class="d-flex justify-center align-center pt-5">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
                @keypress="submit"
              >
                Masuk
              </v-btn>
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="text-center">Belum punya akun? <router-link
            to="/signup"
            class="link"
          >Daftar disini</router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "LoginApp",
  data() {
    return {
      valid: true,
      showPassword: false,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 8 || "Min 8 characters",
      ],
    };
  },
  computed: {
    ...mapGetters(['baseUrl'])
  },
  methods: {
    submit() {
      if (this.valid) {
        const data = {
          email: this.email,
          password: this.password,
        };
        try {
          this.$http.post(`${this.baseUrl}/api/login`, data).then((response) => {
            if (response.ok) {
              this.$toast.open({
                message: "Berhasil masuk",
                type: "success",
                position: "top-right",
              });
              localStorage.setItem("user", JSON.stringify(response.body));

              setTimeout(() => {
                // this.$refs.form.reset();
                this.$router.push("/home");
              }, 2000);
            } else {
              this.$toast.open({
                message: response.body.message,
                type: "warning",
                position: "top-right",
              });
            }
          }).catch((error) => {
            this.$toast.open({
              message: error.body.message,
              type: "error",
              position: "top-right",
            });
          });
        } catch (error) {
          this.$toast.open({
            message: "Something wrong!",
            type: "error",
            position: "top-right",
          });
          throw new Error(error);
        }
      }
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.link {
  color: green;
  text-decoration: none;
}
</style>