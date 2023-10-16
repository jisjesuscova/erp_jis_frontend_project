<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <button class="btn btn-danger" @click="generatePdf">Generate PDF</button>
  </div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  data() {
    return {
      rut: '123456' // Defining the rut as a data property
    };
  },
  methods: {
    generatePdf() {
      const docDefinition = {
        content: [
          {
            text: 'CARTA DE AMONESTACIÓN',
            alignment: 'center',
            fontSize: 14,
            margin: [0, 0, 0, 10] // Margin bottom
          },
          {
            text: [
              `Nos ${this.rut} `,
              { text: 'permitimos comunicar a usted cédula nacional', bold: true },
              ` de identidad número que la conducta observada el día , constituye un incumplimiento a las obligaciones que le impone su contrato de trabajo.\n\nSe viene amonestar por , de acuerdo a los antecedentes tenidos en nuestro poder, abandono de trabajo, al haber salido intempestiva e injustificadamente del sitio de sus labores durante las horas de trabajo, sin permiso del empleador. Cabe destacar presente que esta situación incluso puede llegar a configurar la causal de término de contrato prevista en el N° 4 del artículo 160 del Código del Trabajo.Por la presente carta de amonestación se requiere el estricto cumplimiento de las instrucciones dadas por su jefatura en cuanto a la forma correcta de llevar el registro de asistencia de lo contrario, se adoptarán las medidas pertinentes. Inclusive la terminación del contrato de trabajo.Saludos a usted.`,
            ],
            fontSize: 10,
            alignment: 'justify',
            margin: [0, 0, 0, 20] // Margin bottom
          }
        ],
        styles: {
          defaultStyle: {
            font: 'Helvetica'
          }
        }
      };

      pdfMake.createPdf(docDefinition).download('carta_de_amonestacion.pdf');
    }
  }
};
</script>