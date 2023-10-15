<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <button @click="generatePdf">Generar PDF</button>

    <div class="pdf-container" ref="pdfContainer">
      <PdfContent :apiData="apiData" />
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import axios from 'axios';
import PdfContent from './PdfContent.vue';

export default {
  components: {
    PdfContent,
  },
  data() {
    return {
      apiData: [],
    };
  },
  methods: {
    async fetchApiData() {
      try {
        const response = await axios.get('URL_DE_LA_API');
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    },
    async generatePdf() {
      await this.fetchApiData();

      const pdf = new jsPDF();
      const pdfContainer = "<div ref='pdfContent'>Hola</div>";
        console.log(pdfContainer);
      html2canvas(pdfContainer).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('archivo.pdf');
      });
    },
  },
  mounted() {
    this.fetchApiData();
  },
};
</script>

<style>
.pdf-container {
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
