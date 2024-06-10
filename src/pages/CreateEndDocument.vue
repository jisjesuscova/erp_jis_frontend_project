<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div
            v-if="loading"
            class="flex flex-col justify-center items-center h-screen"
        >
            <div
                v-if="personal_data_status == 1"
                class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Los datos personales del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_extras_status == 1"
                class="bg-orange-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Los datos extras del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_labor_data_status == 1"
                class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Los datos laborales del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_documents_status == 1"
                class="bg-indigo-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Los documentos del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_family_data_status == 1"
                class="bg-blue-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Los familiares del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_vacations_status == 1"
                class="bg-violet-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Las vacaciones del empleado se están
                <span class="font-bold">guardando</span>
            </div>
            <div
                v-if="employee_medical_status == 1"
                class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 w-300"
                role="alert"
            >
                Las licencias del empleado se están
                <span class="font-bold">guardando</span>
            </div>
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

        <div v-else>
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Datos
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >RUT</label
                        >
                        <input
                            type="text"
                            id="rut_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="RUT"
                            v-model="rut_input"
                            v-mask="['########-X']"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Estatus</label
                        >
                        <select
                            v-model="status_input"
                            @change="getCausals"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="0">- Seleccionar -</option>
                            <option value="3">Voluntario</option>
                            <option value="2">Desvinculado</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Causal</label
                        >
                        <select
                            v-model="causal_input"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Seleccionar -</option>
                            <option
                                v-for="causal in causals"
                                :key="causal.id"
                                :value="causal.id"
                            >
                                {{ causal.causal }}
                            </option>
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
                            >Fecha del Finiquito</label
                        >
                        <input
                            type="date"
                            v-model="exit_company_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Fecha de Nacimiento"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Cantidad de Vacaciones</label
                        >
                        <input
                            type="text"
                            v-model="vacations_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Indemnización Voluntaria</label
                        >
                        <input
                            type="number"
                            v-model="voluntary_compensation_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >¿Es un finiquito real?</label
                        >
                        <select
                            v-model="end_document_type_id"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mt-10" v-if="exit_company_input != ''">
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <hr
                        class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div
                            class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                            >
                                Calculo de Indemnización Años de Servicios
                            </p>
                        </div>
                        <div
                            class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Valor</label
                                >
                                <input
                                    type="number"
                                    v-model="indemnity_year_input"
                                    @blur="sum"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div
                            class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div class="w-full">
                                <button
                                    @click="calculateIndemnityYears"
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Calcular

                                    <i class="fa-solid fa-dollar"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr
                        class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div
                            class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                            >
                                Calculo de Indemnización Sustitutivo de Aviso
                                Previo
                            </p>
                        </div>
                        <div
                            class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Valor</label
                                >
                                <input
                                    v-model="substitute_compensation_input"
                                    @blur="sum"
                                    type="number"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div class="w-full">
                                <button
                                    @click="substituteCompensation"
                                    type="submit"
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Calcular

                                    <i class="fa-solid fa-dollar"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr
                        class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div
                            class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                            >
                                Datos Calculo de Feriado Proporcional
                            </p>
                        </div>
                        <div
                            class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Valor</label
                                >
                                <input
                                    v-model="fertility_proportional_input"
                                    type="number"
                                    @blur="sum"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Dias</label
                                >
                                <input
                                    v-model="fertility_proportional_total_input"
                                    type="number"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Feriados</label
                                >
                                <input
                                    type="number"
                                    v-model="number_holidays_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div class="w-full">
                                <button
                                    @click="fertilityProportional"
                                    type="submit"
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Calcular

                                    <i class="fa-solid fa-dollar"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr
                        class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div
                            class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                            >
                                Total
                            </p>
                        </div>
                        <div
                            class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-7 mt-7 ml-4 mr-4"
                            role="alert"
                        >
                            <i class="fa-solid fa-circle-exclamation"></i>
                            Recuerde que este va a ser el valor final a pagar al
                            trabajador en el
                            <span class="font-bold">finiquito</span>.
                        </div>
                        <div
                            class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Valor</label
                                >
                                <input
                                    v-model="total_input"
                                    type="number"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div class="w-full">
                                <button
                                    @click="createEndDocument"
                                    type="submit"
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Guardar
                                    <i class="fa-solid fa-check"></i>
                                </button>
                            </div>

                            <router-link
                                :to="`/labor_data/${this.$route.params.rut}`"
                                class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                                Cancelar
                                <i class="fa-solid fa-remove"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
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
            rut_input: '',
            causal_input: '',
            status_input: 0,
            exit_company_input: '',
            indemnity_year_input: 0,
            voluntary_compensation_input: 0,
            substitute_compensation_input: 0,
            fertility_proportional_input: 0,
            fertility_proportional_total_input: 0,
            fertility_proportional_days_input: 0,
            number_holidays_input: 0,
            total_input: 0,
            legal_vacations: 0,
            progressive_legal_vacations: 0,
            taken_days: 0,
            progressive_taken_days: 0,
            vacations_input: 0,
            balance: 0,
            progressive_balance: 0,
            causals: [],
            employee_data: [],
            rut: '',
            visual_rut: '',
            names: '',
            father_lastname: '',
            mother_lastname: '',
            gender_id: '',
            nationality_id: '',
            personal_email: '',
            cellphone: '',
            born_date: '',
            privilege: '',
            added_date: '',
            updated_date: '',
            employee_extra_data: [],
            employee_labor_data: [],
            documents_employee: [],
            pention_id: 0,
            entrance_pention: '',
            apv_payment_type_id: 0,
            apv_amount: 0,
            extra_health_payment_type_id: 0,
            extra_health_amount: 0,
            personal_data_status: 0,
            employee_extras_status: 0,
            employee_labor_data_status: 0,
            employee_documents_status: 0,
            employee_family_data_status: 0,
            employee_vacations_status: 0,
            employee_medical_status: 0,
            end_document_type_id: 1,
        }
    },
    methods: {
        async getEmployee() {
            const accessToken = localStorage.getItem('accessToken')
            await axios
                .get(
                    'https://apijis.com/employees/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )
                .then((response) => {
                    const decodedData = JSON.parse(response.data.message)
                    this.rut_input = decodedData.employee_data.visual_rut
                    this.employee_data = decodedData.employee_data
                })
                .catch((error) => {
                    this.validate_rut_status = 0

                    this.validationsPassed = false
                })
            const responseExtras = await axios.get(
                'https://apijis.com/employee_extras/edit/' +
                    this.$route.params.rut,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: 'application/json',
                    },
                }
            )
            this.employee_extra_data = responseExtras.data.message
        },
        async getEmployeeLaborData() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/employee_labor_data/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, 
                        },
                    }
                )

                const decodedData = JSON.parse(response.data.message)
                this.employee_labor_data = decodedData.EmployeeLaborDatumModel
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los datos laborales:',
                        error
                    )
                }
            }
        },
        async createEndDocument() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                this.loading = true
                this.loading_1 = true
                this.personal_data_status = 1

                const employeeDataToSend = {
                    end_document_type_id: this.end_document_type_id,
                    rut: this.employee_data.rut,
                    visual_rut: this.rut_input,
                    names: this.employee_data.names,
                    father_lastname: this.employee_data.father_lastname,
                    mother_lastname: this.employee_data.mother_lastname,
                    gender_id: this.employee_data.gender_id,
                    nationality_id: this.employee_data.nationality_id,
                    personal_email: this.employee_data.personal_email,
                    cellphone: this.employee_data.cellphone,
                    born_date: this.employee_data.born_date,
                    privilege: this.employee_data.privilege
                }

                await axios.post(
                    'https://apijis.com/old_employees/transfer',
                    employeeDataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                if (
                    this.employee_extra_data.progressive_vacation_date == 'null'
                ) {
                    progressive_vacation_date = null
                } else if (
                    this.employee_extra_data.recognized_years == 'null'
                ) {
                    recognized_years = null
                }

                const employeeExtraDataToSend = {
                    end_document_type_id: this.end_document_type_id,
                    rut: this.$route.params.rut,
                    extreme_zone_id: this.employee_extra_data.extreme_zone_id,
                    employee_type_id: this.employee_extra_data.employee_type_id,
                    young_job_status_id:
                        this.employee_extra_data.young_job_status_id,
                    be_paid_id: this.employee_extra_data.be_paid_id,
                    suplemental_health_insurance_id:
                        this.employee_extra_data
                            .suplemental_health_insurance_id,
                    disability_id: this.employee_extra_data.disability_id,
                    pensioner_id: this.employee_extra_data.pensioner_id,
                    progressive_vacation_status_id:
                        this.employee_extra_data.progressive_vacation_status_id,
                    progressive_vacation_date:
                        this.employee_extra_data.progressive_vacation_date,
                    recognized_years: this.employee_extra_data.recognized_years,
                }

                this.loading_1 = false
                this.personal_data_status = 0
                this.loading_2 = true
                this.employee_extras_status = 1

                await axios.post(
                    'https://apijis.com/old_employee_extras/transfer',
                    employeeExtraDataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                if (
                    this.employee_labor_data.pention_id != 'null' &&
                    this.employee_labor_data.pention_id != '' &&
                    this.employee_labor_data.pention_id != undefined &&
                    this.employee_labor_data.pention_id != null
                ) {
                    this.pention_id = this.employee_labor_data.pention_id
                } else {
                    this.pention_id = 0
                }

                if (
                    this.employee_labor_data.entrance_pention != 'null' &&
                    this.employee_labor_data.entrance_pention != '' &&
                    this.employee_labor_data.entrance_pention != undefined &&
                    this.employee_labor_data.entrance_pention != null
                ) {
                    this.entrance_pention =
                        this.employee_labor_data.entrance_pention
                } else {
                    this.entrance_pention = ''
                }

                if (
                    this.employee_labor_data.apv_payment_type_id != 'null' &&
                    this.employee_labor_data.apv_payment_type_id != '' &&
                    this.employee_labor_data.apv_payment_type_id != undefined &&
                    this.employee_labor_data.apv_payment_type_id != null
                ) {
                    this.apv_payment_type_id =
                        this.employee_labor_data.apv_payment_type_id
                } else {
                    this.apv_payment_type_id = 0
                }

                if (
                    this.employee_labor_data.apv_amount != 'null' &&
                    this.employee_labor_data.apv_amount != '' &&
                    this.employee_labor_data.apv_amount != undefined &&
                    this.employee_labor_data.apv_amount != null
                ) {
                    this.apv_amount = this.employee_labor_data.apv_amount
                } else {
                    this.apv_amount = 0
                }

                if (
                    this.employee_labor_data.extra_health_payment_type_id !=
                        'null' &&
                    this.employee_labor_data.extra_health_payment_type_id !=
                        '' &&
                    this.employee_labor_data.extra_health_payment_type_id !=
                        undefined &&
                    this.employee_labor_data.extra_health_payment_type_id !=
                        null
                ) {
                    this.extra_health_payment_type_id =
                        this.employee_labor_data.extra_health_payment_type_id
                } else {
                    this.extra_health_payment_type_id = 0
                }

                if (
                    this.employee_labor_data.extra_health_amount != 'null' &&
                    this.employee_labor_data.extra_health_amount != '' &&
                    this.employee_labor_data.extra_health_amount != undefined &&
                    this.employee_labor_data.extra_health_amount != null
                ) {
                    this.extra_health_amount =
                        this.employee_labor_data.extra_health_amount
                } else {
                    this.extra_health_amount = 0
                }

                console.log(this.employee_labor_data.health_payment_id)

                if (
                    this.employee_labor_data.health_payment_id != 'null' &&
                    this.employee_labor_data.health_payment_id != '' &&
                    this.employee_labor_data.health_payment_id != undefined &&
                    this.employee_labor_data.health_payment_id != null
                ) {
                    this.health_payment_id =
                        this.employee_labor_data.health_payment_id
                } else {
                    this.health_payment_id = 0
                }

                const employeeLaborDataToSend = {
                    end_document_type_id: this.end_document_type_id,
                    rut: this.$route.params.rut,
                    visual_rut: this.rut_input,
                    contract_type_id: this.employee_labor_data.contract_type_id,
                    branch_office_id: this.employee_labor_data.branch_office_id,
                    address: this.employee_labor_data.address,
                    region_id: this.employee_labor_data.region_id,
                    commune_id: this.employee_labor_data.commune_id,
                    civil_state_id: this.employee_labor_data.civil_state_id,
                    health_id: this.employee_labor_data.health_id,
                    pention_id: this.pention_id,
                    job_position_id: this.employee_labor_data.job_position_id,
                    employee_type_id: this.employee_labor_data.employee_type_id,
                    regime_id: this.employee_labor_data.regime_id,
                    status_id: this.status_input,
                    health_payment_id: this.health_payment_id,
                    extra_health_payment_type_id:
                        this.extra_health_payment_type_id,
                    apv_payment_type_id: this.apv_payment_type_id,
                    entrance_pention: this.entrance_pention,
                    entrance_company: this.employee_labor_data.entrance_company,
                    entrance_health: this.employee_labor_data.entrance_health,
                    exit_company: this.exit_company_input,
                    salary: this.employee_labor_data.salary,
                    collation: this.employee_labor_data.collation,
                    locomotion: this.employee_labor_data.locomotion,
                    extra_health_amount: String(this.extra_health_amount),
                    apv_amount: String(this.apv_amount),
                }

                this.loading_2 = false
                this.employee_extras_status = 0
                this.loading_3 = true
                this.employee_labor_data_status = 1

                await axios.post(
                    'https://apijis.com/old_employee_labor_data/transfer',
                    employeeLaborDataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_3 = false
                this.employee_labor_data_status = 0
                this.loading_4 = true
                this.employee_documents_status = 1

                await axios.post(
                    'https://apijis.com/old_documents_employees/transfer/' +
                        this.$route.params.rut + '/' + this.end_document_type_id,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_4 = false
                this.employee_documents_status = 0
                this.loading_5 = true
                this.employee_family_data_status = 1

                await axios.post(
                    'https://apijis.com/old_family_core_data/transfer/' +
                        this.$route.params.rut + '/' + this.end_document_type_id,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_5 = false
                this.employee_family_data_status = 0
                this.loading_6 = true
                this.employee_vacations_status = 1

                const response = await axios.get('https://apijis.com/vacations/edit/' + this.$route.params.rut, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, 
                    },
                })
                console.log('vacationsResponse',response)
                if(response.data.message != 'null' && response.data.message != undefined && response.data.message != ''  && response.data.message != null){
                    await axios.post(
                    'https://apijis.com/old_vacations/transfer/' +
                        this.$route.params.rut + '/' + this.end_document_type_id,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                    )
                }

                this.loading_6 = false
                this.employee_vacations_status = 0
                this.loading_7 = true
                this.employee_medical_status = 1

                await axios.post(
                    'https://apijis.com/old_medical_licenses/transfer/' +
                        this.$route.params.rut + '/' + this.end_document_type_id,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_7 = false
                this.employee_medical_status = 0

            } catch (error) {
                this.loading_1 = false
                this.loading_2 = false
                this.loading_3 = false
                this.loading_4 = false
                this.loading_5 = false
                this.loading_6 = false
                this.loading_7 = false
                this.loading = false
                console.log(error)
            } finally {
                this.loading_2 = false;
                this.loading_3 = false;
                this.loading_4 = false;
                this.loading_5 = false;
                this.loading_6 = false;
                this.loading_7 = false;

                if (
                    !this.loading_1 &&
                    !this.loading_2 &&
                    !this.loading_3 &&
                    !this.loading_4 &&
                    !this.loading_5 &&
                    !this.loading_6 &&
                    !this.loading_7
                ) {
                    this.storeEndDocument();
                    localStorage.setItem('created_end_document', 1);
                    this.$router.push('/old_labor_data/' + this.$route.params.rut);
                    this.loading = false;
                }
            }
        },
        storeEndDocument() {
            const dataToSend = {
                rut: this.$route.params.rut,
                document_type_id: 22,
                causal_id: this.causal_input,
                fertility_proportional_days: String(this.fertility_proportional_total_input),
                voluntary_indemnity: this.voluntary_compensation_input,
                indemnity_years_service: this.indemnity_year_input,
                substitute_compensation: this.substitute_compensation_input,
                fertility_proportional: this.fertility_proportional_input,
                total: this.total_input,
                status_id: 3,
            }

            const accessToken = localStorage.getItem('accessToken')
            
            axios
                .post('https://apijis.com/end_documents/store', dataToSend, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((response) => {
                    console.log('responseEnddocumnet', response)

                    localStorage.setItem('created_end_document', 1)
                })
                .catch((error) => {
                    console.error('responseEnddocumnet', error)
                    this.loading = false
                })
        },
        async getCausals() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/causals/' + this.status_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, 
                        },
                    }
                )
                this.causals = response.data.message
                this.loading_1 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de Causales:',
                        error
                    )
                }
            }
        },
        async getLegalAndTaken() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const responseLegal = await axios.get(
                    'https://apijis.com/vacations/legal/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, 
                        },
                    }
                )
                const responseTakenDays = await axios.get(
                    'https://apijis.com/vacations/taken/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, 
                        },
                    }
                )
                this.legal_vacations = responseLegal.data.message
                this.taken_days = responseTakenDays.data.message

                this.loading_2 = false
                
                let legalHoliday = parseFloat(this.legal_vacations);
                let takenDays = parseFloat(this.taken_days);
                let difference = legalHoliday - takenDays;
                let roundedDifference = difference.toFixed(2);
                this.balance = parseFloat(roundedDifference);
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener las vacaciones legales:',
                        error
                    )
                }
            }
        },
        async getProgressiveLegalAndTaken() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const responseProgressiveLegal = await axios.get(
                    'https://apijis.com/progressive_vacations/legal/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                const responseProgresssiveTaken = await axios.get(
                    'https://apijis.com/progressive_vacations/taken/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
           
                this.progressive_legal_vacations =
                    responseProgressiveLegal.data.message
                this.progressive_taken_days =
                    responseProgresssiveTaken.data.message

                this.progressive_balance =
                    this.progressive_legal_vacations -
                    this.progressive_taken_days
                
                this.loading_3 = false
      
                this.vacations_input = parseFloat(this.balance) + parseFloat(this.progressive_balance)
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los datos:', error)
                }
            }
        },
        async sum() {
            this.total_input =
                    this.indemnity_year_input +
                    this.substitute_compensation_input +
                    this.fertility_proportional_input +
                    this.voluntary_compensation_input

        },
        async calculateIndemnityYears() {
            try {
                this.loading = true

                const dataToSend = {
                    rut: this.$route.params.rut,
                    exit_company: this.exit_company_input,
                }
                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/end_documents/indemnity_years',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )

                this.indemnity_year_input = response.data.message
                this.total_input =
                    this.indemnity_year_input +
                    this.substitute_compensation_input +
                    this.fertility_proportional_input +
                    this.voluntary_compensation_input
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },
        async substituteCompensation() {
            try {
                this.loading = true

                const dataToSend = {
                    rut: this.$route.params.rut,
                }
                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/end_documents/substitute_compensation',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                this.substitute_compensation_input = response.data.message
                this.total_input =
                    this.indemnity_year_input +
                    this.substitute_compensation_input +
                    this.fertility_proportional_input +
                    this.voluntary_compensation_input
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },
        async fertilityProportional() {
            try {
                this.loading = true

                const dataToSend = {
                    rut: this.$route.params.rut,
                    exit_company: this.exit_company_input,
                    balance: this.vacations_input,
                    number_holidays: this.number_holidays_input,
                }
                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/end_documents/human_resources/end_document/fertility_proportional',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, 
                        },
                    }
                )

                this.fertility_proportional_input = response.data.message

                let fertilityTotal = parseFloat(response.data.total);

                let result = fertilityTotal.toFixed(2);

                this.fertility_proportional_total_input = result

                this.total_input =
                    this.indemnity_year_input +
                    this.substitute_compensation_input +
                    this.fertility_proportional_input +
                    this.voluntary_compensation_input
                this.loading = false
            } catch (error) {
                console.log(error)
                this.loading = false
            }
        },
    },
    async mounted() {
        await this.getCausals()
        await this.getLegalAndTaken()
        await this.getProgressiveLegalAndTaken()
        await this.getEmployee()
        await this.getEmployeeLaborData()

        if (
            this.loading_1 == false &&
            this.loading_2 == false &&
            this.loading_3 == false
        ) {
            this.loading = false
        }
    },
}
</script>
