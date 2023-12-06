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
            <div class="-m-1.5 overflow-x-auto">
                <div
                    class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-10"
                    role="alert"
                >
                    <span class="font-bold">Visualiza</span> de forma detallda
                    cada una de las alertas descritas.
                </div>
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                        <div class="overflow-hidden" v-if="totalItems > 0">
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Id
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Alerta
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Fecha
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <tr v-for="alert in alerts" :key="alert.id">
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            {{ alert.id }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ alert.alert_type }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{ formatDate(alert.added_date) }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Id
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Alerta
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Fecha
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                >
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 text-center"
                                            colspan="3"
                                        >
                                            No hay alertas registradas
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10" v-if="totalItems > 0">
                <vue-awesome-paginate
                    :total-items="totalItems"
                    :items-per-page="itemsPerPage"
                    :max-pages-shown="maxPagesShown"
                    v-model="currentPage"
                    :on-click="onClickHandler"
                />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { format } from 'date-fns'

export default {
    data() {
        return {
            alerts: [],
            loading: true,
            itemsPerPage: 10,
            maxPagesShown: 5,
            currentPage: 1,
            totalItems: 0,
        }
    },
    methods: {
        formatDate(date) {
            return format(new Date(date), 'dd-MM-yyyy')
        },
        onClickHandler() {
            console.log(this.currentPage)
            this.getPosts()
        },
        async getPosts() {
            const accessToken = localStorage.getItem('accessToken')
            const rut = localStorage.getItem('rut')
            const page = this.currentPage

            this.loading = true

            const dataToSend = {
                rut: rut,
                page: page,
            }

            try {
                const response = await axios.post(
                    'https://apijis.com/alerts/',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.alerts = response.data.message.data
                this.totalItems = response.data.message.total_items
                this.itemsPerPage = response.data.message.items_per_page
                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de alertas:',
                        error,
                    )
                }
            }
        },
        updateAlert() {
            const rut = localStorage.getItem('rut')

            const dataToSend = {
                status_id: 1,
            }

            const accessToken = localStorage.getItem('accessToken')

            axios
                .patch(
                    'https://apijis.com/alerts/update/' + rut,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
        },
    },
    async created() {
        await this.getPosts()
        this.updateAlert()
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
