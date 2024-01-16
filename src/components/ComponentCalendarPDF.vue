<template>
    <div>
        <div v-show="loading" class="flex justify-center items-center h-screen">
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
    <div id="PDF" v-show="1==1" class="mt-96">
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
                            'bg-white-100': !day.isNextMonth && !day.isPrevMonth,
                            'bg-gray-300': day.isNextMonth || day.isPrevMonth,
                        }"
                        
                     >
                        <div class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                            <div class="top h-5 w-full">
                                <span class="text-gray-500" v-if="day.day !== null">{{ day.day }}</span>
                            </div>
                            <div
                                class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden"
                                v-if="!day.daysInNextMonth && !day.daysInPrevMonth && isWorkDay(day)"
                            >
                                <div v-for="weekInfo in filteredDataToShow[weekIndex]" :key="weekInfo.id">
                                    <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                        <div class="event bg-gray-300 text-white rounded p-1 text-sm mb-1">
                                            <span class="time">{{ weekInfo.turn_data.start }}</span>
                                        </div>
                                        <div class="event bg-gray-900 text-white rounded p-1 text-sm mb-1">
                                            <span class="time">{{ weekInfo.turn_data.end }}</span>
                                        </div>
                                        <div class="event bg-orange-500 text-white rounded p-1 text-sm mb-1">
                                            <span class="time">{{ weekInfo.turn_data.breaking }}</span>
                                        </div>
                                        <div class="event bg-blue-700 text-white rounded p-1 text-sm mb-1">
                                            <span class="time">{{ weekInfo.turn_data.working }}</span>
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
                <div class="color-box bg-gray-300"></div>
                <span class="ml-2">Inicio</span>
            </div>
            <div class="legend-item flex flex-row items-center">
                <div class="color-box bg-gray-900"></div>
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
</div>
  </template>
  
  <script>
  import jsPDF from 'jspdf'
  import html2canvas from 'html2canvas'
  export default {
    computed: {
        totalFreeSundays() {
         
        return this.sundays.length - this.sundaysInUse;
        },
        totalFreeDays() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            const getPeriod  = JSON.parse(localStorage.getItem('employeeRutPeriodNames'))
            const [year, month] = getPeriod.period.split('-')
            const totalDaysInMonth = new Date(year, month, 0).getDate();
            const totalProgrammedDays = this.totalProgrammedDays
            return totalDaysInMonth - totalProgrammedDays;
        },
        totalProgrammedDays() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            return this.dataToShow.reduce(
                (total, week) => total + week.date.length,
                0
            );
        },
        totalTurns() {
            return this.totalProgrammedDays + ' X ' + this.totalFreeDays;
        },
        totalWeekHours() {
            if (!Array.isArray(this.dataToShow)) {
                return 0;
            }
            return this.dataToShow.reduce(
                (total, week) => {
                    const [hours, minutes] = week.turn_data.working.split(':').map(Number);
                    const decimalHours = hours + (minutes / 60);
                    return total + (week.date.length * decimalHours);
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
                        infoIndex < weekInfo.turn_data.group_day_id
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

    },
    data() {
        return {
            workDays: [],
            rutAndPeriodPDf: [],
            loading:true,
            days: [],
            weeks: [],
            firstDayOfWeek: 0,
            sundaysInUse:0,
            dataToPdf: [],
        }
    },
    
    methods: {
            isWorkDay(day) {
                const actualYear = new Date().getFullYear();
                const monthPeriod = Number(this.rutAndPeriodPDf.period.split('-')[1]);
                // Convierte la cadena de texto a un objeto Date
                const date = new Date(actualYear, monthPeriod - 1, day.day);
                // Convierte la fecha a una cadena en el formato de tus datos
                const dateString = date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
                // Verifica si la fecha está en tus datos
                
               
                return this.workDays.includes(dateString.split('-')[2]);
                },
        async printPDF() {
            
            const element = document.getElementById('PDF')
  
            const canvas = await html2canvas(element)
  
            const pdf = new jsPDF('p', 'mm', 'a4')
  
            const imgWidth = 210 
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
            pdf.save(`Malla_horaria_${this.rutAndPeriodPDf.rut}_${this.rutAndPeriodPDf.period}.pdf`)
            window.location.href = '/schedule'
        },
        async calculateWeeksPerMonth() {
            const employeeRutPeriodNames = JSON.parse(localStorage.getItem('employeeRutPeriodNames'))
            this.rutAndPeriodPDf = employeeRutPeriodNames
            const monthPeriod = Number(employeeRutPeriodNames.period.split('-')[1])
            const year = new Date().getFullYear()
            const nextMonth = new Date().getMonth() + monthPeriod
            const daysInMonth = new Date(year, nextMonth, 0).getDate()
            const daysInPrevMonth = new Date(year, nextMonth - 1, 0).getDate()
            const daysInNextMonth = new Date(year,(nextMonth % 12) + 1,
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
                                // day: daysInPrevMonth + day,
                                isNextMonth: false,
                                isPrevMonth: true,
                            }
                        } else {
                            return {
                                // day: day - daysInMonth,
                                isNextMonth: true,
                                isPrevMonth: false,
                            }
                        }
                    })
            )
        },
        async verifyQuantityOfSundaysOfWork() {
            let quantityOfSundays = this.dataToShow.reduce((count, day) => {
            // Itera sobre el array de fechas
            day.date.forEach(dateString => {
                // Divide la cadena de fecha en partes
                let [year, month, dayOfMonth] = dateString.split('-');

                // Crea un nuevo objeto Date con las partes de la fecha
                let date = new Date(year, month - 1, dayOfMonth); // Los meses en JavaScript van de 0 a 11

                // Si el día es domingo, incrementa el contador
                if (date.getDay() == 0) {
                    this.sundaysInUse++;
                }
                console.log(this.sundaysInUse)
            });

            return this.sundaysInUse;
        }, 0); // Inicializa el contador a 0
        }
    },
  
    async mounted() {
        await this.calculateWeeksPerMonth()
        this.workDays = this.dataToShow.flatMap(item => item.date.map(date => date.split('-')[2]));
        await this.verifyQuantityOfSundaysOfWork()
        setTimeout(() => {
            this.printPDF()
        }, 10);
       
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