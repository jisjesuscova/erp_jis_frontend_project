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
        <div v-else>
            <form v-if="rol_id ==3">
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                    ></p>
                </div>

                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
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
                            <option value="" disabled>- Sucursal -</option>
                            <option
                                v-for="branch_office in branch_offices"
                                :key="branch_office.id"
                                :value="branch_office.id"
                                disabled
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
                            v-model="employee_input[0]"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Trabajadores -</option>
                            <option
                                v-for="employee in branch_office_supervisor"
                                :key="employee.id"
                                :value="[
                                    employee.employee_type_id,
                                    employee.rut,
                                    employee.names,
                                    employee.father_lastname,
                                    employee.mother_lastname,
                                ]"
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
            <form v-else>
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                    ></p>
                </div>

                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
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
                            v-model="employee_input[0]"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Trabajadores -</option>
                            <option
                                v-for="employee in employees_labor_data"
                                :key="employee.id"
                                :value="[
                                    employee.employee_type_id,
                                    employee.rut,
                                    employee.names,
                                    employee.father_lastname,
                                    employee.mother_lastname,
                                ]"
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
            <div
                v-if="savedWeek == true"
                class="bg-green-500 text-sm text-white rounded-md p-4 mb-10"
                role="alert"
            >
                Semana Ingresada Con <span class="font-bold">Exito</span>.
            </div>
            <div
                v-if="showButtonProcess "
                class="bg-blue-500 text-sm text-white rounded-md p-4 mb-10"
                role="alert"
            >
                Ya Ingreso Todas Las Semanas correspondientes al mes 
               
            </div>
            <div
                v-else
                class="bg-blue-500 text-sm text-white rounded-md p-4 mb-10"
                role="alert"
            >
                Ingrese Semana:
                <span class="font-bold">{{ weekCounter + 1 }}</span>
            </div>
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
                                    schedule,
                                    // turn.working,
                                    // turn.breaking,
                                    // turn.start,
                                    // turn.end,
                                    // turn.turn,
                                    // turn.group_day_id,
                                    // turn.free_day_group_id,
                                    // turn.id,
                                    // turn.total_week_hours,
                                    $event
                                )
                            "
                            draggable="true"
                            class="mt-1 mb-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-for="schedule in schedules"
                            :key="schedule[0].id"
                            :value="schedule[0].horary_name"
                            v-text="`ID : ${schedule[[0]].week_schedule_id}  ${schedule[[0]].horary_name}`"
                        ></li>
                    </ul>
                </div>
                <div>
                    <VCalendar
                        :key="`${initialPage.month}-${initialPage.year}`"
                        expanded
                        :attributes="attributes"
                        show-adjacent-months
                        @click="handleDateEvent"
                        :initial-page="initialPage"
                    />
                    <div
                        class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                    >
                        <div v-if="startDate != null && endDate != null && !showButtonProcess">
                            <button
                                @click="saveDatesInRangeToLocalstorage"
                                type="submit"
                                class="py-3 px-4 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Agregar
                                <i class="fa-solid fa-save"></i>
                            </button>
                        </div>
                        <div v-if="showButtonProcess">
                            <button
                                @click="$router.push('/schedule_process_calendar')"
                                class="py-3 px-4 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Procesar
                                <i class="fa-solid fa-refresh"></i>
                            </button>
                        </div>
                        <div>
                            <button
                                @click="confirmDeleteDatesInLocalStorage"
                                type="submit"
                                class="py-3 px-4 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Borrar
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  <script>
import { BROKEN_CARET, s } from 'pdfmake/build/pdfmake'
import EmployeeMenu from '../components/EmployeeMenu.vue'
import axios from 'axios'
import { set } from 'date-fns'
import { start } from '@popperjs/core'

export default {
    components: {
        EmployeeMenu,
    },
    data() {
        return {
            loading: true,
            loading_1: false,
            shouldCall: false,
            showButtonProcess: false,
            alertShow: false,
            savedWeek: false,
            startDate: null,
            endDate: null,
            date: new Date(),
            initialPage: {
                month: new Date().getMonth() + 2,
                year: new Date().getFullYear(),
            },
            sundaysAndHolidays: '',
            branch_offices: [],
            branch_office_supervisor: [],
            colors: ['blue'],
            sections: [],
            turns: [],
            ArrayDates: [],
            attributes: [],
            employees_labor_data: [],
            datesInRange: [],
            branch_office_input: '',
            period_input: '',
            employee_input: [""],
            schedule_input: '',
            turn_input: '',
            working: '',
            breaking: '',
            start: '',
            end: '',
            dataToShow: [],
            sundays: [],
            search_term: 'Buscar Turno',
            dataToSend: [],
            rol_id: Number(localStorage.getItem('rol_id')),
            sundaysInUse: 0,
            turnDays: 0,
            sundaysAvailable: 0,
            turnId: 0,
            weekCounter: Number(localStorage.getItem('week')) || 0,
            total_week_hours: 0,
            year: 0,
            month: 0,
            turnsDaysInUse: 0,
            workedDays: 0,
            weekPerMonth: 0,
            schedules: [],
        }
    },
    methods: {
        async saveWeeksJsonToSend() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.post(
                    'https://apijis.com/meshes/store',
                    this.dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                console.log(response)
            } catch (error) {
                console.error('Error al obtener la lista de sucursales:', error)
            }

            console.log(this.dataToSend)
        },
        getSundays(year, month) {
            let date = new Date(year, month, 1)
            this.sundays = []

            while (date.getMonth() === month) {
                if (date.getDay() === 0) {
                    // 0 significa domingo
                    this.sundays.push(new Date(date))
                }
                date.setDate(date.getDate() + 1)
            }
            this.attributes = [
                ...this.attributes,
                {
                    dates: this.sundays,
                    content: 'red',
                },
            ]
            console.log(this.sundays)
            return this.sundays
        },
        deleteLocalStorageDates() {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key.startsWith('week_value')) {
                    localStorage.removeItem(key)
                }
            }
        },
        confirmDeleteDatesInLocalStorage() {
            const shouldDelete = confirm(
                'una vez borrada la malla tendra que volver a crearla, ¿desea continuar?'
            )

            if (!shouldDelete) {
                return
            }

            this.deleteLocalStorageDates()
            this.deleteLocalStorageDates()
            //refresh the page
            window.location.reload()
            localStorage.setItem('week', 0)
            this.weekCounter = Number(localStorage.getItem('week'))
            this.getDatesInRangeFromLocalStorage()
            this.attributes = [
                ...this.attributes,
                {
                    dates: this.sundays,
                    content: 'red',
                },
            ]
            this.holidaysDescription()
        },
        holidaysDescription() {
            this.sundaysAndHolidays.forEach((item) => {
                const year = item.date.split('-')[0]
                const month = item.date.split('-')[1]
                const day = item.date.split('-')[2]
                this.attributes = [
                    ...this.attributes,
                    {   
                        dates: new Date(year, month-1, day),
                        dot: {
                            color: 'red',
                            
                        },
                        popover: {
                            label: item.holiday,
                        },
                    },
                ]
            })
        },
        periodToInitialPage(period) {
            // localStorage.setItem('week', 0)
            // this.weekCounter = Number(localStorage.getItem('week'))

            const month = Number(period.split('-')[1])
            const year = Number(period.split('-')[0])
            this.initialPage = { month, year }
            this.getSundays(year, month)
 
            const firstDayOfMonth = new Date(year, month - 1, 1).getDay()
            const adjustedFirstDayOfMonth =
                firstDayOfMonth === 0 ? 0 : firstDayOfMonth

            const daysInMonth = new Date(year, month, 0).getDate()

            let weekCount = Math.ceil(
                (adjustedFirstDayOfMonth + daysInMonth - 1) / 7
            )

            this.weekPerMonth = weekCount
        },
        saveDatesInRangeToLocalstorage() {
            this.loading = true
            this.savedWeek = true
            let week = localStorage.getItem('week')
            if (!week) {
                week = 1
            } else {
                week = Number(week) + 1
                this.weekCounter = week
            }
            localStorage.setItem('week', week)

            if (this.weekPerMonth === week) {
                this.showButtonProcess = true
            }
            const weekData = {
                week_id: week,
                turn_id: this.turnId,
                rut: this.employee_input[0][1],
                names: this.employee_input[2] + ' ' + this.employee_input[3] + ' ' + this.employee_input[4],
                turn: this.turn_input,
                start_turn: this.start,
                end_turn: this.end,
                collation: this.breaking,
                working:this.working,
                group_day_id: this.turnDays,
                free_day_group_id: this.freeDays,
                total_week_hours: this.total_week_hours,
                branch_office: this.branch_office_input,
                datesInRange: this.datesInRange,
            }

            localStorage.setItem('week_value' + week, JSON.stringify(weekData))

            this.datesInRange = []
            this.sundaysInUse = 0
            this.getDatesInRangeFromLocalStorage()
            this.attributes = [
                ...this.attributes,
                {
                    dates: this.sundays,
                    content: 'red',
                },
            ]
            this.holidaysDescription()
            setTimeout(() => {
                this.loading = false
            }, 500)
            setTimeout(() => {
                this.savedWeek = false
            }, 1500)
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

        async pickCalendarDatesForTurns(
            schedule,
            // working,
            // breaking,
            // start,
            // end,
            // turn,
            // schedule,
            // turnId,
            // hoursWeek,
            event
        ) {
            console.log(this.schedules[0])
            // this.working = working
            // this.breaking = breaking
            // this.start = start
            // this.end = end
            // this.turn_input = turn
            // this.turnId = turnId
            // this.total_week_hours = hoursWeek
            let turnDays = schedule.filter(day => day.turn_id !== 0).length;
            const freeDays = schedule.filter(day => day.turn_id === 0).length;
            console.log(turnDays)
            console.log(freeDays)

            const verifyWeek = Number(localStorage.getItem('week'))
            if (verifyWeek === 0 ) {
                // await this.getLastWeekWorkingDays()
                console.log(this.workedDays)
            }
            else {
                this.workedDays = 0
            }

            let date = new Date(this.startDate)
            turnDays = turnDays - this.workedDays
            date.setDate(date.getDate() + turnDays - 1)
            if (turnDays == 0) {
                alert(
                    ' El empleado ya trabajo los turnos que le correspondian en la semana'
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
                    'El empleado ya trabajo los turnos que le correspondian en la semana'
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
                console.log(schedule)
                this.datesInRange = schedule.map((day, index) => {
                    if (day.turn_id !== 0) {
                        const date = new Date(this.startDate);
                        // Adjust index to match days of the week
                        const dayOfWeek = (index + 1) % 7;
                        const startDateDayOfWeek = this.startDate.getDay();
                        const daysToAdd = (dayOfWeek < startDateDayOfWeek) ? (7 - startDateDayOfWeek + dayOfWeek) : (dayOfWeek - startDateDayOfWeek);
                        console.log(daysToAdd)
                      
                        if (daysToAdd + startDateDayOfWeek > 6) {
                         
                            return undefined;
                        }
                        date.setDate(date.getDate() + daysToAdd);
                        return date;
                    }
                }).filter(date => date !== undefined);
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
                    employee_type_id: this.employee_input[0][0],
                    search_term: this.search_term,
                }
                console.log(this.employee_input[0][0])
                const response = await axios.get(
                    `https://apijis.com/turns/edit/${dataToSend.employee_type_id}/${dataToSend.group_id}/${dataToSend.search_term}/`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                console.log(response)
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
            this.loading_1 = true
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
            if (this.loading_1) {
                this.loading = false
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
            const year = this.startDate.getFullYear()
            const month = this.startDate.getMonth()  
            const yearAndPreviuosMonth = `${year}-${month}`
            try {
                const response = await axios.get(
                    `https://apijis.com/meshes/last_week_working_days/${this.employee_input[0][1]}/${yearAndPreviuosMonth}/`,

                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                const decodedData = JSON.parse(response.data.message)
                if(decodedData >=6) {
                    this.workedDays = 0
                }
                else {
                    this.workedDays = decodedData
                }
                console.log(response)

                
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
        verifyQuantityOfSundays(weekArray) {
            this.sundaysAvailable = this.sundays.length - 2
            let sundays = this.sundays
            for (let i = 0; i < sundays.length; i++) {
                for (let j = 0; j < weekArray.length; j++) {
                    let date = new Date(weekArray[j])
                    if (sundays[i].getTime() == date.getTime()) {
                        this.sundaysInUse = this.sundaysInUse + 1
                        if (this.sundaysInUse > this.sundaysAvailable) {
                            console.log(this.sundaysInUse)
                            if (!this.alertShown) {
                                alert(
                                    'Tiene que tener Minimo 2 domingos libres al mes'
                                )
                                localStorage.removeItem(
                                    'week_value' + this.weekCounter
                                )
                                localStorage.setItem(
                                    'week',
                                    this.weekCounter - 1
                                )
                                this.alertShown = true
                                setTimeout(() => {
                                    this.getDatesInRangeFromLocalStorage() // Añade esta línea
                                }, 100)
                                this.sundaysInUse--
                            }
                            return
                        }
                    }
                }
            }
            this.alertShown = false
            console.log(this.sundaysInUse)

            return this.sundaysInUse
        },
        checkConsecutiveDays(dates) {
            let consecutiveDays = 1
            let hasSevenConsecutive = false

            for (let i = 1; i < dates.length; i++) {
                const prevDate = new Date(dates[i - 1])
                const currentDate = new Date(dates[i])
                const diffInDays = Math.round(
                    (currentDate - prevDate) / (1000 * 60 * 60 * 24)
                )

                if (diffInDays === 1) {
                    consecutiveDays++
                    if (consecutiveDays >= 7) {
                        hasSevenConsecutive = true
                        localStorage.removeItem('week_value' + this.weekCounter)
                        localStorage.setItem('week', this.weekCounter - 1)
                        if (this.shouldCall) {
                            this.getDatesInRangeFromLocalStorage()
                        }
                        break
                    }
                } else {
                    consecutiveDays = 1
                }
            }

            if (hasSevenConsecutive) {
                consecutiveDays = 1
                hasSevenConsecutive = false
                alert('Un trabajador no puede trabajar 7 días seguidos.')
            }

            return hasSevenConsecutive
        },
        getDatesInRangeFromLocalStorage() {
            this.datesInRange = [[], [], [], [], [], []]

            let items = []
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i)
                if (key.startsWith('week_value')) {
                    const value = JSON.parse(localStorage.getItem(key))
                    items.push({ key, value })
                }
            }

            items.sort((a, b) => a.key.localeCompare(b.key))

            for (let item of items) {
                const weekData = item.value

                this.verifyQuantityOfSundays(weekData.datesInRange)
                const dates = weekData.datesInRange
                this.ArrayDates.push(...weekData.datesInRange)
                this.dataToSend.push(weekData)

                const formattedDates = dates.map((date) => {
                    const d = new Date(date)
                    d.setDate(d.getDate() + 1)
                    const year = d.getFullYear()
                    const month = (d.getMonth() + 1).toString().padStart(2, '0')
                    const day = d.getDate().toString().padStart(2, '0')
                    return `${year}-${month}-${day}`
                })

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

            this.checkConsecutiveDays(this.ArrayDates)
            this.getRandomColorForWeeks()
        },
        getMonthAndYear() {
            let month = this.date.getMonth() + 1
            let year = this.date.getFullYear()

            if (month > 11) {
                month = 0
                year++
            }
            this.getSundays(year, month)
        },

        async getHolidays() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/holidays/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                console.log(response)
                this.sundaysAndHolidays = response.data.message
                this.holidaysDescription()
            } catch (error) {
                console.error('Error al obtener la lista de sucursales:', error)
            }
        },
        async getAllEmployeesBySupervisor() {
            this.loading = true
            const supervisor_rut = localStorage.getItem('rut')
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    `https://apijis.com/meshes/get_all_employees_by_supervisor/${supervisor_rut}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                    )
                this.branch_office_supervisor = response.data.message
                this.branch_office_input = response.data.message[0].branch_office_id
                console.log(response.data.message[0])
                this.loading = false
            } catch (error) {
                console.error('Error al obtener la lista de bancos:', error)
            }
        },
        async getSchedules() {
            this.loading = true
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    `https://apijis.com/schedule/get_all/`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                    )
                for (let i = 0; i < response.data.message.length; i++) {
                    this.schedules.push(response.data.message[i])
                    console.log(this.schedules)
                }
                this.loading = false
            } catch (error) {
                console.error('Error al obtener la lista de bancos:', error)
            }
        },
    },
    async created() {
        this.periodToInitialPage(this.initialPage.year + '-' + this.initialPage.month)
        this.getDatesInRangeFromLocalStorage()
        await this.getBranchOffices()
        
        this.year = this.date.getFullYear()
        this.month = this.date.getMonth()
        this.getMonthAndYear()
        this.getHolidays()
        if (this.weekPerMonth === Number(localStorage.getItem('week'))) {
            this.showButtonProcess = true
        }
        if(this.rol_id == 3) {
            await this.getAllEmployeesBySupervisor()
        }
        this.getSchedules()

    },
}
</script>
<style>
.vc-base-icon {
    display: none !important;
}
</style>