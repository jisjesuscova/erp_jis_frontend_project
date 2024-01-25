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
                Empleados
                <router-link
                    href="javascript:;"
                    to="/create_employee"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                    Agregar
                </router-link>
            </h2>

            <Searcher @searchData="handleSearchData" />
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
                                            RUT
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Empleado
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Estado
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
                                        v-for="employee in employees"
                                        :key="employee.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            {{ employee.visual_rut }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ employee.names }}
                                            {{ employee.father_lastname }}
                                            {{ employee.mother_lastname }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <span
                                                v-if="employee.status_id == 1"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white"
                                                >Activo</span
                                            >
                                            <span
                                                v-if="employee.status_id == 2"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white"
                                                >Desvinculado</span
                                            >
                                            <span
                                                v-if="employee.status_id == 3"
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
                                                >Voluntario</span
                                            >
                                        </td>
                                        <td
                                            v-if="employee.status_id == 1"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <button
                                                type="button"
                                                @click="
                                                    confirmRefreshPassword(
                                                        employee.rut,
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-700 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i
                                                    class="fa-solid fa-refresh"
                                                ></i>
                                            </button>

                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/employee/${employee.rut}`"
                                                title="Datos Personales"
                                            >
                                                <i
                                                    class="fa-solid fa-address-card"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/labor_data/${employee.rut}`"
                                                title="Datos Laborales"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/extra_data/${employee.rut}`"
                                                title="Datos Extras"
                                            >
                                                <i class="fa-solid fa-plus"></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/family/${employee.rut}`"
                                                title="Familiares"
                                            >
                                                <i
                                                    class="fa-solid fa-people-roof"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/kardex_document/${employee.rut}`"
                                                title="Kardex"
                                            >
                                                <i
                                                    class="fa-solid fa-folder-open"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/uniform/${employee.rut}`"
                                                title="Uniforme"
                                            >
                                                <i
                                                    class="fa-solid fa-shirt"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/settlement/${employee.rut}`"
                                                title="Liquidaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/vacation/${employee.rut}`"
                                                title="Vacaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-plane"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/medical_license/${employee.rut}`"
                                                title="Licencias Médicas"
                                            >
                                                <i
                                                    class="fa-solid fa-truck-medical"
                                                ></i>
                                            </router-link>
                                        </td>
                                        <td
                                            v-if="employee.status_id == 2"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_employee/${employee.rut}`"
                                                title="Datos Personales"
                                            >
                                                <i
                                                    class="fa-solid fa-address-card"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_labor_data/${employee.rut}`"
                                                title="Datos Laborales"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_extra_data/${employee.rut}`"
                                                title="Datos Extras"
                                            >
                                                <i class="fa-solid fa-plus"></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_settlement/${employee.rut}`"
                                                title="Liquidaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_vacation/${employee.rut}`"
                                                title="Vacaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-plane"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_medical_license/${employee.rut}`"
                                                title="Licencias Médicas"
                                            >
                                                <i
                                                    class="fa-solid fa-truck-medical"
                                                ></i>
                                            </router-link>
                                        </td>
                                        <td
                                            v-if="employee.status_id == 3"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_employee/${employee.rut}`"
                                                title="Datos Personales"
                                            >
                                                <i
                                                    class="fa-solid fa-address-card"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_labor_data/${employee.rut}`"
                                                title="Datos Laborales"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_extra_data/${employee.rut}`"
                                                title="Datos Extras"
                                            >
                                                <i class="fa-solid fa-plus"></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_settlement/${employee.rut}`"
                                                title="Liquidaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-file-contract"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_vacation/${employee.rut}`"
                                                title="Vacaciones"
                                            >
                                                <i
                                                    class="fa-solid fa-plane"
                                                ></i>
                                            </router-link>
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                :to="`/old_medical_license/${employee.rut}`"
                                                title="Licencias Médicas"
                                            >
                                                <i
                                                    class="fa-solid fa-truck-medical"
                                                ></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="overflow-hidden" v-else>
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
                                            Empleado
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
                                    >
                                        <td
                                            colspan="3"
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center"
                                        >
                                            La busqueda no ha obtenido resultados
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
    </div>
</template>
<script>
import Searcher from '../components/Searcher.vue'
import axios from 'axios'

export default {
    components: {
        Searcher,
    },
    data() {
        return {
            employees: [],
            loading: true,
            searchParams: {},
            searchData: {},
            itemsPerPage: 10,
            maxPagesShown: 5,
            currentPage: 1,
            totalItems: 0,
        }
    },
    methods: {
        async confirmRefreshPassword(rut) {
            const shouldRefresh = window.confirm(
                '¿Estás seguro de que deseas refrescar la contraseña?',
            )

            if (shouldRefresh) {
                await this.refreshPassword(rut)
            }
        },
        async refreshPassword(rut) {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.get(
                    'https://apijis.com/users/refresh_password/' + rut,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al refrescar la contraseña del empleado:',
                        error,
                    )
                }
            }
        },
        onClickHandler() {
            console.log(this.currentPage)
            this.getPosts()
        },
        async handleSearchData(searchData) {
            const rut = localStorage.getItem('rut')
            const rol_id = localStorage.getItem('rol_id')
            const page = this.currentPage

            this.loading = true

            if (
                searchData.rut_input != '' ||
                searchData.names_input != '' ||
                searchData.father_lastname_input != '' ||
                searchData.mother_lastname_input != '' ||
                searchData.branch_office_input != '' ||
                searchData.status_input != ''
            ) {
                try {
                    const dataToSend = {
                        rut: searchData.rut_input,
                        names: searchData.names_input,
                        father_lastname: searchData.father_lastname_input,
                        mother_lastname: searchData.mother_lastname_input,
                        branch_office_id: String(searchData.branch_office_input),
                        status_id: searchData.status_input,
                        user_rut: rut,
                        rol_id: rol_id,
                        page: page,
                    }

                    const accessToken = localStorage.getItem('accessToken')

                    const response = await axios.post(
                        'https://apijis.com/employees/search',
                        dataToSend,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                accept: 'application/json',
                            },
                        },
                    )
                    
                    if (response.data.message.data != undefined && response.data.message.data != '' && response.data.message.data != null) {
                        this.employees = response.data.message.data
                        this.totalItems = response.data.message.total_items
                        this.itemsPerPage = response.data.message.items_per_page
                        this.loading = false
                    } else {
                        this.employees = []
                        this.totalItems = 0
                        this.loading = false
                    }
                } catch (error) {
                    if (error.message == 'Request failed with status code 401') {
                        localStorage.removeItem('accessToken')
                        window.location.reload()
                    } else {
                        console.error(
                            'Error al obtener la lista de empleados:',
                            error,
                        )
                    }
                }
            } else {
                this.getPosts()
            }
        },
        async getPosts() {
            const accessToken = localStorage.getItem('accessToken')
            const rut = localStorage.getItem('rut')
            const rol_id = localStorage.getItem('rol_id')
            const page = this.currentPage

            this.loading = true

            const dataToSend = {
                rut: rut,
                rol_id: rol_id,
                page: page,
            }

            try {
                const response = await axios.post(
                    'https://apijis.com/employees/',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                console.log(response)

                this.employees = response.data.message.data
                this.totalItems = response.data.message.total_items
                this.itemsPerPage = response.data.message.items_per_page
                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de empleados:',
                        error,
                    )
                }
            }
        },
    },
    async mounted() {
        this.getPosts()
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
