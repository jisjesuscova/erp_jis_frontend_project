<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
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

        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">Generar Honorario</h2>

            <div class="mt-3">
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="generateHonorary">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Datos Personales
                                </p>
                            </div>

                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Motivo</label
                                    >
                                    <select
                                        v-model="reason_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Motivo -</option>
                                        <option
                                            v-for="honorary_reason in honorary_reasons"
                                            :key="honorary_reason.id"
                                            :value="honorary_reason.id"
                                        >
                                            {{ honorary_reason.reason }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Sucursal</label
                                    >
                                    <select
                                        required
                                        v-model="branch_office_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Sucursal -</option>
                                        <option
                                            v-for="branch_office in branch_offices"
                                            :key="branch_office.id"
                                            :value="branch_office.id"
                                        >
                                            {{ branch_office.branch_office }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div
                                v-if="
                                    reason_input == 2 ||
                                    reason_input == 3 ||
                                    reason_input == 4
                                "
                                class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Motivo</label
                                    >
                                    <select
                                        required
                                        v-model="employee_to_replace_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Motivo -</option>
                                        <option
                                            v-for="employee in employees"
                                            :key="employee.rut"
                                            :value="employee.rut"
                                        >
                                            {{ employee.names }}
                                            {{ employee.father_lastname }}
                                            {{ employee.mother_lastname }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Inicio</label
                                    >
                                    <input
                                        type="date"
                                        id="start_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Desde"
                                        v-model="start_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Fin</label
                                    >
                                    <input
                                        type="date"
                                        id="end_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Hasta"
                                        v-model="end_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
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
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Nombre Completo</label
                                    >
                                    <input
                                        type="text"
                                        id="full_name_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nombre Completo"
                                        v-model="full_name_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Correo</label
                                    >
                                    <input
                                        type="email"
                                        id="email_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Correo"
                                        v-model="email_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Región</label
                                    >
                                    <select
                                        required
                                        v-model="region_input"
                                        @change="getCommunes"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Región -</option>
                                        <option
                                            v-for="region in regions"
                                            :key="region.id"
                                            :value="region.id"
                                        >
                                            {{ region.region }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Comunas</label
                                    >
                                    <select
                                        required
                                        v-model="commune_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Comunas -</option>
                                        <option
                                            v-for="commune in communes"
                                            :key="commune.id"
                                            :value="commune.id"
                                        >
                                            {{ commune.commune }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Dirección</label
                                    >
                                    <input
                                        type="text"
                                        id="address_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Dirección"
                                        v-model="address_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >¿Tiene RUT el trabajador?</label
                                    >
                                    <select
                                        required
                                        v-model="foreigner_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - ¿Tiene RUT el trabajador? -
                                        </option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Banco</label
                                    >
                                    <select
                                        required
                                        v-model="bank_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Banco -</option>
                                        <option
                                            v-for="bank in banks"
                                            :key="bank.id"
                                            :value="bank.id"
                                        >
                                            {{ bank.bank }}
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
                                        >N° de Cuenta</label
                                    >
                                    <input
                                        type="text"
                                        id="account_number_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="N° de Cuenta"
                                        v-model="account_number_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Honorario</label
                                    >
                                    <select
                                        required
                                        v-model="schedule_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Honorario -
                                        </option>
                                        <option value="1">Full-Time</option>
                                        <option value="2">Part-Time</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                    >
                                        Monto
                                    </label>
                                    <input
                                        type="text"
                                        id="amount_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monto"
                                        v-model="amount_input"
                                        @blur="addThousands"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                    >
                                        Observación
                                        <div class="hs-tooltip inline-block">
                                            <button
                                                type="button"
                                                style="
                                                    background-color: yellow !important;
                                                "
                                                class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 rounded-full bg-blue/[.1] border border-blue/[.3] text-blue shadow-md shadow-blue-800/[.05] hover:bg-blue hover:border-blue hover:text-blue-600 hover:shadow-gray-800/[.1] transition"
                                            >
                                                <i
                                                    class="fa-solid fa-question"
                                                ></i>
                                                <span
                                                    class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                                                    role="tooltip"
                                                >
                                                    Detalle el pago del
                                                    honorario. <br />
                                                    Ejemplo: trabajador
                                                    Full-Time, apoyo vacaciones
                                                    o <br />licencia médica,
                                                    días trabajados, monto
                                                    ofrecido, etc.
                                                </span>
                                            </button>
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        id="observation_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Observación"
                                        v-model="observation_input"
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
                                        Generar
                                        <i class="fa-solid fa-check"></i>
                                    </button>
                                </div>

                                <router-link
                                    :to="`/honoraries`"
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

export default {
    components: {
        EmployeeMenu,
    },
    data() {
        return {
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
            loading_5: true,
            loading_6: true,
            loading_7: true,
            loading_8: true,
            loading: true,
            reason_input: '',
            start_input: '',
            end_input: '',
            region_input: '',
            branch_office_input: '',
            commune_input: '',
            foreigner_input: '',
            bank_input: '',
            schedule_input: '',
            rut_input: '',
            full_name_input: '',
            email_input: '',
            address_input: '',
            account_number_input: '',
            observation_input: '',
            employee_to_replace_input: '',
            honorary_reasons: [],
            branch_offices: [],
            regions: [],
            communes: [],
            banks: [],
            employees: [],
            amount_input: 0,
            formattedNumber: '',
        }
    },
    methods: {
    
        async getCommunes() {
            const accessToken = localStorage.getItem('accessToken')

            this.communes = []

            try {
                const response = await axios.get(
                    'https://apijis.com/communes/' + this.region_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.communes = response.data.message

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de comunas:',
                        error,
                    )
                }
            }
        },
        generateHonorary() {
            if (window.confirm("¿Desea generar el honorario?")) {
            this.loading = true

            const rut = localStorage.getItem('rut')

            if (this.employee_to_replace_input == '') {
                var employee_to_replace_input_value = 0
            } else {
                var employee_to_replace_input_value =
                    this.employee_to_replace_input
            }

            const dataToSend = {
                reason_id: this.reason_input,
                branch_office_id: this.branch_office_input,
                foreigner_id: this.foreigner_input,
                bank_id: this.bank_input,
                schedule_id: this.schedule_input,
                region_id: this.region_input,
                commune_id: this.commune_input,
                requested_by: rut,
                status_id: 2,
                accountability_status_id: 0,
                employee_to_replace: employee_to_replace_input_value,
                rut: this.rut_input,
                full_name: this.full_name_input,
                email: this.email_input,
                address: this.address_input,
                account_number: this.account_number_input,
                start_date: this.start_input,
                end_date: this.end_input,
                amount: this.amount_input,
                observation: this.observation_input,
            }

            const accessToken = localStorage.getItem('accessToken')

            axios
                .patch(
                    'https://apijis.com/honoraries/update/' +
                        this.$route.params.id,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )
                .then((response) => {
                    console.log(response)
                    this.loading = false
                    localStorage.setItem('created_honorary', 1)
                    this.$router.push('/honoraries')
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
            }
        },
        async getRegions() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/regions/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.regions = response.data.message

                console.log(response.data.message)

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error,
                    )
                }
            }
        },
        async getBranchOffices() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/branch_offices/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.branch_offices = response.data.message

                this.loading_3 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error,
                    )
                }
            }
        },
        async getHonoraryReasons() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/honorary_reasons/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.honorary_reasons = response.data.message

                this.loading_4 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de motivos:',
                        error,
                    )
                }
            }
        },
        async getBanks() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.post(
                    'https://apijis.com/banks/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.banks = response.data.message

                this.loading_6 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener la lista de bancos:', error)
                }
            }
        },
        addThousands() {
            const amount = new Intl.NumberFormat('es-419').format(  this.amount_input );
            const formatted_value = amount.replace(/\,/g, '.')
            this.amount_input = formatted_value
        },
        async getHonorary() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/honoraries/edit/' +
                        this.$route.params.id,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                const decodedData = JSON.parse(response.data.message)

                this.honorary = decodedData

                this.reason_input = this.honorary.reason_id
                this.start_input = this.honorary.start_date
                this.end_input = this.honorary.end_date
                this.region_input = this.honorary.region_id
                this.commune_input = this.honorary.commune_id
                this.branch_office_input = this.honorary.branch_office_id
                this.commune_input = this.honorary.commune_id
                this.foreigner_input = this.honorary.foreigner_id
                this.bank_input = this.honorary.bank_id
                this.schedule_input = this.honorary.schedule_id
                this.rut_input = this.honorary.rut
                this.full_name_input = this.honorary.full_name
                this.email_input = this.honorary.email
                this.address_input = this.honorary.address
                this.account_number_input = this.honorary.account_number
                this.observation_input = this.honorary.observation
                this.employee_to_replace_input =
                    this.honorary.employee_to_replace

                this.loading_7 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los datos del honorario:',
                        error,
                    )
                }
            }
        },
        async getEmployees() {
            const accessToken = localStorage.getItem('accessToken')

            const rut = localStorage.getItem('rut')
            const rol_id = localStorage.getItem('rol_id')
            const page = 0

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

                this.employees = response.data.message
                this.loading_8 = false
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
    async created() {
        await this.getHonoraryReasons()
        await this.getRegions()
        await this.getBranchOffices()
        await this.getEmployees()
        await this.getHonorary()
        await this.getCommunes()
        await this.getBanks()


            this.loading = false
        
    },
}
</script>
