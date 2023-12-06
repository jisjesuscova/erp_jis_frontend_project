<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">Aperturar Periodo</h2>
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                    >Periodo</p>
                </div>
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div
                        v-if="status_opened_period == 1"
                        class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                        role="alert"
                    >
                        Tienes un periodo de nomina abierto, debes cerrarlo para aperturar uno nuevo.
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Mes</label
                        >
                        <input
                            type="month"
                            id="rut_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mes del periodo"
                            v-model="period_input"
                            required
                        />
                    </div>
                    <div class="grid grid-cols-8 gap-4 p-4 md:p-5">
                        <button v-if="status_opened_period == 0" type="button" @click="openPeriod" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Aperturar
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button v-if="status_opened_period == 1" type="button" @click="closePeriod" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            Cerrar
                            <i class="fa-solid fa-remove"></i>
                        </button>
                    </div>
                  
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
            period_input: '',
            status_opened_period: 0,
        }
    },
    methods: {
        async verify() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'http://localhost:8000/payroll_periods/check',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                
                if (response.data.message == 0) {
                    this.status_opened_period = 0
                } else {
                    this.period_input = response.data.message

                    this.status_opened_period = 1
                }

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    // localStorage.removeItem('accessToken')
                    // window.location.reload()
                } else {
                    console.error(
                        'Error al obtener el periodo:',
                        error
                    )
                }
            }
        },
    },
    async mounted() {
        await this.verify()
    },
}
</script>
