<template>
  <v-app class="d-xs" >
      <header-app />

    <v-main class="d-xs mx-auto overflow-y-auto elevation-4 pb-4" style="width: 100%">

          <v-carousel hide-delimiters v-bind:show-arrows="arrow">
            <v-carousel-item
              src="https://media.timeout.com/images/105240189/image.jpg"
            ></v-carousel-item>
          </v-carousel>
      <v-container style="width: 100%; transform: translateY(-50px)" class="rounded-t-xl white custom-shadow">
        <v-row align="center">
          <v-col cols="12">
              <p style="font-size: 24px"><strong>Detail Destination</strong></p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" class="d-flex justify-end" @click="onDescription" style="cursor: pointer">
            <p v-bind:class="{'active': showDescription}" style="font-size: 18px">Deskripsi</p>
          </v-col>
          <v-col cols="6" class="d-flex justify-start" @click="onReview" style="cursor: pointer">
            <p v-bind:class="{'active': showReview}" style="font-size: 18px">Review</p>
          </v-col>
        </v-row>

        <v-row id="desc" v-if="showDescription">
          <v-col cols="12">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque! Distinctio voluptate ex earum aspernatur expedita ipsa incidunt, error voluptatibus</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque! Distinctio voluptate ex earum aspernatur expedita ipsa incidunt, error voluptatibus</p>

          </v-col>
        </v-row>

        <v-row id="review" v-if="showReview">
          <v-col cols="12">
            <div class="d-flex justify-center align-center pb-4">
              <v-btn
                depressed
                color="primary"
                class="ml-4"
                @click="addReview"
              >
                Add review
              </v-btn>
              </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque! Distinctio voluptate ex earum aspernatur expedita ipsa incidunt, error voluptatibus</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, doloremque! Distinctio voluptate ex earum aspernatur expedita ipsa incidunt, error voluptatibus</p>
          </v-col>
        </v-row>
    </v-container>
    </v-main>

    <menu-bar @logout="logout" :value="value"/>

  </v-app>
</template>

<script>
import HeaderApp from './HeaderApp.vue'
import MenuBar from './MenuBar.vue'

export default {
    name: 'DetailApp',
    components: {
      'header-app': HeaderApp,
      'menu-bar': MenuBar,
    },
    data() {
        return {
            arrow: false,
            showDescription: true,
            showReview: false,
            isLoggedIn: false,
            value: 0,
            search: '',
            idDestination: this.$route.params.id
      }
    },
    created() {
      this.getDestination()
    },
    methods: {
        logout() {
        const user = localStorage.getItem('user');
        if(user !== null) {
          localStorage.removeItem('user');
          this.$router.push('/login');
        } else {
          this.$router.push('/');
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
      addReview() {

      },
      getDestination() {
        // this.$http.get(`http://localhost:3000/destinations/${this.idDestination}`)
        // .then(response => {
        //     this.destination = response.body
        // })
        console.log(this.idDestination, 'idDesti ');
      }
    }
}
</script>

<style scoped>
.active {
  color: #1A237E;
  font-weight: 500;
  border-bottom: 1px solid #1A237E;
}
.custom-shadow {
  box-shadow: 0px -16px 20px 0px rgb(0 0 0 / 20%), 0px -16px 38px 3px rgb(0 0 0 / 14%), 0px -16px 8px 8px rgb(0 0 0 / 12%) !important;
}
</style>