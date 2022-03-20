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
      aria-label="Home"
      @click="onHome"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
      class="fill-height"
      aria-label="Account"
      @click="onAccount"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn
      class="fill-height"
      aria-label="Logout"
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: "MenuBar",
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
    computed: {
    ...mapGetters(['baseUrl'])
  },
  methods: {
    logout() {
      this.$emit("logout", true);
      try {
          const payload = {
            token: null
          };
          this.$http.put(this.baseUrl + "/api/User/logout", payload).then(response => {
            if (response.ok) {
                this.$toast.open({
                  message: "Berhasil keluar",
                  type: "success",
                  position: "top-right",
                });
              setTimeout(() => {
                localStorage.removeItem("user");
                this.$router.push("/login");
              }, 1000);
            }
          }).catch(err => {
            throw new Error(err);
          })
      } catch(err) {
        throw new Error(err);
      }
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