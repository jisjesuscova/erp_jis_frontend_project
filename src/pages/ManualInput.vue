<template>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div class="flex flex-col pt-10">
            <h2 class="text-4xl dark:text-white pb-10">Gestión Nomina</h2>
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                    ></p>
                </div>
                <div
                    class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Item</label
                        >
                        <select
                            required
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value=" ">- Seleccionar -</option>
                            <option
                                v-for="payroll_item in payroll_managements_inputs"
                                :key="payroll_item.id"
                                :value="payroll_item.id"
                                >
                                {{ payroll_item.item }}
                            </option>
                        </select>
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
                  
                </div>
                <div
                        class="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 md:p-5"
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
                                placeholder="Ingresa el apellido paterno"
                                required
                            />
                        </div>
                    </div>
                    <div
                        class="grid md:grid-cols-6 sm:grid-cols-12 gap-4 p-4 md:p-5"
                    >
                        <div class="w-full">
                            <button
                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                <i class="fa-solid fa-search p-1"></i>
                                Buscar
                            </button>
                        </div>
                        <div class="w-full">
                            <button
                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                <i class="fa-solid fa-check p-1"></i>
                                Carga Masiva
                            </button>
                        </div>
                    </div>
            </div>
            <div
                id="bar-with-underline-1"
                role="tabpanel"
                aria-labelledby="bar-with-underline-item-1"
            >
                <hr
                    class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />
              
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                        >
                            Agregar
                        </p>
                    </div>
                    <div
                        class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                    >
                        <div>
                            <label
                                for="hs-validation-name-error"
                                class="block text-sm font-medium mb-2 dark:text-white"
                                >Monto</label
                            >
                            <input
                                type="number"
                                id="amount_input"
                                class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                v-model="amount_input"
                            />
                            <div class="w-full mt-5">
                                <button
                                    class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    <i class="fa-solid fa-check p-1"></i>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr
                    class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                    >
                        <div>
                            <label
                                for="hs-validation-name-error"
                                class="block font-bold text-xl my-2 dark:text-white py-2"
                                >Monto Total: $ {{ amount_input }}
                            </label>
                        </div>
                    </div>
                </div>
                <hr
                    class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                >
                    <div
                        class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <p
                            class="mt-1 text-sm text-blue-500 dark:text-gray-500"
                        >
                            Listado
                        </p>
                    </div>
                    <div
                        class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                    >
                        <div v-if="data.length > 0">
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th class="px-4 py-2 text-left">RUT</th>
                                        <th class="px-4 py-2 text-left">
                                            Trabajador
                                        </th>
                                        <th class="px-4 py-2 text-left">
                                            Monto
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item, index) in data"
                                        :key="index"
                                    >
                                        <td class="border px-4 py-2">
                                            {{ item.rut }}
                                        </td>
                                        <td class="border px-4 py-2">
                                            {{ item.trabajador }}
                                        </td>
                                        <td class="border px-4 py-2">
                                            {{ item.monto }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            <label
                                for="hs-validation-name-error"
                                class="block text-sm font-medium mb-2 dark:text-white"
                                >Resultado</label
                            >
                        </div>
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
            data: [
                {
                    rut: '12345678-9',
                    trabajador: 'Juan Perez',
                    monto: 100000,
                },
                {
                    rut: '98765432-1',
                    trabajador: 'Pedro Perez',
                    monto: 200000,
                },
            ],
            payroll_managements_inputs: [],
        }
    },
    methods: {
        async getPayrollManagement() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/payroll_items',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )
                console.log(response)
                this.payroll_managements_inputs = response.data.message

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    // localStorage.removeItem('accessToken')
                    // window.location.reload()
                } else {
                    console.error(
                        'Error al obtener el documento del kardex:',
                        error
                    )
                }
            }
        },
    },
    async mounted() {
        await this.getPayrollManagement()
        this.loading = false
    },
}
</script>
