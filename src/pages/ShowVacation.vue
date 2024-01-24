<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
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
        </div>

        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">Validar Vacaciones</h2>

            <div class="mt-10">
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <div
                            class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p
                                class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                            >
                                Datos
                            </p>
                        </div>
                        <div
                            v-if="rol_id == 4"
                            class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Desde</label
                                >
                                <input
                                    type="date"
                                    id="since_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Fecha Desde"
                                    v-model="since_input"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Hasta</label
                                >
                                <input
                                    type="date"
                                    id="until_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Fecha Hasta"
                                    v-model="until_input"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Días No Válidos</label
                                >
                                <input
                                    type="number"
                                    id="no_valid_days_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Días No Válidos"
                                    v-model="no_valid_days_input"
                                    required
                                />
                            </div>
                        </div>
                        <div
                            class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Estatus</label
                                >
                                <select
                                    v-model="status_input"
                                    required
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="">- Estatus -</option>
                                    <option value="3">Aceptada</option>
                                    <option value="1">Rechazada</option>
                                </select>
                            </div>
                        </div>

                        <div
                            v-if="rol_id != 4"
                            class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Desde</label
                                >
                                <input
                                    type="date"
                                    id="since_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Fecha Desde"
                                    v-model="since_input"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="hs-validation-name-error"
                                    class="block text-sm font-medium mb-2 dark:text-white"
                                    >Hasta</label
                                >
                                <input
                                    type="date"
                                    id="until_input"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Fecha Hasta"
                                    v-model="until_input"
                                    required
                                />
                            </div>
                        </div>

                        <div
                            class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                        >
                            <div
                                v-if="loading"
                                class="flex items-center justify-center h-full"
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
                            </div>
                            <button
                                @click="updateDocumentManagement"
                                type="submit"
                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Actualizar
                                <i class="fa-solid fa-check"></i>
                            </button>

                            <router-link v-if="rol_id == 4"
                                :to="`/document_managements`"
                                class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                                Cancelar
                                <i class="fa-solid fa-remove"></i>
                            </router-link>

                            <router-link v-if="rol_id != 4"
                                :to="`/document_managements/${$route.params.rut}`"
                                class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            >
                                Cancelar
                                <i class="fa-solid fa-remove"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            since_input: '',
            until_input: '',
            no_valid_days_input: '',
            rol_id: '',
            status_id: '',
            status_input: '',
        }
    },
    methods: {
        getDate() {
            const originalDate = new Date()

            const year = originalDate.getFullYear()
            const month = (originalDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')
            const day = originalDate.getDate().toString().padStart(2, '0')
            const hour = originalDate.getHours().toString().padStart(2, '0')
            const minutes = originalDate
                .getMinutes()
                .toString()
                .padStart(2, '0')
            const seconds = originalDate
                .getSeconds()
                .toString()
                .padStart(2, '0')

            return (created_date =
                year +
                '-' +
                month +
                '-' +
                day +
                ' ' +
                hour +
                ':' +
                minutes +
                ':' +
                seconds)
        },
        async updateDocumentManagement() {
            const accessToken = localStorage.getItem('accessToken')
            const rut = localStorage.getItem('rut')
            const rol_id = localStorage.getItem('rol_id')

            this.loading = true

            if (
                this.no_valid_days_input == '' ||
                this.no_valid_days_input == null ||
                this.no_valid_days_input == undefined
            ) {
                this.no_valid_days_input = 0
            }

            try {
                const response = await axios.patch(
                    `https://apijis.com/documents_employees/update/${this.$route.params.id}`,
                    {
                        document_type_id: 6,
                        since: this.since_input,
                        until: this.until_input,
                        no_valid_days: this.no_valid_days_input,
                        status_id: this.status_input,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.loading = false

                if (this.status_input == 3) {
                    localStorage.setItem('accepted_document_employee', 1)
                } else {
                    localStorage.setItem('denied_document_employee', 1)
                }

                if (rol_id == 4) {
                    this.$router.push('/document_managements')
                } else {
                    this.$router.push('/document_management_employee/' + rut)
                }
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al actualizar los datos de la vacación:',
                        error,
                    )
                }
            }
        },
        async getVacation() {
            this.loading = true

            const accessToken = localStorage.getItem('accessToken')

            const response = await axios
                .get(
                    'https://apijis.com/vacations/edit/' +
                        this.$route.params.id,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )
                .then((response) => {
                    console.log(response.data.message)
                    
                    this.status_id = response.data.message.status_id
                    this.since_input = response.data.message.since
                    this.until_input = response.data.message.until
                    this.no_valid_days_input =
                        response.data.message.no_valid_days

                    this.loading = false
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
        },
    },
    mounted() {
        this.rol_id = localStorage.getItem('rol_id')
        this.getVacation()
    },
}
</script>
