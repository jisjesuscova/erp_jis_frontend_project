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
        </div>
        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">
                Impuesto Segunda Categoría
            </h2>
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Item
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Mes</label
                        >
                        <input
                            disabled
                            type="month"
                            id="rut_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mes del periodo"
                            v-model="period_input"
                            required
                        />
                    </div>
                </div>
            </div>
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
            />
            <div
                    class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
                    role="alert"
                >
                    Se está mostrando los valores del periodo <span class="font-bold">éxito</span>. Usted debe revisar y actualizar al periodo actual.
            </div>
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Tabla
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="date"
                            id="since_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_1"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Hasta</label
                        >
                        <input
                            type="date"
                            id="until_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_1"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="number"
                            id="factor_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_1"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Monto</label
                        >
                        <input
                            type="number"
                            id="amount_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Monto"
                            v-model="amount_input_1"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="date"
                            id="since_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Hasta</label
                        >
                        <input
                            type="date"
                            id="until_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="number"
                            id="factor_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Monto</label
                        >
                        <input
                            type="number"
                            id="amount_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Monto"
                            v-model="amount_input_2"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="date"
                            id="since_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_3"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Hasta</label
                        >
                        <input
                            type="date"
                            id="until_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_3"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="number"
                            id="factor_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_3"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Monto</label
                        >
                        <input
                            type="number"
                            id="amount_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Monto"
                            v-model="amount_input_3"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="date"
                            id="since_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_4"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Hasta</label
                        >
                        <input
                            type="date"
                            id="until_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_4"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="number"
                            id="factor_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_4"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Monto</label
                        >
                        <input
                            type="number"
                            id="amount_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Monto"
                            v-model="amount_input_4"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-6 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div class="w-full">
                        <button
                            @click="submit"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            
                            Guardar
                            <i class="fa-solid fa-check p-1"></i>
                        </button>
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
            loading: false,
            since_input_1: '',
            until_input_1: '',
            factor_input_1: 0,
            amount_input_1: 0,
            since_input_2: '',
            until_input_2: '',
            factor_input_2: 0,
            amount_input_2: 0,
            since_input_3: '',
            until_input_3: '',
            factor_input_3: 0,
            amount_input_3: 0,
            since_input_4: '',
            until_input_4: '',
            factor_input_4: 0,
            amount_input_4: 0,
            period_input: '',
            old_period: '',
        }
    },
    methods: {
        async submit() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            const dataToSend = {
                payroll_employees: this.payroll_employees.map(employee => ({
                    rut: employee.rut,
                    payroll_item_id: this.payroll_item_input,
                    amount: employee.amount_input,
                    period: this.period_input
                }))
            };

            try {
                const response = await axios.post(
                    'https:://apijis.com/payroll_manual_inputs/store',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.amount_input = 0

                this.loading = false

            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al guardar los inputs manuales:', error)
                }
            }
        },
        applyBulkAmount() {
            this.amount_input = 0

            this.payroll_employees.forEach((employee) => {
                employee.amount_input = this.massive_amount_input

                this.amount_input += parseInt(employee.amount_input)
            })
        },
        async searchPayrollEmployees() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const dataToSend = {
                    rut: this.rut_input,
                    father_lastname: this.father_lastname_input,
                }

                const response = await axios.post(
                    'https:://apijis.com/payroll_employees/search',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.payroll_employees = response.data.message

                this.payroll_employees.forEach((employee) => {
                    employee.amount_input = 0
                })

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los empleados:', error)
                }
            }
        },
        async getPayrollItems() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https:://apijis.com/payroll_items/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                console.log(response)
                this.payroll_managements_inputs = response.data.message

                this.loading_1 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los items:', error)
                }
            }
        },
        async getPayrollEmployees() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https:://apijis.com/payroll_employees/' + this.period_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.payroll_employees = response.data.message

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los empleados:', error)
                }
            }
        },
    },
    async mounted() {
        const opened_period = localStorage.getItem('opened_period')
        if (opened_period != null && opened_period != 'null' && opened_period != '' && opened_period != 'undefined' && opened_period != undefined) {
            this.period_input = opened_period
        } else {
            this.$router.push(
                '/open_period'
                )
        }

        const new_period = opened_period
        const old_period = new_period.split('-')
        this.old_period = old_period[0] + '-' + old_period[1]
    },
}
</script>
