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
                        v-for="(day) in week"
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
                                v-if="!day.isNextMonth &&!day.isPrevMonth && isWorkDay(day) 
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
                            Domingos libres
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
                            {{ totalFreeSundays }}
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
import { is } from 'date-fns/locale';
  export default {
    computed: {
        totalFreeSundays() {
        return this.sundays.length - this.sundaysInUse ;
        },
        totalFreeDays() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            const month = new Date(this.dataToShow[0].datesInRange[0]).getMonth() + 1
            const year = new Date(this.dataToShow[0].datesInRange[0]).getFullYear()
            const totalDaysInMonth = new Date(year, month, 0).getDate();
            const totalProgrammedDays = this.totalProgrammedDays
            return totalDaysInMonth - totalProgrammedDays;
        },
        totalProgrammedDays() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            return this.dataToShow.reduce(
                (total, week) => total + week.datesInRange.length,
                0
            );
        },
        totalTurns() {
            return this.totalProgrammedDays + ' X ' + this.totalFreeDays
        },
        totalWeekHours() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            return this.dataToShow.reduce(
                (total, week) => {
                    const [hours, minutes] = week.working.split(':').map(Number);
                    const decimalHours = hours + (minutes / 60);
                    return total + (week.datesInRange.length * decimalHours);
                },
                0
            );
        },
        filteredDataToShow() {
            if (!Array.isArray(this.dataToShow)) {
                return [];
            }
            return this.weeks.map((week, weekIndex) => {
                return this.dataToShow.filter((weekInfo, infoIndex) => {
                    return (
                        weekInfo.week_id === weekIndex + 1 &&
                        infoIndex < weekInfo.group_day_id
                    );
                });
            });
        },
    },
  
    props: {
        dataToShow: {
            type: Array,
            required: false,
        },
        sundays : {
            type: Array,
            required: false,
        },
        sundaysInUse : {
            type: Number,
            required: false,
        },
    },

    data() {
        return {
            workDays: [],
            days: [],
            weeks: [],
            firstDayOfWeek: 0,
            dataToPdf: [],
        }
    },
    methods: {
        isWorkDay(day) {
                const actualYear = new Date().getFullYear();
                const monthPeriod = new Date(this.dataToShow[0].datesInRange[0]).getMonth() 
                // Convierte la cadena de texto a un objeto Date
                const date = new Date(actualYear, monthPeriod, day.day);
                console.log(date)
                // Convierte la fecha a una cadena en el formato de tus datos
                const dateString = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
                // Verifica si la fecha está en tus datos
                return this.workDays.includes(dateString.split('-')[2]);
                },
        async calculateWeeksPerMonth() {
            const year = new Date().getFullYear()
            const nextMonth = new Date(this.dataToShow[0].datesInRange[0]).getMonth() + 1
            const daysInMonth = new Date(year, nextMonth, 0).getDate()
            const daysInPrevMonth = new Date(year, nextMonth - 1, 0).getDate()
            const daysInNextMonth = new Date(year,(nextMonth % 12) + 1,0).getDate()
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
  
    async mounted() {
        await this.calculateWeeksPerMonth()
        this.workDays = this.dataToShow.flatMap(item => 
            item.datesInRange.map(date => date.split('T')[0].split('-')[2])
        );
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