<template>
    <v-app class="d-xs" >
      <header-app />

    <v-main class="d-xs mx-auto overflow-y-auto elevation-4 pb-4" style="width: 100%">
      <v-container style="width: 100%">
        <v-row align="center" class="mt-2">
          <v-col cols="12">
            <v-text-field
            outlined
            v-model="search"
            label="Find a place"
            prepend-inner-icon="mdi-search-web"
          ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
        <v-col cols="12" class="pt-0"  v-for="data in filterDestination" :key="data.id">
          <v-container fluid>
          <v-row align="center">
            <v-col cols="4" class="pr-0">
                  <v-img
                    aspect-ratio="1"
                    :src="data.image"
                    class="d-flex align-center justify-center"
                  ></v-img>
            </v-col>
            <v-col cols="8" class="pl-1">
              <div class="d-flex justify-space-between align-center">
              <v-card-title class="d-flex justify-start">{{data.name}}</v-card-title>
                
                <div class="d-flex-row align-center justify-end">
                <v-rating
                :value="data.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{data.rating}}
                ({{data.totalReview}})
              </div>
              </div>
            </div>

              <v-card-text class="pt-1 text-justify">{{data.description.substring(0, 150) + '....'}}</v-card-text>
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

    <menu-bar @logout="logout" :value="value"/>

  </v-app>
</template>


<script>

import HeaderApp from './HeaderApp.vue'
import MenuBar from './MenuBar.vue'

export default {
    name: 'HomeApp',
    components: {
      'header-app': HeaderApp,
      'menu-bar': MenuBar,
    },
    data() {
        return {
            isLoggedIn: false,
            value: 0,
            search: '',

            dataDestination: [
              {
                id: 1,
                name: 'Bali',
                rating: 4.5,
                image: 'https://media.timeout.com/images/105240189/image.jpg',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                totalReview: 100
              },
                {
                id: 2,
                name: 'Sleman',
                rating: 4.5,
                image: 'https://media.timeout.com/images/105240189/image.jpg',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                totalReview: 100
              },
                {
                id: 3,
                name: 'Jogja',
                rating: 4.5,
                image: 'https://media.timeout.com/images/105240189/image.jpg',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                totalReview: 100
              },
              {
                id: 4,
                name: 'Bantul',
                rating: 4.5,
                image: 'https://media.timeout.com/images/105240189/image.jpg',
                description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                totalReview: 100
              }
            ]
        }
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
      onDetail(id) {
        this.$router.push('/home/detail/' + id);
      },
      checkLogin: function() {
      const user = localStorage.getItem('user');
      if (user !== null) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.$router.push('/login');
      }
    }
    },
    computed: {
      filterDestination: function() {
        return this.dataDestination.filter(item => {
          const regex = new RegExp(this.search, 'i');
          return item.name.match(regex);
        })
      },
    },
    created() {
        this.checkLogin()
    },
}
</script>

<style scoped>

</style>    