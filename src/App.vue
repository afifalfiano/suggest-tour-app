<template>
  <v-app
    class="d-xs"
    fill-height
    style="max-width: 600px; height: 100%; margin: auto;background: #fff;"
  >
    <div style="height: 100%;">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>
