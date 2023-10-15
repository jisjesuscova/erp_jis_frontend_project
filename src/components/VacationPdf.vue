<template>
    <div class="pdf-container" ref="pdfContainer">
      <h1>Mi Documento PDF 2</h1>
      <p>Estos son los datos de la API:</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      apiData: Array,
    },
  };
  </script>