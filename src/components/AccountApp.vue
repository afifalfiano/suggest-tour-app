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

            <v-card
              class="mx-auto mb-6  elevation-2 mr-10 ml-10 rounded-lg"
              max-width="100%"
              outlined
            >
              <div class="d-flex justify-center align-center pt-5 mx-auto">
                <v-img
                  alt="Avatar"
                  max-width="100"
                  class="rounded-circle"
                  :src="data"
                ></v-img>
              </div>
              <div class="d-flex-row justify-center align-center text-center pb-4">
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    Profil
                  </div>

                  <v-list-item-title class="text-h5 mb-1">
                    {{dataUser.name}}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{dataUser.email}}</v-list-item-subtitle>
                </v-list-item-content>
              </div>
            </v-card>

            <v-row
              align="center"
              justify="space-around"
            >
              <v-btn
                tile
                color="primary"
                @click="onUpdateProfile"
              >
                <v-icon left>
                  mdi-pencil
                </v-icon>
                Edit
              </v-btn>
            </v-row>

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
  name: "AccountApp",
  data() {
    return {
      isLoggedIn: false,
      value: 1,
      data: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
      dataUser: {},
    };
  },
  created() {
    this.getUser();
    this.getUserEndpoint();
  },
  components: {
    "header-app": HeaderApp,
    "menu-bar": MenuBar,
  },
  methods: {
        getUserEndpoint() {
      try {
        this.$http
          .get(`${this.baseUrl}/api/User/${this.dataUser.id}`)
          .then((response) => {
            
            delete response.body.data[0].review;
            this.dataUser = response.body.data[0];
            localStorage.setItem("user", JSON.stringify(this.dataUser));
          })
          .catch((error) => {
            this.$toast.open({
              message: error.body.message,
              type: "error",
              position: "top-right",
            });
            throw new Error(error);
          });
      } catch(error) {
        throw new Error(error);
      }
      },
    getUser() {
      const data = localStorage.getItem("user");
      this.dataUser = JSON.parse(data);
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
    onUpdateProfile() {
      this.$router.push("/account/update");
    },
  },
  computed: {
    ...mapGetters(['baseUrl'])
  }
};
</script>

<style scoped>
</style>    
