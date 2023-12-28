// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import axios from 'axios';
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import Vue3Signature from "vue3-signature";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

axios.defaults.baseURL = 'https://apijis.com'; // URL de la API

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(router);
app.use(Vue3Signature);
app.use(VCalendar, {});
app.use(VueAwesomePaginate);
app.use(VCalendar, {})
app.mount('#app');