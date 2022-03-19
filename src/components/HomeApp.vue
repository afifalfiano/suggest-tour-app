<template>
    <v-app class="d-xs" >
     <v-app-bar
      app
      class="mx-auto"
      color="teal"
      max-width="600"
      justify="center"
      dark
    >
    <div class="d-flex align-center justify-center">
      <h1 class="display-1 font-weight-bold">Suggest Tour App</h1>
    </div>
    </v-app-bar>

    <v-main class="d-xs mx-auto overflow-y-auto elevation-4" style="max-width:600px">
      <v-container>
        <v-row>
          <v-col cols="12">
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum veritatis provident. Consequuntur eius soluta, quaerat cupiditate delectus expedita, maxime id tempore, eum voluptatibus vel! Similique obcaecati possimus error consequatur at assumenda aut libero, excepturi veniam explicabo hic velit quae illum alias necessitatibus dignissimos! Velit, quis dignissimos hic repellat totam corrupti eum ex vel rem, quo aspernatur. Laudantium commodi ullam quod eveniet similique expedita temporibus mollitia quidem, illo quis possimus doloribus. Vel, fugiat minima natus nulla modi doloremque quos consequatur molestiae at exercitationem saepe hic eveniet debitis animi nihil quibusdam cumque sequi cum excepturi veniam aspernatur quidem? Aspernatur, tenetur consequuntur.</p>

      <h2 class="mt-5">Hello Guys</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum veritatis provident. Consequuntur eius soluta, quaerat cupiditate delectus expedita, maxime id tempore, eum voluptatibus vel! Similique obcaecati possimus error consequatur at assumenda aut libero, excepturi veniam explicabo hic velit quae illum alias necessitatibus dignissimos! Velit, quis dignissimos hic repellat totam corrupti eum ex vel rem, quo aspernatur. Laudantium commodi ullam quod eveniet similique expedita temporibus mollitia quidem, illo quis possimus doloribus. Vel, fugiat minima natus nulla modi doloremque quos consequatur molestiae at exercitationem saepe hic eveniet debitis animi nihil quibusdam cumque sequi cum excepturi veniam aspernatur quidem? Aspernatur, tenetur consequuntur.</p>

      <h2 class="mt-5">Hello Guys</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illum veritatis provident. Consequuntur eius soluta, quaerat cupiditate delectus expedita, maxime id tempore, eum voluptatibus vel! Similique obcaecati possimus error consequatur at assumenda aut libero, excepturi veniam explicabo hic velit quae illum alias necessitatibus dignissimos! Velit, quis dignissimos hic repellat totam corrupti eum ex vel rem, quo aspernatur. Laudantium commodi ullam quod eveniet similique expedita temporibus mollitia quidem, illo quis possimus doloribus. Vel, fugiat minima natus nulla modi doloremque quos consequatur molestiae at exercitationem saepe hic eveniet debitis animi nihil quibusdam cumque sequi cum excepturi veniam aspernatur quidem? Aspernatur, tenetur consequuntur.</p>
      </v-col>
      </v-row>
    </v-container>
    </v-main>

      <v-bottom-navigation
      style="max-width: 600px; background-color: none"
      class="mx-auto d-flex justify-space-around"
    :value="value"
    color="teal"
    grow
  >
    <v-btn class="fill-height">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn class="fill-height">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn class="fill-height" @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>


<script>
export default {
    name: 'HomeApp',
    data() {
        return {
            isLoggedIn: false,
            value: 0,
            active: true,
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
      }
    },
    // mounted: {
    //   checkLogin: function() {
    //     const user = localStorage.getItem('user');
    //     if (user !== null) {
    //       this.isLoggedIn = true;
    //     } else {
    //       this.isLoggedIn = false;
    //       this.$router.push('/login');
    //     }
    //   }
    // },
}
</script>

<style scoped>

</style>    