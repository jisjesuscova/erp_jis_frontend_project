<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <h2 class="text-4xl dark:text-white pb-10">Datos del Contrato</h2>

            <div class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-2 mt-2" role="alert">
                Recuerde, esta pagina es solo para calcular el finiquito <span class="font-bold">No podra guardarlo desde aqui</span> 
            </div>
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
                            disabled
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
                                    type="number"
                                    @blur="sum"
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
                        <button
                            type="button"
                            @click="generateEndDocument()"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                            >
                                Calcular
                                <i class="fa-solid fa-check"></i>
                            </button> 
                            

                            <router-link
                                :to="`/labor_data/${this.$route.params.rut}`"
                                class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                                Volver
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
            employee_personal_data: [],
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
            branch_offices: [],
            job_positions: [],
        }
    },
    methods: {
        async generateEndDocument() {
            const logo = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/logo.png',
            )

            const company_signature = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/signature.png',
            )

            const schedule = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/schedule.jpg',
            )

            
           
            const actual_date = new Date()
            const current_date =
                 this.formatDateToCustomFormat(new Date(actual_date))


                 

                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 0],
                        },
                        {
                            text: 'CALCULO FINIQUITO',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 5, 0, 10],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 5, 0, 5],
                        },
                           {text: [
                        '\n\n',
                        { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname +' ' + this.employee_personal_data.mother_lastname +' ' , bold:true},   
                        { text: ' RUT: ' + this.employee_personal_data.visual_rut , bold:true},  
                        { text: ' con el cargo de : '},
                        { text: this.job_positions.job_position, bold:true },
                        { text: ' en la Sucursal: '  },
                        { text: this.branch_offices.branch_office + ' ', bold:true},  
                        { text: ' con fecha de ingreso : '},
                        { text: this.formatDateToCustomFormat(this.employee_labor_data.entrance_company), bold: true} ,
                        '\n\n',      
                        { text: 'Resumen Monto', bold:true},
                        '\n',
                        { text: 'Indemnización Años de Servicios', bold:true},
                        { text: this.alignNumbers('$ ',24) +this.formatNumber(this.indemnity_year_input), bold:true},
                        '\n',
                        { text: 'Indemnización Sustitutivo Aviso Previo', bold:true},
                        { text: this.alignNumbers('$ ', 14) + this.formatNumber(this.substitute_compensation_input), bold:true},
                        '\n',
                        { text: 'Indemnización Voluntaria', bold:true},
                        { text: this.alignNumbers('$ ', 38) + this.formatNumber(this.voluntary_compensation_input), bold:true},
                        '\n',
                        { text: 'Feriado Proporcional ('+ this.fertility_proportional_total_input + ' dias)', bold:true},
                        { text: this.alignNumbers('$ ', 31) + this.formatNumber(this.fertility_proportional_input), bold:true},
                        '\n\n',
                        { text: 'Total', bold:true, fontSize: 12},
                        { text: this.alignNumbers('$ ', 50) + this.formatNumber(this.total_input), bold:true, fontSize: 12},


                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 10],
                            lineHeight: 1.5,
                    },
                        
                       
                    ],
                    pageMargins: [40, 20, 40, 30],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                    },
                }

            pdfMake.createPdf(docDefinition).download('Calculo_Finiquito.pdf')
        },
        async sum() {
            this.total_input =
                    this.indemnity_year_input +
                    this.substitute_compensation_input +
                    this.fertility_proportional_input +
                    this.voluntary_compensation_input

        },
        async getBranchOffices() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/branch_offices/edit/' + this.employee_labor_data.branch_office_id,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                console.log(response)

                this.branch_offices = response.data.message
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener las sucursales:',
                        error
                    )
                }
            }
        },
        async getJobPositions() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/job_positions/edit/' + this.employee_labor_data.job_position_id,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                console.log(response)

                this.job_positions = response.data.message
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los crgos:',
                        error
                    )
                }
            }
        },
        formatDateToCustomFormat(date) {
        let localDate = new Date(date);
        let utcDate = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());
        const monthNames = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
            ]

            const day = utcDate.getDate()
            const month = utcDate.getMonth()
            const year = utcDate.getFullYear()

            const formattedDate = `${day} de ${monthNames[month]} del ${year}`
            return formattedDate
        },
        alignNumbers(number, length) {
        return number.padStart(length);
        },
        formatNumber(number) {
            return number.toLocaleString('de-DE');
        },
        getBase64ImageFromURL(url) {
            return new Promise((resolve, reject) => {
                var img = new Image()
                img.setAttribute('crossOrigin', 'anonymous')

                img.onload = () => {
                    var canvas = document.createElement('canvas')
                    canvas.width = img.width
                    canvas.height = img.height

                    var ctx = canvas.getContext('2d')
                    ctx.drawImage(img, 0, 0)

                    var dataURL = canvas.toDataURL('image/png')

                    resolve(dataURL)
                }

                img.onerror = (error) => {
                    reject(error)
                }

                img.src = url
            })
        },
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
                    this.employee_personal_data = decodedData.employee_data
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
        
        async getCausals() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/causals/' + this.status_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                const responseTakenDays = await axios.get(
                    'https://apijis.com/vacations/taken/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                const responseProgresssiveTaken = await axios.get(
                    'https://apijis.com/progressive_vacations/taken/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
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
        await this.getEmployeeLaborData()
        await this.getCausals()
        await this.getLegalAndTaken()
        await this.getProgressiveLegalAndTaken()
        await this.getEmployee()
        await this.getBranchOffices()
        await this.getJobPositions()

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
