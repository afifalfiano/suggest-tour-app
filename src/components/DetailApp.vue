<template>
  <v-app class="d-xs">
    <header-app />

    <v-main
      class="d-xs mx-auto overflow-y-auto elevation-4 pb-4"
      style="width: 100%"
    >

      <v-carousel
        hide-delimiters
        v-bind:show-arrows="arrow"
      >
        <v-carousel-item src="https://media.timeout.com/images/105240189/image.jpg"></v-carousel-item>
      </v-carousel>
      <v-container
        style="width: 100%; transform: translateY(-100px); height: 100%"
        class="rounded-t-xl white custom-shadow"
      >
        <v-row align="center">
          <v-col cols="12">
            <p
              style="font-size: 24px"
              class="mb-0"
            ><strong>{{detailDestination.nama_destinasi}}</strong></p>
            <small
              class="pt-0"
              style="font-size: 16px; transform: translateY(-5)"
            >{{detailDestination.lokasi}}</small>
            <div
              style="display: flex;"
              class="pt-2"
            >
              <v-rating
                :value="5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <small>(5)</small>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="6"
            class="d-flex justify-end"
            @click="onDescription"
            style="cursor: pointer"
          >
            <p
              v-bind:class="{'active': showDescription}"
              style="font-size: 18px"
            >Deskripsi</p>
          </v-col>
          <v-col
            cols="6"
            class="d-flex justify-start"
            @click="onReview"
            style="cursor: pointer"
          >
            <p
              v-bind:class="{'active': showReview}"
              style="font-size: 18px"
            >Ulasan</p>
          </v-col>
        </v-row>

        <v-row
          id="desc"
          v-if="showDescription"
        >
          <v-col cols="12">
            <description-destination :detailDestination="detailDestination"></description-destination>
          </v-col>
        </v-row>

        <v-row
          id="review"
          v-if="showReview"
        >
          <v-col cols="12">
            <review-destination
              :idDestination="idDestination"
              :review="detailDestination.review"
            ></review-destination>
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
import DescriptionDestination from "./DescriptionDestination.vue";
import ReviewDestination from "./ReviewDestination.vue";
import HeaderApp from "./HeaderApp.vue";
import MenuBar from "./MenuBar.vue";

export default {
  name: "DetailApp",
  components: {
    "header-app": HeaderApp,
    "menu-bar": MenuBar,
    "description-destination": DescriptionDestination,
    "review-destination": ReviewDestination,
  },
  data() {
    return {
      arrow: false,
      showDescription: true,
      showReview: false,
      isLoggedIn: false,
      value: 0,
      search: "",
      idDestination: this.$route.params.id,
      detailDestination: {},
    };
  },
  created() {
    this.getDestination();
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
    onReview() {
      this.showDescription = false;
      this.showReview = true;
    },
    onDescription() {
      this.showReview = false;
      this.showDescription = true;
    },
    getDestination() {
      let url = "https://suggesttour.herokuapp.com";
      if (window.location.href.match(/localhost/g)) {
        url = "https://suggesttour.herokuapp.com";
      } else {
        url = "https://suggesttour.herokuapp.com";
      }
      this.$http
        .get(`${url}/api/Destinasi/` + this.idDestination)
        .then((response) => {
          this.detailDestination = response.body.data[0];
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
};
</script>

<style scoped>
.active {
  color: #1a237e;
  font-weight: 500;
  border-bottom: 1px solid #1a237e;
}
.custom-shadow {
  box-shadow: 0px -16px 20px 0px rgb(0 0 0 / 20%),
    0px -16px 38px 3px rgb(0 0 0 / 14%), 0px -16px 8px 8px rgb(0 0 0 / 12%) !important;
}
</style>