<template>
    <div id="PDF">
        <table class="w-full">
            <thead>
                <tr>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Lunes</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Lun</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Martes</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Mar</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Miercoles</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Mie</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Jueves</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Jue</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Viernes</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Vie</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Sabado</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Sab</span
                        >
                    </th>
                    <th
                        class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                    >
                        <span class="xl:block lg:block md:block sm:block hidden"
                            >Domingo</span
                        >
                        <span
                            class="xl:hidden lg:hidden md:hidden sm:hidden block"
                            >Dom</span
                        >
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(week, weekIndex) in weeks" :key="'week-' + week[0]">
                    <td
                        v-for="(day, dayIndex) in week"
                        :key="day.day"
                        class="border border-gray-900 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
                        :class="{
                            'bg-white-100':
                                !day.isNextMonth && !day.isPrevMonth,
                            'bg-gray-300': day.isNextMonth || day.isPrevMonth,
                        }"
                    >
                        <div
                            class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden"
                        >
                            <div class="top h-5 w-full">
                                <span
                                    class="text-gray-500"
                                    v-if="day.day !== null"
                                    >{{ day.day }}</span
                                >
                            </div>
                            <div
                                class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden"
                                v-if="
                                    !day.isNextMonth &&
                                    !day.isPrevMonth &&
                                    dayIndex < 6
                                "
                            >
                                <div
                                    v-for="weekInfo in filteredDataToShow[
                                        weekIndex
                                    ]"
                                    :key="weekInfo.id"
                                >
                                    <div
                                        class="bottom flex-grow h-30 py-1 w-full cursor-pointer"
                                    >
                                        <div
                                            class="event bg-red-500 text-white rounded p-1 text-sm mb-1"
                                        >
                                            <span class="time">
                                                {{ weekInfo.start_turn }}
                                            </span>
                                        </div>
                                        <div
                                            class="event bg-green-500 text-white rounded p-1 text-sm mb-1"
                                        >
                                            <span class="time">
                                                {{ weekInfo.end_turn }}
                                            </span>
                                        </div>
                                        <div
                                            class="event bg-orange-500 text-white rounded p-1 text-sm mb-1"
                                        >
                                            <span class="time">
                                                {{ weekInfo.collation }}
                                            </span>
                                        </div>
                                        <div
                                            class="event bg-blue-700 text-white rounded p-1 text-sm mb-1"
                                        >
                                            <span class="time">
                                                {{ weekInfo.working }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div
            class="legend mt-10 grid md:grid-cols-5 sm:grid-cols-12 gap-10 p-4 md:p-5"
        >
            <div class="legend-item flex flex-row items-center">
                <div class="color-box bg-red-500"></div>
                <span class="ml-2">Inicio</span>
            </div>
            <div class="legend-item flex flex-row items-center">
                <div class="color-box bg-green-500"></div>
                <span class="ml-2">Termino</span>
            </div>
            <div class="legend-item flex flex-row items-center">
                <div class="color-box bg-orange-500"></div>
                <span class="ml-2">Colacion</span>
            </div>
            <div class="legend-item flex flex-row items-center">
                <div class="color-box bg-blue-700"></div>
                <span class="ml-2">Jornada</span>
            </div>
        </div>
        <div
            id="table"
            class="overflow-x-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-5 grid grid-cols-1 gap-5"
        >
            <table
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
            >
                <thead class="bg-blue-500 text-white">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                            Total programados
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                            Total libre
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                            Total turno
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                            Total horas sem.
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                            {{ totalProgrammedDays }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                            {{ totalFreeDays }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                            {{ totalTurns }}
                        </td>
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                            {{ totalWeekHours }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </template>
  
  <script>
  import jsPDF from 'jspdf'
  import html2canvas from 'html2canvas'
  export default {
    computed: {
        totalFreeDays() {
            return this.dataToShow.reduce(
                (total, week) => total + week.free_day_group_id,
                0
            )
        },
        totalProgrammedDays() {
            console.log(this.totalFreeDays)
            return this.dataToShow.reduce(
                (total, week) => total + week.group_day_id,
                0
            )
        },
        totalTurns() {
            //devuelve un string con el siguiente format "week.group_day_id x free_g day_group_id "
            return this.totalProgrammedDays + ' X ' + this.totalFreeDays
        },
        totalWeekHours() {
            return this.dataToShow.reduce(
                (total, week) => total + week.total_week_hours,
                0
            )
        },
        filteredDataToShow() {
            return this.weeks.map((week, weekIndex) => {
                return this.dataToShow.filter((weekInfo, infoIndex) => {
                    return (
                        weekInfo.week_id === weekIndex + 1 &&
                        infoIndex < weekInfo.group_day_id
                    )
                })
            })
        },
    },
  
    props: {
        dataToShow: {
            type: Array,
            required: false,
        },
    },

    data() {
        return {
            days: [],
            weeks: [],
            firstDayOfWeek: 0,
            dataToPdf: [],
        }
    },
    methods: {
        async printPDF() {
            console.log(this.dataToPdf)
            // Selecciona el elemento que quieres convertir en PDF
            const element = document.getElementById('PDF')
  
            // Crea una captura de pantalla del elemento
            const canvas = await html2canvas(element)
  
            // Crea un nuevo documento PDF
            const pdf = new jsPDF('p', 'mm', 'a4')
  
            // Calcula la proporción de la imagen para que se ajuste al tamaño del PDF
            const imgWidth = 210 // Cambiado de 210 a 150
            const pageHeight = 400
            const imgHeight = (canvas.height * imgWidth) / canvas.width
            let heightLeft = imgHeight
  
            const contentDataURL = canvas.toDataURL('image/png')
            let position = 0
  
            pdf.addImage(
                contentDataURL,
                'PNG',
                0,
                position,
                imgWidth,
                imgHeight
            )
            heightLeft -= pageHeight
  
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight
                pdf.addPage()
                pdf.addImage(
                    contentDataURL,
                    'PNG',
                    0,
                    position,
                    imgWidth,
                    imgHeight
                )
                heightLeft -= pageHeight
            }
  
            // Descarga el PDF
            pdf.save('output.pdf')
            window.location.href = '/schedule'
        },
        calculateWeeksPerMonth() {
            const year = new Date().getFullYear()
            const nextMonth = new Date().getMonth() + 2
            const daysInMonth = new Date(year, nextMonth, 0).getDate()
            const daysInPrevMonth = new Date(year, nextMonth - 1, 0).getDate()
            const daysInNextMonth = new Date(
                year,
                (nextMonth % 12) + 1,
                0
            ).getDate()
            this.firstDayOfWeek = new Date(year, nextMonth - 1, 1 - 1).getDay()
  
            this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
            this.weeks = Array.from(
                { length: Math.ceil((this.firstDayOfWeek + daysInMonth) / 7) },
                (_, i) =>
                    Array.from({ length: 7 }, (_, j) => {
                        const day = i * 7 + j + 1 - this.firstDayOfWeek
                        if (day > 0 && day <= daysInMonth) {
                            return {
                                day,
                                isNextMonth: false,
                                isPrevMonth: false,
                            }
                        } else if (day <= 0) {
                            return {
                                day: daysInPrevMonth + day,
                                isNextMonth: false,
                                isPrevMonth: true,
                            }
                        } else {
                            return {
                                day: day - daysInMonth,
                                isNextMonth: true,
                                isPrevMonth: false,
                            }
                        }
                    })
            )
        },
    },
  
    mounted() {
        this.calculateWeeksPerMonth()
    },
  }
  </script>
  <style scoped>
  .color-box {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  </style>