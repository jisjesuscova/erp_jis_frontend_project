<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div
            v-if="validate_rut_status == 1"
            class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
            role="alert"
        >
            El RUT ya está <span class="font-bold">registrado</span>.
        </div>
        <div
            v-if="validate_cellphone_status == 1"
            class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
            role="alert"
        >
            El celular se encuentra
            <span class="font-bold">registrado</span> por
            <span class="font-bold">
                {{ fullNameRut }} </span
            >.
        </div>
        <div
            v-if="isValidRut == false"
            class="bg-red-500 text-sm text-white rounded-md p-4 mb-10"
            role="alert"
        >
            El RUT no es <span class="font-bold">correcto</span>.
        </div>
        <div
            class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
            <form @submit.prevent="createEmployee">
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Datos
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >RUT</label
                        >
                        <input
                            type="text"
                            id="rut_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="RUT"
                            v-model="rut_input"
                            v-mask="['########-X']"
                            required
                            @blur="onRutBlur"
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Nombres</label
                        >
                        <input
                            type="text"
                            id="names_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nombres"
                            v-model="names_input"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Apellido Paterno</label
                        >
                        <input
                            type="text"
                            id="father_lastname_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Apellido Paterno"
                            v-model="father_lastname_input"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Apellido Materno</label
                        >
                        <input
                            type="text"
                            id="mother_lastname_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Apellido Materno"
                            v-model="mother_lastname_input"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Genero</label
                        >
                        <select
                            v-model="gender_input"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Genero -</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>
                        </select>
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Nacionalidad</label
                        >
                        <select
                            v-model="nationality_input"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Nacionalidad -</option>
                            <option
                                v-for="nationality in nationalities"
                                :key="nationality.id"
                                :value="nationality.id"
                            >
                                {{ nationality.nationality }}
                            </option>
                        </select>
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Correo</label
                        >
                        <input
                            type="email"
                            id="email_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Correo"
                            v-model="email_input"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Celular</label
                        >
                        <input
                            type="text"
                            id="cellphone_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Celular. Ej: 93587242"
                            v-model="cellphone_input"
                            @input="onCellphoneInput"
                            maxlength="10"
                            required
                            @blur="validateCellphoneExist"
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Fecha de Nacimiento</label
                        >
                        <input
                            type="date"
                            id="born_date_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Fecha de Nacimiento"
                            v-model="born_date_input"
                            required
                        />
                    </div>
                </div>
                <div
                    class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Rol en el Reloj</label
                        >
                        <select
                            v-model="control_user_rol_input"
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">- Rol -</option>
                            <option value="1">Colaborardor</option>
                            <option value="14">Administrador</option>
                        </select>
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
                            :disabled="validationsPassed"
                            type="submit"
                            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                            Agregar
                            <i class="fa-solid fa-check"></i>
                        </button>
                    </div>

                    <router-link
                        href="javascript:;"
                        to="/employees"
                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                        Cancelar
                        <i class="fa-solid fa-remove"></i>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    props: {
        modelValue: Object,
    },
    data() {
        return {
            loading_1: false,
            loading_2: false,
            loading_3: false,
            loading_4: false,
            loading_5: false,
            loading: false,
            nationalities: [],
            rut_input: '',
            names_input: '',
            father_lastname_input: '',
            mother_lastname_input: '',
            gender_input: '',
            nationality_input: '',
            email_input: '',
            cellphone_input: '',
            born_date_input: '',
            control_user_rol_input: '',
            validate_cellphone_status: 0,
            validate_rut_status: 0,
            isValidRut: true,
            validationsPassed: false,
            employeeData: null,
            fullNameRut: null,
        }
    },
    methods: {
        onRutBlur() {
            const status_rut_exist = this.validateRutExist()
            const status_rut = this.onValidateRutBlur()

            if(status_rut_exist && status_rut) {
                alert(1)
            }

            if (status_rut) {
                alert(22)
            }
        },
        validateRut: function (rutCompleto) {
            rutCompleto = rutCompleto.replace('‐', '-')
            if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false
            var tmp = rutCompleto.split('-')
            var digv = tmp[1]
            var rut = tmp[0]
            if (digv == 'K') digv = 'k'

            return this.dv(rut) == digv
        },
        dv: function (T) {
            var M = 0,
                S = 1
            for (; T; T = Math.floor(T / 10))
                S = (S + (T % 10) * (9 - (M++ % 6))) % 11
            return S ? S - 1 : 'k'
        },
        onValidateRutBlur() {
            this.isValidRut = this.validateRut(this.rut_input)
        },
        onCellphoneInput() {
            this.cellphone_input = this.cellphone_input.replace(/\D/g, '')
        },
        async createEmployee() {
            this.loading_1 = true
            this.loading_2 = true
            this.loading_3 = true
            this.loading_4 = true
            this.loading = true
            var rut = this.rut_input.split('-')
            var numeric_rut = rut[0]

            try {
                const dataToSend = {
                    rut: this.rut_input,
                    names: this.names_input,
                    father_lastname: this.father_lastname_input,
                    mother_lastname: this.mother_lastname_input,
                    gender_id: this.gender_input,
                    nationality_id: this.nationality_input,
                    personal_email: this.email_input,
                    cellphone: this.cellphone_input,
                    born_date: this.born_date_input,
                    privilege: this.control_user_rol_input,
                    added_date: new Date().toISOString(),
                    updated_date: new Date().toISOString(),
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/employees/store',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading_1 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    rut: numeric_rut,
                    added_date: new Date().toISOString(),
                    updated_date: new Date().toISOString(),
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/employee_extras/store',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading_2 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    rut: this.rut_input,
                    added_date: new Date().toISOString(),
                    updated_date: new Date().toISOString(),
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/employee_labor_data/store',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading_3 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    rut: numeric_rut,
                    names: this.names_input,
                    father_lastname: this.father_lastname_input,
                    mother_lastname: this.mother_lastname_input,
                    privilege: this.control_user_rol_input,
                    added_date: new Date().toISOString(),
                    updated_date: new Date().toISOString(),
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/clock_users/store',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading_4 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    rol_id: 1,
                    clock_rol_id: this.control_user_rol_input,
                    status_id: 1,
                    rut: this.rut_input,
                    names: this.names_input,
                    father_lastname: this.father_lastname_input,
                    password: this.rut_input,
                    disabled: 0,
                    added_date: new Date().toISOString(),
                    updated_date: new Date().toISOString(),
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.post(
                    'https://apijis.com/users/store',
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.loading_5 = false
            } catch (error) {
                console.error(error)
            }

            if (
                this.loading_1 == false &&
                this.loading_2 == false &&
                this.loading_3 == false &&
                this.loading_4 == false &&
                this.loading_5 == false
            ) {
                this.loading = false

                var url = '/employee/' + numeric_rut

                window.location.href = url
            }
        },
        async validateCellphoneExist() {
            try {
                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.get(
                    'https://apijis.com/employees/validate_cellphone/' +
                        this.cellphone_input,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    },
                )

                this.validate_cellphone_status = response.data.message[0]

                if (response.data.message[0] == 1) {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                
                if (this.validate_cellphone_status == 1) {
                    this.validationsPassed = true
                    this.employeeData = response.data.message[1]
                    this.fullNameRut = `
                    Trabajador: 
                    ${this.employeeData.names} 
                    ${this.employeeData.father_lastname} 
                    ${this.employeeData.mother_lastname}. 
                    RUT:
                    ${this.employeeData.visual_rut}`

                    return this.fullNameRut
                } else {
                    this.validationsPassed = false
                }
            } catch (error) {
                console.error(
                    'Error al obtener la validación del celular:',
                    error,
                )
            }
        },
        async validateRutExist() {
            const accessToken = localStorage.getItem('accessToken')
            var rut = this.rut_input.split('-')

            try {
                const response = await axios.get('https://apijis.com/employees/validate_rut/' + rut[0], {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                if (response.data.message == 1) {
                    this.validate_rut_status = 1

                    window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                    this.validate_rut_status = 0
                }

                if (this.validate_rut_status == 1) {
                    this.validationsPassed = true

                    window.scrollTo({ top: 0, behavior: 'smooth' })
                } else {
                    this.validationsPassed = false
                }

            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al validar el rut:', error);
                }
            }
        },
    },
    async created() {
        const accessToken = localStorage.getItem('accessToken')

        try {
            const response = await axios.get(
                'https://apijis.com/nationalities/',
                {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                    },
                },
            )

            this.nationalities = response.data.message

            this.loading = false
        } catch (error) {
            if (error.message == 'Request failed with status code 401') {
                localStorage.removeItem('accessToken')
                window.location.reload()
            } else {
                console.error('Error al obtener la lista de sucursales:', error)
            }
        }
    },
}
</script>
