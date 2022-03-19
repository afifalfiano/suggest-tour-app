<template>
  <v-app class="d-xs" >
      <header-app />
        <v-main>
            <h1>Hello Guys</h1>
        </v-main>
        <menu-bar @logout="logout" :value="value"/>
  </v-app>    
  
</template>

<script>

import HeaderApp from './HeaderApp.vue';
import MenuBar from './MenuBar.vue';

export default {
    name: 'AccountApp',
    data() {
        return {
            isLoggedIn: false,
            value: 0,
        }
    },
    components: {
        'header-app': HeaderApp,
        'menu-bar': MenuBar
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
    }
}
</script>

<style>

</style>