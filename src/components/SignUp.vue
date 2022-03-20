<template>
  <v-container
    style="max-width: 600px; margin: auto"
    fluid
    fill-height
  >
    <v-row align="center pt-16">
      <v-col
        cols="12"
        align-self="center"
        class="d-flex-row align-center justify-center"
      >
        <div class="py-20 px-10">
          <h1 class="text-center display-1 pb-10">Registrasi Akun</h1>
          <v-form
            ref="form"
            v-model="valid"
            v-on:submi.prevent="submit"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              filled
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              filled
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              filled
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
                Registrasi
              </v-btn>
              <!-- <v-btn
                    color="warning"
                    class="mr-4"
                    @click="back"
                    >
                    Kembali
                    </v-btn> -->
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="text-center">Sudah punya akun? <router-link
            to="/login"
            class="link"
          >Masuk disini</router-link>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "SignUp",
  data: () => ({
    valid: true,
    showPassword: false,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
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
  }),
  computed: {
    ...mapGetters([
      'baseUrl'
    ])
  },
  methods: {
    submit() {
      this.$refs.form.validate();
      if (this.valid) {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        try {
          this.$http.post(`${this.baseUrl}/api/register`, data).then((response) => {
            if (response.ok) {
              this.$toast.open({
                message: "Berhasil daftar",
                type: "success",
                position: "top-right",
              });

              setTimeout(() => {
                this.$refs.form.reset();
                this.$router.push("/login");
              }, 2000);
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