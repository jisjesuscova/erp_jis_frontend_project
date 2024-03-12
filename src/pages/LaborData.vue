<template>

    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        <div v-if="loading" class="flex justify-center items-center h-screen">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div v-else class="flex flex-col pt-10">
            <EmployeeName  v-if="rol_id==4" :names="full_name" />
            <hr class="pb-10">
            <h2 class="text-4xl dark:text-white pb-10">
                Datos de Contrato
            </h2>

            <EmployeeMenu />

            <div class="mt-10">

                <div v-if="validate_update_status == 1" class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10" role="alert">
                    Registro actualizado con <span class="font-bold">éxito</span> 
                </div>

                <div v-if="created_employee_contract == 1" class="bg-green-500 text-sm text-white rounded-md p-4 mb-10 mt-10" role="alert">
                    El contrato ha sido creado con <span class="font-bold">éxito</span> 
                </div>

                <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <form @submit.prevent="updateLaborData">
                            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                                    Datos Laborales
                                </p>
                            </div>
                            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Tipo de Contrato</label>
                                    <select v-model="contract_type_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Tipo de Contrato -</option>
                                        <option v-for="contract_type in contract_types" :key="contract_type.id" :value="contract_type.id">{{ contract_type.contract_type }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Sucursal</label>
                                    <select v-model="branch_office_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Sucursal -</option>
                                        <option v-for="branch_office in branch_offices" :key="branch_office.id" :value="branch_office.id">{{ branch_office.branch_office }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Región</label>
                                    <select v-model="region_input" @change="getCommunes" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Región -</option>
                                        <option v-for="region in regions" :key="region.id" :value="region.id" >{{ region.region }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Comuna</label>
                                    <select v-model="commune_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Comuna -</option>
                                        <option v-for="commune in communes" :key="commune.id" :value="commune.id">{{ commune.commune }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Dirección</label>
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
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Estado Civil</label>
                                    <select v-model="civil_state_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Estado Civil -</option>
                                        <option v-for="civil_state in civil_states" :key="civil_state.id" :value="civil_state.id">{{ civil_state.civil_state }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Tipo de Jornada</label>
                                    <select v-model="employee_type_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Tipo de Jornada -</option>
                                        <option v-for="employee_type in employee_types" :key="employee_type.id" :value="employee_type.id">{{ employee_type.employee_type }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Cargo</label>
                                    <select v-model="job_position_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Cargo -</option>
                                        <option v-for="job_position in job_positions" :key="job_position.id" :value="job_position.id">{{ job_position.job_position }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Fecha de Contrato</label>
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
                            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Sueldo Base</label>
                                    <input
                                        type="text"
                                        id="salary_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Sueldo Base"
                                        v-model="salary_input"
                                        required
                                        @input="formatSalaryInput"
                                        />
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Colación</label>
                                    <input
                                        type="text"
                                        id="collation_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Colación"
                                        v-model="collation_input"
                                        required
                                        @input="formatCollationInput"
                                        />
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Movilización</label>
                                    <input
                                        type="text"
                                        id="locomotion_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Movilización"
                                        v-model="locomotion_input"
                                        required
                                        @input="formatLocomotionInput"
                                        />
                                </div>
                            </div>
                            <div class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Regimen Previsional</label>
                                    <select v-model="regime_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Regimen Previsional -</option>
                                        <option v-for="regime in regimes" :key="regime.id" :value="regime.id">{{ regime.regime }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Isapre o Fonasa</label>
                                    <select v-model="health_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="">- Isapre o Fonasa -</option>
                                        <option v-for="health in healths" :key="health.id" :value="health.id">{{ health.health }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Fecha de Entrada de Salud</label>
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
                            <div class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5" v-if="regime_input == 1">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">AFP</label>
                                    <select v-model="pention_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="0">- AFP -</option>
                                        <option v-for="pention in pentions" :key="pention.id" :value="pention.id">{{ pention.pention }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Fecha de Entrada AFP</label>
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
                            <div class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5" v-if="regime_input == 1">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Tipo de Pago APV</label>
                                    <select v-model="apv_payment_type_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="3">Ninguno</option>
                                        <option value="1">$</option>
                                        <option value="2">UF</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Monto de la APV</label>
                                    <input
                                        type="text"
                                        id="apv_amount_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monto de la APV"
                                        v-model="apv_amount_input"
                                        required
                                        @input="formatApvAmountInput"
                                        />
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 sm:grid-cols-12 gap-4 p-4 md:p-5" v-if="health_input != 2 && health_input != ''">
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Tipo de Pago de Salud</label>
                                    <select v-model="extra_health_payment_type_input" required class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="3">Ninguno</option>
                                        <option value="1">$</option>
                                        <option value="2">UF</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="hs-validation-name-error" class="block text-sm font-medium mb-2 dark:text-white">Monto Salud (Solo si es Isapre, indicar la cotización Pactada)</label>
                                    <input
                                        type="text"
                                        id="extra_health_amount_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Monto Salud (Solo si es Isapre, indicar la cotización Pactada)"
                                        v-model="extra_health_amount_input"
                                        required
                                        step="0.01"
                                        />
                                </div>
                            </div>
                            <div class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5">
                                <div v-if="loading" class="flex items-center justify-center h-full">
                                    <div role="status">
                                        <!-- SVG spinner -->
                                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                                <div v-else class="w-full">
                                    <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                        Actualizar
                                        <i class="fa-solid fa-check"></i>
                                    </button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                
                <h2 class="text-4xl dark:text-white pb-10">
                    Contratos
                    <router-link href="javascript:;" :to="`/create_contract/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Agregar
                    </router-link>
                </h2>

                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estatus</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
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
                                                <span
                                                    v-if="
                                                        employee_contract.status_id ==
                                                        3
                                                    "
                                                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-500 text-white"
                                                    >Aceptada</span
                                                >
                                                <span
                                                    v-if="
                                                        employee_contract.status_id ==
                                                        4
                                                    "
                                                    class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary-500 text-white"
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
                                            <router-link
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                                href="javascript:;"
                                                v-if="employee_contract.status_id == 3"
                                                :to="`/upload_employee_contract/${employee_contract.rut}/${employee_contract.id}`"
                                            >
                                                <i
                                                    class="fa-solid fa-arrow-up"
                                                ></i>
                                            </router-link>
                                            <button
                                                type="button"
                                                @click="
                                                    generateContract()
                                                "
                                                v-if="employee_contract.status_id == 3"
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i class="fa-solid fa-file"></i>
                                            </button>
                                            <button
                                                type="button"
                                                @click="
                                                     confirmContract(employee_contract.id)
                                                "
                                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 mr-2"
                                            >
                                                <i
                                                    class="fa-solid fa-trash"
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                <h2 class="text-4xl dark:text-white pb-10">
                    Finiquitos
                    <router-link href="javascript:;" :to="`/create_end_document/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Agregar
                    </router-link>
                </h2>
                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                <h2 class="text-4xl dark:text-white pb-10">
                    D  +  I
                    <router-link href="javascript:;" :to="`/calculate_end_document/${this.$route.params.rut}`" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Calcular
                    </router-link>
                </h2>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import EmployeeMenu from '../components/EmployeeMenu.vue';
import EmployeeName from '../components/EmployeeName.vue';
import { format } from 'date-fns'

export default {
    components: {
        EmployeeMenu,
        EmployeeName,
    },
    data() {
        return {
            loading: false,
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
            rol_id: '',
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
            contract_type_input:'',
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
            full_name: '',
        };
    },
    methods: {
        formatSalaryInput() {
            this.salary_input = this.salary_input.replace(/\D/g, '')
            this.salary_input = this.salary_input.replace(
                /([0-9])([0-9]{3})$/,
                '$1.$2',
            )
            this.salary_input = this.salary_input.replace(
                /(?=(\d{3})+(\D))\B/g,
                '.',
            )
        },
        formatCollationInput() {
            this.collation_input = this.collation_input.replace(/\D/g, '');
            this.collation_input = this.collation_input.replace(/([0-9])([0-9]{3})$/, '$1.$2');
            this.collation_input = this.collation_input.replace(/(?=(\d{3})+(\D))\B/g, '.');
        },

        formatLocomotionInput() {
            this.locomotion_input = this.locomotion_input.replace(/\D/g, '');
            this.locomotion_input = this.locomotion_input.replace(/([0-9])([0-9]{3})$/, '$1.$2');
            this.locomotion_input = this.locomotion_input.replace(/(?=(\d{3})+(\D))\B/g, '.');
        },

        formatApvAmountInput() {
            this.apv_amount_input = this.apv_amount_input.replace(/\D/g, '');
            this.apv_amount_input = this.apv_amount_input.replace(/([0-9])([0-9]{3})$/, '$1.$2');
            this.apv_amount_input = this.apv_amount_input.replace(/(?=(\d{3})+(\D))\B/g, '.');
        },
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
            if(date != '' && date != null && date != undefined) {
                let localDate = new Date(date);
                let utcDate = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());


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
            }
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
        async generateContract() {
            const logo = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/logo.png',
            )

            const company_signature = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/signature.png',
            )

            const schedule = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/schedule.jpg',
            )

            const bonuses = await this.getBase64ImageFromURL(
                'https://erpjis.com/assets/bonuses.png',
            )

            const original_date = new Date(this.employee_labor_data.EmployeeLaborDatumModel.entrance_company);

            const current_date =
                'Santiago, ' + this.formatDateToCustomFormat(new Date(original_date))

            const short_current_date =
                 this.formatDateToCustomFormat(new Date(original_date))
     
            const first_expiration =
                 this.formatDateToCustomFormat(new Date(this.first_expiration))
           
            const second_expiration =
                 this.formatDateToCustomFormat(new Date(this.second_expiration))

            if (this.employee_labor_data && this.employee_labor_data.PentionModel) {
                console.log(this.employee_labor_data.PentionModel.pention, this.employee_labor_data)
                if (this.employee_labor_data.PentionModel.pention === undefined) {
                    this.pention_name = 'Ninguna';
                }
                else {
                    this.pention_name = this.employee_labor_data.PentionModel.pention;
                }
            } else {
                this.pention_name = 'Ninguna';
            }

            if (this.employee_labor_data.EmployeeLaborDatumModel.employee_type_id == '1') {

                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTRATO INDIVIDUAL DE TRABAJO',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: ['En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                'entre',
                                { text: ' ' + 'JIS Parking SPA', bold: true },
                                '., sociedad del giro administración de estacionamientos y parquímetros, Rol Único Tributario',
                                { text: '76063822-6,' + ' ', bold: true },
                                'representada por don',
                                { text: ' ' + 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ' , bold: true },
                                ' cédula de identidad número',
                                { text: ' ' + '10.033.741-K,' + ' ' , bold: true },
                                'en adelante “EMPLEADOR”, ambos con domicilio en',
                                { text: ' ' + 'Matucana número 40,' + ' ' , bold: true },
                                'comuna de',
                                { text: ' ' + 'Estación Central' + ' ' , bold: true },
                                'y ciudad',
                                { text: ' ' + 'Santiago', bold: true },
                                ', y Sr(a)', 
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ', ', bold: true },
                                'con domicilio en',
                                { text: ' ' + this.employee_labor_data.EmployeeLaborDatumModel.address + ', ', bold: true },
                                'perteneciente a la comuna',
                                { text: ' ' + this.employee_labor_data.CommuneModel.commune + ', ', bold: true },
                                { text: ' de ' + this.employee_labor_data.RegionModel.region + ', ', bold: true },
                                'de estado civil',
                                { text: ' de ' + this.employee_labor_data.CivilStateModel.civil_state + ', ', bold: true },
                                'en adelante “TRABAJADOR”, se conviene el siguiente contrato individual de trabajo, que se rige por el Código del Trabajo, sus modificaciones y estipulaciones que se expresan a continuación:',
                                '\n\n',
                                { text: 'PRIMERO:', bold: true },
                                ' El EMPLEADOR contrata a',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ', ' , bold: true },
                                'para realizar las labores, funciones y trabajos de',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                'de la sociedad señalada, y todas las actividades relacionadas directa o indirectamente con este tipo de cargo, las que realizará en dependencias del empleador. Su labor la desarrollará en la sucursal del EMPLEADOR denominada:',
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.branch_office + ' ', bold: true },
                                'ubicada en',
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.address + '. ', bold: true },
                                'El lugar para desempeñar sus funciones podrá mutar consensuadamente por las partes, lo que deberá constar en respectivo anexo de contrato de trabajo.',
                                '\n\n',
                                { text: 'SEGUNDO:', bold: true },
                                'El TRABAJADOR se obliga a ejecutar los trabajos concernientes a su empleo en la forma más eficaz posible, empleando en ello la mayor responsabilidad, eficacia y dedicación. Entre las funciones que deberá efectuar el TRABAJADOR, se destacan: ',
                                '\n\n',
                                '- ' + this.employee_labor_data.JobPositionModel.functions + '.',
                                '\n\n',
                                'Será responsabilidad del trabajador el aseo, limpieza y mantención de su lugar de trabajo.',
                                '\n\n',
                                { text: 'TERCERO:', bold: true },
                                ' Las partes dejan expreso testimonio que en atención a la naturaleza de las labores convenidas y a las necesidades que satisfacen las funciones de la Empresa y al hecho que se ejecutan en un establecimiento de comercio que atiende directamente al público, de conformidad con lo dispuesto en la legislación laboral vigente, reconocen y aceptan que el TRABAJADOR, en cumplimiento de su jornada semanal, estará exceptuado del descanso dominical, teniendo derecho a un mínimo de un día de descanso a la semana, en compensación de las actividades que desarrolle en domingo. El (los) día (s) de descanso, le será (n) otorgado (s) al TRABAJADOR mediante un sistema de turnos, de acuerdo con la planificación establecida y las necesidades de la Empresa, día o días de descanso que dependerán de si la semana de trabajo se ha distribuido en cinco o seis días consecutivos de labor.',
                                '\n\n',
                                'El TRABAJADOR se obliga a cumplir una jornada máxima de 45 horas semanales, que se distribuirá en cinco días de trabajo, por dos de descanso en cada semana; o bien, en seis días consecutivos de trabajo, por uno de descanso, según lo determine el EMPLEADOR conforme al sistema de turnos ya mencionado. Los días de trabajo incluirán, en cualquier caso, los domingos y festivos, por tratarse de labores que exigen desarrollarse en continuidad por las necesidades que satisfacen, las que están exentas del descanso dominical. El empleador podrá efectuar las correspondientes adecuaciones en la distribución de la jornada de trabajo, en las cuales el trabajador consiente expresamente, para los efectos de dar cumplimiento a lo dispuesto por el inciso cuarto del artículo 38 contenido en el Código del Trabajo.',
                                '\n\n',
                                'Queda expresamente convenido por las partes que dicha jornada semanal será cumplida por el TRABAJADOR mediante un sistema de turnos que le asigne el EMPLEADOR, cuyas diversas y diferentes modalidades se especifican en documento anexo denominado,',
                                { text: ' "TURNO JORNADA" ', bold: true },
                                'el cual, suscrito también por las partes, forma parte integrante del presente instrumento y del contrato de trabajo, recibiendo el trabajador copia de ambos. La empresa comunicará al TRABAJADOR, por medio de un anuncio publicado en su lugar de trabajo, o por cualquier otra vía idónea, con a lo menos 7 días de anticipación, el turno en el cual éste deberá laborar cada semana. En todo caso, la Empresa se reserva expresamente el derecho de alterar la distribución de la jornada de trabajo, de conformidad a la Ley, estableciendo otros esquemas de turnos.',
                                '\n\n',
                                'Se prohíbe expresamente al TRABAJADOR ejecutar labores en horas extraordinarias, si ellas no han sido convenidas por escrito con el empleador o quien haga sus veces. Queda, asimismo, expresa y estrictamente prohibido al TRABAJADOR permanecer en el lugar de trabajo, fuera de su jornada ordinaria, sin contar con la autorización escrita del empleador. Para estos efectos, se acuerda que, cuando las circunstancias lo justifiquen, el TRABAJADOR podrá trabajar horas extraordinarias, previo acuerdo entre las partes.',
                                '\n\n',
                                'La jornada diaria de labor se suspenderá por un período para colación, periodo que no podrá ser inferior a 30 minutos, no formará parte de la jornada de trabajo ni se computará para determinar su extensión. El descanso indicado también se otorgará mediante sistema de turnos, con el objeto de no paralizar las actividades de la sucursal.',
                                '\n\n',
                                'Es acuerdo de los contratantes que, por regla general, el descanso compensatorio de los días festivos que labore, le será otorgado al en un día domingo dentro del mismo mes calendario en que haya trabajado el festivo, o en otro mes distinto, dentro del mismo año calendario, pudiendo contabilizarse este día para los efectos del cumplimiento de lo dispuesto en el artículo 38, inciso cuarto, del Código del Trabajo.',
                                '\n\n',
                                'Si no se otorgare descanso compensatorio, en la forma antes mencionada o en cualquier otra que la ley permita, la remuneración de las horas laboradas en días festivos se pagará al trabajador con el recargo que la ley establece para las horas extraordinarias.',
                                '\n\n',
                                { text: 'CUARTO:', bold: true },
                                ' El trabajador recibirá a título de remuneración un sueldo base bruto mensual de $',
                                { text: ' ' + this.employee_labor_data.EmployeeLaborDatumModel.salary.toLocaleString('es-CL') + '.- ', bold: true },
                                'por las labores indicadas en la cláusula segunda del presente contrato. Además, el empleador el empleador opta, en relación con este beneficio, por la alternativa contemplada en el artículo 50 del Código del Trabajo, vale decir, por abonar o pagar el 25% de lo devengado en el respectivo ejercicio comercial por concepto de remuneraciones mensuales, con un tope máximo de 4,75 ingresos mínimos mensuales. A la suma que legalmente pudiere corresponder por concepto de este beneficio, en el evento de existir utilidades líquidas que hicieran exigible el pago de gratificación legal, se imputará lo pagado en razón de la gratificación convencional que se pacta a continuación. Vale decir, ambas gratificaciones no se sumarán en caso alguno y aquello que se hubiere pagado por concepto de gratificación convencional, por estar contractualmente garantizada, eximirá al empleador del pago de lo que pudiere corresponder por gratificación legal.',
                                '\n\n',
                                'Por otra parte, se pacta una gratificación garantizada, haya o no utilidades, ascendente al 25% de lo devengado por el trabajador en el respectivo ejercicio comercial por concepto de remuneración, con el tope máximo legal que proceda, el cual en ningún caso podrá exceder del equivalente a 4,75 ingresos mínimos al año. Esta gratificación se pagará mensualmente, en la misma oportunidad establecida para el pago del sueldo.',
                                '\n\n',
                                'El pago de la gratificación en la forma que antecede exime al empleador de la obligación de gratificar al trabajador en conformidad a las normas del artículo 46 y siguientes del Código del Trabajo en el evento que la empresa obtenga utilidades en los términos allí señalados.',
                                '\n\n',
                                'Estas remuneraciones se pagarán por mensualidades vencidas, mediante transferencia bancaria o mediante cheque a su orden dentro de los cinco días hábiles del mes siguiente al que corresponda cada pago.',
                                '\n\n',
                                { text: 'QUINTO:', bold: true },
                                '\n\n',
                                'Son obligaciones del TRABAJADOR:',
                                '\n\n',
                                '- Cumplir la jornada de trabajo en su totalidad diaria, según lo señalado precedentemente.',
                                '\n\n',
                                '- Justificar a su jefe directo las inasistencias por enfermedad, mediante certificado otorgado de conformidad a la legislación vigente.',
                                '\n\n',
                                '- Asumir las responsabilidades propias del trabajo para el que es contratado y ejercerlo conforme a las prácticas normales de este tipo de trabajo y cumplir fielmente con las instrucciones que para el ejercicio de su trabajo y labores le señale la gerencia o su jefe directo',
                                '\n\n',
                                '- Firmar el libro de asistencia o reloj control a la entrada y a la salida del trabajo. Se presumirá la ausencia del TRABAJADOR por la sola concurrencia de no cumplir con esta obligación',
                                '\n\n',
                                '- Ejecutar sus labores con prontitud y eficacia, de acuerdo a las instrucciones y normas laborales que se le impartan, evitando comprometer la seguridad y salud propia y del resto de trabajadores de la empresa.',
                                '\n\n',
                                '- Respetar las normas contenidas en el Reglamento Interno de Orden Higiene y Seguridad, las que declara conocer; reglamento que recibe en este acto.',
                                '\n\n',
                                '- Cuidar y mantener en perfecto estado de conservación los útiles, herramientas e implementos necesarios para su trabajo.',
                                '\n\n',
                                { text: 'SEXTO:', bold: true },
                                '\n\n',
                                'Queda prohibido al TRABAJADOR:',
                                '\n\n',
                                '- Dar a terceras personas informaciones estimadas como confidenciales por la empresa.',
                                '\n\n',
                                '- Firmar o marcar registro de asistencia de horarios de otro trabajador de la empresa. El trabajador que fuere sorprendido firmando o marcando el registro de asistencia de otro trabajador, será considerado como autor de falta grave a las obligaciones del contrato.',
                                '\n\n',
                                '- Realizar o ejecutar durante la jornada de trabajo cualquier labor ajena a las de la empresa.',
                                '\n\n',
                                { text: 'SEPTIMO:', bold: true },
                                '\n\n',
                                'El presente contrato de trabajo terminará sin derecho a indemnización, cuando el trabajador incurra en alguna FALTA GRAVE, de acuerdo a lo establecido en el artículo. 160 numeral 7 del Código del Trabajo, por lo que las partes consideran como tales, las faltas que más adelante se detallan, entre otras cosas:',
                                '\n\n',
                                '- Presentarse al trabajo en estado de ebriedad, introducir o beber bebidas alcohólicas en el recinto de la empresa, durante su jornada de trabajo',
                                '\n\n',
                                '- Efectuar negociaciones con los bienes, productos o servicios que venda la empresa, o de terceros.',
                                '\n\n',
                                '- No otorgar boleta o guía en toda venta, cobro de estacionamiento, otorgarlas sin complementar toda la información que dichos documentos requieran, otorgarlas por menos valor o mayor valor a la venta efectiva de acuerdo a las disposiciones de D.L. 825 de reglamento y, Código Tributario, especialmente en el Art. 97 Nº 10.',
                                '\n\n',
                                '- Recibir dos o más reclamos por escrito de clientes que traten de engaño, fraude o mal trato de palabras o de hechos.',
                                '\n\n',
                                '- Hacer abandono de su puesto de trabajo sin causa justificada.',
                                '\n\n',
                                '- Registrar 3 o más diferencias de valores, en el mes en el resumen diario de ventas o recaudación.',
                                '\n\n',
                                '- Ocultar atrasos o inasistencias propias o de terceros en el correspondiente libro de asistencias.',
                                '\n\n',
                                '- El trabajador es responsable en caso de pérdida del libro de asistencia, pues se encuentra a su cargo.',
                                '\n\n',
                                '- Efectuar cambios de cheques, por dinero efectivo.',
                                '\n\n',
                                '- Permitir el estacionamiento de vehículos de cualquier tipo sin pagar dentro del recinto de estación de servicio sin haber sido autorizado por su jefatura.',
                                '\n\n',
                                '- No cuidar debidamente su aseo personal, de la ropa de trabajo y presentación personal.',
                                '\n\n',
                                '- Promover o provocar juegos de azar, riñas o alteraciones de cualquier especie con sus compañeros o jefes durante la jornada de trabajo en el establecimiento.',
                                '\n\n',
                                '- Negarse a acatar las órdenes e instrucciones que reciba de sus jefes, a los cuales deberá especialmente lealtad y respeto, debiendo guardar la más absoluta reserva de todas las operaciones de su empleador o sus clientes.',
                                '\n\n',
                                'Producido cualquiera de estos hechos, el presente Contrato de Trabajo expirará de inmediato y sin derecho a indemnización alguna.',
                                '\n\n',
                                { text: 'OCTAVO:', bold: true },
                                'Las partes acuerdan expresamente elevar todas las cláusulas estipuladas en este contrato a la calidad de esencial. A su vez, convienen que la sola inobservancia de las cláusulas conformantes del presente instrumento, constituye incumplimiento grave a las obligaciones, configurándose la causal establecida en el artículo 160 numeral 7 del Código del Trabajo.',
                                '\n\n',
                                { text: 'NOVENO:', bold: true },
                                'El plazo de duración de este contrato tiene carácter de plazo fijo con un primer vencimiento a contar del día y hasta',
                                { text: ' '+ first_expiration +' ', bold: true },
                                'Transcurrido dicho plazo el contrato se entenderá renovado automáticamente hasta',
                                { text: ' '+ second_expiration +' ', bold: true },
                                '. Sino hubiera comunicación escrita de la empleadora en sentido contrario, vencido el plazo de esta primera prorroga, sin que la empleadora haya notificado por escrito al trabajador su intención de no perseverar en el contrato, se entenderá que este tiene duración',
                                { text: ' INDEFINIDA.', bold: true },
                                '\n\n',
                                'Sin perjuicio de lo anterior, se le podrá poner término al contrato de trabajo con ocasión a la ocurrencia de alguna de las otras causales establecidas en disposiciones legales vigentes.',
                                '\n\n',
                                { text: 'DECIMO:', bold: true },
                                'El TRABAJADOR señala que, para efectos de previsión y seguridad social, está afiliado a la AFP',
                                { text: ' ' + this.pention_name + ', ', bold: true },
                                ', y a la institución de salud previsional:',
                                { text: ' ' + this.employee_labor_data.HealthModel.health + ', ', bold: true },
                                '. Asimismo, declara que asume su propia responsabilidad por cambios o modificaciones que realice con su situación previsional; de forma tal que, el EMPLEADOR sólo se obliga en esta materia a enterar oportunamente las respectivas imposiciones en régimen de salud y previsión a las instituciones en las que se encuentre afiliado, según su propia declaración.',
                                '\n\n',
                                { text: 'UNDECIMO:', bold: true },
                                ' Se deja constancia que el trabajador ingresó al servicio del EMPLEADOR con fecha',
                                { text: ' ' + short_current_date + '. ', bold: true },
                                '\n\n',
                                { text: 'DUODÉCIMO:', bold: true },
                                'Para todos los efectos legales, las partes fijan domicilio en Santiago, sometiéndose a la Jurisdicción de sus Tribunales.',
                                '\n\n',
                                { text: 'DÉCIMO TERCERO:', bold: true },
                                ' Para constancia el presente contrato se firma en tres ejemplares, declarando el TRABAJADOR haber leído y recibido en este acto un ejemplar de dicho instrumento, que es el fiel reflejo de la relación laboral convenida.',
                                '\n\n',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
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
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 50, 0, 20],
                        },
                        {
                            text: 'ANEXO TURNOS JORNADA',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                { text: 'PRIMERO:', bold: true },    
                                ' Conforme lo dispuesto por el artículo 22 del Código del Trabajo, a partir del',
                                { text: ' ' + short_current_date + ' ', bold: true },
                                'el TRABAJADOR se obliga a ejecutar sus labores en jornada semanal ordinaria de 45 horas, distribuidas de lunes a domingo, con 1 o 2 días de descanso a la semana, según corresponda, en razón de encontrarse en el caso previsto por el artículo 38 numerales 2 o 7 del Código del Trabajo, de acuerdo a las distribuciones semanales que a continuación se señalan, y cuya programación mensual le será informada a más tardar durante la última semana del mes anterior al del inicio de la nueva programación: '
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        {
                            image: schedule,
                            width: 550,
                            alignment: 'center',
                            margin: [0, 0, 0, 10],
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ANEXO AL CONTRATO INDIVIDUAL DE TRABAJO',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                ', entre JIS PARKING SPA., Rol Único Tributario número',
                                { text: ' 76063822-6', bold: true },
                                ', representada legalmente por don ',
                                { text: 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ', bold: true },
                                ', cédula nacional de identidad número',
                                { text: ' 10.033.741-K ', bold: true },
                                ', en adelante "EMPLEADOR", y Sr(a) ',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ' ' , bold: true },
                                ', en adelante "TRABAJADOR", se ha convenido el siguiente anexo de contrato, cuyas cláusulas señalan:',
                                '\n\n',
                                { text: 'PRIMERO:', bold: true },
                                ' El TRABAJADOR, para efectos de recepción de notificaciones de asistencia, indica el correo electrónico: ',
                                { text: this.employee_personal_data.personal_email + ' ' , bold: true },
                                '\n\n',
                                { text: 'SEGUNDO:', bold: true },
                                'El TRABAJADOR autoriza se envíen a la casilla electrónica señalada en la cláusula precedente, todas las notificaciones de asistencia realizadas por este, las que se materializan por un ticket de marcación enviadas electrónicamente.',
                                '\n\n',
                                { text: 'TERCERO:', bold: true },
                                ' Las notificaciones de asistencia serán enviadas cada vez que el TRABAJADOR realice un registro de asistencia.',
                                '\n\n',
                                { text: 'CUARTO:', bold: true },
                                ' El TRABAJADOR podrá modificar unilateralmente la casilla electrónica señalada en la cláusula primera de este anexo de contrato. Para este efecto, deberá comunicárselo al departamento de Recursos Humanos o realizar el cambio por intermedio del sitio “Relojcontrol.com” sección “Portal del Trabajador”.',
                                '\n\n',
                                { text: 'QUINTO:', bold: true },
                                ' En caso que el TRABAJADOR no reciba en la casilla electrónica indicada en la cláusula primera del presente anexo, deberá comunicar dicha situación al departamento de Recursos Humanos a fin que se le entregue copia de la notificación en cuestión.',
                                '\n\n',
                                { text: 'SEXTO:', bold: true },
                                ' En todo lo demás, se mantienen íntegramente vigente las estipulaciones del contrato individual de trabajo.',
                                '\n\n',
                                { text: 'SÉPTIMO:', bold: true },
                                'El presente anexo de contrato individual de trabajo, que pasa a ser parte integrante del contrato de trabajo vigente entre las partes, se firma en tres ejemplares del mismo tenor, dejando expresa constancia que en este acto el trabajador recibe uno de ellos a su entera satisfacción, declarando, además, haberlo leído dando su conformidad a todas y cada una de las estipulaciones contenidas en él.',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
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
                                                margin: [0, -20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL DERECHO A SABER U OBLIGACIÓN A INFORMAR',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'Se deja expresa constancia, de acuerdo a lo establecido en el D.S. N° 40 que, he recibido en forma gratuita un ejemplar del Reglamento Interno de Orden, Higiene y Seguridad por parte de la empresa JIS PARKING SPA. El cual se busca informar los riesgos a los cuales se encontrará expuesto en el desarrollo de sus labores de Trabajador Multifuncional, en nuestras diversas sucursales.',
                                '\n\n',
                                'Así también declaro bajo mi firma, haber recibido, leído y comprendido el presente documento, del cual doy fé de conocer el contenido de éste y me hago responsable de su estricto cumplimiento en cada uno de sus artículos, no puediendo alegar desconocimiento de su texto a contar de la fecha',
                                { text: ' ' + this.short_current_date + '. ', bold: true },
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL REGLAMENTO INTERNO DE ORDEN, HIGIENE Y SEGURIDAD',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'Se deja expresa constancia, de acuerdo con lo establecido en el D.S. N° 40, que he recibido en forma gratuita un ejemplar del Reglamento Interno de Orden, Hiege y Seguridad por parte de la empresa JIS PARKING SPA. El cual se busca informar los riesgos a los cuales se encontrará expuesto en el desarollo de sus labores de',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                'en nuestras diversas sucursales.',
                                '\n\n',
                                'Así también declaro bajo mi firma, haber recibido, leído y comprendido el presente documento, del cual doy fé de conocer el contenido de éste y me hago responsable de su estricto cumplimiento en cada uno de sus artículos, no pudiendo alegar desconocimiento de su texto a contar de la fecha',
                                { text: ' ' + this.short_current_date + '.', bold: true }
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL REGLAMENTO INTERNO DE ORDEN, HIGIENE Y SEGURIDAD (RIOHS) Y REGISTRO DE RECEPCION DE OBLIGACION DE INFORMAR (ODI). Instructivo Covid-19',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'De acuerdo con lo establecido en el D.S. N° 40, que aprueba el reglamento sobre prevención de los riesgos profesionales en su Título VI, Art 21. referido a "las obligaciones de informar de los riesgos laborales" el trabajador',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula de identidad',
                                { text: ' ' + this.employee_personal_data.visual_rut + ' ' , bold: true },
                                'quien desempeña las labores en la empresa como',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                ', se encuentra en conocimiento de los riesgos por exposición laboral a COVID-19 y las medidas que se debe tomar para evitar su contagio.', 
                                '\n\n',
                                'Además, se solicita que se respeten las restantes normas de higiene y seguridad (Principalmente las indicaciones RIOHS) y participe activamente en las actividades de prevención.',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ENTREGA DE ELEMENTOS DE PROTECCION PERSONAL',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'De acuerdo a lo estipulado en la Ley 16.744, Art. 68 inciso tres “Las empresas deberán proporcionar a sus trabajadores, los equipos e implementos de protección necesarios, no pudiendo en caso alguno cobrarles su valor”.',
                                '\n\n',
                                { text: 'RUT: ' , bold: true },
                                { text: ' ' + this.employee_personal_data.visual_rut + '. ' },
                                '\n\n',
                                { text: 'NOMBRE: ' , bold: true },
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + '. '},
                                '\n\n',
                                { text: 'CARGO: ' , bold: true },
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + '. ' },
                                '\n\n',
                                { text: 'SUCURSAL: ' , bold: true },
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.branch_office + '. ' },
                                '\n\n',
                                { text: 'ELEMENTOS: ' , bold: true },
                                { text: '_______________________________________________________________________________________________________. ' }
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ANEXO DE CONTRATO DE TRABAJO BONO META MENSUAL',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: ['En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                'entre',
                                { text: ' ' + 'JIS Parking SPA', bold: true },
                                '., sociedad del giro administración de estacionamientos y parquímetros, Rol Único Tributario',
                                { text: '76063822-6,' + ' ', bold: true },
                                'representada por don',
                                { text: ' ' + 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ' , bold: true },
                                ' cédula de identidad número',
                                { text: ' ' + '10.033.741-K,' + ' ' , bold: true },
                                'en adelante “EMPLEADOR”, ambos con domicilio en',
                                { text: ' ' + 'Matucana número 40,' + ' ' , bold: true },
                                'comuna de',
                                { text: ' ' + 'Estación Central' + ' ' , bold: true },
                                'y ciudad',
                                { text: ' ' + 'Santiago', bold: true },
                                ', y Sr(a)', 
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ', ', bold: true },
                                'con domicilio en',
                                { text: ' ' + this.employee_labor_data.EmployeeLaborDatumModel.address + ', ', bold: true },
                                'perteneciente a la comuna',
                                { text: ' ' + this.employee_labor_data.CommuneModel.commune + ', ', bold: true },
                                { text: ' de ' + this.employee_labor_data.RegionModel.region + ', ', bold: true },
                                'de estado civil',
                                { text: ' de ' + this.employee_labor_data.CivilStateModel.civil_state + ', ', bold: true },
                                'en adelante “TRABAJADOR”, quienes manifiestan haber convenido en la celebración del siguiente anexo de contrato de trabajo:',
                                '\n\n',
                                { text: 'PRIMERO: ', bold: true },
                                'Del Motivo. Las partes han pactado el otorgamiento de una asignación de remuneración denominado BONO META MENSUAL, el cual será pagado por Jis Parking como una forma de premiar la meta venta propuesta por la empresa.',
                                '\n\n',
                                { text: 'SEGUNDO: ', bold: true },
                                'Del Monto y condiciones. Jis Parking SPA y el Trabajador pactan que el BONO META MENSUAL será un incentivo económico al cual postulara de manera mensual para cumplir con el presupuesto de venta asignado para cada mes, donde existirán dos formas de pago según cumplimiento de ventas:'
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        {
                            image: bonuses,
                            width: 300,
                            alignment: 'center',
                            margin: [0, -30, 0, 0],
                        },
                        {
                            text: [
                                'Requisitos para postular a la bonificación:',
                                'Haber trabajado al menos 20 días durante el mes a cumplir la meta.',
                                '\n\n',
                                { text: 'TERCERA: ', bold: true },
                                'De las Cotizaciones. Para todos los efectos legales, el BONO META MENSUAL constituye remuneración imponible, por lo cual la empresa efectuará las deducciones legales correspondientes.',
                                '\n\n',
                                { text: 'CUARTO: ', bold: true },
                                'De la Suscripción. El presente anexo de contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder del(la) trabajador(a) y otro en poder del empleador.'
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 30],
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
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, -20],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                    pageMargins: [80, 40, 80, 70],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                    },
                    footer: function(currentPage, pageCount) {
                                    return {
                            stack: [
                                {
                                    text: '', // Espacio en blanco para ajustar el espacio superior
                                    margin: [0, 10], // Ajusta el espacio superior a 10 puntos (puedes ajustar este valor)
                                },
                                {
                                    text: `${currentPage.toString()} de ${pageCount}`,
                                    alignment: 'center',
                                    fontSize: 7,
                                }
                            ]
                        };
                    },
                }

                pdfMake.createPdf(docDefinition).download('contrato.pdf')
            } else {
                const docDefinition = {
                    content: [
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTRATO INDIVIDUAL DE TRABAJO',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: ['En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                'entre',
                                { text: ' ' + 'JIS Parking SPA', bold: true },
                                '., sociedad del giro administración de estacionamientos y parquímetros, Rol Único Tributario',
                                { text: '76063822-6,' + ' ', bold: true },
                                'representada por don',
                                { text: ' ' + 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ' , bold: true },
                                ' cédula de identidad número',
                                { text: ' ' + '10.033.741-K,' + ' ' , bold: true },
                                'en adelante “EMPLEADOR”, ambos con domicilio en',
                                { text: ' ' + 'Matucana número 40,' + ' ' , bold: true },
                                'comuna de',
                                { text: ' ' + 'Estación Central' + ' ' , bold: true },
                                'y ciudad',
                                { text: ' ' + 'Santiago', bold: true },
                                ', y Sr(a)', 
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ', ', bold: true },
                                'con domicilio en',
                                { text: ' ' + this.employee_labor_data.EmployeeLaborDatumModel.address + ', ', bold: true },
                                'perteneciente a la comuna',
                                { text: ' ' + this.employee_labor_data.CommuneModel.commune + ', ', bold: true },
                                { text: ' de ' + this.employee_labor_data.RegionModel.region + ', ', bold: true },
                                'de estado civil',
                                { text: ' de ' + this.employee_labor_data.CivilStateModel.civil_state + ', ', bold: true },
                                'en adelante “TRABAJADOR”, se conviene el siguiente contrato individual de trabajo, que se rige por el Código del Trabajo, sus modificaciones y estipulaciones que se expresan a continuación:',
                                '\n\n',
                                { text: 'PRIMERO:', bold: true },
                                ' El EMPLEADOR contrata a',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ', ' , bold: true },
                                'para realizar las labores, funciones y trabajos de',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                'de la sociedad señalada, y todas las actividades relacionadas directa o indirectamente con este tipo de cargo, las que realizará en dependencias del empleador. Su labor la desarrollará en la sucursal del EMPLEADOR denominada:',
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.branch_office + ' ', bold: true },
                                'ubicada en',
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.address + '. ', bold: true },
                                'El lugar para desempeñar sus funciones podrá mutar consensuadamente por las partes, lo que deberá constar en respectivo anexo de contrato de trabajo.',
                                '\n\n',
                                { text: 'SEGUNDO:', bold: true },
                                'El TRABAJADOR se obliga a ejecutar los trabajos concernientes a su empleo en la forma más eficaz posible, empleando en ello la mayor responsabilidad, eficacia y dedicación. Entre las funciones que deberá efectuar el TRABAJADOR, se destacan: ',
                                '\n\n',
                                '- ' + this.employee_labor_data.JobPositionModel.functions + '.',
                                '\n\n',
                                'Será responsabilidad del trabajador el aseo, limpieza y mantención de su lugar de trabajo.',
                                '\n\n',
                                { text: 'TERCERO:', bold: true },
                                ' Las partes dejan expreso testimonio que en atención a la naturaleza de las labores convenidas y a las necesidades que satisfacen las funciones de la Empresa y al hecho que se ejecutan en un establecimiento de comercio que atiende directamente al público, de conformidad con lo dispuesto en la legislación laboral vigente, reconocen y aceptan que el TRABAJADOR, en cumplimiento de su jornada semanal, estará exceptuado del descanso dominical, teniendo derecho a un mínimo de un día de descanso a la semana, en compensación de las actividades que desarrolle en domingo. El (los) día (s) de descanso, le será (n) otorgado (s) al TRABAJADOR mediante un sistema de turnos, de acuerdo con la planificación establecida y las necesidades de la Empresa, día o días de descanso que dependerán de si la semana de trabajo se ha distribuido en cinco o seis días consecutivos de labor.',
                                '\n\n',
                                'Queda expresamente convenido por las partes que dicha jornada semanal será cumplida por el TRABAJADOR mediante un sistema de turnos que le asigne el EMPLEADOR, cuyas diversas y diferentes modalidades se especifican en documento anexo denominado,',
                                { text: ' "TURNO JORNADA" ', bold: true },
                                'el cual, suscrito también por las partes, forma parte integrante del presente instrumento y del contrato de trabajo, recibiendo el trabajador copia de ambos. La empresa comunicará al TRABAJADOR, por medio de un anuncio publicado en su lugar de trabajo, o por cualquier otra vía idónea, con a lo menos 7 días de anticipación, el turno en el cual éste deberá laborar cada semana. En todo caso, la Empresa se reserva expresamente el derecho de alterar la distribución de la jornada de trabajo, de conformidad a la Ley, estableciendo otros esquemas de turnos.',
                                '\n\n',
                                'Se prohíbe expresamente al TRABAJADOR ejecutar labores en horas extraordinarias, si ellas no han sido convenidas por escrito con el empleador o quien haga sus veces. Queda, asimismo, expresa y estrictamente prohibido al TRABAJADOR permanecer en el lugar de trabajo, fuera de su jornada ordinaria, sin contar con la autorización escrita del empleador. Para estos efectos, se acuerda que, cuando las circunstancias lo justifiquen, el TRABAJADOR podrá trabajar horas extraordinarias, previo acuerdo entre las partes.',
                                '\n\n',
                                'La jornada diaria de labor se suspenderá por un período para colación, periodo que no podrá ser inferior a 30 minutos, no formará parte de la jornada de trabajo ni se computará para determinar su extensión. El descanso indicado también se otorgará mediante sistema de turnos, con el objeto de no paralizar las actividades de la sucursal.',
                                '\n\n',
                                'Es acuerdo de los contratantes que, por regla general, el descanso compensatorio de los días festivos que labore, le será otorgado al en un día domingo dentro del mismo mes calendario en que haya trabajado el festivo, o en otro mes distinto, dentro del mismo año calendario, pudiendo contabilizarse este día para los efectos del cumplimiento de lo dispuesto en el artículo 38, inciso cuarto, del Código del Trabajo.',
                                '\n\n',
                                'Si no se otorgare descanso compensatorio, en la forma antes mencionada o en cualquier otra que la ley permita, la remuneración de las horas laboradas en días festivos se pagará al trabajador con el recargo que la ley establece para las horas extraordinarias.',
                                '\n\n',
                                { text: 'CUARTO:', bold: true },
                                ' El trabajador recibirá a título de remuneración un sueldo base bruto mensual de $',
                                { text: ' ' + this.formatNumber(this.employee_labor_data.EmployeeLaborDatumModel.salary)+ '.- ', bold: true },
                                'por las labores indicadas en la cláusula segunda del presente contrato. Además, el empleador el empleador opta, en relación con este beneficio, por la alternativa contemplada en el artículo 50 del Código del Trabajo, vale decir, por abonar o pagar el 25% de lo devengado en el respectivo ejercicio comercial por concepto de remuneraciones mensuales, con un tope máximo de 4,75 ingresos mínimos mensuales. A la suma que legalmente pudiere corresponder por concepto de este beneficio, en el evento de existir utilidades líquidas que hicieran exigible el pago de gratificación legal, se imputará lo pagado en razón de la gratificación convencional que se pacta a continuación. Vale decir, ambas gratificaciones no se sumarán en caso alguno y aquello que se hubiere pagado por concepto de gratificación convencional, por estar contractualmente garantizada, eximirá al empleador del pago de lo que pudiere corresponder por gratificación legal.',
                                '\n\n',
                                'Por otra parte, se pacta una gratificación garantizada, haya o no utilidades, ascendente al 25% de lo devengado por el trabajador en el respectivo ejercicio comercial por concepto de remuneración, con el tope máximo legal que proceda, el cual en ningún caso podrá exceder del equivalente a 4,75 ingresos mínimos al año. Esta gratificación se pagará mensualmente, en la misma oportunidad establecida para el pago del sueldo.',
                                '\n\n',
                                'El pago de la gratificación en la forma que antecede exime al empleador de la obligación de gratificar al trabajador en conformidad a las normas del artículo 46 y siguientes del Código del Trabajo en el evento que la empresa obtenga utilidades en los términos allí señalados.',
                                '\n\n',
                                'Estas remuneraciones se pagarán por mensualidades vencidas, mediante transferencia bancaria o mediante cheque a su orden dentro de los cinco días hábiles del mes siguiente al que corresponda cada pago.',
                                '\n\n',
                                { text: 'QUINTO:', bold: true },
                                '\n\n',
                                'Son obligaciones del TRABAJADOR:',
                                '\n\n',
                                '- Cumplir la jornada de trabajo en su totalidad diaria, según lo señalado precedentemente.',
                                '\n\n',
                                '- Justificar a su jefe directo las inasistencias por enfermedad, mediante certificado otorgado de conformidad a la legislación vigente.',
                                '\n\n',
                                '- Asumir las responsabilidades propias del trabajo para el que es contratado y ejercerlo conforme a las prácticas normales de este tipo de trabajo y cumplir fielmente con las instrucciones que para el ejercicio de su trabajo y labores le señale la gerencia o su jefe directo',
                                '\n\n',
                                '- Firmar el libro de asistencia o reloj control a la entrada y a la salida del trabajo. Se presumirá la ausencia del TRABAJADOR por la sola concurrencia de no cumplir con esta obligación',
                                '\n\n',
                                '- Ejecutar sus labores con prontitud y eficacia, de acuerdo a las instrucciones y normas laborales que se le impartan, evitando comprometer la seguridad y salud propia y del resto de trabajadores de la empresa.',
                                '\n\n',
                                '- Respetar las normas contenidas en el Reglamento Interno de Orden Higiene y Seguridad, las que declara conocer; reglamento que recibe en este acto.',
                                '\n\n',
                                '- Cuidar y mantener en perfecto estado de conservación los útiles, herramientas e implementos necesarios para su trabajo.',
                                '\n\n',
                                { text: 'SEXTO:', bold: true },
                                '\n\n',
                                'Queda prohibido al TRABAJADOR:',
                                '\n\n',
                                '- Dar a terceras personas informaciones estimadas como confidenciales por la empresa.',
                                '\n\n',
                                '- Firmar o marcar registro de asistencia de horarios de otro trabajador de la empresa. El trabajador que fuere sorprendido firmando o marcando el registro de asistencia de otro trabajador, será considerado como autor de falta grave a las obligaciones del contrato.',
                                '\n\n',
                                '- Realizar o ejecutar durante la jornada de trabajo cualquier labor ajena a las de la empresa.',
                                '\n\n',
                                { text: 'SEPTIMO:', bold: true },
                                '\n\n',
                                'El presente contrato de trabajo terminará sin derecho a indemnización, cuando el trabajador incurra en alguna FALTA GRAVE, de acuerdo a lo establecido en el artículo. 160 numeral 7 del Código del Trabajo, por lo que las partes consideran como tales, las faltas que más adelante se detallan, entre otras cosas:',
                                '\n\n',
                                '- Presentarse al trabajo en estado de ebriedad, introducir o beber bebidas alcohólicas en el recinto de la empresa, durante su jornada de trabajo',
                                '\n\n',
                                '- Efectuar negociaciones con los bienes, productos o servicios que venda la empresa, o de terceros.',
                                '\n\n',
                                '- No otorgar boleta o guía en toda venta, cobro de estacionamiento, otorgarlas sin complementar toda la información que dichos documentos requieran, otorgarlas por menos valor o mayor valor a la venta efectiva de acuerdo a las disposiciones de D.L. 825 de reglamento y, Código Tributario, especialmente en el Art. 97 Nº 10.',
                                '\n\n',
                                '- Recibir dos o más reclamos por escrito de clientes que traten de engaño, fraude o mal trato de palabras o de hechos.',
                                '\n\n',
                                '- Hacer abandono de su puesto de trabajo sin causa justificada.',
                                '\n\n',
                                '- Registrar 3 o más diferencias de valores, en el mes en el resumen diario de ventas o recaudación.',
                                '\n\n',
                                '- Ocultar atrasos o inasistencias propias o de terceros en el correspondiente libro de asistencias.',
                                '\n\n',
                                '- El trabajador es responsable en caso de pérdida del libro de asistencia, pues se encuentra a su cargo.',
                                '\n\n',
                                '- Efectuar cambios de cheques, por dinero efectivo.',
                                '\n\n',
                                '- Permitir el estacionamiento de vehículos de cualquier tipo sin pagar dentro del recinto de estación de servicio sin haber sido autorizado por su jefatura.',
                                '\n\n',
                                '- No cuidar debidamente su aseo personal, de la ropa de trabajo y presentación personal.',
                                '\n\n',
                                '- Promover o provocar juegos de azar, riñas o alteraciones de cualquier especie con sus compañeros o jefes durante la jornada de trabajo en el establecimiento.',
                                '\n\n',
                                '- Negarse a acatar las órdenes e instrucciones que reciba de sus jefes, a los cuales deberá especialmente lealtad y respeto, debiendo guardar la más absoluta reserva de todas las operaciones de su empleador o sus clientes.',
                                '\n\n',
                                'Producido cualquiera de estos hechos, el presente Contrato de Trabajo expirará de inmediato y sin derecho a indemnización alguna.',
                                '\n\n',
                                { text: 'OCTAVO:', bold: true },
                                'Las partes acuerdan expresamente elevar todas las cláusulas estipuladas en este contrato a la calidad de esencial. A su vez, convienen que la sola inobservancia de las cláusulas conformantes del presente instrumento, constituye incumplimiento grave a las obligaciones, configurándose la causal establecida en el artículo 160 numeral 7 del Código del Trabajo.',
                                '\n\n',
                                { text: 'NOVENO:', bold: true },
                                'El plazo de duración de este contrato tiene carácter de plazo fijo con un primer vencimiento a contar del día y hasta',
                                { text: ' ' + first_expiration, bold: true },
                                '. Transcurrido dicho plazo el contrato se entenderá renovado automáticamente hasta',
                                { text: ' ' + second_expiration, bold: true },
                                '. Sino hubiera comunicación escrita de la empleadora en sentido contrario, vencido el plazo de esta primera prorroga, sin que la empleadora haya notificado por escrito al trabajador su intención de no perseverar en el contrato, se entenderá que este tiene duración',
                                { text: ' INDEFINIDA.', bold: true },
                                '\n\n',
                                'Sin perjuicio de lo anterior, se le podrá poner término al contrato de trabajo con ocasión a la ocurrencia de alguna de las otras causales establecidas en disposiciones legales vigentes.',
                                '\n\n',
                                { text: 'DECIMO:', bold: true },
                                'El TRABAJADOR señala que, para efectos de previsión y seguridad social, está afiliado a la AFP',
                                { text: ' ' + this.pention_name, bold: true },
                                ', y a la institución de salud previsional:',
                                { text: ' ' + this.employee_labor_data.HealthModel.health + ', ', bold: true },
                                '. Asimismo, declara que asume su propia responsabilidad por cambios o modificaciones que realice con su situación previsional; de forma tal que, el EMPLEADOR sólo se obliga en esta materia a enterar oportunamente las respectivas imposiciones en régimen de salud y previsión a las instituciones en las que se encuentre afiliado, según su propia declaración.',
                                '\n\n',
                                { text: 'UNDECIMO:', bold: true },
                                ' Se deja constancia que el trabajador ingresó al servicio del EMPLEADOR con fecha',
                                { text: ' ' + short_current_date + '. ', bold: true },
                                '\n\n',
                                { text: 'DUODÉCIMO:', bold: true },
                                'Para todos los efectos legales, las partes fijan domicilio en Santiago, sometiéndose a la Jurisdicción de sus Tribunales.',
                                '\n\n',
                                { text: 'DÉCIMO TERCERO:', bold: true },
                                ' Para constancia el presente contrato se firma en tres ejemplares, declarando el TRABAJADOR haber leído y recibido en este acto un ejemplar de dicho instrumento, que es el fiel reflejo de la relación laboral convenida.',
                                '\n\n',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 50, 0, 20],
                        },
                        {
                            text: 'ANEXO TURNOS JORNADA',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                { text: 'PRIMERO:', bold: true },    
                                ' Conforme lo dispuesto por el artículo 22 del Código del Trabajo, a partir del',
                                { text: ' ' + short_current_date + ' ', bold: true },
                                'el TRABAJADOR se obliga a ejecutar sus labores en jornada semanal ordinaria de 45 horas, distribuidas de lunes a domingo, con 1 o 2 días de descanso a la semana, según corresponda, en razón de encontrarse en el caso previsto por el artículo 38 numerales 2 o 7 del Código del Trabajo, de acuerdo a las distribuciones semanales que a continuación se señalan, y cuya programación mensual le será informada a más tardar durante la última semana del mes anterior al del inicio de la nueva programación: '
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        {
                            image: schedule,
                            width: 550,
                            alignment: 'center',
                            margin: [0, 0, 0, 10],
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ANEXO AL CONTRATO INDIVIDUAL DE TRABAJO',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                ', entre JIS PARKING SPA., Rol Único Tributario número',
                                { text: ' 76063822-6', bold: true },
                                ', representada legalmente por don ',
                                { text: 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ', bold: true },
                                ', cédula nacional de identidad número',
                                { text: ' 10.033.741-K ', bold: true },
                                ', en adelante "EMPLEADOR", y Sr(a) ',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ' ' , bold: true },
                                ', en adelante "TRABAJADOR", se ha convenido el siguiente anexo de contrato, cuyas cláusulas señalan:',
                                '\n\n',
                                { text: 'PRIMERO:', bold: true },
                                ' El TRABAJADOR, para efectos de recepción de notificaciones de asistencia, indica el correo electrónico: ',
                                { text: this.employee_personal_data.personal_email + ' ' , bold: true },
                                '\n\n',
                                { text: 'SEGUNDO:', bold: true },
                                'El TRABAJADOR autoriza se envíen a la casilla electrónica señalada en la cláusula precedente, todas las notificaciones de asistencia realizadas por este, las que se materializan por un ticket de marcación enviadas electrónicamente.',
                                '\n\n',
                                { text: 'TERCERO:', bold: true },
                                ' Las notificaciones de asistencia serán enviadas cada vez que el TRABAJADOR realice un registro de asistencia.',
                                '\n\n',
                                { text: 'CUARTO:', bold: true },
                                ' El TRABAJADOR podrá modificar unilateralmente la casilla electrónica señalada en la cláusula primera de este anexo de contrato. Para este efecto, deberá comunicárselo al departamento de Recursos Humanos o realizar el cambio por intermedio del sitio “Relojcontrol.com” sección “Portal del Trabajador”.',
                                '\n\n',
                                { text: 'QUINTO:', bold: true },
                                ' En caso que el TRABAJADOR no reciba en la casilla electrónica indicada en la cláusula primera del presente anexo, deberá comunicar dicha situación al departamento de Recursos Humanos a fin que se le entregue copia de la notificación en cuestión.',
                                '\n\n',
                                { text: 'SEXTO:', bold: true },
                                ' En todo lo demás, se mantienen íntegramente vigente las estipulaciones del contrato individual de trabajo.',
                                '\n\n',
                                { text: 'SÉPTIMO:', bold: true },
                                'El presente anexo de contrato individual de trabajo, que pasa a ser parte integrante del contrato de trabajo vigente entre las partes, se firma en tres ejemplares del mismo tenor, dejando expresa constancia que en este acto el trabajador recibe uno de ellos a su entera satisfacción, declarando, además, haberlo leído dando su conformidad a todas y cada una de las estipulaciones contenidas en él.',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
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
                                                margin: [0, -20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL DERECHO A SABER U OBLIGACIÓN A INFORMAR',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'Se deja expresa constancia, de acuerdo a lo establecido en el D.S. N° 40 que, he recibido en forma gratuita un ejemplar del Reglamento Interno de Orden, Higiene y Seguridad por parte de la empresa JIS PARKING SPA. El cual se busca informar los riesgos a los cuales se encontrará expuesto en el desarrollo de sus labores de Trabajador Multifuncional, en nuestras diversas sucursales.',
                                '\n\n',
                                'Así también declaro bajo mi firma, haber recibido, leído y comprendido el presente documento, del cual doy fé de conocer el contenido de éste y me hago responsable de su estricto cumplimiento en cada uno de sus artículos, no puediendo alegar desconocimiento de su texto a contar de la fecha',
                                { text: ' ' + this.short_current_date + '. ', bold: true },
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL REGLAMENTO INTERNO DE ORDEN, HIGIENE Y SEGURIDAD',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'Se deja expresa constancia, de acuerdo con lo establecido en el D.S. N° 40, que he recibido en forma gratuita un ejemplar del Reglamento Interno de Orden, Hiege y Seguridad por parte de la empresa JIS PARKING SPA. El cual se busca informar los riesgos a los cuales se encontrará expuesto en el desarollo de sus labores de',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                'en nuestras diversas sucursales.',
                                '\n\n',
                                'Así también declaro bajo mi firma, haber recibido, leído y comprendido el presente documento, del cual doy fé de conocer el contenido de éste y me hago responsable de su estricto cumplimiento en cada uno de sus artículos, no pudiendo alegar desconocimiento de su texto a contar de la fecha',
                                { text: ' ' + this.short_current_date + '.', bold: true }
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'CONTROL DE ENTREGA, TOMA DE CONOCIMIENTO Y ACUSO DE RECIBO DEL REGLAMENTO INTERNO DE ORDEN, HIGIENE Y SEGURIDAD (RIOHS) Y REGISTRO DE RECEPCION DE OBLIGACION DE INFORMAR (ODI). Instructivo Covid-19',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'De acuerdo con lo establecido en el D.S. N° 40, que aprueba el reglamento sobre prevención de los riesgos profesionales en su Título VI, Art 21. referido a "las obligaciones de informar de los riesgos laborales" el trabajador',
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula de identidad',
                                { text: ' ' + this.employee_personal_data.visual_rut + ' ' , bold: true },
                                'quien desempeña las labores en la empresa como',
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + ', ', bold: true },
                                ', se encuentra en conocimiento de los riesgos por exposición laboral a COVID-19 y las medidas que se debe tomar para evitar su contagio.', 
                                '\n\n',
                                'Además, se solicita que se respeten las restantes normas de higiene y seguridad (Principalmente las indicaciones RIOHS) y participe activamente en las actividades de prevención.',
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ENTREGA DE ELEMENTOS DE PROTECCION PERSONAL',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: [
                                'De acuerdo a lo estipulado en la Ley 16.744, Art. 68 inciso tres “Las empresas deberán proporcionar a sus trabajadores, los equipos e implementos de protección necesarios, no pudiendo en caso alguno cobrarles su valor”.',
                                '\n\n',
                                { text: 'RUT: ' , bold: true },
                                { text: ' ' + this.employee_personal_data.visual_rut + '. ' },
                                '\n\n',
                                { text: 'NOMBRE: ' , bold: true },
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + '. '},
                                '\n\n',
                                { text: 'CARGO: ' , bold: true },
                                { text: ' ' + this.employee_labor_data.JobPositionModel.job_position + '. ' },
                                '\n\n',
                                { text: 'SUCURSAL: ' , bold: true },
                                { text: ' ' + this.employee_labor_data.BranchOfficeModel.branch_office + '. ' },
                                '\n\n',
                                { text: 'ELEMENTOS: ' , bold: true },
                                { text: '_______________________________________________________________________________________________________. ' }
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        '\n\n',
                        {
                            table: {
                                widths: ['*', '*'],
                                body: [
                                        [
                                            {
                                                image: company_signature,
                                                width: 80,
                                                alignment: 'center',
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, 0],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                        {
                            image: logo,
                            width: 50,
                            alignment: 'left',
                            margin: [0, 0, 0, 10],
                        },
                        {
                            text: 'ANEXO DE CONTRATO DE TRABAJO BONO META MENSUAL',
                            bold: true,
                            alignment: 'center',
                            fontSize: 10,
                            margin: [0, 30, 0, 20],
                        },
                        {
                            text: ['En Estación Central,',
                                { text: ' ' + current_date + ' ', bold: true },
                                'entre',
                                { text: ' ' + 'JIS Parking SPA', bold: true },
                                '., sociedad del giro administración de estacionamientos y parquímetros, Rol Único Tributario',
                                { text: '76063822-6,' + ' ', bold: true },
                                'representada por don',
                                { text: ' ' + 'MARCELO ALEJANDRO INZUNZA GONZÁLEZ' , bold: true },
                                ' cédula de identidad número',
                                { text: ' ' + '10.033.741-K,' + ' ' , bold: true },
                                'en adelante “EMPLEADOR”, ambos con domicilio en',
                                { text: ' ' + 'Matucana número 40,' + ' ' , bold: true },
                                'comuna de',
                                { text: ' ' + 'Estación Central' + ' ' , bold: true },
                                'y ciudad',
                                { text: ' ' + 'Santiago', bold: true },
                                ', y Sr(a)', 
                                { text: ' ' + this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname + ' ' , bold: true },
                                'cédula nacional de identidad número',
                                { text: ' ' + this.employee_personal_data.visual_rut + ', ', bold: true },
                                'con domicilio en',
                                { text: ' ' + this.employee_labor_data.EmployeeLaborDatumModel.address + ', ', bold: true },
                                'perteneciente a la comuna',
                                { text: ' ' + this.employee_labor_data.CommuneModel.commune + ', ', bold: true },
                                { text: ' de ' + this.employee_labor_data.RegionModel.region + ', ', bold: true },
                                'de estado civil',
                                { text: ' de ' + this.employee_labor_data.CivilStateModel.civil_state + ', ', bold: true },
                                'en adelante “TRABAJADOR”, quienes manifiestan haber convenido en la celebración del siguiente anexo de contrato de trabajo:',
                                '\n\n',
                                { text: 'PRIMERO: ', bold: true },
                                'Del Motivo. Las partes han pactado el otorgamiento de una asignación de remuneración denominado BONO META MENSUAL, el cual será pagado por Jis Parking como una forma de premiar la meta venta propuesta por la empresa.',
                                '\n\n',
                                { text: 'SEGUNDO: ', bold: true },
                                'Del Monto y condiciones. Jis Parking SPA y el Trabajador pactan que el BONO META MENSUAL será un incentivo económico al cual postulara de manera mensual para cumplir con el presupuesto de venta asignado para cada mes, donde existirán dos formas de pago según cumplimiento de ventas:'
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 40],
                            lineHeight: 1.5,
                        },
                        {
                            image: bonuses,
                            width: 300,
                            alignment: 'center',
                            margin: [0, -30, 0, 0],
                        },
                        {
                            text: [
                                'Requisitos para postular a la bonificación:',
                                'Haber trabajado al menos 20 días durante el mes a cumplir la meta.',
                                '\n\n',
                                { text: 'TERCERA: ', bold: true },
                                'De las Cotizaciones. Para todos los efectos legales, el BONO META MENSUAL constituye remuneración imponible, por lo cual la empresa efectuará las deducciones legales correspondientes.',
                                '\n\n',
                                { text: 'CUARTO: ', bold: true },
                                'De la Suscripción. El presente anexo de contrato se firma en dos ejemplares del mismo tenor y fecha, quedando uno en poder del(la) trabajador(a) y otro en poder del empleador.'
                            ],
                            fontSize: 9,
                            alignment: 'justify',
                            margin: [0, 0, 0, 30],
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
                                                margin: [0, 20, 0, 0],
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
                                                text: 'RUT: ' + this.employee_personal_data.visual_rut ,
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -30, 0, -20],
                                            },
                                        ],
                                        [
                                            {
                                                text: 'EMPLEADOR',
                                                alignment: 'center',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [0, -20, 0, 0],
                                            },
                                            {
                                                text: 'TRABAJADOR',
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
                    pageMargins: [80, 40, 80, 70],
                    styles: {
                        defaultStyle: {
                            font: 'Helvetica',
                        },
                    },
                    footer: function(currentPage, pageCount) {
                                    return {
                            stack: [
                                {
                                    text: '', // Espacio en blanco para ajustar el espacio superior
                                    margin: [0, 10], // Ajusta el espacio superior a 10 puntos (puedes ajustar este valor)
                                },
                                {
                                    text: `${currentPage.toString()} de ${pageCount}`,
                                    alignment: 'center',
                                    fontSize: 7,
                                }
                            ]
                        };
                    },
                }

                pdfMake.createPdf(docDefinition).download('contrato.pdf')
            }
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
                let localDate = new Date(date);
                let utcDate = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());
                return format(utcDate, 'dd-MM-yyyy');
            }
        },
        async replacedotandtransformtoint(text) {

            const textWithoutDots = text.replace(/\./g, '');
            const toNumber = Number(textWithoutDots);
            return toNumber;
        },
        async updateLaborData() {
            const accessToken = localStorage.getItem('accessToken');

            this.loading = true

            if(this.regime_input != 1) {
                this.pention_input = 0
            }

            if(this.apv_payment_type_input == '') {
                this.apv_payment_type_input = 3

                this.apv_amount = 0
            }

            if (this.extra_health_amount_input == '' || this.extra_health_amount_input == null || this.extra_health_amount_input == undefined || this.extra_health_amount_input == 'None') {
                this.extra_health_amount_input = 0
            }

            const dataToSend = {
                rut: this.$route.params.rut,
                contract_type_id: this.contract_type_input,
                branch_office_id: this.branch_office_input,
                address: this.address_input,
                region_id: this.region_input,
                commune_id: this.commune_input,
                civil_state_id: this.civil_state_input,
                health_id:this.health_input,
                pention_id:this.pention_input,
                job_position_id:this.job_position_input,
                employee_type_id: this.employee_type_input,
                regime_id:this.regime_input,
                entrance_pention: this.entrance_pention_input,
                entrance_company: this.entrance_company_input,
                entrance_health: this.entrance_health_input,
                salary:  await this.replacedotandtransformtoint(this.salary_input),
                collation:  await this.replacedotandtransformtoint(this.collation_input),
                locomotion:  await this.replacedotandtransformtoint(this.locomotion_input),
                extra_health_amount:  this.extra_health_amount_input,
                extra_health_payment_type_id: this.extra_health_payment_type_input,
                apv_payment_type_id: this.apv_payment_type_input,
                apv_amount: await this.replacedotandtransformtoint(this.apv_amount_input),
            };  

            try {
                
                const response = await axios.patch('https://apijis.com/employee_labor_data/update/'+ this.$route.params.rut, dataToSend, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });
                
                this.validate_update_status = response.data.message;

                if (response.data.message == 1) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

                this.getEmployeeLaborData();

                this.loading = false

            } catch(error) {
                console.log(error);
                this.loading = false
            }
        },
        formatNumber(number) {
            return number.toLocaleString('de-DE');
        },
        async getEmployeeLaborData() {
          const accessToken = localStorage.getItem('accessToken');
            try {
                const response = await axios.get('https://apijis.com/employee_labor_data/edit/'+ this.$route.params.rut, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                const decodedData = JSON.parse(response.data.message)
                console.log(response.data.message)
                this.employee_labor_data = decodedData

                this.contract_type_input    = decodedData.EmployeeLaborDatumModel.contract_type_id;
                this.branch_office_input  = decodedData.EmployeeLaborDatumModel.branch_office_id;
                this.address_input      = decodedData.EmployeeLaborDatumModel.address;
                this.region_input   = decodedData.EmployeeLaborDatumModel.region_id;
                this.civil_state_input      = decodedData.EmployeeLaborDatumModel.civil_state_id;
                this.health_input   = decodedData.EmployeeLaborDatumModel.health_id;
                this.pention_input   = decodedData.EmployeeLaborDatumModel.pention_id;
                this.job_position_input     = decodedData.EmployeeLaborDatumModel.job_position_id;
                this.employee_type_input    = decodedData.EmployeeLaborDatumModel.employee_type_id;
                this.regime_input   = decodedData.EmployeeLaborDatumModel.regime_id;
                this.entrance_company_input = decodedData.EmployeeLaborDatumModel.entrance_company;
                this.entrance_pention_input     = decodedData.EmployeeLaborDatumModel.entrance_pention;
                this.entrance_health_input      = decodedData.EmployeeLaborDatumModel.entrance_health;
                this.salary_input   = this.formatNumber(decodedData.EmployeeLaborDatumModel.salary);
                this.collation_input    = this.formatNumber(decodedData.EmployeeLaborDatumModel.collation);
                this.locomotion_input   = this.formatNumber(decodedData.EmployeeLaborDatumModel.locomotion);
                this.extra_health_amount_input      = this.formatNumber(decodedData.EmployeeLaborDatumModel.extra_health_amount);
                this.extra_health_payment_type_input    = decodedData.EmployeeLaborDatumModel.extra_health_payment_type_id;
                this.apv_payment_type_input     = decodedData.EmployeeLaborDatumModel.apv_payment_type_id;
                this.apv_amount_input = Number(decodedData.EmployeeLaborDatumModel.apv_amount).toLocaleString('de-DE');
                this.getCommunes();
                this.commune_input = decodedData.EmployeeLaborDatumModel.commune_id;

            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener los datos laborales:', error);
                    
                }
            }
            
        },
        async getPentions() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/pentions/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.pentions = response.data.message;

                this.loading_1 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de pensiones:', error);
                }
            }
        },
        async getExpirations() {
            this.loading = true
            const accessToken = localStorage.getItem('accessToken');

            const dataToSend = {
                rut: this.$route.params.rut
            };  

            try {
                const response = await axios.post('https://apijis.com/contract_data/expiration', dataToSend, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.first_expiration = response.data.first_expiration;
                this.second_expiration = response.data.second_expiration;

                    this.loading_1 = false;
                    this.loading_2 = false;
                    this.loading_3 = false;
                    this.loading_4 = false;
                    this.loading_5 = false;
                    this.loading_6 = false;
                    this.loading_7 = false;
                    this.loading_8 = false;
                    this.loading_9 = false;
                    this.loading_10 = false;
                    this.loading_11 = false;
                    this.loading_12 = false;
                    this.loading_13 = false;
                    this.loading = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de vencimientos:', error);
                    this.loading_1 = false;
                    this.loading_2 = false;
                    this.loading_3 = false;
                    this.loading_4 = false;
                    this.loading_5 = false;
                    this.loading_6 = false;
                    this.loading_7 = false;
                    this.loading_8 = false;
                    this.loading_9 = false;
                    this.loading_10 = false;
                    this.loading_11 = false;
                    this.loading_12 = false;
                    this.loading_13 = false;
                    this.loading = false;
                }
            }
        },
        async getHealths() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/healths/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.healths = response.data.message;

                this.loading_3 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de isapres:', error);
                }
            }
        },
        async getRegimes() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/regimes/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.regimes = response.data.message;

                this.loading_4 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de regimenes:', error);
                }
            }
        },
        async getJobPositions() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/job_positions/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.job_positions = response.data.message;

                this.loading_5 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de tipos de cargos:', error);
                }
            }
        },
        async getEmployeeTypes() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/employee_types/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.employee_types = response.data.message;

                this.loading_6 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de tipos de empleados:', error);
                }
            }
        },
        async getContractTypes() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/contract_types/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.contract_types = response.data.message;

                this.loading_7 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de tipos de contratos:', error);
                }
            }
        },
        async getBranchOffices() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/branch_offices/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.branch_offices = response.data.message;

                this.loading_8 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de sucursales:', error);
                }
            }
        },
        async getCommunes() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/communes/' + this.region_input, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });
                console.log(response);
                //ordena las comunas alfabeticamente y luego las guarda en la variable this.communes
                
                this.communes = response.data.message;

            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de comunas:', error);
                }
            }
        },
        async getRegions() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/regions/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.regions = response.data.message;

                this.loading_9 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de regiones:', error);
                   
                }
            }
        },
        async getCivilStates() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/civil_states/', {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                this.civil_states = response.data.message;

                this.loading_10 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de estados civiles:', error);
                    
                }
            }
        },
        async getEmployeeContracts() {
            const accessToken = localStorage.getItem('accessToken');

            try {
                const response = await axios.get('https://apijis.com/employee_contracts/edit/' + this.$route.params.rut, {
                    headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
                    },
                });

                const decodedData = JSON.parse(response.data.message)

                this.employee_contracts = decodedData;

                this.loading_11 = false;
            } catch (error) {
                if (error.message == "Request failed with status code 401") {
                    localStorage.removeItem('accessToken');
                    window.location.reload();
                } else {
                    console.error('Error al obtener la lista de isapres:', error);
                    
                }
            }
        },
        async getPersonalDataEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employees/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                )

                this.employee_personal_data = JSON.parse(response.data.message)
                this.employee_personal_data = this.employee_personal_data.employee_data
                this.full_name = this.employee_personal_data.names + ' ' + this.employee_personal_data.father_lastname + ' ' + this.employee_personal_data.mother_lastname

                this.loading_12 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de datos personales:',
                        error
                    )
                }
            }
        },
        // async getEndDocuments() {
        //     const accessToken = localStorage.getItem('accessToken');

        //     try {
        //         const response = await axios.get('https://apijis.com/end_documents/edit/' + this.$route.params.rut, {
        //             headers: {
        //             accept: 'application/json',
        //             Authorization: `Bearer ${accessToken}` // Agregar el token al encabezado de la solicitud
        //             },
        //         });

        //         this.end_documents = response.data.message;

        //         this.loading_13 = false;
        //     } catch (error) {
        //         if (error.message == "Request failed with status code 401") {
        //             localStorage.removeItem('accessToken');
        //             window.location.reload();
        //         } else {
        //             console.error('Error al obtener la lista de isapres:', error);
        //         }
        //     }
        // },
    },
    async mounted() {
        const rol_id = localStorage.getItem('rol_id')

        this.rol_id = rol_id
        this.created_employee_contract = localStorage.getItem(
            'created_contract_employee',
        )

        if (this.created_employee_contract == 1) {
            localStorage.removeItem('created_employee_contract')

            this.created_employee_contract = ''
        }
   
        await this.getEmployeeLaborData();
        await this.getContractTypes();
        await this.getBranchOffices();
        await this.getRegions();
        await this.getCivilStates();
        await this.getEmployeeTypes();
        await this.getJobPositions();
        await this.getRegimes();
        await this.getHealths();
        await this.getPentions();
        await this.getEmployeeContracts();
        await this.getPersonalDataEmployee();
        await this.getExpirations();
    },
}
</script>

<style scoped>
    .active {
        background-color: #2563EB;
        color: #fff;
    }
</style>
