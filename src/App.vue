<template>
  <v-app>
        <v-app-bar
      color="#1e1e1e"
      max-height="80"
      class="d-flex align-center"
      dense
      dark
    >
      <v-toolbar-title>SoMe list Overview</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.v-main {
background:linear-gradient(0deg, rgba(23, 35, 62, 0.90), rgba(23, 35, 62, 0.90)), url(https://cdn.pixabay.com/photo/2014/03/22/22/15/social-media-292988_960_720.jpg);
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

.v-btn--active {
border-bottom: 4px solid #c80046;
border-radius: 0px;
background-color: black;
}
</style>