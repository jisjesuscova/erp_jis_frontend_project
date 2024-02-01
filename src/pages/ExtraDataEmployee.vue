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
           <EmployeeName v-if="rol_id ==4" :names="full_name" />
            <hr class="pb-10">
            <h2 class="text-4xl dark:text-white pb-10">Datos Extras</h2>

            <EmployeeMenu />

            <div class="mt-10">
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="updateExtraDataEmployee">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Datos Extras
                                </p>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Zona Extrema</label
                                    >
                                    <select
                                        v-model="extreme_zone_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">
                                            - Zona Extrema -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Empleado</label
                                    >
                                    <select
                                        v-model="employee_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Empleado -
                                        </option>
                                        <option value="1">Activo</option>
                                        <option value="2">
                                            Pensionado y Cotiza
                                        </option>
                                        <option value="3">
                                            Pensionado y No Cotiza
                                        </option>
                                        <option value="4">
                                            Activo > 65 Años (Nunca Pensionado)
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Subsidio Empleo Jovén</label
                                    >
                                    <select
                                        v-model="young_employee_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">
                                            - Subsidio Empleo Jovén -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >¿Goce de Sueldo?</label
                                    >
                                    <select
                                        v-model="be_paid_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">
                                            - ¿Goce de Sueldo? -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Invalidez</label
                                    >
                                    <select
                                        v-model="disability_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">- Invalidez-</option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Aporte SIS</label
                                    >
                                    <select
                                        v-model="pensioner_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">- Aporte SIS -</option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >¿Tiene Seguro Complementario?</label
                                    >
                                    <select
                                        v-model="
                                            suplemental_health_insurance_input
                                        "
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">
                                            - ¿Tiene Seguro Complementario? -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Vacaciones Progresivas</label
                                    >
                                    <select
                                        v-model="progressive_vacation_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">
                                            - Vacaciones Progresivas -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div v-if="progressive_vacation_input == 1">
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Fecha Vacaciones Progresivas</label
                                    >
                                    <input
                                        type="date"
                                        id="progressive_vacation_date_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Fecha de Nacimiento"
                                        v-model="
                                            progressive_vacation_date_input
                                        "
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="progressive_vacation_input == 1"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Años que se Reconocen</label
                                    >
                                    <input
                                        type="number"
                                        id="recognized_years_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Años que se Reconocen"
                                        v-model="recognized_years_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div
                                    v-if="loading"
                                    class="flex items-center justify-center h-full"
                                >
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
                                </div>
                                <div v-else class="w-full">
                                    <button
                                        type="submit"
                                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                    >
                                        Actualizar
                                        <i class="fa-solid fa-check"></i>
                                    </button>
                                </div>

                                <router-link
                                    :to="`/uniform/${$route.params.rut}`"
                                    class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                >
                                    Cancelar
                                    <i class="fa-solid fa-remove"></i>
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import EmployeeMenu from '../components/EmployeeMenu.vue'
import EmployeeName from '../components/EmployeeName.vue'

export default {
    components: {
    EmployeeMenu,
    EmployeeName
},
    data() {
        return {
            extreme_zone_input: 2,
            employee_type_input: 1,
            young_employee_input: 2,
            be_paid_input: 1,
            disability_input: 2,
            pensioner_input: 1,
            suplemental_health_insurance_input: 2,
            progressive_vacation_input: 2,
            loading: true,
            loading_1: true,
            loading_2: true,
            extra_data_employee: '',
            progressive_vacation_date_input: '',
            recognized_years_input: 0,
            full_name: '',
        }
    },
    methods: {
        async getPersonalDataEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employees/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                const decodedData = JSON.parse(response.data.message)

                this.loading_1 = false

                this.full_name = decodedData.employee_data.names +' '+ decodedData.employee_data.father_lastname +' '+ decodedData.employee_data.mother_lastname

            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de nacionalidades:',
                        error
                    )
                }
            }
        },
        async getExtraDataEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_extras/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                
                if(response.data.message.extreme_zone_id == null) {
                    this.extreme_zone_input = 2
                } else {
                    this.extreme_zone_input = response.data.message.extreme_zone_id
                }

                if(response.data.message.employee_type_id == null) {
                    this.extreme_zone_input = 1
                } else {
                    this.employee_type_input =
                    response.data.message.employee_type_id
                }

                if(response.data.message.young_job_status_id == null) {
                    this.young_employee_input = 2
                } else {
                    this.young_employee_input = response.data.message.young_job_status_id
                }

                if(response.data.message.extreme_zone_id == null) {
                    this.extreme_zone_input = 2
                } else {
                    this.extreme_zone_input = response.data.message.extreme_zone_id
                }

                if(response.data.message.be_paid_id == null) {
                    this.be_paid_input = 1
                } else {
                    this.be_paid_input = response.data.message.be_paid_id
                }

                if(response.data.message.disability_id == null) {
                    this.disability_input = 2
                } else {
                    this.disability_input = response.data.message.disability_id
                }

                if(response.data.message.pensioner_id == null) {
                    this.pensioner_input = 1
                } else {
                    this.pensioner_input = response.data.message.pensioner_id
                }

                if(response.data.message.suplemental_health_insurance_id == null) {
                    this.suplemental_health_insurance_input = 2
                } else {
                    this.suplemental_health_insurance_input = response.data.message.suplemental_health_insurance_id
                }

                if(response.data.message.progressive_vacation_status_id == null) {
                    this.progressive_vacation_input = 2
                } else {
                    this.progressive_vacation_input = response.data.message.progressive_vacation_status_id
                }
                
                if(response.data.message.recognized_years == null) {
                    this.recognized_years_input = 0
                } else {
                    this.recognized_years_input = response.data.message.recognized_years
                }

                this.progressive_vacation_date_input = response.data.message.progressive_vacation_date

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los datos del empleado:',
                        error,
                    )
                }
            }
        },
        async updateExtraDataEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.patch(
                    `https://apijis.com/employee_extras/update/${this.$route.params.rut}`,
                    {
                        extreme_zone_id: this.extreme_zone_input,
                        employee_type_id: this.employee_type_input,
                        young_job_status_id: this.young_employee_input,
                        be_paid_id: this.be_paid_input,
                        suplemental_health_insurance_id:
                            this.suplemental_health_insurance_input,
                        pensioner_id: this.pensioner_input,
                        disability_id: this.disability_input,
                        recognized_years: this.recognized_years_input,
                        progressive_vacation_status_id:
                            this.progressive_vacation_input,
                        progressive_vacation_date:
                            this.progressive_vacation_date_input,
                        updated_date: new Date(),
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
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
                        'Error al actualizar los datos del empleado:',
                        error,
                    )
                }
            }
        },
    },
    async mounted() {
        const rol_id = localStorage.getItem('rol_id')

        this.rol_id = rol_id
        await this.getPersonalDataEmployee()
        await this.getExtraDataEmployee()

        if (this.loading_1 == false && this.loading_2 == false) {
            this.loading = false
        }
    },
}
</script>

<style scoped>
.active {
    background-color: #2563eb;
    color: #fff;
}
</style>
