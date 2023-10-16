<template>

    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
                <!-- SVG spinner -->
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else class="flex flex-col pt-10">

            <h2 class="text-4xl dark:text-white pb-10">
                Gestión Documental
                <router-link href="javascript:;" :to="`/create_document_management/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Agregar
                </router-link>
            </h2>

            <EmployeeMenu />

            <div class="-m-1.5 overflow-x-auto pt-12">
                <div class="bg-green-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="created_document_management == 1">
                    Registro agregado con <span class="font-bold">éxito</span>.
                </div>
                <div class="bg-red-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="error_document_management == 1">
                    <span class="font-bold">Error</span> para descargar el documento.
                </div>
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Periodo</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700" >
                                    <tr v-for="document_management in document_managements" :key="document_management.id">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ document_management.id }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ formatPeriod(document_management.added_date) }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <button type="button" @click="generateDocumentManagement(document_management.id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-10">
            <vue-awesome-paginate
                :total-items="totalItems"
                :items-per-page="itemsPerPage"
                :max-pages-shown="maxPagesShown"
                v-model="currentPage"
                :on-click="onClickHandler"
                />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import EmployeeMenu from '../components/EmployeeMenu.vue';
import { format } from 'date-fns';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts && pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : globalThis.pdfMake.vfs;

export default {
    components: {
        EmployeeMenu
    },
    data() {
        return {
            loading: false,
            document_managements: [],
            created_document_management: 0,
            itemsPerPage: 10,
            maxPagesShown: 5,
            currentPage: 1,
            totalItems: 0,
            rol_id: '',
            error_document_management: 0,
        };
    },
    async mounted() {
        const rol_id = localStorage.getItem('rol_id');

        this.rol_id = rol_id;

        this.getDocumentManagements();

        this.created_document_management = localStorage.getItem('created_document_management');

        if (this.created_document_management == 1) {
            localStorage.removeItem('created_document_management');
        }
    },
    methods: {
        formatDateToCustomFormat(dateString) {
            const date = new Date(dateString);
            
            const monthNames = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];
            
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            
            const formattedDate = `${day} de ${monthNames[month]} del ${year}`;
            
            return formattedDate;
        },
        onClickHandler () {
            console.log(this.currentPage);
            this.getDocumentManagements();
        },
        formatPeriod(date) {
            if (date != '' && date != undefined && date != null) {
                date = date.split('T');
                date = date[0].split('-');
                return date[1] + '-' + date[0];
            }
        },
        getBase64ImageFromURL(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.setAttribute("crossOrigin", "anonymous");

                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    canvas.width = img.width;
                    canvas.height = img.height;

                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0);

                    const dataURL = canvas.toDataURL("image/png");

                    resolve(dataURL);
                };

                img.onerror = (error) => {
                    reject(error);
                };

                img.src = url;
            });
        },
        async generateDocumentManagement() {
            try {
                const logo = await this.getBase64ImageFromURL('http://localhost:5173/src/assets/images/logo.png');
                const company_signature = await this.getBase64ImageFromURL('http://localhost:5173/src/assets/images/signature.png');
                const full_name = `${localStorage.getItem('names')} ${localStorage.getItem('father_lastname')} ${localStorage.getItem('mother_lastname')}`;
                const visual_rut = localStorage.getItem('visual_rut');
                const current_date = `Santiago, ${this.formatDateToCustomFormat(new Date())}`;
                const entrance_company = this.formatDateToCustomFormat(localStorage.getItem('entrance_company'));
                const job_position = localStorage.getItem('job_position');

                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'CERTIFICADO DE ANTIGÜEDAD',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            text: [
                                'JIS PARKING S.P.A Rut. 76.063.822-6, representada por Don Marcelo Alejandro Inzunza González con RUN: 10.033.741-K, domiciliado en Matucana # 40, Estación Central, ciudad de Santiago de Chile, certifica al',
                                { text: ` Sr(a). ${full_name} `, bold: true },
                                'cédula de identidad N° ',
                                { text: visual_rut, bold: true },
                                { text: ` ingresó a Jis Parking SPA con fecha ${entrance_company} con el cargo de ${job_position}.` },
                            ],
                            fontSize: 10,
                            alignment: 'justify',
                            margin: [0, 0, 0, 20],
                            lineHeight: 1.5,
                        },
                        {
                            text: ['Se extiende el certificado a petición del interesado para los fines que estime conveniente.'],
                            fontSize: 10,
                            alignment: 'justify',
                            margin: [0, 0, 0, 20],
                            lineHeight: 1.5,
                        },
                        {
                            text: ['Saluda atentamente.'],
                            fontSize: 10,
                            alignment: 'justify',
                            margin: [0, 0, 0, 20],
                            lineHeight: 1.5,
                        },
                        {
                            image: company_signature,
                            width: 120,
                            alignment: 'center',
                            margin: [0, 50, 0, 0],
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            } catch (error) {
                console.error(error);
            }
        },
        formatDate(date) {
            return format(new Date(date), 'dd-MM-yyyy');
        },
        async getDocumentManagements() {
            const accessToken = localStorage.getItem('accessToken');

            this.loading = true;

            const page = this.currentPage;

            try {
                const response = await axios.get('https://apijis.com/document_managements/' + this.$route.params.rut + '/' + page, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                const decodedData = JSON.parse(response.data.message);

                this.document_managements = decodedData.data;
                this.totalItems = decodedData.total_items;
                this.itemsPerPage = decodedData.items_per_page;

                this.loading = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de liquidaciones:', error);
                }
            }
        },
    },
}
</script>
<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #7e5bef;
    border: 1px solid #7e5bef;
    color: white;
  }
  .active-page:hover {
    background-color: #7e5bef;
  }
</style>