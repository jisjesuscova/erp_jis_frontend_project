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
         
        <div  v-else>
            <div v-if="create_scheedule == 1" class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10" role="alert">
                    Horario Ingresado con <span class="font-bold">éxito</span> 
                </div>      

            <div class="flex flex-col md:flex-row">
                <div class="p-4 w-full">
                    <h2 class="my-5">Ingresar Nuevo Horario</h2>
                    <form @submit.prevent="createSchedule">
                        <div class="mb-4 flex flex-col md:flex-row md:items-center md:space-x-4">
                            <input
                                v-model="horary_name_input"
                                class="border-2 border-gray-950 w-full p-2 rounded-md mb-4 md:mb-0 md:w-52"
                                type="text"
                                placeholder="Nombre del horario"
                            />
                            <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
                                <label for="turn" class="mr-1">Jornada: </label>
                                <select
                                    v-model="horary_input"
                                    required
                                    @change="getByGroup"
                                    class="border-2 border-gray-950 rounded-md p-2 w-full md:w-auto"
                                >
                                    <option value="">- Horario -</option>
                                    <option value="1">Mañana</option>
                                    <option value="2">Tarde</option>
                                    <option value="3">Intermedio</option>
                                </select>
                            </div>
                            <div class="flex flex-col md:flex-row md:items-center md:space-x-4">
                                <label for="turn" class="mr-2">Turno a asignar:</label>
                                <select
                                    id="turn"
                                    v-model="selectedTurn"
                                    class="border-2 border-gray-950 rounded-md p-2 w-full md:w-auto"
                                >
                                    <option
                                        v-for="turn in turns"
                                        :key="turn.id"
                                        :value="turn"
                                    >
                                        {{ turn.turn }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div
                            v-for="day in days"
                            :key="day"
                            class="mb-2 flex items-center"
                        >
                            <input
                                type="checkbox"
                            
                                :id="day"
                                @change="assignTurn(day, $event)"
                                class="mr-2 border-2 border-black rounded-md p-2 w-4 h-4"
                            />
                            <label :for="day">
                                {{ day }}
                                {{ schedule[day].turn? `(${schedule[day].turn})`: '(No hay turno para este día)'}}
                            </label>
                        </div>
                        <button
                            type="submit"
                            class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Crear horario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    data() {
        return {
            days: [
                'Lunes',
                'Martes',
                'Miércoles',
                'Jueves',
                'Viernes',
                'Sábado',
                'Domingo',
            ],
            shifts: [],
            schedule: {
                Lunes: { message: 'No hay turno para este día' },
                Martes: { message: 'No hay turno para este día' },
                Miércoles: { message: 'No hay turno para este día' },
                Jueves: { message: 'No hay turno para este día' },
                Viernes: { message: 'No hay turno para este día' },
                Sábado: { message: 'No hay turno para este día' },
                Domingo: { message: 'No hay turno para este día' },
            },
            turns: [],
            selectedTurn: null,
            loading: false,
            loading_1: false,
            create_scheedule: 0,
            horary_input: '',
            horary_name_input: '',
        }
    },
    methods: {
        whileForDays() {
            console.log(
                this.schedule ? this.schedule : 'No hay horario para este dia',
            )
        },
        assignTurn(day, event) {
        if (event.target.checked && this.selectedTurn) {
            this.schedule[day] = this.selectedTurn
        } else {
            this.schedule[day] = { 'message': 'No hay turno para este día' }
        }
        },
        async createSchedule() {
            this.loading = true
            const dataToSend = {
                schedule: this.schedule,
                horary_name: this.horary_name_input,
                added_date: new Date(),
                updated_date: new Date(),
            }
            console.log(dataToSend)
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.post(
                    'https://apijis.com/schedule/store',dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },

                )
                this.create_scheedule = 1

                setTimeout(() => {
                    this.create_scheedule = 0
                }, 3000)
                this.resetData()
                this.loading = false

                console.log(response.data.message)
            } catch (error) {
                console.error(error)
                this.loading = false
            }
        },
        async getByGroup() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    `https://apijis.com/turns/get_by_group/${this.horary_input}/`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )
                console.log(response)
                this.turns = response.data.message
            } catch (error) {
                console.error(error)
            }
        },
        async getSchedules() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/schedule/get_all/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )
                console.log(response)
                
            } catch (error) {
                console.error(error)
            }
        },
        resetData() {
            this.horary_input = ''
            this.horary_name_input = ''
            this.schedule = {
                Lunes: { message: 'No hay turno para este día' },
                Martes: { message: 'No hay turno para este día' },
                Miércoles: { message: 'No hay turno para este día' },
                Jueves: { message: 'No hay turno para este día' },
                Viernes: { message: 'No hay turno para este día' },
                Sábado: { message: 'No hay turno para este día' },
                Domingo: { message: 'No hay turno para este día' },
            }
            this.selectedTurn = null

            console.log('Data reset', this.schedule)
        },
    },
    async mounted() {
        // this.getTurns()
        // this.getSchedules()
    },
}
</script>
