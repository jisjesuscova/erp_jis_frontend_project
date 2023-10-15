<!-- SearchResults.vue -->
<template>
    <div>
      <h2>Resultados de la búsqueda</h2>
      <ul>
        <li v-for="result in results" :key="result.id">
          {{ result.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      results: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  