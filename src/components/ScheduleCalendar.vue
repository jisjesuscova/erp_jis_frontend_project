<template>
    <div>
       
    <table class="w-full">
        <thead>
            <tr>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Lunes</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Lun</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Martes</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Mar</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Miercoles</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Mie</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Jueves</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Jue</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Viernes</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Vie</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Sabado</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
                        >Sab</span
                    >
                </th>
                <th
                    class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                >
                    <span class="xl:block lg:block md:block sm:block hidden"
                        >Domingo</span
                    >
                    <span class="xl:hidden lg:hidden md:hidden sm:hidden block"
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
                    class="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
                    :class="{
                        'bg-white-100': !day.isNextMonth && !day.isPrevMonth,
                        'bg-gray-200': day.isNextMonth || day.isPrevMonth,
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
                            v-if="!day.isNextMonth && !day.isPrevMonth && dayIndex < 6"
                        >
                            <div v-for="weekInfo in filteredDataToShow[weekIndex]" :key="weekInfo.id">
                                <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                    <div class="event bg-red-500 text-white rounded p-1 text-sm mb-1">
                                        
                                        <span class="time"> {{ weekInfo.start_turn }} </span>
                                    </div>
                                    <div class="event bg-green-500 text-white rounded p-1 text-sm mb-1">
                                       
                                        <span class="time"> {{ weekInfo.end_turn }} </span>
                                    </div>
                                    <div class="event bg-orange-500 text-white rounded p-1 text-sm mb-1">
                                        
                                        <span class="time"> {{ weekInfo.collation }} </span>
                                    </div>
                                    <div class="event bg-blue-700 text-white rounded p-1 text-sm mb-1">
                                        
                                        <span class="time"> {{ weekInfo.working }} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

        </tbody>
    </table>
     <div class="legend mt-10">
    <div class="legend-item">
      <div class="color-box bg-red-500"></div>
      <span>Inicio</span>
    </div>
    <div class="legend-item">
      <div class="color-box bg-green-500"></div>
      <span>Termino</span>
    </div>
    <div class="legend-item">
      <div class="color-box bg-orange-500"></div>
      <span>Colacion</span>
    </div>
    <div class="legend-item">
      <div class="color-box bg-blue-700"></div>
      <span>Jornada</span>
    </div>
  </div>
   
</div>
</template>

<script>
export default {
    computed: {
        filteredDataToShow() {
            return this.weeks.map((week, weekIndex) => {
                return this.dataToShow.filter((weekInfo, infoIndex) => {
                    return weekInfo.week_id === weekIndex + 1 && infoIndex < weekInfo.group_day_id;
                });
            });
        }
    },
    props: {
        dataToShow:{type:Array, required:true}
    },
    data() {
        return {
            days: [],
            weeks: [],
            firstDayOfWeek: 0,
        }
    },
    methods: {
        calculateWeeksPerMonth() {
            console.log(this.dataToShow)
            const year = new Date().getFullYear();
            const nextMonth = new Date().getMonth() + 2;
            const daysInMonth = new Date(year, nextMonth, 0).getDate();
            const daysInPrevMonth = new Date(year, nextMonth - 1, 0).getDate();
            const daysInNextMonth = new Date(year, (nextMonth % 12) + 1, 0).getDate();
            this.firstDayOfWeek = new Date(year, nextMonth - 1, 1 - 1).getDay();

            this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
            this.weeks = Array.from(
                { length: Math.ceil((this.firstDayOfWeek + daysInMonth) / 7) },
                (_, i) =>
                    Array.from({ length: 7 }, (_, j) => {
                        const day = i * 7 + j + 1 - this.firstDayOfWeek;
                        if (day > 0 && day <= daysInMonth) {
                            return { day, isNextMonth: false, isPrevMonth: false };
                        } else if (day <= 0) {
                            return { day: daysInPrevMonth + day, isNextMonth: false, isPrevMonth: true };
                        } else {
                            return { day: day - daysInMonth, isNextMonth: true, isPrevMonth: false };
                        }
                    })
            );
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
  display: inline-block;
  margin-right: 5px;
}

</style>