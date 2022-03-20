<template>
  <v-bottom-navigation
    style="max-width: 600px; background-color: none; position: fixed; bottom: 0; left: 0; right: 0; "
    class="mx-auto d-flex justify-space-around"
    :value="value"
    color="teal"
    grow
  >
    <v-btn
      class="fill-height"
      @click="onHome"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
      class="fill-height"
      @click="onAccount"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn
      class="fill-height"
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "MenuBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    logout() {
      this.$emit("logout", true);
    },
    onHome() {
      this.$router.push("/home");
    },
    onAccount() {
      this.$router.push("/account");
    },
  },
};
</script>

<style>
</style>