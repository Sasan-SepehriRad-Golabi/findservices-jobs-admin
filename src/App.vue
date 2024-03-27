<template>
  <v-app>
    <HomePage />
    <MainPage />
    <NavigationDrawer />
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import MainPage from './components//MainPage.vue';


export default {
  name: 'App',

  components: {
    HomePage, NavigationDrawer, MainPage
  },

  data: () => ({
    //
  }),
}
</script>
<style>
@font-face {
  font-family: myfont;
  src: url('./assets/fonts/Yekan.woff');
}

* {
  font-family: myfont !important;
}

.v-application__wrap {
  display: block !important;
  min-height: 100vh !important;
}
</style>