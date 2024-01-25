<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <!-- Show loading message if data is not ready -->
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

        <!-- Show the content when data is ready -->
        <div v-else>
            <div
                v-if="rol_id == 4"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10"
            >
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-orange-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Total Empleados Activos
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3
                            class="text-sm font-bold text-gray-800 dark:text-white"
                        >
                            {{ total_active_employees }} Empleados
                        </h3>
                    </div>
                </div>
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-orange-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Distribución de Planta
                        </p>
                    </div>
                    <div class="p-4 md:p-5">
                        <div class="grid grid-cols-2 gap-2 text-center">
                            <h4
                                class="text-sm font-bold text-gray-800 dark:text-white"
                            >
                                Full-Time: {{ total_full_time_employees }}
                            </h4>
                            <h4
                                class="text-sm font-bold text-gray-800 dark:text-white"
                            >
                                Part-Time: {{ total_part_time_employees }}
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-orange-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Distribución de Generos
                        </p>
                    </div>
                    <div class="p-4 md:p-5">
                        <div class="grid grid-cols-2 gap-2 text-center">
                            <h4
                                class="text-sm font-bold text-gray-800 dark:text-white"
                            >
                                Masculino: {{ total_male_employees }}
                            </h4>
                            <h4
                                class="text-sm font-bold text-gray-800 dark:text-white"
                            >
                                Femenino: {{ total_female_employees }}
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-orange-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Saldo de Vacaciones
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3
                            class="text-sm font-bold text-gray-800 dark:text-white"
                        >
                            {{ total_vacation_days }} Días
                        </h3>
                    </div>
                </div>
            </div>

            <h1
                class="block text-3xl font-bold text-red-600 sm:text-4xl md:text-5xl dark:text-white pt-10 text-center"
            >
                Cumpleaños del mes
            </h1>

            <!-- Card Blog -->
            <div
                class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
            >
                <!-- Grid -->
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Card -->
                    <div
                        v-for="birthday_employee in birthday_employees"
                        :key="birthday_employee.id"
                        class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div class="p-4 md:p-6">
                            <span
                                class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"
                            >
                                Día {{ birthday_employee.day }}
                            </span>
                            <h3
                                class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white"
                            >
                                {{ birthday_employee.names }}
                                {{ birthday_employee.father_lastname }}
                            </h3>
                            <p class="mt-3 text-gray-500">
                                {{ birthday_employee.branch_office }}
                            </p>
                        </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Card Blog -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: true,
            total_full_time_employees: 0,
            total_active_employees: 0,
            total_part_time_employees: 0,
            total_vacation_days: 0,
            total_male_employees: 0,
            total_female_employees: 0,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
            birthday_employees: [],
            rol_id: '',
        }
    },
    async created() {
        const accessToken = localStorage.getItem('accessToken')

        const rol_id = localStorage.getItem('rol_id')

        if (rol_id) {
            this.rol_id = rol_id
        } else {
            this.rol_id = ''
        }

        const rut = localStorage.getItem('rut')

        if (rut) {
            this.rut = rut
        } else {
            this.rut = ''
        }

        try {
            const response = await axios.get(
                'https://apijis.com/employees/get_birthdays',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            const decodedData = JSON.parse(response.data.message)

            this.birthday_employees = decodedData

            console.log(this.birthday_employees)

            this.loading_5 = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener la lista de cumpleaños:', error)
            }
        }

        try {
            const response = await axios.get(
                'https://apijis.com/employee_labor_data/active_employee_totals',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            this.total_active_employees = response.data.message

            this.loading_1 = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener la lista de bancos:', error)
            }
        }

        try {
            const response = await axios.get(
                'https://apijis.com/employee_labor_data/distribution_totals',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            this.total_full_time_employees = response.data.message[0].Total
            this.total_part_time_employees = response.data.message[1].Total

            this.loading_2 = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener la lista de bancos:', error)
            }
        }

        try {
            const response = await axios.get(
                'https://apijis.com/employees/get_genders_total',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            this.total_male_employees = response.data.message[0].total
            this.total_female_employees = response.data.message[1].total

            this.loading_3 = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener los generos:', error)
            }
        }

        try {
            const response = await axios.get(
                'https://apijis.com/vacations/total_vacation_days_in_company',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            this.total_vacation_days = response.data.message

            this.loading_4 = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener el total de vacaciones:', error)
            }
        }

        if (
            this.loading_1 == false &&
            this.loading_2 == false &&
            this.loading_3 == false &&
            this.loading_4 == false
        ) {
            this.loading = false
        }
    },
}
</script>
