<template>
  <div>
    <h2>Información desde Axios:</h2>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    // Simulando una solicitud Axios a una API para obtener información
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.data = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
