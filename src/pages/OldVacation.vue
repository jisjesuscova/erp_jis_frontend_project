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
                Vacaciones
            </h2>

            <OldEmployeeMenu />


            <div class="-m-1.5 overflow-x-auto pt-12">
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
                                            Id
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
                                            Días Hábiles
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Estatus
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <tr
                                        v-for="vacation in vacations"
                                        :key="vacation.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            {{ vacation.document_employee_id }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ formatDate(vacation.since) }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ formatDate(vacation.until) }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ vacation.days - vacation.no_valid_days }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <span
                                                v-if="vacation.status_id == 1"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
                                                >Solicitada</span
                                            >
                                            <span
                                                v-if="vacation.status_id == 2"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white"
                                                >Aceptada por Supervisor</span
                                            >
                                            <span
                                                v-if="
                                                    vacation.status_id == 3 &&
                                                    vacation.support == null
                                                "
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white"
                                                >Aceptada</span
                                            >
                                            <span
                                                v-if="vacation.status_id == 4"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-500 text-white"
                                                >Firmada</span
                                            >
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                          
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
    </div>
</template>
<script>
import axios from 'axios'
import OldEmployeeMenu from '../components/OldEmployeeMenu.vue'

export default {
    components: {
    OldEmployeeMenu
},
    data() {
        return {
            loading: true,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
            loading_5: true,
            loading_6: true,
            loading_7: true,
            loading_8: true,
            vacations: [],
            progressive_vacations: [],
            created_vacation: 0,
            uploaded_progressive_vacation: 0,
            legal_holiday: '',
            taken_days: '',
            balance: '',
            error_kardex: 0,
            itemsPerPage: 10,
            progressive_itemsPerPage: 10,
            maxPagesShown: 5,
            progressive_maxPagesShown: 5,
            currentPage: 1,
            progressive_currentPage: 1,
            totalItems: 0,
            progressive_totalItems: 0,
            vacation_document: '',
            progressive_vacation_document: '',
            progressive_legal_holiday: '',
            progressive_taken_days: '',
            progressive_balance: '',
            progressive_vacation_input: '',
            rol_id: '',
            pdf_vacations: [],
            pdf_progressive_vacations: [],
            signature: '',
        }
    },
    async mounted() {
        await this.getVacations()

        const rol_id = localStorage.getItem('rol_id')

        this.rol_id = rol_id

        this.created_vacation = localStorage.getItem('created_vacation')

        if (this.created_vacation == 1) {
            localStorage.removeItem('created_vacation')
        }

        if (this.uploaded_progressive_vacation == 1) {
            localStorage.removeItem('uploaded_progressive_vacation')
        }

        this.loading = false

    },
    methods: {
      
       
        onClickHandler() {
            console.log(this.currentPage)
            this.getVacations()
        },
       
        formatDate(date) {
            const [year, month, day] = date.split('-')
            return `${day}-${month}-${year}`
        },
        async getVacations() {
            const accessToken = localStorage.getItem('accessToken')

            const page = this.currentPage

            try {
                const response = await axios.get(
                    'https://apijis.com/old_vacations/all/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                
                if (response.data.message != '' && response.data.message != null && response.data.message != undefined && response.data.message != 'Invalid page number' && response.data.message != 'No data found') {
                    const decodedData = JSON.parse(response.data.message)

                    this.vacations = decodedData.data
                    this.totalItems = decodedData.total_items
                    this.itemsPerPage = decodedData.items_per_page
                } else {
                    this.vacations = []
                    this.totalItems = 0
                    this.itemsPerPage = 0
                }

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de vacaciones:',
                        error,
                    )
                }
            }
        },
       
        async getProgressiveVacations() {
            const accessToken = localStorage.getItem('accessToken')

            const page = this.progressive_currentPage

            try {
                const response = await axios.get(
                    'https://apijis.com/old_progressive_vacations/all/' +
                        this.$route.params.rut +
                        '/' +
                        page,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                if (response.data.message != 'Invalid page number') {
                    const decodedData = JSON.parse(response.data.message)

                    this.progressive_vacations = decodedData.data
                    this.progressive_totalItems = decodedData.total_items
                    this.progressive_itemsPerPage = decodedData.items_per_page

                    this.loading_3 = false
                } else {
                    this.loading_3 = false

                    this.progressive_totalItems = 0
                }
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de vacaciones progresivas:',
                        error,
                    )
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
