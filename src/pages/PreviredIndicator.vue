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
            <h2 class="text-4xl dark:text-white pb-10">Indicadores</h2>
            <hr
                class="mb-7 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
            />
            <div
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Datos
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-1 gap-4 p-4 md:p-5"
                >
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Periodo</label
                        >
                        <input
                            type="month"
                            id="period_input"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mes del periodo"
                            v-model="period_input"
                            :max="maxDate"
                            required
                        />
                    </div>
                </div>
                <div class="grid grid-cols-8 gap-4 p-4 md:p-5">
                    <button
                        type="button"
                        @click="searchIndicators"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Buscar
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button
                        type="button"
                        @click="submit"
                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                        Guardar
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
            <div
                v-if="searched_indicators == 1"
                class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-2 mt-10"
                role="alert"
            >
                {{ previred_title }}
            </div>

            <div class="grid grid-cols-2 pt-10" v-if="searched_indicators == 1">
                <div class="bg-gray-50 p-4">
                    <table
                        class="mx-auto border-collapse w-full border-gray-400"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="2"
                                >
                                    VALOR UF
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    {{ last_day_of_month }}
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uf_value_current_month_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    {{ last_day_of_past_month }}
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uf_value_last_month_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                >
                                    VALOR
                                </th>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                >
                                    UTM
                                </th>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                >
                                    UTA
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center border py-2 px-4">
                                    {{ current_month }}
                                </td>
                                <td class="text-center border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="utm_value_current_month_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uta_value_current_month_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    RENTAS TOPES IMPONIBLES
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Para afiliados a una AFP (81,6 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="cap_income_tax_afp_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Para afiliados al IPS (ex INP) (60 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="cap_income_tax_ips_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Para Seguro de Cesantía (122,6 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            cap_income_tax_unemployment_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    RENTAS MÍNIMAS IMPONIBLES
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Trab. Dependientes e Independientes:
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            minimun_income_tax_dependent_independet_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Menores de 18 y Mayores de 65:
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            minimun_income_tax_under_18_over_65_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Trabajadores de Casa Particular:
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            minimun_income_tax_domestic_worker_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Para fines no remuneracionales:
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            minimun_income_tax_non_remunerational_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    AHORRO PREVISIONAL VOLUNTARIO (APV)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Tope Mensual (50 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            voluntary_pension_savings_monthly_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Tope Anual (600 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            voluntary_pension_savings_annual_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    DEPÓSITO CONVENIDO
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Tope Anual (900 UF):
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="agreed_deposit_annual_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    SEGURO DE CESANTÍA (AFC)
                                </th>
                            </tr>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    rowspan="2"
                                >
                                    CONTRATO
                                </th>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="2"
                                >
                                    FINANCIAMIENTO
                                </th>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    TRABAJADOR
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    EMPLEADOR
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Plazo Indefinido
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="indefinite_term_worker_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            indefinite_term_employeer_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Plazo Fijo
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="fixed_term_worker_input"
                                        required
                                    />
                                </td>
                                <td
                                    class="text-center font-bold border py-2 px-4"
                                >
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="fixed_term_employeer_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Plazo Indefinido 11 años o más (*)
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            indefinite_term_worker_11_years_input
                                        "
                                        required
                                    />
                                </td>
                                <td
                                    class="text-center font-bold border py-2 px-4"
                                >
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            indefinite_term_employeer_11_years_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Trabajador de Casa Particular (**)
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="domestic_worker_input"
                                        required
                                    />
                                </td>
                                <td
                                    class="text-center font-bold border py-2 px-4"
                                >
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="domestic_employeer_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    OTROS VALORES
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Mutual
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="mutual_value_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Honorarios
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="honorary_value_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Gratificación
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="gratification_value_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bg-gray-100 p-4">
                    <table
                        class="mx-auto border-collapse w-full border-gray-400"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    rowspan="4"
                                >
                                    AFP
                                </th>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    TASA COTIZACIÓN OBLIGATORIO AFP
                                </th>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="3"
                                >
                                    TASA AFP TRABAJADORES
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="2"
                                >
                                    DEPENDIENTES
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    INDEPENDIENTES
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    TASA AFP
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    SIS (1) (2)
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    TASA AFP (3)
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Capital
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            capital_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="capital_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            capital_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Cuprum
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            cuprum_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="cuprum_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            cuprum_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Habitat
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            habitat_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="habitat_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            habitat_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    PlanVital
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            planvital_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="planvital_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            planvital_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    ProVida
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            provida_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="provida_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            provida_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Modelo
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            modelo_dependent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="modelo_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            modelo_independent_rate_afp_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">Uno</td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uno_dependent_rate_afp_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uno_dependent_sis_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="uno_independent_rate_afp_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border w-1 border-gray-400 py-2 px-4"
                                    rowspan="2"
                                >
                                    TRAMO
                                </th>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="3"
                                >
                                    ASIGNACIÓN FAMILIAR
                                </th>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py- px-4 font-bold"
                                >
                                    MONTO
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py- px-4 font-bold"
                                >
                                    RENTA INFERIOR
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="2"
                                >
                                    RENTA SUPERIOR
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    1 (A)
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            a_family_assignment_amount_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            a_family_assignment_rent_requirement_input_minimum_value
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            a_family_assignment_rent_requirement_input_top_value
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    2 (B)
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            b_family_assignment_amount_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            b_family_assignment_rent_requirement_input_minimum_value
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            b_family_assignment_rent_requirement_input_top_value
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    3 (C)
                                </td>

                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            c_family_assignment_amount_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            c_family_assignment_rent_requirement_input_minimum_value
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            c_family_assignment_rent_requirement_input_top_value
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    4 (D)
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            d_family_assignment_amount_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            d_family_assignment_rent_requirement_input_minimum_value
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border ps-16 border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            d_family_assignment_rent_requirement_input_top_value
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="4"
                                >
                                    COTIZACIÓN PARA TRABAJOS PESADOS
                                </th>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="2"
                                >
                                    CALIFICACIÓN
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="2"
                                >
                                    FINANCIAMIENTO
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                    colspan="2"
                                >
                                    PUESTO DE TRABAJO
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    EMPLEADOR
                                </td>
                                <td
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4 font-bold"
                                >
                                    TRABAJADOR
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Trabajo pesado
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="hard_work_porcentage_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="hard_work_employeer_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="hard_work_worker_input"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    Trabajo menos pesado
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            less_hard_work_porcentage_input
                                        "
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="less_hard_work_employeer_input"
                                        required
                                    />
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="less_hard_work_worker_input"
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        class="mx-auto border-collapse w-full border-gray-400 my-3"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="bg-blue-600 text-white text-center border border-gray-400 py-2 px-4"
                                    colspan="4"
                                >
                                    DISTRIBUCIÓN DEL 7% SALUD, PARA EMPLEADORES
                                    AFILIADO A CCAF (*)
                                </th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr>
                                <td class="text-left border py-2 px-4">CCAF</td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            distribution_7_percent_health_employeer_ccaf_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left border py-2 px-4">
                                    FONASA
                                </td>
                                <td class="text-right border py-2 px-4">
                                    <input
                                        type="text"
                                        class="bg-white-50 border border-gray-300 text-right text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        v-model="
                                            distribution_7_percent_health_employeer_fonasa_input
                                        "
                                        required
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Tabla
                    </p>
                </div>
                <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5">
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="text"
                            id="since_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_1"
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
                            type="text"
                            id="until_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_1"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="text"
                            id="factor_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_1"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Descuento</label
                        >
                        <input
                            type="text"
                            id="amount_input_1"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Descuento"
                            v-model="discount_input_1"
                            required
                        />
                    </div>
                </div>
                <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5">
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="text"
                            id="since_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_2"
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
                            type="text"
                            id="until_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="text"
                            id="factor_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Descuento</label
                        >
                        <input
                            type="text"
                            id="amount_input_2"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Descuento"
                            v-model="discount_input_2"
                            required
                        />
                    </div>
                </div>
                <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5">
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="text"
                            id="since_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_3"
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
                            type="text"
                            id="until_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_3"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="text"
                            id="factor_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_3"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Descuento</label
                        >
                        <input
                            type="text"
                            id="amount_input_3"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Descuento"
                            v-model="discount_input_3"
                            required
                        />
                    </div>
                </div>
                <div class="grid md:grid-cols-4 sm:grid-cols-1 gap-4 p-4 md:p-5">
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Desde</label
                        >
                        <input
                            type="text"
                            id="since_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Desde"
                            v-model="since_input_4"
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
                            type="text"
                            id="until_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Hasta"
                            v-model="until_input_4"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Factor</label
                        >
                        <input
                            type="text"
                            id="factor_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Factor"
                            v-model="factor_input_4"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="hs-validation-name-error"
                            class="block text-sm font-medium mb-2 dark:text-white"
                            >Descuento</label
                        >
                        <input
                            type="text"
                            id="amount_input_4"
                            class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Descuento"
                            v-model="discount_input_4"
                            required
                        />
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
            maxDate: '',
            data: {},
            searched_indicators: 0,
            last_day_of_month: '',
            last_day_of_past_month: '',
            current_month: '',
            uf_value_current_month_input: '',
            uf_value_last_month_input: '',
            utm_value_current_month_input: '',
            uta_value_current_month_input: '',
            cap_income_tax_afp_input: '',
            cap_income_tax_ips_input: '',
            cap_income_tax_unemployment_input: '',
            minimun_income_tax_dependent_independet_input: '',
            minimun_income_tax_under_18_over_65_input: '',
            minimun_income_tax_domestic_worker_input: '',
            minimun_income_tax_non_remunerational_input: '',
            voluntary_pension_savings_monthly_input: '',
            voluntary_pension_savings_annual_input: '',
            agreed_deposit_annual_input: '',
            indefinite_term_worker_input: '',
            fixed_term_worker_input: '',
            indefinite_term_worker_11_years_input: '',
            domestic_worker_input: '',
            indefinite_term_employeer_input: '',
            fixed_term_employeer_input: '',
            indefinite_term_employeer_11_years_input: '',
            domestic_employeer_input: '',
            capital_dependent_rate_afp_input: '',
            capital_dependent_sis_input: '',
            capital_independent_rate_afp_input: '',
            cuprum_dependent_rate_afp_input: '',
            cuprum_dependent_sis_input: '',
            cuprum_independent_rate_afp_input: '',
            habitat_dependent_rate_afp_input: '',
            habitat_dependent_sis_input: '',
            habitat_independent_rate_afp_input: '',
            planvital_dependent_rate_afp_input: '',
            planvital_dependent_sis_input: '',
            planvital_independent_rate_afp_input: '',
            provida_dependent_rate_afp_input: '',
            provida_dependent_sis_input: '',
            provida_independent_rate_afp_input: '',
            modelo_dependent_rate_afp_input: '',
            modelo_dependent_sis_input: '',
            modelo_independent_rate_afp_input: '',
            uno_dependent_rate_afp_input: '',
            uno_dependent_sis_input: '',
            uno_independent_rate_afp_input: '',
            a_family_assignment_amount_input: '',
            a_family_assignment_rent_requirement_input: '',
            b_family_assignment_amount_input: '',
            b_family_assignment_rent_requirement_input: '',
            c_family_assignment_amount_input: '',
            c_family_assignment_rent_requirement_input: '',
            d_family_assignment_amount_input: '',
            d_family_assignment_rent_requirement_input: '',
            hard_work_porcentage_input: '',
            hard_work_employeer_input: '',
            hard_work_worker_input: '',
            less_hard_work_porcentage_input: '',
            less_hard_work_employeer_input: '',
            less_hard_work_worker_input: '',
            distribution_7_percent_health_employeer_ccaf_input: '',
            distribution_7_percent_health_employeer_fonasa_input: '',
            previred_title: '',
            fix_a_family_assignment_rent_requirement_input: '',
            a_family_assignment_rent_requirement_input_minimum_value: 0,
            a_family_assignment_rent_requirement_input_top_value: '',
            fix_b_family_assignment_rent_requirement_input: '',
            b_family_assignment_rent_requirement_input_minimum_value: 0,
            b_family_assignment_rent_requirement_input_top_value: '',
            fix_c_family_assignment_rent_requirement_input: '',
            c_family_assignment_rent_requirement_input_minimum_value: 0,
            c_family_assignment_rent_requirement_input_top_value: '',
            fix_d_family_assignment_rent_requirement_input: '',
            d_family_assignment_rent_requirement_input_minimum_value: 0,
            d_family_assignment_rent_requirement_input_top_value: '',
            mutual_value_input: 0,
            honorary_value_input: 0,
            gratification_value_input: 0,
            since_input_1: 0,
            until_input_1: 0,
            factor_input_1: 0,
            discount_input_1: 0,
            since_input_2: 0,
            until_input_2: 0,
            factor_input_2: 0,
            discount_input_2: 0,
            since_input_3: 0,
            until_input_3: 0,
            factor_input_3: 0,
            discount_input_3: 0,
            since_input_4: 0,
            until_input_4: 0,
            factor_input_4: 0,
            discount_input_4: 0,
        }
    },
    methods: {
        async searchIndicators() {
            this.getProvisionalIndicator()
            this.lastDayOfActualMonth()
            this.lastDayOfPastMonth()
            this.currentMonth()
        },
        async submit() {
            const dataToSend = {
                period: this.period_input.toString(),
                uf_value_current_month:
                    this.uf_value_current_month_input.toString(),
                uf_value_last_month: this.uf_value_last_month_input.toString(),
                utm_value_current_month:
                    this.utm_value_current_month_input.toString(),
                uta_value_current_month:
                    this.uta_value_current_month_input.toString(),
                cap_income_tax_afp: this.cap_income_tax_afp_input.toString(),
                cap_income_tax_ips: this.cap_income_tax_ips_input.toString(),
                cap_income_tax_unemployment:
                    this.cap_income_tax_unemployment_input.toString(),
                minimun_income_tax_dependent_independet:
                    this.minimun_income_tax_dependent_independet_input.toString(),
                minimun_income_tax_under_18_over_65:
                    this.minimun_income_tax_under_18_over_65_input.toString(),
                minimun_income_tax_domestic_worker:
                    this.minimun_income_tax_domestic_worker_input.toString(),
                minimun_income_tax_non_remunerational:
                    this.minimun_income_tax_non_remunerational_input.toString(),
                voluntary_pension_savings_monthly:
                    this.voluntary_pension_savings_monthly_input.toString(),
                voluntary_pension_savings_annual:
                    this.voluntary_pension_savings_annual_input.toString(),
                agreed_deposit_annual:
                    this.agreed_deposit_annual_input.toString(),
                indefinite_term_worker:
                    this.indefinite_term_worker_input.toString(),
                fixed_term_worker: this.fixed_term_worker_input.toString(),
                indefinite_term_worker_11_years:
                    this.indefinite_term_worker_11_years_input.toString(),
                domestic_worker: this.domestic_worker_input.toString(),
                indefinite_term_employeer:
                    this.indefinite_term_employeer_input.toString(),
                fixed_term_employeer:
                    this.fixed_term_employeer_input.toString(),
                indefinite_term_employeer_11_years:
                    this.indefinite_term_employeer_11_years_input.toString(),
                domestic_employeer: this.domestic_employeer_input.toString(),
                capital_dependent_rate_afp:
                    this.capital_dependent_rate_afp_input.toString(),
                capital_dependent_sis:
                    this.capital_dependent_sis_input.toString(),
                capital_independent_rate_afp:
                    this.capital_independent_rate_afp_input.toString(),
                cuprum_dependent_rate_afp:
                    this.cuprum_dependent_rate_afp_input.toString(),
                cuprum_dependent_sis:
                    this.cuprum_dependent_sis_input.toString(),
                cuprum_independent_rate_afp:
                    this.cuprum_independent_rate_afp_input.toString(),
                habitat_dependent_rate_afp:
                    this.habitat_dependent_rate_afp_input.toString(),
                habitat_dependent_sis:
                    this.habitat_dependent_sis_input.toString(),
                habitat_independent_rate_afp:
                    this.habitat_independent_rate_afp_input.toString(),
                planvital_dependent_rate_afp:
                    this.planvital_dependent_rate_afp_input.toString(),
                planvital_dependent_sis:
                    this.planvital_dependent_sis_input.toString(),
                planvital_independent_rate_afp:
                    this.planvital_independent_rate_afp_input.toString(),
                provida_dependent_rate_afp:
                    this.provida_dependent_rate_afp_input.toString(),
                provida_dependent_sis:
                    this.provida_dependent_sis_input.toString(),
                provida_independent_rate_afp:
                    this.provida_independent_rate_afp_input.toString(),
                modelo_dependent_rate_afp:
                    this.modelo_dependent_rate_afp_input.toString(),
                modelo_dependent_sis:
                    this.modelo_dependent_sis_input.toString(),
                modelo_independent_rate_afp:
                    this.modelo_independent_rate_afp_input.toString(),
                uno_dependent_rate_afp:
                    this.uno_dependent_rate_afp_input.toString(),
                uno_dependent_sis_input:
                    this.uno_dependent_sis_input.toString(),
                uno_independent_rate_afp:
                    this.uno_independent_rate_afp_input.toString(),
                a_family_assignment_amount:
                    this.a_family_assignment_amount_input.toString(),
                a_family_assignment_rent_requirement_input_minimum_value:
                    this.a_family_assignment_rent_requirement_input_minimum_value.toString(),
                a_family_assignment_rent_requirement_input_top_value:
                    this.a_family_assignment_rent_requirement_input_top_value.toString(),
                b_family_assignment_amount:
                    this.b_family_assignment_amount_input.toString(),
                b_family_assignment_rent_requirement_input_minimum_value:
                    this.b_family_assignment_rent_requirement_input_minimum_value.toString(),
                b_family_assignment_rent_requirement_input_top_value:
                    this.b_family_assignment_rent_requirement_input_top_value.toString(),
                c_family_assignment_amount:
                    this.c_family_assignment_amount_input.toString(),
                c_family_assignment_rent_requirement_input_minimum_value:
                    this.c_family_assignment_rent_requirement_input_minimum_value.toString(),
                c_family_assignment_rent_requirement_input_top_value:
                    this.c_family_assignment_rent_requirement_input_top_value.toString(),
                d_family_assignment_amount:
                    this.d_family_assignment_amount_input.toString(),
                d_family_assignment_rent_requirement:
                    this.d_family_assignment_rent_requirement_input.toString(),
                d_family_assignment_rent_requirement_input_minimum_value:
                    this.d_family_assignment_rent_requirement_input_minimum_value.toString(),
                d_family_assignment_rent_requirement_input_top_value:
                    this.d_family_assignment_rent_requirement_input_top_value.toString(),
                hard_work_porcentage:
                    this.hard_work_porcentage_input.toString(),
                hard_work_employeer: this.hard_work_employeer_input.toString(),
                hard_work_worker: this.hard_work_worker_input.toString(),
                less_hard_work_porcentage:
                    this.less_hard_work_porcentage_input.toString(),
                less_hard_work_employeer:
                    this.less_hard_work_employeer_input.toString(),
                less_hard_work_worker:
                    this.less_hard_work_worker_input.toString(),
                distribution_7_percent_health_employeer_ccaf:
                    this.distribution_7_percent_health_employeer_ccaf_input.toString(),
                distribution_7_percent_health_employeer_fonasa:
                    this.distribution_7_percent_health_employeer_fonasa_input.toString(),
                mutual_value: this.mutual_value_input.toString(),
                honorary_value: this.honorary_value_input.toString(),
                gratification_value: this.gratification_value_input.toString()
            }

            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            axios
                .post(
                    'https://apijis.com/provisional_indicators/store',
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

                    this.$router.push('/previred_indicators')
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })

            
            const formData = new FormData()
            formData.append('period', this.period_input);
            formData.append('since_1', this.since_input_1);
            formData.append('until_1', this.until_input_1);
            formData.append('factor_1', this.factor_input_1);
            formData.append('discount_1', String(this.discount_input_1));
            formData.append('since_2', this.since_input_2);
            formData.append('until_2', this.until_input_2);
            formData.append('factor_2', this.factor_input_2);
            formData.append('discount_2', String(this.discount_input_2));
            formData.append('since_3', this.since_input_3);
            formData.append('until_3', this.until_input_3);
            formData.append('factor_3', this.factor_input_3);
            formData.append('discount_3', String(this.discount_input_3));
            formData.append('since_4', this.since_input_4);
            formData.append('until_4', this.until_input_4);
            formData.append('factor_4', this.factor_input_4);
            formData.append('discount_4', String(this.discount_input_4));

            axios
                .post('https://apijis.com/payroll_second_category_taxes/store', formData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    console.log(response)
                    this.loading = false

                    localStorage.setItem('second_category_tax', 1)
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
        },
        async getSecondaryCategoryTax() {
            const accessToken = localStorage.getItem('accessToken')

            const response = await axios.get(
                'https://apijis.com/secondary_category_taxes/scrape/' +
                    this.period_input,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: 'application/json',
                    },
                },
            )

            this.data = response.data

            this.since_input_1 = 0
            this.until_input_1 = this.data[2]
            this.factor_input_1 = 0
            this.discount_input_1 = 0

            this.since_input_2 = this.data[7]
            this.until_input_2 = this.data[8]
            this.factor_input_2 = this.data[9]
            this.discount_input_2 = this.data[10]

            this.since_input_3 = this.data[13]
            this.until_input_3 = this.data[14]
            this.factor_input_3 = this.data[15]
            this.discount_input_3 = this.data[16]

            this.since_input_4 = this.data[19]
            this.until_input_4 = this.data[20]
            this.factor_input_4 = this.data[21]
            this.discount_input_4 = this.data[22]

            console.log(this.data);
        },
        async getProvisionalIndicator() {
            const accessToken = localStorage.getItem('accessToken')

            const response = await axios.get(
                'https://apijis.com/provisional_indicators/scrape/' +
                    this.period_input,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: 'application/json',
                    },
                },
            )

            this.data = response.data

            if (this.data[1] == 0) {
                this.previred_title = this.data[0]
                this.uf_value_current_month_input = this.data[4]
                this.uf_value_last_month_input = this.data[6]
                this.utm_value_current_month_input = this.data[11]
                this.uta_value_current_month_input = this.data[12]
                this.cap_income_tax_afp_input = this.data[15]
                this.cap_income_tax_ips_input = this.data[17]
                this.cap_income_tax_unemployment_input = this.data[19]
                this.minimun_income_tax_dependent_independet_input =
                    this.data[22]
                this.minimun_income_tax_under_18_over_65_input = this.data[24]
                this.minimun_income_tax_domestic_worker_input = this.data[26]
                this.minimun_income_tax_non_remunerational_input = this.data[28]
                this.voluntary_pension_savings_monthly_input = this.data[31]
                this.voluntary_pension_savings_annual_input = this.data[33]
                this.agreed_deposit_annual_input = this.data[36]
                this.indefinite_term_worker_input = this.data[43]
                this.indefinite_term_employeer_input = this.data[44]
                this.fixed_term_worker_input = this.data[46]
                this.fixed_term_employeer_input = this.data[47]
                this.indefinite_term_worker_11_years_input = this.data[49]
                this.indefinite_term_employeer_11_years_input = this.data[50]
                this.domestic_worker_input = this.data[52]
                this.domestic_employeer_input = this.data[53]
                this.capital_dependent_rate_afp_input = this.data[63]
                this.capital_dependent_sis_input = this.data[64]
                this.capital_independent_rate_afp_input = this.data[65]
                this.cuprum_dependent_rate_afp_input = this.data[67]
                this.cuprum_dependent_sis_input = this.data[68]
                this.cuprum_independent_rate_afp_input = this.data[69]
                this.habitat_dependent_rate_afp_input = this.data[71]
                this.habitat_dependent_sis_input = this.data[72]
                this.habitat_independent_rate_afp_input = this.data[73]
                this.planvital_dependent_rate_afp_input = this.data[75]
                this.planvital_dependent_sis_input = this.data[76]
                this.planvital_independent_rate_afp_input = this.data[77]
                this.provida_dependent_rate_afp_input = this.data[79]
                this.provida_dependent_sis_input = this.data[80]
                this.provida_independent_rate_afp_input = this.data[81]
                this.modelo_dependent_rate_afp_input = this.data[83]
                this.modelo_dependent_sis_input = this.data[84]
                this.modelo_independent_rate_afp_input = this.data[85]
                this.uno_dependent_rate_afp_input = this.data[87]
                this.uno_dependent_sis_input = this.data[88]
                this.uno_independent_rate_afp_input = this.data[89]
                this.a_family_assignment_amount_input = this.data[95]
                this.fix_a_family_assignment_rent_requirement_input =
                    this.data[96].split(' ')
                this.a_family_assignment_rent_requirement_input_minimum_value = 0
                this.a_family_assignment_rent_requirement_input_top_value =
                    this.fix_a_family_assignment_rent_requirement_input[5]
                this.a_family_assignment_rent_requirement_input = this.data[96]
                this.b_family_assignment_amount_input = this.data[98]
                this.fix_b_family_assignment_rent_requirement_input =
                    this.data[99].split(' ')
                this.b_family_assignment_rent_requirement_input_minimum_value =
                    this.fix_b_family_assignment_rent_requirement_input[3]
                this.b_family_assignment_rent_requirement_input_top_value =
                    this.fix_b_family_assignment_rent_requirement_input[7]
                this.b_family_assignment_rent_requirement_input = this.data[99]
                this.c_family_assignment_amount_input = this.data[101]
                this.fix_c_family_assignment_rent_requirement_input =
                    this.data[102].split(' ')
                this.c_family_assignment_rent_requirement_input_minimum_value =
                    this.fix_c_family_assignment_rent_requirement_input[3]
                this.c_family_assignment_rent_requirement_input_top_value =
                    this.fix_c_family_assignment_rent_requirement_input[7]
                this.c_family_assignment_rent_requirement_input = this.data[102]
                this.d_family_assignment_amount_input = this.data[104]
                this.fix_d_family_assignment_rent_requirement_input =
                    this.data[105].split(' ')
                this.d_family_assignment_rent_requirement_input_minimum_value =
                    this.fix_d_family_assignment_rent_requirement_input[3]
                this.d_family_assignment_rent_requirement_input_top_value =
                    '9.999.999'
                this.d_family_assignment_rent_requirement_input = this.data[105]
                this.hard_work_porcentage_input = this.data[113]
                this.hard_work_employeer_input = this.data[114]
                this.hard_work_worker_input = this.data[115]
                this.less_hard_work_porcentage_input = this.data[117]
                this.less_hard_work_employeer_input = this.data[118]
                this.less_hard_work_worker_input = this.data[119]
                this.distribution_7_percent_health_employeer_ccaf_input =
                    this.data[122]
                this.distribution_7_percent_health_employeer_fonasa_input =
                    this.data[124]
            } else {
                console.log(this.data)
                this.previred_title = this.data[0]
                this.uf_value_current_month_input = this.data[4]
                this.uf_value_last_month_input = this.data[6]
            }

            this.loading = false

            this.searched_indicators = 1

            this.getSecondaryCategoryTax()
        },
        currentMonth() {
            const date = new Date()
            const year = date.getFullYear()

            const monthNames = [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre',
            ]
            const month = monthNames[date.getMonth()]

            this.current_month = `${month} ${year}`
            console.log(this.current_month)
        },
        setMaxDate() {
            const currentDate = new Date()
            const currentYear = currentDate.getFullYear()
            const currentMonth = String(currentDate.getMonth() + 1).padStart(
                2,
                '0',
            )

            this.maxDate = `${currentYear}-${currentMonth}`
        },
        lastDayOfActualMonth() {
            const date = new Date()
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
            const day = lastDay.getDate()
            const year = lastDay.getFullYear()

            const monthNames = [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre',
            ]
            const month = monthNames[lastDay.getMonth()]

            this.last_day_of_month = `al ${day} de ${month} del ${year}`
        },
        lastDayOfPastMonth() {
            const date = new Date()
            const lastDay = new Date(date.getFullYear(), date.getMonth(), 0)
            const day = lastDay.getDate()
            const year = lastDay.getFullYear()

            const monthNames = [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre',
            ]
            const month = monthNames[lastDay.getMonth()]

            this.last_day_of_past_month = `al ${day} de ${month} del ${year}`
        },
    },
    created() {
        this.setMaxDate()
    },
}
</script>
