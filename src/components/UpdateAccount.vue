<template>
  <v-app class="d-xs">
    <header-app />

    <v-main
      class="d-xs mx-auto overflow-y-auto elevation-4 pb-4"
      style="width: 100%"
    >
      <v-container style="width: 100%">
        <v-row
          align="center"
          class="mt-2"
        >
          <v-col cols="12">
            <div class="py-20 px-10">
              <h1 class="text-center pb-10 display-1">Edit Profile</h1>
              <v-form
                ref="form"
                v-model="valid"
                v-on:submi.prevent="submit"
                lazy-validation
              >
                <v-text-field
                  v-model="name"
                  type="text"
                  max="5"
                  min="1"
                  step="0.1"
                  :rules="nameRules"
                  label="Name"
                  filled
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  filled
                  disabled
                  required
                ></v-text-field>

                <div class="d-flex justify-center align-center pt-5">
                  <v-btn
                    color="warning"
                    class="mr-4"
                    @click="back"
                    outlined
                  >
                    Kembali
                  </v-btn>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="submit"
                    @keypress="submit"
                  >
                    Simpan
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <menu-bar
      @logout="logout"
      :value="value"
    />
  </v-app>
</template>

<script>
import HeaderApp from "./HeaderApp.vue";
import MenuBar from "./MenuBar.vue";
import { mapGetters } from 'vuex';

export default {
  name: "UpdateAccount",
  data() {
    return {
      isLoggedIn: false,
      value: 1,
      dataUser: {},
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [(v) => !!v || "E-mail is required"],
    };
  },
  created() {
    this.getUser();
  },
  components: {
    "header-app": HeaderApp,
    "menu-bar": MenuBar,
  },
  methods: {
    getUser() {
      const data = localStorage.getItem("user");
      this.dataUser = JSON.parse(data);
      this.email = this.dataUser.email;
      this.name = this.dataUser.name;
    },
    logout() {
      const user = localStorage.getItem("user");
      if (user !== null) {
        localStorage.removeItem("user");
        this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    },
    submit() {
      if (this.valid) {
        const data = {
          name: this.name,
        };
      try {
        this.$http
          .put(`${this.baseUrl}/api/User/${this.dataUser.id}`, data)
          .then((response) => {
            if (response.ok) {
                this.$toast.open({
                  message: "Berhasil mengubah profile",
                  type: "success",
                  position: "top-right",
                });

                setTimeout(() => {
                  this.$router.push("/account");
                }, 2000)
            }
          })
          .catch((error) => {
                  this.$toast.open({
                  message: "Gagal mengubah profile",
                  type: "error",
                  position: "top-right",
                });
                throw new Error(error);
      });
    } catch(err) {
      throw new Error(err);
    }
    }
    },
    back() {
      this.$router.push("/account");
    },
    },
    computed: {
          ...mapGetters([
      'baseUrl'
    ])
    }
};
</script>

<style scoped></style>
