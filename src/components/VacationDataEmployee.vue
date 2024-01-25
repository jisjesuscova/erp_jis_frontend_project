<template>

    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
                <!-- SVG spinner -->
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>

            <!-- You can use a spinner or any other loading animation here -->
        </div>

        <div v-else class="flex flex-col pt-10">

            <h2 class="text-4xl dark:text-white pb-10">
                Vacaciones
                <router-link href="javascript:;" :to="`/create_vacation_data_employee/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Agregar
                </router-link>
            </h2>

            <EmployeeMenu />

            <div v-if="progressive_vacation_input != 1" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Feriado Legal
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ legal_holiday }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Días Tomados
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ taken_days }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Saldo
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ balance }} Días
                        </h3>
                    </div>
                </div>
            </div>

            <div v-if="progressive_vacation_input == 1" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
                <div class="flex flex-col bg-red-500 border-dark shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-red-700 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-white dark:text-gray-500">
                            Feriado Legal Total
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-white">
                            {{ legal_holiday + progressive_legal_holiday }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-red-500 border-dark shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-red-700 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-white dark:text-gray-500">
                            Días Tomados Totales
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-white">
                            {{ taken_days + progressive_taken_days }} Días
                        </h3>
                    </div>
                </div>

                <div class="flex flex-col bg-red-500 border-dark shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-red-700 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-white dark:text-gray-500">
                            Saldo Total
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-white">
                            {{ balance + progressive_balance }} Días
                        </h3>
                    </div>
                </div>


                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Feriado Legal Normal
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ legal_holiday }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Días Tomados Normales
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ taken_days }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Saldo Normal
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ balance }} Días
                        </h3>
                    </div>
                </div>

                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Feriado Legal Progresivo
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ progressive_legal_holiday }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Días Tomados Progresivos
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ progressive_taken_days }} Días
                        </h3>
                    </div>
                </div>
                <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Saldo Progresivo
                        </p>
                    </div>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-white">
                            {{ progressive_balance }} Días
                        </h3>
                    </div>
                </div>
            </div>

            <div class="-m-1.5 overflow-x-auto pt-12">
                <div class="bg-green-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="created_vacation == 1">
                    Registro agregado con <span class="font-bold">éxito</span>.
                </div>
                <div class="bg-red-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="error_kardex == 1">
                    <span class="font-bold">Error</span> para descargar el documento.
                </div>
                <div class="bg-green-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="uploaded_progressive_vacation == 1">
                    Registro cargado con <span class="font-bold">éxito</span>.
                </div>
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Desde</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hasta</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Días Hábiles</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estatus</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700" >
                                    <tr v-for="vacation in vacations" :key="vacation.id">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ vacation.document_employee_id }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ formatDate(vacation.since) }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ formatDate(vacation.until) }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ vacation.days }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <span v-if="vacation.status_id == 1" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">Solicitada</span>
                                            <span v-if="vacation.status_id == 2" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-500 text-white">Aceptada por Supervisor</span>
                                            <span v-if="vacation.status_id == 3 && vacation.support == null" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white">Aceptada</span>
                                            <span v-if="vacation.status_id == 4" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-500 text-white">Firmada</span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <router-link v-if="vacation.status_id == 1000" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2" href="javascript:;" :to="`/upload_vacation_data_employee/${vacation.rut}/${vacation.id}`">
                                                <i class="fa-solid fa-arrow-up"></i>
                                            </router-link>

                                            <button v-if="vacation.status_id == 3" type="button" @click="confirmSignVacation(vacation.document_employee_id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>

                                            <button v-if="vacation.status_id == 3" type="button" @click="generateFalseVacation(vacation.document_employee_id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                            
                                            <button v-if="vacation.status_id == 4" type="button" @click="generateVacation(vacation.document_employee_id)"  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-arrow-down"></i>
                                            </button>
                                            
                                            <button v-if="rol_id == 4 && vacation.status_id == 1" type="button" @click="confirmVacation(vacation.document_employee_id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10">
                <vue-awesome-paginate
                    :total-items="totalItems"
                    :items-per-page="itemsPerPage"
                    :max-pages-shown="maxPagesShown"
                    v-model="currentPage"
                    :on-click="onClickHandler"
                    />
            </div>

            <hr v-if="progressive_vacation_input == 1" class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

            <h2 v-if="progressive_vacation_input == 1" class="text-4xl dark:text-white pb-10">
                Vacaciones Progresivas
                <router-link v-if="rol_id == 4" href="javascript:;" :to="`/create_progressive_vacation_data_employee/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Agregar
                </router-link>
            </h2>

            <div v-if="progressive_vacation_input == 1" class="-m-1.5 overflow-x-auto pt-12">
                <div class="bg-green-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="created_vacation == 1">
                    Registro agregado con <span class="font-bold">éxito</span>.
                </div>
                <div class="bg-red-500 text-sm text-white rounded-md p-4 mb-10" role="alert" v-if="error_kardex == 1">
                    <span class="font-bold">Error</span> para descargar el documento.
                </div>
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Id</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Desde</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hasta</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Días Hábiles</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estatus</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700" >
                                    <tr v-for="progressive_vacation in progressive_vacations" :key="progressive_vacation.id">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ progressive_vacation.document_employee_id }}</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ formatDate(progressive_vacation.since) }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ formatDate(progressive_vacation.until) }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ progressive_vacation.days }} </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <span v-if="progressive_vacation.status_id == 3" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white">Aceptada</span>
                                            <span v-if="progressive_vacation.status_id == 4" class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-indigo-500 text-white">Firmada</span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <button v-if="progressive_vacation.status_id == 3" type="button" @click="confirmSignProgressiveVacation(progressive_vacation.document_employee_id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-pencil"></i>
                                            </button>

                                            <button v-if="progressive_vacation.status_id == 3" type="button" @click="generateFalseProgressiveVacation(progressive_vacation.document_employee_id)" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                            
                                            <button v-if="progressive_vacation.status_id == 4" type="button" @click="generateProgressiveVacation(progressive_vacation.document_employee_id)"  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2">
                                                <i class="fa-solid fa-arrow-down"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="progressive_vacation_input == 1" class="text-center mt-10">
                <vue-awesome-paginate
                    :total-items="progressive_totalItems"
                    :items-per-page="progressive_itemsPerPage"
                    :max-pages-shown="progressive_maxPagesShown"
                    v-model="progressive_currentPage"
                    :on-click="progressive_onClickHandler"
                    />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import EmployeeMenu from '../components/EmployeeMenu.vue';

export default {
    components: {
        EmployeeMenu
    },
    data() {
        return {
            loading: true,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
            loading_5: true,
            loading_6: true,
            loading_7: true,
            loading_8: true,
            vacations: [],
            progressive_vacations: [],
            created_vacation: 0,
            uploaded_progressive_vacation: 0,
            legal_holiday: '',
            taken_days: '',
            balance: '',
            error_kardex: 0,
            itemsPerPage: 10,
            progressive_itemsPerPage: 10,
            maxPagesShown: 5,
            progressive_maxPagesShown: 5,
            currentPage: 1,
            progressive_currentPage: 1,
            totalItems: 0,
            progressive_totalItems: 0,
            vacation_document: '',
            progressive_vacation_document: '',
            progressive_legal_holiday: '',
            progressive_taken_days: '',
            progressive_balance: '',
            progressive_vacation_input: '',
            rol_id: '',
            pdf_vacations: [],
            pdf_progressive_vacations: [],
        };
    },
    async mounted() {
        await this.getExtraDataEmployee();
        await this.getVacations();
        await this.getProgressiveVacations();
        await this.getLegal();
        await this.getTakenDays();
        await this.getProgressiveLegal();
        await this.getProgressiveTakenDays();
        await this.getPdfVacations();
        await this.getPdfProgressiveVacations();

        const rol_id = localStorage.getItem('rol_id');

        this.rol_id = rol_id;

        this.created_vacation = localStorage.getItem('created_vacation');

        if (this.created_vacation == 1) {
            localStorage.removeItem('created_vacation');
        }

        if (this.uploaded_progressive_vacation == 1) {
            localStorage.removeItem('uploaded_progressive_vacation');
        }

        if (this.loading_1 == false && this.loading_2 == false && this.loading_3 == false  && this.loading_4 == false  && this.loading_5 == false  && this.loading_6 == false  && this.loading_7 == false  && this.loading_8 == false) {
            this.loading = false;
        }
    },
    methods: {
        formatDateToCustomFormat(dateString) {
            // Parsea la cadena de fecha en un objeto Date
            const date = new Date(dateString);
            
            // Define los nombres de los meses en español
            const monthNames = [
                'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
            ];
            
            // Obtiene el día, mes y año
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            
            // Formatea la fecha en el formato deseado
            const formattedDate = `${day} de ${monthNames[month]} del ${year}`;
            
            return formattedDate;
        },
        updateSignVacation(id) {
            const accessToken = localStorage.getItem('accessToken');

            axios.get('https://apijis.com/vacations/sign/' + id, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    accept: 'application/json',
                },
            }).then(response => {
                console.log(response);

                this.getVacations();
            }).catch(error => {
                console.error(error);
                this.loading = false;
            });
        },
        async generateFalseVacation() {
            var logo = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/logo.png');

            var signature_type_id = localStorage.getItem('signature_type_id');

            var current_date = 'Santiago, ' + this.formatDateToCustomFormat(new Date());

            const vacationRows = this.pdf_vacations.map(vacation => [
                                        vacation.id,
                                        this.formatDate(vacation.since),
                                        this.formatDate(vacation.until),
                                        vacation.days
                                    ]);

            const watermarkText = "Documento de muestra"; // Texto de la marca de agua

            if (signature_type_id == 1) {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                [
                                    {
                                        text: [
                                            { text: 'Feriado Legal: ', bold: true},
                                            { text: this.legal_holiday + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 20],
                                    },
                                    {
                                        text: [
                                            { text: 'Días Tomados: ', bold: true},
                                            { text: this.taken_days + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                    {
                                        text: [
                                            { text: 'Saldo Total: ', bold: true},
                                            { text:  this.balance + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            text: '**Para tener validez debe estar firmado por ambas partes**',
                            bold: true,
                            alignment: 'center',
                            fontSize: 15,
                            margin: [0, 30, 0, 0],
                        },
                    ],
                    background: [
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 600 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 400 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 200 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            } else {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                    [
                                        {
                                            text: [
                                                { text: 'Feriado Legal: ', bold: true},
                                                { text: this.legal_holiday + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 20],
                                        },
                                        {
                                            text: [
                                                { text: 'Días Tomados: ', bold: true},
                                                { text: this.taken_days + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                        {
                                            text: [
                                                { text: 'Saldo Total: ', bold: true},
                                                { text:  this.balance + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                    ]
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            text: '**Para tener validez debe estar firmado por ambas partes**',
                            bold: true,
                            alignment: 'center',
                            fontSize: 15,
                            margin: [0, 30, 0, 0],
                        },
                    ],
                    background: [
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 600 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 400 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 200 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            }
        },
        async confirmSignVacation(id) {
            const shouldDelete = window.confirm('¿Estás seguro de que deseas firmar el documento?');

            if (shouldDelete) {
                await this.generateVacation(id);
                this.updateSignVacation(id);
            }
        },
        async generateVacation() {
            var logo = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/logo.png');

            var company_signature = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/signature.png');

            var signature = await this.getBase64ImageFromURL(localStorage.getItem('signature'));

            var visual_rut = localStorage.getItem('visual_rut');

            var signature_type_id = localStorage.getItem('signature_type_id');

            var current_date = 'Santiago, ' + this.formatDateToCustomFormat(new Date());

            const vacationRows = this.pdf_vacations.map(vacation => [
                                        vacation.id,
                                        this.formatDate(vacation.since),
                                        this.formatDate(vacation.until),
                                        vacation.days
                                    ]);

            if (signature_type_id == 1) {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                [
                                    {
                                        text: [
                                            { text: 'Feriado Legal: ', bold: true},
                                            { text: this.legal_holiday + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 20],
                                    },
                                    {
                                        text: [
                                            { text: 'Días Tomados: ', bold: true},
                                            { text: this.taken_days + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                    {
                                        text: [
                                            { text: 'Saldo Total: ', bold: true},
                                            { text:  this.balance + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                [
                                    {
                                    image: company_signature,
                                    width: 120,
                                    alignment: 'center',
                                    margin: [0, 20, 0, 0],
                                    },
                                    {
                                    image: signature,
                                    width: 100,
                                    alignment: 'center',
                                    margin: [0, -10, 0, 0],
                                    },
                                ],
                                [
                                    {
                                    text: 'RUT: 76063822-6',
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -30, 0, 0],
                                    },
                                    {
                                    text: 'RUT: ' + visual_rut,
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -30, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            } else {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                    [
                                        {
                                            text: [
                                                { text: 'Feriado Legal: ', bold: true},
                                                { text: this.legal_holiday + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 20],
                                        },
                                        {
                                            text: [
                                                { text: 'Días Tomados: ', bold: true},
                                                { text: this.taken_days + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                        {
                                            text: [
                                                { text: 'Saldo Total: ', bold: true},
                                                { text:  this.balance + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                    ]
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                [
                                    {
                                    image: company_signature,
                                    width: 120,
                                    alignment: 'center',
                                    margin: [0, 70, 0, 0],
                                    },
                                    {
                                    image: signature,
                                    width: 200,
                                    alignment: 'center',
                                    margin: [0, 70, 0, 0],
                                    },
                                ],
                                [
                                    {
                                    text: 'RUT: 76063822-6',
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -20, 0, 0],
                                    },
                                    {
                                    text: 'RUT: ' + visual_rut,
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -20, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            }
        },
        updateSignProgressiveVacation(id) {
            const accessToken = localStorage.getItem('accessToken');

            axios.get('https://apijis.com/progressive_vacations/sign/' + id, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    accept: 'application/json',
                },
            }).then(response => {
                console.log(response);

                this.getProgressiveVacations();
            }).catch(error => {
                console.error(error);
                this.loading = false;
            });
        },
        async generateFalseProgressiveVacation() {
            var logo = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/logo.png');

            var signature_type_id = localStorage.getItem('signature_type_id');

            var current_date = 'Santiago, ' + this.formatDateToCustomFormat(new Date());

            const vacationRows = this.pdf_progressive_vacations.map(vacation => [
                                        vacation.id,
                                        this.formatDate(vacation.since),
                                        this.formatDate(vacation.until),
                                        vacation.days
                                    ]);

            const watermarkText = "Documento de muestra"; // Texto de la marca de agua

            if (signature_type_id == 1) {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES PROGRESIVAS',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                [
                                    {
                                        text: [
                                            { text: 'Feriado Legal: ', bold: true},
                                            { text: this.progressive_legal_holiday + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 20],
                                    },
                                    {
                                        text: [
                                            { text: 'Días Tomados: ', bold: true},
                                            { text: this.progressive_taken_days + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                    {
                                        text: [
                                            { text: 'Saldo Total: ', bold: true},
                                            { text:  this.progressive_balance + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            text: '**Para tener validez debe estar firmado por ambas partes**',
                            bold: true,
                            alignment: 'center',
                            fontSize: 15,
                            margin: [0, 30, 0, 0],
                        },
                    ],
                    background: [
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 600 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 400 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 200 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            } else {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES PROGRESIVAS',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                    [
                                        {
                                            text: [
                                                { text: 'Feriado Legal: ', bold: true},
                                                { text: this.progressive_legal_holiday + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 20],
                                        },
                                        {
                                            text: [
                                                { text: 'Días Tomados: ', bold: true},
                                                { text: thisprogressive_taken_days + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                        {
                                            text: [
                                                { text: 'Saldo Total: ', bold: true},
                                                { text:  this.progressive_balance + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                    ]
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            text: '**Para tener validez debe estar firmado por ambas partes**',
                            bold: true,
                            alignment: 'center',
                            fontSize: 15,
                            margin: [0, 30, 0, 0],
                        },
                    ],
                    background: [
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 600 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 400 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                        {
                            text: watermarkText,
                            absolutePosition: { x: 5, y: 200 }, // Ajusta la posición de fondo
                            fontSize: 45, // Ajusta el tamaño de fuente de fondo
                            opacity: 0.2, // Ajusta la opacidad de fondo
                            bold: false, // Puedes ajustar la negrita de fondo
                            italics: false, // Puedes ajustar la cursiva de fondo
                            alignment: 'center',
                            angle: 90,
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            }
        },
        async confirmSignProgressiveVacation(id) {
            const shouldDelete = window.confirm('¿Estás seguro de que deseas firmar el documento?');

            if (shouldDelete) {
                await this.generateProgressiveVacation(id);
                this.updateSignProgressiveVacation(id);
            }
        },
        async generateProgressiveVacation() {
            var logo = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/logo.png');

            var company_signature = await this.getBase64ImageFromURL('https://erpjis.com/assets/assets/images/signature.png');

            var signature = await this.getBase64ImageFromURL(localStorage.getItem('signature'));

            var visual_rut = localStorage.getItem('visual_rut');

            var signature_type_id = localStorage.getItem('signature_type_id');

            var current_date = 'Santiago, ' + this.formatDateToCustomFormat(new Date());

            const vacationRows = this.pdf_progressive_vacations.map(vacation => [
                                        vacation.id,
                                        this.formatDate(vacation.since),
                                        this.formatDate(vacation.until),
                                        vacation.days
                                    ]);

            if (signature_type_id == 1) {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES PROGRESIVAS',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                [
                                    {
                                        text: [
                                            { text: 'Feriado Legal: ', bold: true},
                                            { text: this.progressive_legal_holiday + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 20],
                                    },
                                    {
                                        text: [
                                            { text: 'Días Tomados: ', bold: true},
                                            { text: this.progressive_taken_days + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                    {
                                        text: [
                                            { text: 'Saldo Total: ', bold: true},
                                            { text:  this.progressive_balance + ' Días'}
                                        ],
                                        alignment: 'center',
                                        fontSize: 9,
                                        margin: [0, 0, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                [
                                    {
                                    image: company_signature,
                                    width: 120,
                                    alignment: 'center',
                                    margin: [0, 20, 0, 0],
                                    },
                                    {
                                    image: signature,
                                    width: 100,
                                    alignment: 'center',
                                    margin: [0, -10, 0, 0],
                                    },
                                ],
                                [
                                    {
                                    text: 'RUT: 76063822-6',
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -30, 0, 0],
                                    },
                                    {
                                    text: 'RUT: ' + visual_rut,
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -30, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            } else {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 80,
                            alignment: 'left',
                            margin: [0, 0, 0, 20],
                        },
                        {
                            text: 'COMPROBANTE DE VACACIONES PROGRESIVAS',
                            bold: true,
                            alignment: 'center',
                            fontSize: 14,
                            margin: [0, 50, 0, 50],
                        },
                        {
                            text: current_date,
                            bold: true,
                            alignment: 'right',
                            fontSize: 9,
                            margin: [0, 10, 0, 50],
                        },
                        {
                            table: {
                                widths: ['*', '*', '*'],
                                body: [
                                    [
                                        {
                                            text: [
                                                { text: 'Feriado Legal: ', bold: true},
                                                { text: this.progressive_legal_holiday + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 20],
                                        },
                                        {
                                            text: [
                                                { text: 'Días Tomados: ', bold: true},
                                                { text: this.progressive_taken_days + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                        {
                                            text: [
                                                { text: 'Saldo Total: ', bold: true},
                                                { text:  this.progressive_balance + ' Días'}
                                            ],
                                            alignment: 'center',
                                            fontSize: 9,
                                            margin: [0, 0, 0, 0],
                                        },
                                    ]
                                ],
                            },
                            layout: 'noBorders',
                        },
                        {
                            table: {
                                headerRows: 1,
                                widths: ['auto', '*', '*', 'auto'],
                                body: [
                                [
                                    { text: 'Id', bold: true },
                                    { text: 'Desde', bold: true },
                                    { text: 'Hasta', bold: true },
                                    { text: 'Días', bold: true }
                                ],
                                ...vacationRows.map(row => [row[0], row[1], row[2], row[3]])
                                ]
                            },
                            fontSize: 10,
                            margin: [0, 0, 0, 10]
                        },
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                [
                                    {
                                    image: company_signature,
                                    width: 120,
                                    alignment: 'center',
                                    margin: [0, 70, 0, 0],
                                    },
                                    {
                                    image: signature,
                                    width: 200,
                                    alignment: 'center',
                                    margin: [0, 70, 0, 0],
                                    },
                                ],
                                [
                                    {
                                    text: 'RUT: 76063822-6',
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -20, 0, 0],
                                    },
                                    {
                                    text: 'RUT: ' + visual_rut,
                                    alignment: 'center',
                                    fontSize: 10,
                                    bold: true,
                                    margin: [0, -20, 0, 0],
                                    },
                                ],
                                ],
                            },
                            layout: 'noBorders',
                        },
                    ],
                    pageMargins: [80, 40, 80, 40],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                        tableNoBorder: { // Definir el estilo de la tabla sin borde
                            table: {
                                widths: ['*', '*'],
                                body: []
                            },
                            border: 'hidden' // Ocultar el borde de la tabla
                        }
                    },
                };

                pdfMake.createPdf(docDefinition).download('certificado.pdf');
            }
        },
        getBase64ImageFromURL(url) {
            return new Promise((resolve, reject) => {
                var img = new Image();
                img.setAttribute("crossOrigin", "anonymous");

                img.onload = () => {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                var dataURL = canvas.toDataURL("image/png");

                resolve(dataURL);
                };

                img.onerror = error => {
                reject(error);
                };

                img.src = url;
            });
        },
        async getExtraDataEmployee() {
            const accessToken = localStorage.getItem('accessToken');

            this.loading = true;

            try {
                const response = await axios.get('https://apijis.com/employee_extras/edit/' + this.$route.params.rut, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    },
                });

                this.progressive_vacation_input = response.data.message.progressive_vacation_status_id;

                this.loading_1 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener los datos del empleado:', error);
                }
            }
        },
        async downloadVacation(id) {
            const accessToken = localStorage.getItem('accessToken');

            this.loading = true;

            try {
                const response = await axios.get('https://apijis.com/vacations/download/' + id, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.vacation_document = response.data.message;

                if (this.vacation_document == 0) {
                    this.error_vacation = 1;
                } else {
                    window.location.href = this.vacation_document;
                }

                this.loading = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener el documento de vacaciones:', error);
                }
            }
        },
        async downloadProgressiveVacation(id) {
            const accessToken = localStorage.getItem('accessToken');

            this.loading = true;

            try {
                const response = await axios.get('https://apijis.com/progressive_vacations/download/' + id, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.progressive_vacation_document = response.data.message;

                if (this.progressive_vacation_document == 0) {
                    this.error_progressive_vacation = 1;
                } else {
                    window.location.href = this.progressive_vacation_document;
                }

                this.loading = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener el documento de vacaciones progresivas:', error);
                }
            }
        },
        onClickHandler () {
            console.log(this.currentPage);
            this.getVacations();
        },
        progressive_onClickHandler () {
            console.log(this.progressive_currentPage);
            this.getProgressiveVacations();
        },
        formatDate(date) {
            const [year, month, day] = date.split('-');
            return `${day}-${month}-${year}`;
        },
        async getVacations() {
            const accessToken = localStorage.getItem('accessToken');

            const page = this.currentPage;

            try {
                const response = await axios.get('https://apijis.com/vacations/all/' + this.$route.params.rut + '/' + page, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`
                    },
                });

                const decodedData = JSON.parse(response.data.message);

                this.vacations = decodedData.data;
                this.totalItems = decodedData.total_items;
                this.itemsPerPage = decodedData.items_per_page;

                this.loading_2 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de vacaciones:', error);
                }
            }
        },
        async getPdfVacations() {
            const accessToken = localStorage.getItem('accessToken');

            const page = this.currentPage;

            try {
                const response = await axios.get('https://apijis.com/vacations/pdf_all/' + this.$route.params.rut + '/' + page, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`
                    },
                });

                
                const decodedData = JSON.parse(response.data.message);

                this.pdf_vacations = decodedData.data;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de vacaciones progresivas:', error);
                }
            }
        },
        async getProgressiveVacations() {
            const accessToken = localStorage.getItem('accessToken');

            const page = this.progressive_currentPage;

            try {
                const response = await axios.get('https://apijis.com/progressive_vacations/all/' + this.$route.params.rut + '/' + page, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`
                    },
                });

                const decodedData = JSON.parse(response.data.message);

                this.progressive_vacations = decodedData.data;
                this.progressive_totalItems = decodedData.total_items;
                this.progressive_itemsPerPage = decodedData.items_per_page;

                this.loading_3 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de vacaciones progresivas:', error);
                }
            }
        },
        async getPdfProgressiveVacations() {
            const accessToken = localStorage.getItem('accessToken');

            const page = this.progressive_currentPage;

            try {
                const response = await axios.get('https://apijis.com/progressive_vacations/pdf_all/' + this.$route.params.rut + '/' + page, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`
                    },
                });

                const decodedData = JSON.parse(response.data.message);

                this.pdf_progressive_vacations = decodedData.data;

                this.loading = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de vacaciones progresivas:', error);
                }
            }
        },
        async getLegal() {
            const accessToken = localStorage.getItem('accessToken');

            try {
            const response = await axios.get('https://apijis.com/vacations/legal/' + this.$route.params.rut, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                },
            });

            this.legal_holiday = response.data.message;

            this.loading_4 = false;

            } catch (error) {
            if (error.message == "Request failed with status code 401") {
                localStorage.removeItem('accessToken');
                window.location.reload();
            } else {
                console.error('Error al obtener las vacaciones legales:', error);
            }
            }
        },
        async getProgressiveLegal() {
            const accessToken = localStorage.getItem('accessToken');

            try {
            const response = await axios.get('https://apijis.com/progressive_vacations/legal/' + this.$route.params.rut, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                },
            });

            this.progressive_legal_holiday = response.data.message;

            this.loading_5 = false;

            } catch (error) {
            if (error.message == "Request failed with status code 401") {
                localStorage.removeItem('accessToken');
                window.location.reload();
            } else {
                console.error('Error al obtener las vacaciones progresivas legales:', error);
            }
            }
        },
        async getTakenDays() {
            const accessToken = localStorage.getItem('accessToken');

            try {
            const response = await axios.get('https://apijis.com/vacations/taken/' + this.$route.params.rut, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                },
            });

            this.taken_days = response.data.message;

            this.balance = this.legal_holiday - this.taken_days;

            this.loading_6 = false;

            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener los datos:', error);
                }
            }
        },
        async getProgressiveTakenDays() {
            const accessToken = localStorage.getItem('accessToken');

            try {
            const response = await axios.get('https://apijis.com/progressive_vacations/taken/' + this.$route.params.rut, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                },
            });

            this.progressive_taken_days = response.data.message;

            this.progressive_balance = this.progressive_legal_holiday - this.progressive_taken_days;

            this.loading_7 = false;

            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener los datos:', error);
                }
            }
        },
        async confirmVacation(id) {
            const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar el registro?');

            if (shouldDelete) {
                await this.deleteVacation(id);
            }
        },
        async deleteVacation(id) {
            this.loading = true;

            try {
                const accessToken = localStorage.getItem('accessToken');
                await axios.delete(`https://apijis.com/vacation/delete/${id}`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    },
                });
                
                this.getVacations();
            } catch (error) {
                console.error('Error al borrar las vacaciones:', error);
            }
        },
        async confirmProgressiveVacation(id) {
            const shouldDelete = window.confirm('¿Estás seguro de que deseas borrar el registro?');

            if (shouldDelete) {
                await this.deleteProgressiveVacation(id);
            }
        },
        async deleteProgressiveVacation(id) {
            this.loading = true;

            try {
                const accessToken = localStorage.getItem('accessToken');
                await axios.delete(`https://apijis.com/progressive_vacations/delete/${id}`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    },
                });
                
                this.getProgressiveVacations();

                this.loading = false;
            } catch (error) {
                console.error('Error al borrar las vacaciones progressiva:', error);
            }
        },
    },
}
</script>
<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #7e5bef;
    border: 1px solid #7e5bef;
    color: white;
  }
  .active-page:hover {
    background-color: #7e5bef;
  }
</style>