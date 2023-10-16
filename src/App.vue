<template>
  <div id="app">
    <template v-if="accessToken !== null && accessToken !== ''">
      <Header />
      <Siderbar />
      <router-view></router-view>
      <Footer />
    </template>

    <template v-else>
      <div v-if="showForgotComponent">
        <Forgot />
      </div>
      <div v-else>
        <Login />
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Siderbar from './components/Sidebar.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';
import Login from './pages/Login.vue';
import Forgot from './pages/Forgot.vue';

export default {
  name: 'App',
  setup() {
    const accessToken = ref(localStorage.getItem('accessToken') || '');

    return {
      accessToken,
      loading: true,
    };
  },
  components: {
    Header,
    Siderbar,
    Home,
    Footer,
    Login,
    Forgot,
  },
  computed: {
    showForgotComponent() {
      return window.location.href.includes('/forgot');
    },
  },
};
</script>

<style>
</style>
