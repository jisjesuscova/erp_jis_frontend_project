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

        <div v-else class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">Contacto</h2>

            <div class="mt-3">
                <div v-if="validate_update_contact == 1" class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10" role="alert">
                    Contactos actualizados con <span class="font-bold">éxito</span> 
                </div>
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="updateContact">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            ></div>

                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Dirección principal</label
                                    >
                                    <input
                                        type="text"
                                        id="bank_name"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="address_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Telefono de contacto</label
                                    >
                                    <input
                                        type="text"
                                        id="bank_name"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        
                                        v-model="cellphone_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Email de contacto</label
                                    >
                                    <input
                                        type="text"
                                        id="bank_name"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="email_input"
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
                                <div v-else class="w-full">
                                    <button
                                        type="submit"
                                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                    >
                                        Actualizar
                                        <i class="fa-solid fa-check"></i>
                                    </button>
                                </div>

                            </div>
                        </form>
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
            loading: false,
            loading_1: false,
            validate_update_contact: 0,
            address_input: '',
            cellphone_input: '',
            email_input: ''

            
        }
    },
    methods: {
        async getContact() {
            try{
                this.loading = true
                const accessToken = localStorage.getItem('accessToken')
                const response = await axios.get('https://apijis.com/contact/get_contact/', 
                {
                    headers: {
                                accept: 'application/json',
                                Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                            },    
                }
            )
            console.log(response)
            this.loading = false
            this.address_input = response.data.message.address
            this.cellphone_input = response.data.message.cellphone
            this.email_input = response.data.message.email

            }
            catch(error){
                console.log(error)
                this.loading = false
            }
        },
        async updateContact() {
            try{
                this.loading = true
                this.loading_1 = true
                const dataToSend = {
                    address: this.address_input,
                    cellphone : this.cellphone_input,
                    email : this.email_input

                }
                console.log(dataToSend)
                const accessToken = localStorage.getItem('accessToken')
                await axios.patch('https://apijis.com/contact/update_contact/', dataToSend, 
                {
                    headers: {
                                accept: 'application/json',
                                Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                            },    
                }
            )
            this.loading_1 = false
            this.loading = false
            
            this.validate_update_contact = 1

            this.address_input = ''
            this.cellphone_input = ''
            this.email_input = ''


            if (this.loading_1 == false ) {
                this.loading = false
            }
            this.getContact()
        }
            catch(error){
                console.log(error)
                this.loading = false
            }
        }
    },
    created() {
        this.getContact()
    }
}
</script>
