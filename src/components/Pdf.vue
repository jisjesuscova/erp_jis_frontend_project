<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <div ref="contentToConvert">
        <h1>Mi PDF desde HTML</h1>
        <p>Este es un ejemplo de cómo generar un PDF desde contenido HTML en Vue.js.</p>
      </div>
      <button @click="generatePDF">Generar PDF desde HTML</button>
    </div>
  </template>
  
  <script>
  import html2pdf from "html2pdf.js";
  
  export default {
    methods: {
      async generatePDF() {
        const content = this.$refs.contentToConvert;
  
        const options = {
          margin: 10,
          filename: "mi-pdf-desde-html.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        };
  
        const pdf = await html2pdf().from(content).set(options);
        
        // Cambio aquí: Generar la URL de datos y descargar el PDF
        const pdfDataUrl = await pdf.outputPdf();
        const link = document.createElement("a");
        link.href = pdfDataUrl;
        link.download = "mi-pdf-desde-html.pdf";
        link.click();
      },
    },
  };
  </script>
  