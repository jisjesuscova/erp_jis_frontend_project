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
                Días Trabajados
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
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Monto Masivo
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Monto Masivo</label
                        >
                        <input
                            type="text"
                            id="massive_amount_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Monto Maivo"
                            v-model="massive_amount_input"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-6 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div class="w-full">
                        <button
                            @click="applyBulkAmount"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            
                            Agregar
                            <i class="fa-solid fa-plus p-1"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
            />

            <div
                id="bar-with-underline-1"
                role="tabpanel"
                aria-labelledby="bar-with-underline-item-1"
            >
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Empleados
                        </p>
                    </div>
                    <div
                        class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                    >
                        <div>
                            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 p-4 md:p-5">
                                <div>
                                    <h1 class="text-4xl font-bold">
                                        Dias Totales: {{ amount_input }}
                                    </h1>
                                    
                                </div>
                                <div  class="mx-auto">
                                    <button
                                        @click="submit"
                                        class="py-6 px-8 text-xl inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
                                    >
                                        
                                        Guardar

                                        <i class="fa-solid fa-check p-1"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <hr
                                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                            />
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-2 text-left">RUT</th>
                                        <th class="px-4 py-2 text-left">
                                            Trabajador
                                        </th>
                                        <th class="px-4 py-2 text-left">
                                            Días
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="payroll_employee in payroll_employees"
                                        :key="payroll_employee.id"
                                    >
                                        <td class="border px-4 py-2">
                                            {{ payroll_employee.visual_rut }}
                                        </td>
                                        <td class="border px-4 py-2">
                                            {{ payroll_employee.names }}
                                            {{
                                                payroll_employee.father_lastname
                                            }}
                                            {{
                                                payroll_employee.mother_lastname
                                            }}
                                        </td>
                                        <td class="border px-4 py-2">
                                            <input
                                                type="number"
                                                id="'amount_input"
                                                class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Días"
                                                v-model="
                                                    payroll_employee.amount_input
                                                "
                                                required
                                            />
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
import { mask } from 'vue-the-mask'
export default {
    directives: { mask },
    data() {
        return {
            loading: false,
            rut_input: '',
            father_lastname_input: '',
            period_input: '',
            data: [],
            payroll_employees: [],
            payroll_managements_inputs: [],
            amount_input: 0,
            massive_amount_input: 0,
            total_amount: 0,
            payroll_item_input: ''
        }
    },
    methods: {
        applyBulkAmount() {
            this.amount_input = 0

            this.payroll_employees.forEach((employee) => {
                employee.amount_input = this.massive_amount_input

                this.amount_input += parseInt(employee.amount_input)
            })
        },
        async cleanForm() {
            this.payroll_employees.forEach((employee) => {
                employee.amount_input = 0
            })

            this.amount_input = 0

            this.massive_amount_input = 0
        },
        async submit() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            const dataToSend = {
                payroll_employees: this.payroll_employees.map(employee => ({
                    rut: employee.rut,
                    payroll_item_id: 55,
                    amount: employee.amount_input,
                    period: this.period_input
                }))
            };

            try {
                const response = await axios.post(
                    'https://apijis.com/payroll_manual_inputs/store',
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
        async getPayrollEmployees() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/payroll_employees/' + this.period_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.payroll_employees = response.data.message
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener los empleados:', error)
                }
            }
        },
        async getPayrollEmployeeValues() {
            const accessToken = localStorage.getItem('accessToken');
            try {
                const response = await axios.get(
                    'https://apijis.com/payroll_item_values/' + 55 +'/'+ this.period_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                );

                const employeeValues = response.data.message;

                this.payroll_employees.forEach((employee) => {
                 
                    const matchingEmployeeValue = employeeValues.find(
                        (value) => value.rut === employee.rut
                    );
            
                    if (matchingEmployeeValue) {
                        employee.amount_input = matchingEmployeeValue.amount;
                    } else {
                        employee.amount_input = 0;
                    }
                });
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

        await this.getPayrollEmployees()

        this.payroll_employees.forEach((employee) => {
            employee.amount_input = 0
        })

        await this.getPayrollEmployeeValues()
    },
}
</script>
