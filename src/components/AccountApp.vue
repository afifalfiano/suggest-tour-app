<template>
    <v-app class="d-xs" >
      <header-app />

    <v-main class="d-xs mx-auto overflow-y-auto elevation-4 pb-4" style="width: 100%">
      <v-container style="width: 100%">
        <v-row align="center" class="mt-2">
          <v-col cols="12">

  <v-card
    class="mx-auto mb-6"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Profile
        </div>
        
        <v-list-item-title class="text-h5 mb-1">
          B. Pamungkas
        </v-list-item-title>
        <v-list-item-subtitle>abcdesf@gmail.com</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        alt="Avatar"
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>

  <v-row 
    align="center"
    justify="space-around"
  >
    <v-btn 
      tile
      color="primary"
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

    <menu-bar @logout="logout" :value="value"/>

  </v-app>
</template>


<script>

import HeaderApp from './HeaderApp.vue'
import MenuBar from './MenuBar.vue'

export default {
    name: 'AccountApp',
    components: {
      'header-app': HeaderApp,
      'menu-bar': MenuBar,
    }
}
</script>

<style scoped>

</style>    