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
                        @change="getTurns"
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
                <input
                    v-model="search_term"
                    @input="getTurns"
                    class="bg-white-50 border border-gray-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    placeholder="Buscar turno"
                />
                <ul>
                    <li
                        draggable="true"
                        @click="pickCalendarDatesForTurns(turn.group_day_id, $event)"
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-for="turn in turns"
                        :key="turn.id"
                        :value="turn.turn"
                        v-text="turn.turn"
                    ></li>
                </ul>
            </div>
            <VCalendar
                expanded
                show-weeknumbers
                :attributes="attributes"
                @click="handleDateEvent"
                show-adjacent-months
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const attributes = ref([{}])
const startDate = ref(null)
const endDate = ref(null)
let datesLocalStorage = ref(null)

const pickCalendarDatesForTurns = (turnDays, event) => {
    const turnPicked = event.target.getAttribute('value')
    if (turnPicked == null) {
        return
    }


    const dates = []
    const freeDays = []
    const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

    for (let i = 0; i < turnDays; i++) {
        const date = new Date(firstDayOfMonth)
        date.setDate(firstDayOfMonth.getDate() + i)
        
        // Si el día de la semana es domingo (0) o si ya hemos agregado la cantidad de dias de turndays, detenemos el bucle
        if (date.getDay() === 0 || dates.length === turnDays) {
            break
        }

        dates.push(date)
    }

    attributes.value = [
        {
            dates: dates,
            highlight: {
                color: 'red',
            },
        },
        {
            dates: [new Date(2023, 12,10)],
            highlight: {
                color: 'green',
            },
        }

    ]

    console.log(dates)
    console.log(turnDays)
}

const handleDateEvent = (event) => {
    const datePicked = event.target.getAttribute('aria-label')
    if (datePicked == null) {
        return
    }
    const day = Number(datePicked.split(' ')[1])
    const monthstr = datePicked.split(' ')[3]
    const year = Number(datePicked.split(' ')[5])
    let month = 0

    let arrayMonths = [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
    ]
    for (let i = 0; i < arrayMonths.length; i++) {
        if (arrayMonths[i] == monthstr) {
            month = i
        }
    }
    if (!startDate.value) {
        startDate.value = new Date(year, month, day)
    } else if (!endDate.value) {
        endDate.value = new Date(year, month, day)
    } else {
        startDate.value = new Date(year, month, day)
        endDate.value = null
    }

    const datesInRange = []
    if (startDate.value && endDate.value) {
        const currentDate = new Date(startDate.value)
        currentDate.setDate(currentDate.getDate()) 
        while (currentDate <= endDate.value ) { 
            datesInRange.push(new Date(currentDate))
            currentDate.setDate(currentDate.getDate() + 1)
        }
    }
    attributes.value = [
        {
            dates: [startDate.value],
            bar: {
                color: 'blue',
            },
            key: 1,
        },
        {
            dates: [endDate.value],
            bar: {
                color: 'blue',
            },
            key: 2,
        },
        {
            dates: datesInRange,
            bar: {
                color: 'green',
            },
            key: 3,
        },
    ]
    if(startDate.value && endDate.value) {
    localStorage.setItem('dates', JSON.stringify(datesInRange))
    datesLocalStorage = JSON.parse(localStorage.getItem('dates'))
    console.log('starDate',datesLocalStorage[0])
    console.log('endDate',datesLocalStorage[datesLocalStorage.length - 1])
    }
    console.log(datesInRange)
}
</script>

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
            attributes: [{}],
            date: new Date(),
            branch_offices: [],
            sections: [],
            turns: [],
            employees_labor_data: [],
            branch_office_input: '',
            period_input: '',
            employee_input: '',
            schedule_input: '',
            turn_input: '',
            search_term: 'Buscar Turno',
            startDate: null,
            endDate: null,
        }
    },

    methods: {
      
        async getTurns() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                if (
                    this.search_term == '' ||
                    this.search_term == null ||
                    this.search_term == undefined
                ) {
                    this.search_term = 'Buscar Turno'
                }
                const dataToSend = {
                    group_id: Number(this.schedule_input),
                    employee_type_id: this.employee_input,
                    search_term: this.search_term,
                }
                const response = await axios.get(
                    `https://apijis.comturns/edit/${dataToSend.employee_type_id}/${dataToSend.group_id}/${dataToSend.search_term}`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                this.turns = response.data.message
                if (this.search_term == 'Buscar Turno') {
                    this.search_term = ''
                }
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener la lista de turnos:', error)
                }
            }
        },
        async getBranchOffices() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.combranch_offices/',
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
                    'https://apijis.comemployee_labor_data/edit/branch/' +
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