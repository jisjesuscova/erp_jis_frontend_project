<template>
    <main class="w-full max-w-md mx-auto p-6">
        <main
            class="w-full max-w-md mx-auto p-6 flex justify-center items-center"
        >
            <img
                class="h-40 max-w-sm rounded-sm"
                src="../assets/images/logo.png"
                alt="image description"
            />
        </main>

        <div
            class="bg-red-500 text-sm text-white rounded-md p-4 text-center"
            role="alert"
            v-if="incorrect_login_data"
        >
            Los datos ingresados son <span class="font-bold">incorrectos</span>.
        </div>
        <div
            class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="p-4 sm:p-7">
                <div class="text-center">
                    <h1
                        class="block text-2xl font-bold text-gray-800 dark:text-white"
                    >
                        Iniciar Sesión
                    </h1>
                </div>

                <div class="mt-5">
                    <!-- Form -->
                    <form @submit.prevent="login">
                        <div class="grid gap-y-4">
                            <!-- Form Group -->
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm mb-2 dark:text-white"
                                    >RUT</label
                                >
                                <div class="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="RUT"
                                        required
                                        v-model="username"
                                        v-mask="['########-X']"
                                    />
                                    <div
                                        class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                                    >
                                        <svg
                                            class="h-5 w-5 text-red-500"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    class="hidden text-xs text-red-600 mt-2"
                                    id="email-error"
                                >
                                    Please include a valid email address so we
                                    can get back to you
                                </p>
                            </div>
                            <!-- End Form Group -->

                            <!-- Form Group -->
                            <div>
                                <div class="flex justify-between items-center">
                                    <label
                                        for="password"
                                        class="block text-sm mb-2 dark:text-white"
                                        >Contraseña</label
                                    >
                                    <a
                                        class="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                        href="/forgot_new_password"
                                        >¿Olvidastes la contraseña?</a
                                    >
                                </div>
                                <div class="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Contraseña"
                                        required
                                        v-model="password"
                                    />
                                    <div
                                        class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                                    >
                                        <svg
                                            class="h-5 w-5 text-red-500"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    class="hidden text-xs text-red-600 mt-2"
                                    id="password-error"
                                >
                                    8+ characters required
                                </p>
                            </div>
                            <!-- End Form Group -->

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
                                    class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </form>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    data() {
        return {
            loading: false,
            username: '',
            password: '',
            accessToken: '',
            rol_id: '',
            status_id: '',
            rut: '',
            nickname: '',
            incorrect_login_data: false,
            visual_rut: '',
            names: '',
            father_lastname: '',
            mother_lastname: '',
            entrance_company: '',
            job_position: '',
        }
    },
    methods: {
        login() {
            const formData = new FormData()
            formData.append('username', this.username)
            formData.append('password', this.password)

            this.loading = true

            axios
                .post('https://apijis.com/login_users/token', formData)
                .then((response) => {
                    console.log(response)
                    this.accessToken = response.data.access_token
                    this.rol_id = response.data.rol_id
                    this.status_id = response.data.status_id
                    this.rut = response.data.rut
                    this.nickname = response.data.nickname
                    this.visual_rut = response.data.visual_rut
                    this.names = response.data.names
                    this.father_lastname = response.data.father_lastname
                    this.mother_lastname = response.data.mother_lastname
                    this.entrance_company = response.data.entrance_company
                    this.job_position = response.data.job_position
                    this.signature = response.data.signature
                    this.signature_type_id = response.data.signature_type_id

                    localStorage.setItem('accessToken', this.accessToken)
                    localStorage.setItem('rol_id', this.rol_id)
                    localStorage.setItem('status_id', this.status_id)
                    localStorage.setItem('rut', this.rut)
                    localStorage.setItem('nickname', this.nickname)
                    localStorage.setItem('visual_rut', this.visual_rut)
                    localStorage.setItem('names', this.names)
                    localStorage.setItem(
                        'father_lastname',
                        this.father_lastname,
                    )
                    localStorage.setItem(
                        'mother_lastname',
                        this.mother_lastname,
                    )
                    localStorage.setItem(
                        'entrance_company',
                        this.entrance_company,
                    )
                    localStorage.setItem('job_position', this.job_position)
                    localStorage.setItem('signature', this.signature)
                    localStorage.setItem(
                        'signature_type_id',
                        this.signature_type_id,
                    )
                    if(response.data.status_id == 1){
                     
                        window.location.reload()
                    }
                    else {
                       
                        window.location.href = `/confirm_email/${this.visual_rut}`
                    }

                })
                .catch((error) => {
                    if (
                        error ==
                        'AxiosError: Request failed with status code 401'
                    ) {
                        this.incorrect_login_data = true
                        this.loading = false
                    }
                })
        },
    },
}
</script>
