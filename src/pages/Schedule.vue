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
                        @change="periodToInitialPage(period_input)"
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
            <div v-if="startDate != null">
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
                        @click="
                            pickCalendarDatesForTurns(
                                turn.turn,
                                turn.group_day_id,
                                turn.free_day_group_id,
                                $event
                            )
                        "
                        draggable="true"
                        class="mt-1 mb-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-for="turn in turns"
                        :key="turn.id"
                        :value="turn.turn"
                        v-text="turn.turn"
                    ></li>
                </ul>
            </div>
            <div>
                <VCalendar
                    :key="`${initialPage.month}-${initialPage.year}`"
                    expanded
                    show-weeknumbers
                    :attributes="attributes"
                    show-adjacent-months
                    @click="handleDateEvent"
                    :initial-page="initialPage"
                />

                <div v-if="startDate != null && endDate != null">
                    <button
                        @click="saveDatesInRangeToLocalstorage"
                        type="submit"
                        class="py-3 px-4 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Agregar
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
                <div v-if="startDate != null && endDate != null">
                    <button
                        @click="deleteAllWeeksFromLocalStorage"
                        type="submit"
                        class="py-3 px-4 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Borrar
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  <script>
import { BROKEN_CARET } from 'pdfmake/build/pdfmake'
import EmployeeMenu from '../components/EmployeeMenu.vue'
import axios from 'axios'

export default {
    components: {
        EmployeeMenu,
    },
    data() {
        return {
            startDate: null,
            endDate: null,
            date: new Date(),
            initialPage: {
                month: new Date().getMonth() + 2,
                year: new Date().getFullYear(),
            },
            branch_offices: [],
            colors: ['red', 'green', 'yellow', 'purple', 'orange'],
            sections: [],
            turns: [],
            attributes: [],
            employees_labor_data: [],
            datesInRange: [],
            branch_office_input: '',
            period_input: '',
            employee_input: '',
            schedule_input: '',
            turn_input: '',
            dataToShow: [],
            search_term: 'Buscar Turno',
            turnDays: 0,
            year: 0,
            month: 0,
            turnsDaysInUse: 0,
            workedDays: 0,
        }
    },
    methods: {
        getSundays(year, month) {
            let date = new Date(year, month, 1)
            let sundays = []

            while (date.getMonth() === month) {
                if (date.getDay() === 0) {
                    // 0 significa domingo
                    sundays.push(new Date(date))
                }
                date.setDate(date.getDate() + 1)
            }
            console.log(sundays)
            return sundays
        },
        deleteAllWeeksFromLocalStorage() {
            const shouldDelete = confirm(
                'una vez borrada la malla tendra que volver a crearla, ¿desea continuar?'
            )
            console.log(shouldDelete)
            if (!shouldDelete) {
                return
            }
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key.startsWith('week_value')) {
                    localStorage.removeItem(key)
                }
            }
            localStorage.setItem('week', 0)
            this.getDatesInRangeFromLocalStorage()
        },
        periodToInitialPage(period) {
            const month = Number(period.split('-')[1])
            const year = Number(period.split('-')[0])
            this.initialPage = { month, year }
            this.getSundays(year, month -1 )
        },
        saveDatesInRangeToLocalstorage() {
            let week = localStorage.getItem('week')
            if (!week) {
                week = 1
            } else {
                week = Number(week) + 1
            }
            localStorage.setItem('week', week)

            const weekData = {
                turn: this.turn_input,
                workedDays: this.turnDays,
                freeDays: this.freeDays,
                datesInRange: this.datesInRange,
            }

            localStorage.setItem('week_value' + week, JSON.stringify(weekData))

            this.datesInRange = []
            this.getDatesInRangeFromLocalStorage()
        },
        handleDateEvent(event) {
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
            if (!this.startDate) {
                this.startDate = new Date(year, month, day)
            } else {
                this.startDate = new Date(year, month, day)
                this.endDate = null
            }

            this.attributes = [
                {
                    dates: [this.startDate],
                    highlight: {
                        color: 'blue',
                    },
                    key: 1,
                },
            ]
        },
        whileForDatesInRange(turnDays, freeDays) {
            if (this.startDate && this.endDate) {
                this.datesInRange = [] // Limpiar datesInRange

                const currentDate = new Date(this.startDate)
                currentDate.setDate(currentDate.getDate())

                const startMonth = this.startDate.getMonth()

                while (
                    currentDate <= this.endDate &&
                    currentDate.getMonth() === startMonth
                ) {
                    if (currentDate.getDay() === 0) {
                        this.turnsDaysInUse = this.turnsDaysInUse + 1
                        this.datesInRange.push(new Date(currentDate))
                        currentDate.setDate(currentDate.getDate() + 1)
                        break // Detener el bucle
                    }
                    this.turnsDaysInUse = this.turnsDaysInUse + 1
                    this.datesInRange.push(new Date(currentDate))
                    currentDate.setDate(currentDate.getDate() + 1)
                }

                this.turnsDaysInUse = 0
            }
        },

        async pickCalendarDatesForTurns(turn, turnDays, freeDays, event) {
            this.turn_input = turn
            this.turnDays = turnDays
            await this.getLastWeekWorkingDays()
            let date = new Date(this.startDate)
            this.workedDays = 0
            turnDays = turnDays - this.workedDays
            date.setDate(date.getDate() + turnDays - 1)
            if (turnDays == 0) {
                alert(
                    'Hola, el empleado ya trabajo los turnos que le correspondian en la semana'
                )
                this.startDate = 0
                this.attributes = [
                    {
                        dates: [this.startDate],
                        highlight: {
                            color: 'red',
                        },
                        key: 1,
                    },
                ]
                return
            } else if (turnDays < 0) {
                alert(
                    'Hola, el empleado ya trabajo los turnos que le correspondian en la semana'
                )
                this.startDate = 0
                this.attributes = [
                    {
                        dates: [this.startDate],
                        highlight: {
                            color: 'red',
                        },
                        key: 1,
                    },
                ]
                return
            } else {
                this.endDate = date

                const turnPicked = event.target.getAttribute('value')
                if (turnPicked == null) {
                    return
                }
                this.whileForDatesInRange(turnDays, freeDays)
                let indexColor = Math.floor(Math.random() * 5)

                this.attributes = [
                    {
                        dates: [this.startDate],
                        highlight: {
                            color: 'red',
                        },
                        key: 1,
                    },

                    {
                        dates: this.datesInRange,
                        highlight: {
                            color: this.colors[indexColor],
                        },
                        key: 3,
                    },
                ]
            }
        },
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
                    `http://localhost:8000/turns/edit/${dataToSend.employee_type_id}/${dataToSend.group_id}/${dataToSend.search_term}`,
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
                    'http://localhost:8000/branch_offices/',
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
                    'http://localhost:8000/employee_labor_data/edit/branch/' +
                        this.branch_office_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.employees_labor_data = response.data.message
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
        async getLastWeekWorkingDays() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    `http://localhost:8000/meshes/last_week_working_days/20202020/2023-11-06`,

                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                const decodedData = JSON.parse(response.data.message)

                this.workedDays = decodedData
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error('Error al obtener la lista:', error)
                }
            }
        },

        getRandomColorForWeeks() {
            const commonColorIndex = Math.floor(Math.random() * 5)
            let lastWeekColorIndex
            do {
                lastWeekColorIndex = Math.floor(Math.random() * 5)
            } while (lastWeekColorIndex === commonColorIndex)

            this.attributes = this.datesInRange.map((dates, index) => {
                const colorIndex =
                    index === this.datesInRange.length - 1
                        ? lastWeekColorIndex
                        : commonColorIndex

                return {
                    dates,
                    highlight: {
                        color: this.colors[colorIndex],
                    },
                }
            })
        },
        getDatesInRangeFromLocalStorage() {
            this.datesInRange = [[], [], [], [], [], []]

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key.startsWith('week_value')) {
                    const weekData = JSON.parse(localStorage.getItem(key))

                    // Ahora 'dates' es una propiedad del objeto 'weekData'
                    const dates = weekData.datesInRange

                    const formattedDates = dates.map((date) => {
                        const d = new Date(date)
                        d.setDate(d.getDate() + 1)
                        const year = d.getFullYear()
                        const month = (d.getMonth() + 1)
                            .toString()
                            .padStart(2, '0')
                        const day = d.getDate().toString().padStart(2, '0')
                        return `${year}-${month}-${day}`
                    })

                    // Decide en qué subarray de datesInRange almacenar las fechas
                    const targetArray = this.datesInRange.find(
                        (week) => week.length < 7
                    )

                    if (targetArray) {
                        targetArray.push(...formattedDates)
                    } else {
                        console.log(
                            'No puedes agregar más datos a las semanas existentes.'
                        )
                    }
                }
            }
            this.getRandomColorForWeeks()
        },
    },
    created() {
        this.getDatesInRangeFromLocalStorage()
        this.getBranchOffices()
        this.year = this.date.getFullYear()
        this.month = this.date.getMonth()
    },
}
</script>