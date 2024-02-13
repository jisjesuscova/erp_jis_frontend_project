<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
                <!-- SVG spinner -->
                <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>

            <!-- You can use a spinner or any other loading animation here -->
        </div>

        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">
                Licencias Médicas
            </h2>

            <OldEmployeeMenu />

            <div class="-m-1.5 overflow-x-auto pt-12">
                <div
                    class="bg-green-500 text-sm text-white rounded-md p-4 mb-10"
                    role="alert"
                    v-if="created_medical_license == 1"
                >
                    Registro agregado con <span class="font-bold">éxito</span>.
                </div>
                <div
                    class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
                    role="alert"
                    v-if="error_kardex == 1"
                >
                    <span class="font-bold">Error</span> para descargar el
                    documento.
                </div>
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                        <div class="overflow-hidden" v-if="totalItems > 0">
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            RUT
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Folio
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Desde
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Hasta
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Dias
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <tr
                                        v-for="medical_license in medical_licenses"
                                        :key="medical_license.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            {{ medical_license.visual_rut }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ medical_license.folio }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{
                                                formatDate(
                                                    medical_license.since,
                                                )
                                            }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{
                                                formatDate(
                                                    medical_license.until,
                                                )
                                            }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ medical_license.days }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="overflow-hidden" v-else>
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td class="px-6 py-4 flex items-center text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                                            No hay registros en el sistema
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-10" v-if="totalItems > 0">
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
import axios from 'axios'
import { format } from 'date-fns'
import OldEmployeeMenu from '../components/OldEmployeeMenu.vue'

export default {
    components: {
    OldEmployeeMenu
},
    data() {
        return {
            loading: false,
            medical_licenses: [],
            created_medical_license: 0,
            kardex_document: '',
            error_kardex: 0,
            itemsPerPage: 10,
            maxPagesShown: 5,
            currentPage: 1,
            totalItems: 0,
            rol_id: '',
        }
    },
    async mounted() {
        const rol_id = localStorage.getItem('rol_id')

        this.rol_id = rol_id

        this.getMedicalLicenses()

        this.created_medical_license = localStorage.getItem(
            'created_medical_license',
        )

        if (this.created_medical_license == 1) {
            localStorage.removeItem('created_medical_license')
        }
    },
    methods: {
        onClickHandler() {
            console.log(this.currentPage)
            this.getMedicalLicenses()
        },
        formatDate(date) {
            const [year, month, day] = date.split('-')
            return `${day}-${month}-${year}`
        },
        async downloadMedicalLicense(id) {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.get(
                    'https://apijis.com/medical_licenses/download/' + id,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.kardex_document = response.data.message

                if (this.kardex_document == 0) {
                    this.error_kardex = 1
                } else {
                    window.location.href = this.kardex_document
                }

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener el documento del kardex:',
                        error,
                    )
                }
            }
        },
        async getMedicalLicenses() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            const page = this.currentPage

            try {
                const response = await axios.get(
                    'https://apijis.com/old_medical_licenses/edit/' +
                        this.$route.params.rut +
                        '/' +
                        page,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )
  
                if (response.data.message != 'Invalid page number') {
                    const decodedData = JSON.parse(response.data.message)

                    this.medical_licenses = decodedData.data
                    this.totalItems = decodedData.total_items
                    this.itemsPerPage = decodedData.items_per_page
                } else {
                    this.totalItems = 0
                }
                
                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener la lista licencias:', error)
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
