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
            <div id="external-events">
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
                <div
                    class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event"
                >
                    <div
                        draggable="true"
                        @click="getEventData"
                        class="cursor-move bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fdivl p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        v-for="turn in turns"
                        :key="turn.id"
                        :value="turn.turn"
                        v-text="turn.turn"
                        @dragstart="getDataToDragToCalendar(turn.turn)"
                        @dragend="handleDragEnd(turn.turn)"
                    ></div>
                </div>
            </div>
            <FullCalendar
                :options="calendarOptions"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import axios from 'axios'

export default {
    components: {
        FullCalendar,
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                height: 'auto',
                locale: 'es',
                firstDay: 1,
                editable: true,
                droppable: true,
                dateClick: this.handleDateClick,
                validRange: {
                    start: '',
                    end: '',
                },
                headerToolbar: {
                    left: '',
                    center: 'title',
                    right: '',
                },
            },
            attributes: [{}],
            date: new Date(),
            branch_offices: [],
            sections: [],
            turns: [],
            turn_input: '',
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
        getDataToDragToCalendar(turn) {
            
        },
        handleDateClick(arg) {
            alert('date click! ' + arg.dateStr)
        },
        handleDragStart(turn) {
            console.log('Comenzando a arrastrar el turno:', turn)
            event.dataTransfer.setData('text/plain', JSON.stringify(turn))
        },
        handleDragEnd(turn) {
            console.log('Finalizando arrastre del turno:', turn)
        },
        getFirstDayOfPreviousMonth() {
            const date = new Date()
            const firstDayOfPreviousMonth = new Date(
                date.getFullYear(),
                date.getMonth() - 1,
                1
            )
            console.log(firstDayOfPreviousMonth)
            return firstDayOfPreviousMonth
        },
        getLastDayOfNextMonth() {
            const date = new Date()
            const lastDayOfNextMonth = new Date(
                date.getFullYear(),
                date.getMonth() + 2,
                0
            )
            console.log(lastDayOfNextMonth)
            return lastDayOfNextMonth
        },
        getEventData(event) {
            console.log(event.target._value)
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
                    `https://apijis.com/turns/edit/${dataToSend.employee_type_id}/${dataToSend.group_id}/${dataToSend.search_term}`,
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
        this.calendarOptions.validRange.start =
            this.getFirstDayOfPreviousMonth()
        this.calendarOptions.validRange.end = this.getLastDayOfNextMonth()
    },
}
</script>
