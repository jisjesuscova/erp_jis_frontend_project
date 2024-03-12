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
            <h2 class="text-4xl dark:text-white pb-10">Datos de Contrato</h2>

            <OldEmployeeMenu />

            <div class="mt-10">
                <div
                    v-if="validate_update_status == 1"
                    class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                    role="alert"
                >
                    Registro actualizado con
                    <span class="font-bold">éxito</span>
                </div>

                <div
                    v-if="created_employee_contract == 1"
                    class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                    role="alert"
                >
                    El contrato ha sido creado con
                    <span class="font-bold">éxito</span>
                </div>

                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="updateLaborData">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Datos Laborales
                                </p>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Contrato</label
                                    >
                                    <select
                                        v-model="contract_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Contrato -
                                        </option>
                                        <option
                                            v-for="contract_type in contract_types"
                                            :key="contract_type.id"
                                            :value="contract_type.id"
                                        >
                                            {{ contract_type.contract_type }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Sucursal</label
                                    >
                                    <select
                                        v-model="branch_office_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Sucursal -</option>
                                        <option
                                            v-for="branch_office in branch_offices"
                                            :key="branch_office.id"
                                            :value="branch_office.id"
                                        >
                                            {{ branch_office.branch_office }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Región</label
                                    >
                                    <select
                                        v-model="region_input"
                                        @change="getCommunes"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Región -</option>
                                        <option
                                            v-for="region in regions"
                                            :key="region.id"
                                            :value="region.id"
                                        >
                                            {{ region.region }}
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
                                        >Comuna</label
                                    >
                                    <select
                                        v-model="commune_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Comuna -</option>
                                        <option
                                            v-for="commune in communes"
                                            :key="commune.id"
                                            :value="commune.id"
                                        >
                                            {{ commune.commune }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Dirección</label
                                    >
                                    <input
                                        type="text"
                                        id="since_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Dirección"
                                        v-model="address_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Estado Civil</label
                                    >
                                    <select
                                        v-model="civil_state_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Estado Civil -
                                        </option>
                                        <option
                                            v-for="civil_state in civil_states"
                                            :key="civil_state.id"
                                            :value="civil_state.id"
                                        >
                                            {{ civil_state.civil_state }}
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
                                        >Tipo de Jornada</label
                                    >
                                    <select
                                        v-model="employee_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Jornada -
                                        </option>
                                        <option
                                            v-for="employee_type in employee_types"
                                            :key="employee_type.id"
                                            :value="employee_type.id"
                                        >
                                            {{ employee_type.employee_type }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Cargo</label
                                    >
                                    <select
                                        v-model="job_position_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Cargo -</option>
                                        <option
                                            v-for="job_position in job_positions"
                                            :key="job_position.id"
                                            :value="job_position.id"
                                        >
                                            {{ job_position.job_position }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Fecha de Contrato</label
                                    >
                                    <input
                                        type="date"
                                        id="entrance_company_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Fecha de Nacimiento"
                                        v-model="entrance_company_input"
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
                                        >Sueldo Base</label
                                    >
                                    <input
                                        type="text"
                                        id="salary_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Sueldo Base"
                                        v-model="salary_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Colación</label
                                    >
                                    <input
                                        type="text"
                                        id="collation_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Colación"
                                        v-model="collation_input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Movilización</label
                                    >
                                    <input
                                        type="text"
                                        id="locomotion_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Movilización"
                                        v-model="locomotion_input"
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
                                        >Regimen Previsional</label
                                    >
                                    <select
                                        v-model="regime_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Regimen Previsional -
                                        </option>
                                        <option
                                            v-for="regime in regimes"
                                            :key="regime.id"
                                            :value="regime.id"
                                        >
                                            {{ regime.regime }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Isapre o Fonasa</label
                                    >
                                    <select
                                        v-model="health_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Isapre o Fonasa -
                                        </option>
                                        <option
                                            v-for="health in healths"
                                            :key="health.id"
                                            :value="health.id"
                                        >
                                            {{ health.health }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Fecha de Entrada de Salud</label
                                    >
                                    <input
                                        type="date"
                                        id="entrance_health_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Fecha de Entrada a Salud"
                                        v-model="entrance_health_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="regime_input == 1"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >AFP</label
                                    >
                                    <select
                                        v-model="pention_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="0">- AFP -</option>
                                        <option
                                            v-for="pention in pentions"
                                            :key="pention.id"
                                            :value="pention.id"
                                        >
                                            {{ pention.pention }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Fecha de Entrada AFP</label
                                    >
                                    <input
                                        type="date"
                                        id="entrance_pention_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Fecha de Nacimiento"
                                        v-model="entrance_pention_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="regime_input == 1"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Pago APV</label
                                    >
                                    <select
                                        v-model="apv_payment_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="3">Ninguno</option>
                                        <option value="1">$</option>
                                        <option value="2">UF</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Monto de la APV</label
                                    >
                                    <input
                                        type="text"
                                        id="apv_amount_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monto de la APV"
                                        v-model="apv_amount_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="health_input != 2 && health_input != ''"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Pago de Salud</label
                                    >
                                    <select
                                        v-model="
                                            extra_health_payment_type_input
                                        "
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="3">Ninguno</option>
                                        <option value="1">$</option>
                                        <option value="2">UF</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Monto Extra de Pago de Salud</label
                                    >
                                    <input
                                        type="number"
                                        id="extra_health_amount_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monto Extra de Pago de Salud"
                                        v-model="extra_health_amount_input"
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
                            </div>
                        </form>
                    </div>
                </div>
                <hr
                    class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />

                <h2 class="text-4xl dark:text-white pb-10">Contratos</h2>

                <div
                    class="p-1.5 min-w-full inline-block align-middle"
                    v-if="1 == 2"
                >
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                        <div class="overflow-hidden">
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Fecha de Emisión
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Estatus
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                    v-if="employee_contracts != 'No data found'"
                                >
                                    <tr
                                        v-for="employee_contract in employee_contracts"
                                        :key="employee_contract.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{
                                                formatDate(
                                                    employee_contract.added_date,
                                                )
                                            }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <span
                                                v-if="
                                                    employee_contract.status_id ==
                                                    3
                                                "
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
                                                >Aceptada</span
                                            >
                                            <span
                                                v-if="
                                                    employee_contract.status_id ==
                                                    4
                                                "
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white"
                                                >Firmada</span
                                            >
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            <button
                                                v-if="
                                                    employee_contract.support !=
                                                        '' &&
                                                    employee_contract.support !=
                                                        null
                                                "
                                                type="button"
                                                @click="
                                                    downloadEmployeeContract(
                                                        employee_contract.id,
                                                    )
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i
                                                    class="fa-solid fa-arrow-down"
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr
                    class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                />

                <h2 class="text-4xl dark:text-white pb-10">Finiquitos</h2>

                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div
                        class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700"
                    >
                        <div class="overflow-hidden">
                            <table
                                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Fecha de Emisión
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            Estatus
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="divide-y divide-gray-200 dark:divide-gray-700"
                                    v-if="end_documents != 'No data found'"
                                >
                                    <tr
                                        v-for="end_document in end_documents"
                                        :key="end_document.id"
                                    >
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            {{
                                                formatDate(
                                                    end_document.added_date,
                                                )
                                            }}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                                        >
                                            <span
                                                v-if="
                                                    end_document.status_id == 3
                                                "
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
                                                >Aceptada</span
                                            >
                                            <span
                                                v-if="
                                                    end_document.status_id == 4
                                                "
                                                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white"
                                                >Firmada</span
                                            >
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                                        >
                                            <button
                                                type="button"
                                                @click="generateEndDocument()"
                                                v-if="
                                                    end_document.status_id == 3
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import OldEmployeeMenu from '../components/OldEmployeeMenu.vue'
import { format } from 'date-fns'

export default {
    components: {
        OldEmployeeMenu,
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
            loading_9: true,
            loading_10: true,
            loading_11: true,
            loading_12: true,
            loading_13: true,
            contract_types: [],
            branch_offices: [],
            regions: [],
            communes: [],
            civil_states: [],
            employee_types: [],
            job_positions: [],
            regimes: [],
            healths: [],
            pentions: [],
            employee_contracts: [],
            end_documents: [],
            contract_type_input: '',
            branch_office_input: '',
            branch_office_input: '',
            region_input: '',
            commune_input: '',
            civil_state_input: '',
            employee_type_input: '',
            job_position_input: '',
            entrance_company_input: '',
            address_input: '',
            salary_input: '',
            collation_input: '',
            locomotion_input: '',
            regime_input: '',
            health_input: '',
            entrance_health_input: '',
            pention_input: '',
            entrance_pention_input: '',
            apv_payment_type_input: 3,
            apv_amount_input: '0',
            extra_health_payment_type_input: 3,
            extra_health_amount_input: '0',
            validate_update_status: 0,
            created_employee_contract: 0,
            employee_persona_data: '',
            employee_labor_data: '',
            first_expiration: '',
            second_expiration: '',
            employee_contract_document: '',
            error_employee_contract_document: 0,
            pention_name: '',
            causals: '',
            indemnity_year_amount: 0,
            substitute_compensation_amount: 0,
        }
    },
    methods: {
        async downloadEmployeeContract(id) {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_contracts/download/' + id,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.employee_contract_document = response.data.message

                if (this.employee_contract_document == 0) {
                    this.error_employee_contract_document = 1
                } else {
                    window.location.href = this.employee_contract_document
                }

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener el documento del kardex:',
                        error,
                    )
                }
            }
        },
        formatDateToCustomFormat(date) {
            let localDate = new Date(date)
            let utcDate = new Date(
                localDate.getUTCFullYear(),
                localDate.getUTCMonth(),
                localDate.getUTCDate(),
            )

            const monthNames = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre',
            ]

            const day = utcDate.getDate()
            const month = utcDate.getMonth()
            const year = utcDate.getFullYear()

            const formattedDate = `${day} de ${monthNames[month]} del ${year}`
            return formattedDate
        },
        getBase64ImageFromURL(url) {
            return new Promise((resolve, reject) => {
                var img = new Image()
                img.setAttribute('crossOrigin', 'anonymous')

                img.onload = () => {
                    var canvas = document.createElement('canvas')
                    canvas.width = img.width
                    canvas.height = img.height

                    var ctx = canvas.getContext('2d')
                    ctx.drawImage(img, 0, 0)

                    var dataURL = canvas.toDataURL('image/png')

                    resolve(dataURL)
                }

                img.onerror = (error) => {
                    reject(error)
                }

                img.src = url
            })
        },
        async generateEndDocument() {
            const logo = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/logo.png',
            )

            const company_signature = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/signature.png',
            )

            const schedule = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/schedule.jpg',
            )

            const original_date = new Date(
                this.employee_labor_data.EmployeeLaborDatumModel.exit_company,
            )
            const entrance_date = new Date(
                this.employee_labor_data.EmployeeLaborDatumModel.entrance_company,
            )

            const current_date =
                'Santiago, ' +
                this.formatDateToCustomFormat(new Date(original_date))

            const short_entrance_company = this.formatDateToCustomFormat(
                new Date(entrance_date),
            )

            const short_exit_company = this.formatDateToCustomFormat(
                new Date(original_date),
            )

            if (this.end_documents[0].fertility_proportional_days < 10) {
                this.end_documents[0].fertility_proportional_days =
                    '0' + this.end_documents[0].fertility_proportional_days
            }

            const decimal = this.end_documents[0].fertility_proportional_days.split('.')

            if (decimal[0] < 10) {
                this.end_documents[0].fertility_proportional_days = this.end_documents[0].fertility_proportional_days + '0'
            }

            const docDefinition = {
                content: [
                    {
                        image: logo,
                        width: 50,
                        alignment: 'left',
                        margin: [0, 0, 0, 0],
                    },
                    {
                        text: 'FINIQUITO',
                        bold: true,
                        alignment: 'center',
                        fontSize: 12,
                        margin: [0, 5, 0, 10],
                    },
                    {
                        text: current_date,
                        bold: true,
                        alignment: 'right',
                        fontSize: 9,
                        margin: [0, 5, 0, 5],
                    },
                    '\n',
                    {
                        text: [
                            'En',
                            { text: ' ' + current_date + ' ', bold: true },
                            'entre',
                            {
                                text:
                                    ' ' +
                                    'JIS PARKING SPA RUT: 76063822-6' +
                                    ' ',
                                bold: true,
                            },
                            'con domicilio en MATUCANA 40 Estacion Central en adelante tambien "LA EMPRESA" por una parte, y la otra don (a)',
                            {
                                text:
                                    ' ' +
                                    this.employee_personal_data.names +
                                    ' ' +
                                    this.employee_personal_data
                                        .father_lastname +
                                    ' ' +
                                    this.employee_personal_data
                                        .mother_lastname +
                                    ' RUT:' +
                                    this.employee_personal_data.visual_rut +
                                    ' ',
                                bold: true,
                            },
                            'en adelante, también, "EL TRABAJADOR(a)" se deja testimonio y se ha acordado el finiquito que consta de las siguientes cláusulas:',
                            '\n',
                            { text: ' ' + 'PRIMERO:' + ' ', bold: true },
                            'Sr(a)',
                            {
                                text:
                                    ' ' +
                                    this.employee_personal_data.names +
                                    ' ' +
                                    this.employee_personal_data
                                        .father_lastname +
                                    ' ' +
                                    this.employee_personal_data
                                        .mother_lastname +
                                    ' ',
                                bold: true,
                            },
                            'Declara haberle prestado servicio en calidad de',
                            {
                                text:
                                    ' ' +
                                    this.employee_labor_data.JobPositionModel
                                        .job_position,
                            },
                            ',a',
                            {
                                text: ' ' + 'JIS PARKING SPA ' + ' ',
                                bold: true,
                            },
                            'desde el',
                            {
                                text: ' ' + short_entrance_company + ' ',
                                bold: true,
                            },
                            'hasta el ',
                            {
                                text: ' ' + short_exit_company + ' ',
                                bold: true,
                            },
                            ', Fecha de terminación de sus servicios por la siguiente causal,',
                            {
                                text: ' ' + this.causals[0].causal + ' ',
                                bold: true,
                            },
                            'del código del Trabajo.',
                            '\n',
                            { text: ' ' + 'SEGUNDO:' + ' ', bold: true },
                            'Sr(a)',
                            {
                                text:
                                    ' ' +
                                    this.employee_personal_data.names +
                                    ' ' +
                                    this.employee_personal_data
                                        .father_lastname +
                                    ' ' +
                                    this.employee_personal_data
                                        .mother_lastname +
                                    ' ',
                                bold: true,
                            },
                            ', Declara recibir en este acto, a su entera satisfacción, de parte de',
                            { text: ' ' + 'JIS PARKING SPA' + ' ', bold: true },
                            ', las sumas que a continuación se indica, por los siguientes conceptos:',
                            '\n\n',
                            {
                                text: 'Resumen Monto:',
                                bold: true,
                                fontSize: 12,
                            },
                            '\n',
                            {
                                text: 'Indemnización Años de Servicios',
                                bold: true,
                            },
                            {
                                text:
                                    this.alignNumbers('$ ', 24) +
                                    this.formatNumber(
                                        this.end_documents[0]
                                            .indemnity_years_service,
                                    ),
                                bold: true,
                            },
                            '\n',
                            {
                                text: 'Indemnización Sustitutivo Aviso Previo',
                                bold: true,
                            },
                            {
                                text:
                                    this.alignNumbers('$ ', 14) +
                                    this.formatNumber(
                                        this.end_documents[0]
                                            .substitute_compensation,
                                    ),
                                bold: true,
                            },
                            '\n',
                            { text: 'Indemnización Voluntaria', bold: true },
                            {
                                text:
                                    this.alignNumbers('$ ', 38) +
                                    this.formatNumber(
                                        this.end_documents[0]
                                            .voluntary_indemnity,
                                    ),
                                bold: true,
                            },
                            '\n',
                            {
                                text:
                                    'Feriado Proporcional (' +
                                    this.end_documents[0]
                                        .fertility_proportional_days +
                                    ' dias)',
                                bold: true,
                            },
                            {
                                text:
                                    this.alignNumbers('$ ', 24) +
                                    this.formatNumber(
                                        this.end_documents[0]
                                            .fertility_proportional,
                                    ),
                                bold: true,
                            },
                            '\n',
                            { text: 'Total', bold: true },
                            {
                                text:
                                    this.alignNumbers('$ ', 75) +
                                    this.formatNumber(
                                        this.end_documents[0].total,
                                    ),
                                bold: true,
                            },
                            '\n\n',
                            { text: ' ' + 'TERCERO:' + ' ', bold: true },
                            'Sr(a)',
                            {
                                text:
                                    ' ' +
                                    this.employee_personal_data.names +
                                    ' ' +
                                    this.employee_personal_data
                                        .father_lastname +
                                    ' ' +
                                    this.employee_personal_data
                                        .mother_lastname +
                                    ' ',
                                bold: true,
                            },
                            ', deja constancia que durante todo el tiempo que prestó servicios a la firma',
                            {
                                text: ' ' + 'JIS PARKING SPA ' + ' ',
                                bold: true,
                            },
                            ', recibió oportunamente el total de las remuneraciones, beneficios y demás prestaciones convenidas de acuerdo asu contrato de trabajo, clase de trabajo ejecutado y disposiciones legales pertinentes, y que en tal virtud el empleador nada le adeuda por tales conceptos, ni por horas extraordinarias, asignación familiar, feriado, indemnización por años de servicios,imposiciones previsionales, así como por ningún otro concepto, ya sea legal o contra ctual, derivado de la prestación de sus servicios, de su contrato de trabajo o de la terminación del mismo. En consecuencia "EL TRABAJADOR" declara que no tiene reclamo alguno que formular en contra de',
                            {
                                text: ' ' + 'JIS PARKING SPA, ' + ' ',
                                bold: true,
                            },
                            'renunciando a todas las acciones que pudieran emanar del contrato que los vinculó, y deja expresa constacia que',
                            {
                                text: ' ' + 'JIS PARKING SPA. ' + ' ',
                                bold: true,
                            },
                            'A nada le adeuda en relación con los servicios prestados, con el contrato de trabajo o con motivo de la terminación del mismo, por lo que libre y espontáneamente, y con el pleno y cabal conocimiento de sus derechos, otorga a su empleador, el mas amplio, completo, total y definitivo finiquito por los servicios prestados o la terminación de ellos, ya diga relación con remuneraciones, cotizaciones previsionales, de seguridad social o de salud, subsidios, beneficios contractuales adicionales a las remuneraciones, indemnizaciones, compensaciones, o con cualquiera causa o concepto.',
                            '\n',
                            { text: ' ' + 'CUARTO:' + ' ', bold: true },
                            'En conformidad a lo establecido en la Ley 21.389, sobre abandono de familia y pago de pensiones alimenticias, el empleador declara que a la fecha de este finiquito no ha sido notificado por los tribunales de familia, respecto a alguna resolución que establezca que el trabajador compareciente mantenga deuda por pensión de alimentos y en consecuencia se ordene a su empleador practicar retención por concepto de deuda por pensión alimenticia, decretadas en conformidad a lo prescrito en los artículos 8,11 de la Ley 14.908 ya referida, motivo por el cuál no se aplican descuentos y retenciones en el presente acto a los conceptos que se pagan por este finiquito al trabajador.',
                        ],
                        fontSize: 9,
                        alignment: 'justify',
                        margin: [0, 0, 0, 10],
                        lineHeight: 1.5,
                    },

                    {
                        table: {
                            widths: ['*', '*'],
                            body: [
                                [
                                    {
                                        image: company_signature,
                                        width: 80,
                                        alignment: 'center',
                                        margin: [0, 10, 0, 0],
                                    },
                                    {
                                        text: '',
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
                                        text:
                                            'RUT: ' +
                                            this.employee_personal_data
                                                .visual_rut,
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
                pageMargins: [40, 20, 40, 30],
                styles: {
                    defaultStyle: {
                        font: 'Helvetica',
                    },
                },
            }

            pdfMake.createPdf(docDefinition).download('finiquito.pdf')
        },
        alignNumbers(number, length) {
            return number.padStart(length)
        },
        formatNumber(number) {
            return number.toLocaleString('de-DE')
        },
        async confirmContract(id) {
            const shouldDelete = window.confirm(
                '¿Estás seguro de que deseas borrar el contrato?',
            )

            if (shouldDelete) {
                await this.deleteContract(id)
            }
        },
        async deleteContract(id) {
            this.loading = true

            try {
                const accessToken = localStorage.getItem('accessToken')
                await axios.delete(
                    `https://apijis.com/employee_contracts/delete/${id}`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.getEmployeeContracts()

                this.loading = false
            } catch (error) {
                console.error('Error al borrar el contrato:', error)
            }
        },
        formatDate(date) {
            if (date != '' && date != null && date != undefined) {
                let localDate = new Date(date)
                let utcDate = new Date(
                    localDate.getUTCFullYear(),
                    localDate.getUTCMonth(),
                    localDate.getUTCDate(),
                )
                return format(utcDate, 'dd-MM-yyyy')
            }
        },
        async updateLaborData() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            if (this.regime_input != 1) {
                this.pention_input = 0
            }

            if (this.apv_payment_type_input == '') {
                this.apv_payment_type_input = 3
            }

            const dataToSend = {
                rut: this.$route.params.rut,
                contract_type_id: this.contract_type_input,
                branch_office_id: this.branch_office_input,
                address: this.address_input,
                region_id: this.region_input,
                commune_id: this.commune_input,
                civil_state_id: this.civil_state_input,
                health_id: this.health_input,
                pention_id: this.pention_input,
                job_position_id: this.job_position_input,
                employee_type_id: this.employee_type_input,
                regime_id: this.regime_input,
                entrance_pention: this.entrance_pention_input,
                entrance_company: this.entrance_company_input,
                entrance_health: this.entrance_health_input,
                salary: this.salary_input,
                collation: this.collation_input,
                locomotion: this.locomotion_input,
                extra_health_amount: this.extra_health_amount_input,
                extra_health_payment_type_id:
                    this.extra_health_payment_type_input,
                apv_payment_type_id: this.apv_payment_type_input,
                apv_amount: this.apv_amount_input,
            }

            console.log(dataToSend)
            try {
                const response = await axios.patch(
                    'https://apijis.com/employee_labor_data/update/' +
                        this.$route.params.rut,
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.validate_update_status = response.data.message

                if (response.data.message == 1) {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }

                this.loading = false
            } catch (error) {
                console.log(error)
            }
        },
        async getEmployeeLaborData() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/old_employee_labor_data/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                console.log(response.data.message)

                const decodedData = JSON.parse(response.data.message)
                console.log(response.data.message)
                this.employee_labor_data = decodedData

                this.contract_type_input =
                    decodedData.EmployeeLaborDatumModel.contract_type_id
                this.branch_office_input =
                    decodedData.EmployeeLaborDatumModel.branch_office_id
                this.address_input = decodedData.EmployeeLaborDatumModel.address
                this.region_input =
                    decodedData.EmployeeLaborDatumModel.region_id
                this.civil_state_input =
                    decodedData.EmployeeLaborDatumModel.civil_state_id
                this.health_input =
                    decodedData.EmployeeLaborDatumModel.health_id
                this.pention_input =
                    decodedData.EmployeeLaborDatumModel.pention_id
                this.job_position_input =
                    decodedData.EmployeeLaborDatumModel.job_position_id
                this.employee_type_input =
                    decodedData.EmployeeLaborDatumModel.employee_type_id
                this.regime_input =
                    decodedData.EmployeeLaborDatumModel.regime_id
                this.entrance_company_input =
                    decodedData.EmployeeLaborDatumModel.entrance_company
                this.entrance_pention_input =
                    decodedData.EmployeeLaborDatumModel.entrance_pention
                this.entrance_health_input =
                    decodedData.EmployeeLaborDatumModel.entrance_health
                this.salary_input = this.formatNumber(
                    decodedData.EmployeeLaborDatumModel.salary,
                )
                this.collation_input = this.formatNumber(
                    decodedData.EmployeeLaborDatumModel.collation,
                )
                this.locomotion_input = this.formatNumber(
                    decodedData.EmployeeLaborDatumModel.locomotion,
                )
                this.extra_health_amount_input =
                    decodedData.EmployeeLaborDatumModel.extra_health_amount
                this.extra_health_payment_type_input =
                    decodedData.EmployeeLaborDatumModel.extra_health_payment_type_id
                this.apv_payment_type_input =
                    decodedData.EmployeeLaborDatumModel.apv_payment_type_id
                this.apv_amount_input = this.formatNumber(
                    decodedData.EmployeeLaborDatumModel.apv_amount,
                )
                this.getCommunes()
                this.commune_input =
                    decodedData.EmployeeLaborDatumModel.commune_id
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los datos laborales:',
                        error,
                    )
                }
            }
        },
        async getPentions() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/pentions/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.pentions = response.data.message

                this.loading_1 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de pensiones:',
                        error,
                    )
                }
            }
        },
        async getExpirations() {
            const accessToken = localStorage.getItem('accessToken')

            const dataToSend = {
                rut: this.$route.params.rut,
            }

            try {
                const response = await axios.post(
                    'https://apijis.com/contract_data/expiration',
                    dataToSend,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.first_expiration = response.data.first_expiration
                this.second_expiration = response.data.second_expiration

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de vencimientos:',
                        error,
                    )
                }
            }
        },
        async getHealths() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/healths/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.healths = response.data.message

                this.loading_3 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de isapres:',
                        error,
                    )
                }
            }
        },
        async getRegimes() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/regimes/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.regimes = response.data.message

                this.loading_4 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de regimenes:',
                        error,
                    )
                }
            }
        },
        async getJobPositions() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/job_positions/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.job_positions = response.data.message

                this.loading_5 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de tipos de cargos:',
                        error,
                    )
                }
            }
        },
        async getEmployeeTypes() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_types/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.employee_types = response.data.message

                this.loading_6 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de tipos de empleados:',
                        error,
                    )
                }
            }
        },
        async getContractTypes() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/contract_types/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.contract_types = response.data.message

                this.loading_7 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de tipos de contratos:',
                        error,
                    )
                }
            }
        },
        async getBranchOffices() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/branch_offices/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.branch_offices = response.data.message

                this.loading_8 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error,
                    )
                }
            }
        },
        async getCommunes() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/communes/' + this.region_input,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )
                console.log(response)
                this.communes = response.data.message
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de comunas:',
                        error,
                    )
                }
            }
        },
        async getRegions() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/regions/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.regions = response.data.message

                this.loading_9 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de regiones:',
                        error,
                    )
                }
            }
        },
        async getCivilStates() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/civil_states/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                this.civil_states = response.data.message

                this.loading_10 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de estados civiles:',
                        error,
                    )
                }
            }
        },
        async getEmployeeContracts() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_contracts/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    },
                )

                const decodedData = JSON.parse(response.data.message)
                console.log(response.data.message)
                this.employee_contracts = decodedData

                this.loading_11 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de isapres:',
                        error,
                    )
                }
            }
        },
        async getPersonalDataEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/old_employees/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )

                this.employee_personal_data = JSON.parse(response.data.message)
                this.employee_personal_data =
                    this.employee_personal_data.employee_data

                this.loading_12 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de datos personales:',
                        error,
                    )
                }
            }
        },
        async getEndDocuments() {
            const accessToken = localStorage.getItem('accessToken')
            try {
                const response = await axios.get(
                    'https://apijis.com/end_documents/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                console.log(response)
                if (response.data.message != 0) {
                    const decodedData = JSON.parse(response.data.message)
                    console.log('end_documents', decodedData)
                    this.end_documents = decodedData
                    this.loading = false
                } else {
                    this.end_documents = ''
                    this.loading = false
                }

                const responseCausals = await axios.get(
                    'https://apijis.com/causals/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    },
                )
                this.causals = responseCausals.data.message.filter(
                    (causal) => causal.id == this.end_documents[0].causal_id,
                )
                console.log(this.causal)

                this.loading_13 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los contratos del empleado:',
                        error,
                    )
                    this.loading = false
                }
            }
        },
    },
    async mounted() {
        this.created_employee_contract = localStorage.getItem(
            'created_contract_employee',
        )

        if (this.created_employee_contract == 1) {
            localStorage.removeItem('created_employee_contract')

            this.created_employee_contract = ''
        }

        await this.getEmployeeLaborData()
        await this.getContractTypes()
        await this.getBranchOffices()
        await this.getRegions()
        await this.getCivilStates()
        await this.getEmployeeTypes()
        await this.getJobPositions()
        await this.getRegimes()
        await this.getHealths()
        await this.getPentions()
        await this.getEmployeeContracts()
        await this.getPersonalDataEmployee()
        await this.getExpirations()
        await this.getEndDocuments()

        if (
            this.loading_1 == false &&
            this.loading_2 == false &&
            this.loading_3 == false &&
            this.loading_4 == false &&
            this.loading_5 == false &&
            this.loading_6 == false &&
            this.loading_7 == false &&
            this.loading_8 == false &&
            this.loading_9 == false &&
            this.loading_10 == false &&
            this.loading_11 == false &&
            this.loading_12 == false &&
            this.loading_13 == false
        ) {
            this.loading = false
        }
    },
}
</script>

<style scoped>
.active {
    background-color: #2563eb;
    color: #fff;
}
</style>
