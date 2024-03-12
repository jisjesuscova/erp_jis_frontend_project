<template>
    <div class="w-full  sm:px-6 md:px-8 lg:pl-64 lg:pr-px">
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
            <div class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5">
                <VCalendar
                    v-if="1 == 2"
                    :key="`${initialPage.month}-${initialPage.year}`"
                    expanded
                    :attributes="attributes"
                    show-adjacent-months
                    @click="handleDateEvent"
                    :initial-page="initialPage"
                />
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                    <div id="table" class="overflow-x-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <!-- <div class="flex justify-between items-center bg-blue-500 text-white p-5 mb-5">
                            <div>
                                <p class="font-medium">Mes : <span class="font-bold">{{ new Date(dataToShow[0].datesInRange[0]).getMonth() + 1 }}</span></p>
                                <p class="font-medium">Año : <span class="font-bold">{{ new Date(dataToShow[0].datesInRange[0]).getFullYear()  }}</span></p>
                            </div>
                            <div>
                                <p class="font-medium">Nombre: <span class="font-bold">{{ dataToShow[0].names }}</span></p>
                                <p class="font-medium">Rut: <span class="font-bold">{{ dataToShow[0].rut }}</span></p>
                                <p class="font-medium">Sucursal: <span class="font-bold">{{ branch_offices}}</span></p>
                            </div>
                        </div> -->

                        <ScheduleCalendar  :data-to-show="dataToShow" :sundays="sundays" :sundays-in-use="sundaysInUse" />
                        <!--TABLESSS-->
                    </div>
                    </div>
                </div>
                <!-- <div id="table" class="overflow-x-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-5 grid grid-cols-2 gap-5">
                    <div v-for="(week, index) in dataToShow" :key="index" class="mb-5">
                        <p class="p-5 font-medium text-orange-600">
                            Semana {{ week.week_id }}
                        </p>
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-blue-500 text-white">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium uppercase">Programados</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium uppercase">Libre</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium uppercase">Total turno</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium uppercase">Horas sem.</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {{ week.group_day_id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {{ week.free_day_group_id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {{week.group_day_id }} x  {{ week.free_day_group_id }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                        {{ week.total_week_hours }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> -->
               
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5 justify-items-"
                >
                    <div>
                        <button
                            type="submit"
                            @click="saveWeeksJsonToSend"
                            class="py-3 px-4 me-10 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            Finalizar
                            <i class="fa-solid fa-save"></i>
                        </button>
                        <button
                            @click="$router.push('/create_schedule')"
                            type="submit"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            Volver
                            <i class="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  <script>
import { BROKEN_CARET, s } from 'pdfmake/build/pdfmake'
import EmployeeMenu from '../components/EmployeeMenu.vue'
import ScheduleCalendar from '../components/ScheduleCalendar.vue'
import axios from 'axios'

export default {
    components: {
        EmployeeMenu,
        ScheduleCalendar,
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
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            },
            colors: ['blue'],
            branch_offices: [],
            sections: [],
            turns: [],
            ArrayDates: [],
            attributes: [],
            employees_labor_data: [],
            dataToShow: [],
            datesInRange: [],
            employee_input: [],
            sundays: [],
            dataToSend: [],
            search_term: 'Buscar Turno',
            sundaysAndHolidays: '',
            branch_office_input: '',
            period_input: '',
            schedule_input: '',
            turn_input: '',
            weekCounter: Number(localStorage.getItem('week')) || 0,
            sundaysInUse: 0,
            turnDays: 0,
            sundaysAvailable: 0,
            turnId: 0,
            total_week_hours: 0,
            year: 0,
            month: 0,
            turnsDaysInUse: 0,
            workedDays: 0,
            weekPerMonth: 0,
        }
    },
   
    methods: {
        
        async saveWeeksJsonToSend() {
            
            this.loading = true
            console.log(this.dataToShow)
            const weekdatatosend = this.dataToShow.flatMap((item) => 
                item.datesInRange.map(date => ({
                    week_id: item.week_id,
                    turn_id: item.turn_id,
                    rut: item.rut,
                    date: date,
                    added_date: new Date().toISOString(), 
                }))
            )
            const meshes = { meshes: weekdatatosend }

            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.post(
                    'https://apijis.com/meshes/store',
                    meshes,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )
                this.loading = false
                alert('Malla creada con exito')
                this.confirmDeleteDatesInLocalStorage()
            } catch (error) {
                console.error('Error al Guardar la malla :', error)
            }
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
            const shouldDelete = true

            if (!shouldDelete) {
                return
            }

            this.deleteLocalStorageDates()
            this.deleteLocalStorageDates()

            setTimeout(() => {
                this.$router.push('/schedule')
            }, 300)

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
            this.sundaysAndHolidays.forEach((item) => {
                const year = item.date.split('-')[0]
                const month = item.date.split('-')[1]
                const day = item.date.split('-')[2]
                this.attributes = [
                    ...this.attributes,
                    {
                        dates: new Date(year, month, day),
                        content: 'red',
                    },
                ]
            })

            // Redirige al usuario después de limpiar los datos
            
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
        async getBranchOffice() {
            this.loading_1 = true
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/branch_offices/edit/' +this.dataToShow[0].branch_office,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.branch_offices = response.data.message.branch_office
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
                this.dataToShow.push(weekData)

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
            let month = new Date(this.dataToShow[0].datesInRange[0]).getMonth() 
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
                    'https://apijis.com/holidays',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                this.sundaysAndHolidays = response.data.message
                this.sundaysAndHolidays.forEach((item) => {
                    const year = item.date.split('-')[0]
                    const month = item.date.split('-')[1]
                    const day = item.date.split('-')[2]
                    this.attributes = [
                        ...this.attributes,
                        {
                            dates: new Date(year, month, day),
                            content: 'red',
                        },
                    ]
                })
            } catch (error) {
                console.error('Error al obtener la lista de sucursales:', error)
            }
        },
    },
    async created() {
        this.periodToInitialPage(
            this.initialPage.year + '-' + this.initialPage.month
        )
        this.getDatesInRangeFromLocalStorage()
        this.year = this.date.getFullYear()
        this.month = this.date.getMonth()
        this.getMonthAndYear()
        this.getHolidays()
        await this.getBranchOffice()
    },
}
</script>
<style>
.vc-base-icon {
    display: none !important;
}
</style>