<template>
  <div id="app">
    <!-- Condición para mostrar el contenido si el token está definido y no es null o una cadena vacía -->
    <template v-if="accessToken !== null && accessToken !== ''">
      <Header />
      <Siderbar />
      <router-view></router-view>
      <Footer />
    </template>

    <!-- Condición para mostrar el componente de inicio de sesión si el token es null o una cadena vacía -->
    <template v-else>
      <div v-if="showForgotComponent">
        <Forgot />
      </div>
      <!-- Mostrar componente "Login" si no se cumple la condición anterior -->
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
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
import Forgot from './components/Forgot.vue';

export default {
  name: 'App',
  setup() {
    // Aquí defines la variable para almacenar el token (puedes obtenerlo del localStorage)
    const accessToken = ref(localStorage.getItem('accessToken') || ''); // Usa el valor predeterminado ''

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
