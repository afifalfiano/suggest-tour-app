<template>
  <v-app class="d-xs" >
      <header-app />

    <v-main class="d-xs mx-auto overflow-y-auto elevation-4 pb-4" style="width: 100%">
      <v-container style="width: 100%">
          <h1>Detail Destination</h1>
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

<style>

</style>