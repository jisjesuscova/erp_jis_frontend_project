<template>
  <div>
    <!-- Tu contenido HTML aquí -->
    <div id="content">
        <table>
            <thead>
                <tr>
                    
                </tr>
            </thead>
        </table>
        <table>
            <thead>
                <tr>
                    <td>CARTA DE AMONESTACIÓN</td>   
                </tr>
            </thead>
        </table>
        <hr>
        <table>
            <tbody>
                <tr>
                    <td>
                        Nos permitimos comunicar a usted <strong></strong> cédula nacional de identidad número <strong></strong> que la conducta observada el día <strong></strong>, constituye un incumplimiento a las
                        obligaciones que le impone su contrato de trabajo.<br><br>
                        Se viene amonestar por , de acuerdo a los antecedentes tenidos en nuestro poder, abandono de trabajo, al haber salido
                        intempestiva e injustificadamente del sitio de sus labores durante las horas de trabajo, sin permiso del empleador. Cabe
                        destacar presente que esta situación incluso puede llegar a configurar la causal de término de contrato prevista en el N° 4 del
                        artículo 160 del Código del Trabajo.<br><br>
                        Por la presente carta de amonestación se requiere el estricto cumplimiento de las instrucciones dadas por su jefatura en cuanto
                        a la forma correcta de llevar el registro de asistencia de lo contrario, se adoptarán las medidas pertinentes. Inclusive la
                        terminación del contrato de trabajo.<br><br>
                        Saludos a usted.<br><br><br><br>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Botón para generar el PDF -->
    <button @click="generatePDF">Generar PDF</button>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {
  methods: {
    generatePDF() {
      html2canvas(document.getElementById('content')).then((canvas) => {
        const pdf = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Ajusta los valores según tus necesidades
        pdf.save('mi_pdf_generado_vuejs.pdf');
      });
    },
  },
};
</script>
