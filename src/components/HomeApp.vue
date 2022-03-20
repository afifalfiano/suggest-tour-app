<template>
  <v-app class="d-xs">
    <header-app />

    <v-main
      class="d-xs mx-auto overflow-y-auto elevation-4 pb-14"
      style="width: 100%"
    >
      <v-container style="width: 100%">
        <v-row
          align="center"
          class="mt-2"
        >
          <v-col
            cols="12"
            class="pb-0"
          >
            <v-text-field
              outlined
              v-model="search"
              label="Cari tempat wisata"
              prepend-inner-icon="mdi-search-web"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="loading">
          <v-col cols="12">
            <v-skeleton-loader
          class="mx-auto"
          type="card-avatar"      
        ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row align="center" v-if="!loading">
          <v-col
            cols="12"
            class="pt-0"
            v-for="data in filterDestination"
            :key="data.id"
          >
            <v-container fluid>
              <v-row align="center">
                <v-col
                  cols="4"
                  class="pr-0 pl-0 pt-0 pb-0"
                >
                  <v-img
                    aspect-ratio="1"
                    :src="data.image"
                    min-height="180"
                    class="d-flex align-center justify-center"
                    style="transform: translateY(5px)"
                  ></v-img>
                </v-col>
                <v-col
                  cols="8"
                  class="pl-1 pr-0 "
                >
                  <div class="d-flex-row">
                    <v-card-title class="d-flex justify-start pb-0 pr-0 pt-0">{{data.name}}</v-card-title>

                    <div class="d-flex align-center justify-start pl-3" style="display: flex;">
                      <v-rating
                        :value="data.rating"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                     <div class="grey--text ms-4">
                      ({{data.totalReview}})
                    </div>
                    </div>
                  </div>

                  <v-card-text class="pt-1 pb-1 pr-0">{{data.description.substring(0, 90) + '....'}}</v-card-text>
                  <v-btn
                    depressed
                    color="primary"
                    class="ml-4"
                    @click="onDetail(data.id)"
                  >
                    Detail
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
            <hr class="mt-4">
          </v-col>
          <v-col v-if="filterDestination.length === 0">
            <div class="d-flex align-center justify-center">
              <p>Tempat yang anda cari tidak ada.</p>
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
  name: "HomeApp",
  components: {
    "header-app": HeaderApp,
    "menu-bar": MenuBar,
  },
  data() {
    return {
      isLoggedIn: false,
      value: 0,
      search: "",
      loading : true,
      dataDestination: [],
    };
  },
  
  methods: {
    logout() {
      const user = localStorage.getItem("user");
      if (user !== null) {
        localStorage.removeItem("user");
        this.$router.push("/login");
      } else {
        this.$router.push("/");
      }
    },
    onDetail(id) {
      this.$router.push("/home/detail/" + id);
    },
    checkLogin: function () {
      const user = localStorage.getItem("user");
      if (user !== null) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.$router.push("/login");
      }
    },
    getAllDestination: function () {
      this.$http
        .get(`${this.baseUrl}/api/Destinasi`)
        .then((response) => {
          if (response.ok) {
          this.dataDestination = response.body.data.map((item) => {
            return {
              id: item.id,
              name: item.nama_destinasi,
              rating: 5,
              image: item.image_url,
              description: item.deskripsi,
              totalReview: 10,
            };
          });

          this.loading = false;
          }
        })
        .catch((error) => {
          this.$toast.open({
            message: error.body.message,
            type: "error",
            position: "top-right",
          });
          throw new Error(error);
        });
    },
  },
  
  computed: {
    filterDestination: function () {
      return this.dataDestination.filter((item) => {
        const regex = new RegExp(this.search, "i");
        return item.name.match(regex);
      });
    },
  ...mapGetters(['baseUrl'])
  },
  created() {
    this.checkLogin(), this.getAllDestination();
  },
};
</script>

<style scoped>
</style>    