<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <form @submit.prevent="updateLaborData">
            <div
                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
            >
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-500"></p>
            </div>

            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                <div>
                    <label
                        for="hs-validation-name-error"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Periodo</label
                    >
                    <input
                        type="month"
                        id="period_input"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="period_input"
                        required
                    />
                </div>
                <div>
                    <label
                        for="hs-validation-name-error"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Sucursal</label
                    >
                    <select
                        v-model="branch_office_input"
                        @change="getEmployeeByBranchOffice"
                        required
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
                <div>
                    <label
                        for="hs-validation-name-error"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Trabajador</label
                    >
                    <select
                        v-model="employee_input"
                        required
                        @change="consoleLog"
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">- Trabajadores -</option>
                        <option
                            v-for="employee in employees_labor_data"
                            :key="employee.id"
                            :value="employee.employee_type_id"
                        >
                            {{
                                `${employee.names}  ${employee.father_lastname}  ${employee.mother_lastname}`
                            }}
                        </option>
                    </select>
                </div>
                <div>
                    <label
                        for="hs-validation-name-error"
                        class="block text-sm font-medium mb-2 dark:text-white"
                        >Horario</label
                    >
                    <select
                        v-model="schedule_input"
                        required
                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">- Horario -</option>
                        <option value="1">Mañana</option>
                        <option value="2">Tarde</option>
                        <option value="3">Intermedio</option>
                    </select>
                </div>
            </div>
        </form>
        <div class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5">
            <div>
                <label
                    for="hs-validation-name-error"
                    class="block text-sm font-medium mb-2 dark:text-white"
                    >Turnos</label
                >
                <ul>
                    <input
                        draggable="true"
                        disabled
                        class="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-model="employee.names"
                        v-for="employee in employees_labor_data"
                        :key="employee.id"
                    />
                </ul>
                        <!-- ALTERNATIVA A LA ANTERIOR 
                            <ul>
                    <li
                        draggable="true"
                        class="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-for="employee in employees_labor_data"
                        :key="employee.id"
                        v-text="employee.names"
                    ></li>
                    </ul> -->
            </div>
            <VCalendar expanded show-weeknumbers />
        </div>
    </div>
</template>
  
<script>
import { setupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import axios from 'axios'

export default {
    components: {
        VCalendar: Calendar,
        VDatePicker: DatePicker,
    },
    data() {
        return {
            date: new Date(),
            branch_offices: [],
            sections: [],
            turns : [],
            employees_labor_data: [],
            branch_office_input: '',
            period_input: '',
            employee_input: '',
            schedule_input: '',
        }
    },
    methods: {
        async  getTurns() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const dataToSend = {
                    group_id : this.schedule_input,
                    employee_type_id: this.employee_input,
                }
                const response = await axios.post('https://apijis.com/turns/edit/', dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    })
                    this.turns = response.data.message
            }
            catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de turnos:',
                        error
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
                    }
                )

                this.branch_offices = response.data.message
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error
                    )
                }
            }
        },
        async getEmployeeByBranchOffice() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_labor_data/edit/branch/' +
                        this.branch_office_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.employees_labor_data = response.data.message
                console.log(response)
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error
                    )
                }
            }
        },
    },
    mounted() {
        this.getBranchOffices()
    },
}
</script>