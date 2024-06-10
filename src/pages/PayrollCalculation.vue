<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="justify-center items-center h-screen">
            <div>
                <div class="mb-2 flex justify-between items-center pt-20">
                    <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Procesando</h3>
                    <span class="text-sm text-gray-800 dark:text-white">{{ progressBarText }}</span>
                </div>
                <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" :style="{ width: progressBarWidth }"></div>
                </div>
            </div>
        </div>

        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">
                Calcular Nomina
                <button
                    @click="calculatePayroll"
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                    Calcular
                </button>
            </h2>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            payrollData: [], // Almacena los datos de la nómina
            currentPage: 1, // Página actual de datos
            totalPages: 1, // Número total de páginas disponibles
            progressBarWidth: '0%',
            progressBarText: '0%',
        }
    },
    methods: {
        async calculatePayroll() {
            const opened_period = localStorage.getItem('opened_period')
            const accessToken = localStorage.getItem('accessToken')

            let quantity = 180

            this.loading = true

            try {
                const response = await axios.get(
                    `http://localhost:8000/payroll_calculations/2024-03`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                console.log(response)
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },
        updateProgressBar() {
            let totalElements = 180; // Cantidad total de elementos
            let processedElements = 0; // Elementos procesados

            const intervalId = setInterval(() => {
                processedElements++; // Incrementa la cantidad de elementos procesados
                let percent = (processedElements / totalElements) * 100; // Calcula el porcentaje

                // Redondea el porcentaje a dos decimales
                percent = percent.toFixed(2);

                // Actualiza la barra de progreso y su texto
                this.progressBarWidth = `${percent}%`;
                this.progressBarText = `${percent}%`;

                // Detiene el intervalo si se han procesado todos los elementos
                if (processedElements >= totalElements) {
                    clearInterval(intervalId);
                }
            }, 8000);
        }
    },
    mounted() {
        this.updateProgressBar()
    }
}
</script>

