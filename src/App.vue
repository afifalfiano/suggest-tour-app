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
      <!-- <HelloWorld/> -->
      <app-login />
      <app-signUp />
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
    <v-btn class="fill-height my-3">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn class="fill-height my-3">
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn class="fill-height my-3">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import LoginApp from './components/Login.vue';
import SignUp from './components/SignUp.vue';

export default {
  name: 'App',

  components: {
    'app-signUp': SignUp,
    'app-login': LoginApp
  },

  data: () => ({
    value: 0,
    active: true,
  }),
};
</script>
