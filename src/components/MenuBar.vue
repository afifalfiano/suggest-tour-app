<template>
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
</template>
<script>
export default {
    name: 'MenuBar',
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    methods: {
        logout() {
            this.$emit('logout', true);
        }
    },
    }
</script>

<style>

</style>