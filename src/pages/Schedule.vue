<template>
    <div>
        <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            <div
                v-if="loading"
                class="flex justify-center items-center h-screen"
            >
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

            <div v-else class="flex flex-col pt-10">
                <h2 class="text-4xl dark:text-white pb-10">
                    Mallas Horarias
                    <router-link
                        href="javascript:;"
                        to="/create_mesh"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Agregar
                    </router-link>
                </h2>
                <div class="-m-1.5 overflow-x-auto">
                    <div
                        class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
                        role="alert"
                        v-if="delete_mesh== 1"
                    >
                        Horario eliminado con
                        <span class="font-bold">éxito</span>.
                    </div>
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div
                            class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                        >
                            <div class="overflow-hidden" v-if="rol_id == 3">
                                <table
                                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <thead class="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Rut
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Trabajador
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Periodo
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 dark:divide-gray-700"
                                    >
                                        <tr
                                            v-for="meshesBySupervisor in meshesBySupervisor"
                                            :key="meshesBySupervisor.id"
                                        >
                                            <td
                                                v-if="
                                                    meshesBySupervisor &&
                                                    meshesBySupervisor.EmployeeModel &&
                                                    meshesBySupervisor.EmployeeModel
                                                        .visual_rut
                                                "
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                            >
                                                {{
                                                    meshesBySupervisor.EmployeeModel
                                                        .visual_rut
                                                }}
                                            </td>
                                            <td
                                                v-else
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                            >
                                                No rut
                                            </td>
                                            <div>
                                                <td
                                                    v-if="
                                                        meshesBySupervisor &&
                                                        meshesBySupervisor.EmployeeModel &&
                                                        meshesBySupervisor.EmployeeModel
                                                            .names
                                                    "
                                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                                >
                                                    {{
                                                        meshesBySupervisor.EmployeeModel
                                                            .names +
                                                        ' ' +
                                                        meshesBySupervisor.EmployeeModel
                                                            .father_lastname +
                                                        ' ' +
                                                        meshesBySupervisor.EmployeeModel
                                                            .mother_lastname
                                                    }}
                                                </td>
                                                <td
                                                    v-else
                                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                                >
                                                    No se encontro el nombre del
                                                    trabajador
                                                </td>
                                            </div>
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                            >
                                                {{ meshesBySupervisor.MeshModel.period }}
                                            </td>
                                            <button
                                                @click="
                                                    showData(
                                                        meshesBySupervisor,
                                                        meshesBySupervisor.EmployeeModel.rut
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                            <button
                                                @click="
                                                    deleteMesh(
                                                        
                                                        meshes.MeshModel.id
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="overflow-hidden " v-else>
                                <table
                                    class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <thead class="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Rut
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Trabajador
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                            >
                                                Periodo
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody
                                        class="divide-y divide-gray-200 dark:divide-gray-700"
                                    >
                                        <tr
                                            v-for="meshes in meshes"
                                            :key="meshes.id"
                                        >
                                            <td
                                                v-if="
                                                    meshes &&
                                                    meshes.EmployeeModel &&
                                                    meshes.EmployeeModel
                                                        .visual_rut
                                                "
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                            >
                                                {{
                                                    meshes.EmployeeModel
                                                        .visual_rut
                                                }}
                                            </td>
                                            <td
                                                v-else
                                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                            >
                                                No rut
                                            </td>
                                            <div>
                                                <td
                                                    v-if="
                                                        meshes &&
                                                        meshes.EmployeeModel &&
                                                        meshes.EmployeeModel
                                                            .names
                                                    "
                                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                                >
                                                    {{
                                                        meshes.EmployeeModel
                                                            .names +
                                                        ' ' +
                                                        meshes.EmployeeModel
                                                            .father_lastname +
                                                        ' ' +
                                                        meshes.EmployeeModel
                                                            .mother_lastname
                                                    }}
                                                </td>
                                                <td
                                                    v-else
                                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                                >
                                                    No se encontro el nombre del
                                                    trabajador
                                                </td>
                                            </div>
                                            <td
                                                class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                            >
                                                {{ meshes.MeshModel.period }}
                                            </td>
                                            <button
                                                @click="
                                                    showData(
                                                        meshes,
                                                        meshes.EmployeeModel.rut
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                            <button
                                                @click="
                                                    deleteMesh(
                                                        
                                                        meshes.MeshModel.id
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MasterDataSearcher from '../components/MasterDataSearcher.vue'
import ScheduleCalendar from '../components/ScheduleCalendar.vue'
import axios from 'axios'
import { computed } from 'vue'

export default {
    components: {
        MasterDataSearcher,
        ScheduleCalendar,
    },
    data() {
        return {
            rol_id: localStorage.getItem('rol_id'),
            meshes: [],
            meshesBySupervisor: [],
            loading: true,
            delete_mesh: 0,
            dataToShow: [],
        }
    },

    methods: {
        printPDF(names) {
            const data = this.dataToShow.map((week) => {
                const weekData = [{ text: week.week_id || '', bold: true }]

                for (let i = 0; i < 7; i++) {
                    if (week.date && week.date[i]) {
                        const date = week.date[i]
                        weekData.push({
                            text:
                                new Date(
                                    new Date(date).getTime() + 86400000
                                ).toLocaleDateString('es-CL') +
                                '\nInicio: ' +
                                (week.turn_data.start || '') +
                                '\nTermino: ' +
                                (week.turn_data.end || '') +
                                '\nColacion: ' +
                                (week.turn_data.breaking || '') +
                                '\nJornada: ' +
                                (week.turn_data.working || '') +
                                '\nTurno: ' +
                                (week.turn_data.turn || ''),
                            fontSize: 10,
                        })
                    } else {
                        weekData.push({ text: '', fontSize: 10 })
                    }
                }

                return weekData
            })

            const docDefinition = {
                content: [
                    {
                        text: 'Nombre: ' + names,
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    {
                        text: 'RUT: ' + this.dataToShow[0].rut,
                        fontSize: 14,
                        bold: true,
                        margin: [0, 0, 0, 20],
                    },
                    {
                        table: {
                            headerRows: 1,
                            widths: [
                                '*',
                                'auto',
                                'auto',
                                'auto',
                                'auto',
                                'auto',
                                'auto',
                                'auto',
                            ],
                            body: [
                                ['Semana', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
                                ...data,
                            ],
                        },
                    },
                ],
            }

            pdfMake
                .createPdf(docDefinition)
                .download(`malla_horaria_${this.dataToShow[0].rut}.pdf`)
        },
        showData(meshes, rut) {
            if (meshes && meshes.EmployeeModel) {
                const visual_rut = meshes.EmployeeModel.visual_rut || 'No rut'
                const names =
                    meshes.EmployeeModel.names ||
                    'No se encontro el nombre del trabajador'
                const period = meshes.MeshModel.period || 'No period' 
                this.getMeshesByEmployeeRutAndPeriod(rut, period, names, visual_rut)
            }
        },
        async getMeshesByEmployeeRutAndPeriod(rut, period, names,visual_rut) {
            const employeeRutPeriodNames = {
                rut,
                period,
                names,
                visual_rut
            }
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    `https://apijis.com/meshes/get_mesh_by_rut_week_period/${rut}/${period}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )
                this.dataToShow = response.data.message
                localStorage.setItem('pdfData',JSON.stringify(this.dataToShow))
                localStorage.setItem('employeeRutPeriodNames',JSON.stringify(employeeRutPeriodNames))
                this.$router.push('/schedule_pdf_calendar')
                this.loading = false
            } catch (error) {
                console.error('Error al obtener la lista de mallas :', error)
            }
        },
        async getMeshes() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/meshes/',
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.meshes = response.data.message
                console.log(this.meshes)
                
            } catch (error) {
                console.error('Error al obtener la lista de bancos:', error)
            }
        },
        async getMeshesBySupervisor() {
            const supervisor_rut = localStorage.getItem('rut')
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    `https://apijis.com/meshes/get_all_meshes_by_supervisor/${supervisor_rut}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.meshesBySupervisor = response.data.message
                console.log(this.meshesBySupervisor)
                this.loading = false
            } catch (error) {
                this.loading = false
                console.error('Error al obtener la lista de bancos:', error)
            }
        },
        async deleteMesh(id) {
            const confirm = window.confirm('¿Estás seguro de eliminar el horario?')
            if (confirm) {

            this.loading = true
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.delete(
                    `https://apijis.com/meshes/delete/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )
                this.delete_mesh = 1
                if(this.rol_id == 3){
                    this.getMeshesBySupervisor()
                }
                else{
                    this.getMeshes()
                }
                this.loading = false
            
            } catch (error) {
                console.error('Error al obtener la lista de bancos:', error)
            }
        }
        },

    },
    async mounted() {
        await this.getMeshes()
        await this.getMeshesBySupervisor()
    },
}
</script>
