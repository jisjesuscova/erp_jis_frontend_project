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
            <EmployeeName  v-if="rol_id==4" :names="full_name" />
            <hr class="pb-10">

            <h2 class="text-4xl dark:text-white pb-10">Datos Personales</h2>

            <EmployeeMenu />

            <div class="mt-10">
                <div
                    id="bar-with-underline-1"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-1"
                >
                    <div
                        v-if="validate_rut_status == 1"
                        class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                        role="alert"
                    >
                        El RUT ya está
                        <span class="font-bold">registrado</span>.
                    </div>
                    <div
                        v-if="validate_cellphone_status == 1"
                        class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                        role="alert"
                    >
                        El celular ya está
                        <span class="font-bold">registrado </span> por
                        <span class="font-bold"> {{ fullNameRut }} </span>.
                    </div>
                    <div
                        v-if="isValidRut == false"
                        class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                        role="alert"
                    >
                        El RUT no es <span class="font-bold">correcto</span>.
                    </div>

                    <div
                        class="bg-green-500 text-sm text-white rounded-md p-4 mb-10"
                        role="alert"
                        v-if="updated_personal_employee_data == 1"
                    >
                        Registro actualizado con
                        <span class="font-bold">éxito</span>.
                    </div>

                    <div
                        class="bg-yellow-500 text-sm text-white rounded-md p-4 mb-10"
                        role="alert"
                        v-if="rol_id != 4"
                    >
                        La ficha es
                        <span class="font-bold">solamente informátiva</span>. No
                        podrá editar los datos.
                    </div>

                    <div v-if="rol_id == 4">
                        <div
                            v-if="
                                uploaded_picture != '' &&
                                uploaded_picture != undefined
                            "
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
                                        Foto
                                    </p>
                                </div>

                                <div
                                    v-if="uploaded_picture != ''"
                                    class="text-center pt-10 pb-10"
                                >
                                    <img
                                        class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                                        :src="uploaded_picture"
                                        alt="Image Description"
                                    />
                                </div>
                            </div>
                            <hr
                                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                            />
                        </div>
                    </div>
                    <div v-else>
                        <div
                            class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                        >
                            <form @submit.prevent="updatePicture">
                                <div
                                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <p
                                        class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                    >
                                        Foto
                                    </p>
                                </div>

                                <div
                                    v-if="uploaded_picture != ''"
                                    class="text-center pt-10 pb-10"
                                >
                                    <img
                                        class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
                                        :src="uploaded_picture"
                                        alt="Image Description"
                                    />
                                </div>

                                <div
                                    v-if="uploaded_picture == ''"
                                    class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                >
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Foto</label
                                    >
                                    <input
                                        type="file"
                                        name="file-input-medium"
                                        id="file-input-medium"
                                        class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
                                        required
                                        @change="handleFileChange"
                                    />
                                </div>

                                <div
                                    v-if="uploaded_picture == ''"
                                    class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                >
                                    <button
                                        :disabled="validationsPassed"
                                        type="submit"
                                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                    >
                                        Guardar
                                        <i class="fa-solid fa-check"></i>
                                    </button>

                                    <router-link
                                        v-if="rol_id == 4"
                                        href="javascript:;"
                                        to="/employees"
                                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    >
                                        Cancelar
                                        <i class="fa-solid fa-remove"></i>
                                    </router-link>
                                </div>

                                <div
                                    v-if="uploaded_picture != ''"
                                    class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                >
                                    <button
                                        :disabled="validationsPassed"
                                        @click="confirmPicture"
                                        type="button"
                                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    >
                                        Borrar
                                        <i class="fa-solid fa-remove"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> 

                    <div
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="updatePersonalDataEmployee">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Datos Personales
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
                                        >Sexo</label
                                    >
                                    <select
                                        v-model="gender_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Sexo -</option>
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
                                        <option value="">
                                            - Nacionalidad -
                                        </option>
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
                                        v-model="privilege_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Rol -</option>
                                        <option value="1">Colaborardor</option>
                                        <option value="14">
                                            Administrador
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="rol_id == 4"
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
                                        Actualizar
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
                    <hr
                        class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                    />

                    <div
                        class="bg-green-500 text-sm text-white rounded-md p-4 mb-10"
                        role="alert"
                        v-if="
                            updated_employee_bank_account == 1 &&
                            status_bank_id == 1
                        "
                    >
                        Registro actualizado con
                        <span class="font-bold">éxito</span>.
                    </div>
                    <div
                        class="bg-green-500 text-sm text-white rounded-md p-4 mb-10"
                        role="alert"
                        v-if="
                            created_employee_bank_account == 1 &&
                            status_bank_id == 0
                        "
                    >
                        Registro agregado con
                        <span class="font-bold">éxito</span>.
                    </div>
                    <div
                        v-if="status_bank_id == 1"
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="updateEmployeeBankAccount">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Cuenta Bancaria de Pago
                                </p>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Banco</label
                                    >
                                    <select
                                        v-model="bank_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Banco -</option>
                                        <option
                                            v-for="bank in banks"
                                            :key="bank.id"
                                            :value="bank.id"
                                        >
                                            {{ bank.bank }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Cuenta</label
                                    >
                                    <select
                                        v-model="account_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Cuenta -
                                        </option>
                                        <option value="1">Corriente</option>
                                        <option value="2">Vista</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >N° de Cuenta</label
                                    >
                                    <input
                                        type="text"
                                        id="account_number_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="N° de Cuenta"
                                        v-model="account_number_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="rol_id == 4"
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
                                        Actualizar
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
                    <div
                        v-if="status_bank_id == 0"
                        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                        <form @submit.prevent="createEmployeeBankAccount">
                            <div
                                class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                            >
                                <p
                                    class="mt-1 text-sm text-gray-500 dark:text-gray-500"
                                >
                                    Cuenta Bancaria de Pago
                                </p>
                            </div>
                            <div
                                class="grid md:grid-cols-3 sm:grid-cols-12 gap-4 p-4 md:p-5"
                            >
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Banco</label
                                    >
                                    <select
                                        v-model="bank_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">- Banco -</option>
                                        <option
                                            v-for="bank in banks"
                                            :key="bank.id"
                                            :value="bank.id"
                                        >
                                            {{ bank.bank }}
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >Tipo de Cuenta</label
                                    >
                                    <select
                                        v-model="account_type_input"
                                        required
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            - Tipo de Cuenta -
                                        </option>
                                        <option value="1">Corriente</option>
                                        <option value="2">Vista</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        for="hs-validation-name-error"
                                        class="block text-sm font-medium mb-2 dark:text-white"
                                        >N° de Cuenta</label
                                    >
                                    <input
                                        type="text"
                                        id="account_number_input"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="N° de Cuenta"
                                        v-model="account_number_input"
                                        required
                                    />
                                </div>
                            </div>
                            <div
                                class="grid md:grid-cols-8 sm:grid-cols-12 gap-4 p-4 md:p-5"
                                v-if="rol_id == 4"
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
                                        Guardar
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
            </div>

            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                v-if="signature != ''"
            />
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"
                v-if="signature == '' && rol_id !=4"
            />

            <div
                v-if="signature == '' && rol_id !=4"
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Firma
                    </p>
                </div>
                <div
                    class="grid md:grid-cols-1 sm:grid-cols-12 gap-4 p-4 md:p-5"
                >
                    <div>
                        <div
                            class="bg-red-500 text-sm text-white rounded-md p-4 mb-10 mt-10"
                            role="alert"
                        >
                            <i class="fa-solid fa-circle-exclamation"></i> Es la
                            firma que se uilizará para los documentos.
                        </div>
                        <Vue3Signature
                            ref="signature1"
                            :sigOption="state.option"
                            :w="'70%'"
                            :h="'400px'"
                            :disabled="state.disabled"
                            class="example"
                        ></Vue3Signature>
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
                        @click="save('image/jpeg')"
                        type="button"
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Guardar
                        <i class="fa-solid fa-check"></i>
                    </button>

                    <button
                        :disabled="validationsPassed"
                        @click="clear"
                        type="button"
                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      
                    >
                        Borrar
                        <i class="fa-solid fa-remove"></i>
                    </button>
                </div>
            </div>

            <div
                v-if="signature != ''"
                class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700"
                >
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
                        Firma
                    </p>
                </div>
                <div class="text-center">
                    <img
                        :src="signature"
                        style="height: 200px"
                        class="mx-auto my-auto"
                    />
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
                        :disabled="validationsPassed"
                        @click="confirmSignature"
                        type="button"
                        class="py-3 px-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        v-if="rol_id !=4"
                    >
                        Borrar
                        <i class="fa-solid fa-remove"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import EmployeeMenu from '../components/EmployeeMenu.vue'
import EmployeeName from '../components/EmployeeName.vue'
import { mask } from 'vue-the-mask'

export default {
    directives: { mask },
    components: {
        EmployeeMenu,
        EmployeeName
    },
    data() {
        return {
            state: {
                count: 0,
                option: {
                    penColor: 'rgb(0, 0, 0)',
                    backgroundColor: 'rgb(255, 255, 255)',
                },
                disabled: false,
            },
            signature1: null,
            created_employee_bank_account: 0,
            updated_employee_bank_account: 0,
            updated_personal_employee_data: 0,
            loading_1: true,
            loading_2: true,
            loading_3: true,
            loading_4: true,
            loading: true,
            nationalities: [],
            banks: [],
            bank_input: '',
            account_type_input: '',
            rut_input: '',
            names_input: '',
            father_lastname_input: '',
            mother_lastname_input: '',
            gender_input: '',
            nationality_input: '',
            email_input: '',
            cellphone_input: '',
            born_date_input: '',
            privilege_input: '',
            validate_cellphone_status: 0,
            validate_rut_status: 0,
            isValidRut: true,
            validationsPassed: false,
            account_number_input: '',
            status_bank_id: 0,
            rol_id: '',
            signature: '',
            picture: '',
            uploaded_picture: '',
            employeeData: null,
            fullNameRut: null,
            rolAndPictureValidate: false,
            created_employee_bank_account: 0,
            full_name: '',
        }
    },
    methods: {
        handleFileChange(event) {
            const selectedFile = event.target.files[0]

            this.picture = selectedFile
        },
        async confirmSignature() {
            const shouldDelete = window.confirm(
                '¿Estás seguro de que deseas borrar la firma?'
            )

            if (shouldDelete) {
                await this.deleteSignature()
            }
        },
        async confirmPicture() {
            const shouldDelete = window.confirm(
                '¿Estás seguro de que deseas borrar la foto?'
            )

            if (shouldDelete) {
                await this.deletePicture()
            }
        },
        async checkPhone() {
            const celularKeywords =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

            if (celularKeywords.test(navigator.userAgent)) {
                return 1
            } else {
                return 2
            }
        },
        async save(t) {
            const check_phone_status = await this.checkPhone()

            this.loading = true

            if (this.signature1) {
                try {
                    const formData = new FormData()
                    formData.append('rut', this.$route.params.rut)
                    formData.append('signature', this.signature1.save(t))
                    formData.append('signature_type_id', check_phone_status)

                    const accessToken = localStorage.getItem('accessToken')

                    const response = await axios.post(
                        'https://apijis.com/employees/signature/',
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'multipart/form-data',
                            },
                        }
                    )

                    this.getPersonalDataEmployee()
                } catch (error) {
                    console.error(error)
                }
            }
        },
        clear() {
            if (this.signature1) {
                this.signature1.clear()
            }
        },
        async deletePicture() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.delete(
                    'https://apijis.com/employees/delete/picture/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.uploaded_picture = ''

                window.location.reload()
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los daos de la cuenta bancaria:',
                        error
                    )
                }
            }
        },
        async deleteSignature() {
            const accessToken = localStorage.getItem('accessToken')

            this.loading = true

            try {
                const response = await axios.delete(
                    'https://apijis.com/employees/delete/signature/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.signature = ''

                window.location.reload()
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los daos de la cuenta bancaria:',
                        error
                    )
                }
            }
        },
        async updatePicture() {
            this.loading = true

            const formData = new FormData()
            formData.append('rut', this.$route.params.rut)
            formData.append('picture', this.picture)

            const accessToken = localStorage.getItem('accessToken')
            console.log(formData)
            console.log(this.picture)
            axios
                .post(
                    'https://apijis.com/employees/upload/picture',
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then((response) => {
                    console.log(response)

                    this.getPersonalDataEmployee()
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
        },
        createEmployeeBankAccount() {
            this.loading = true

            const dataToSend = {
                bank_id: this.bank_input,
                account_type_id: this.account_type_input,
                rut: this.$route.params.rut,
                account_number: this.account_number_input,
            }

            const accessToken = localStorage.getItem('accessToken')

            axios
                .post('https://apijis.com/employee_bank_accounts/store', dataToSend, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: 'application/json',
                    },
                })
                .then((response) => {
                    console.log(response)

                    window.location.reload();

                    this.loading = false

                    this.created_employee_bank_account = 1
                })
                .catch((error) => {
                    console.error(error)
                    this.loading = false
                })
        },
        async updateEmployeeBankAccount() {
            this.loading = true
            const rut = this.rut_input.split('-')
            const numeric_rut = rut[0]

            try {
                const dataToSend = {
                    bank_id: this.bank_input,
                    account_type_id: this.account_type_input,
                    rut: numeric_rut,
                    account_number: this.account_number_input,
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.patch(
                    'https://apijis.com/employee_bank_accounts/update/' +
                        this.$route.params.rut,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.updated_employee_bank_account = 1

                this.loading = false
            } catch (error) {
                console.error(error)
            }
        },
        async updatePersonalDataEmployee() {
            this.loading = true
            const rut = this.rut_input.split('-')
            const numeric_rut = rut[0]

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
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.patch(
                    'https://apijis.com/employees/update/' +
                        this.$route.params.rut,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_1 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    rut: numeric_rut,
                    names: this.names_input,
                    father_lastname: this.father_lastname_input,
                    privilege: this.control_user_rol_input,
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.patch(
                    'https://apijis.com/clock_users/update/' +
                        this.$route.params.rut,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_2 = false
            } catch (error) {
                console.error(error)
            }

            try {
                const dataToSend = {
                    clock_rol_id: this.control_user_rol_input,
                    rut: this.rut_input,
                    names: this.names_input,
                    father_lastname: this.father_lastname_input,
                }

                const accessToken = localStorage.getItem('accessToken')

                const response = await axios.patch(
                    'https://apijis.com/users/update/' +
                        this.$route.params.rut,
                    dataToSend,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )

                this.loading_3 = false
            } catch (error) {
                console.error(error)
            }

            if (
                this.loading_1 == false &&
                this.loading_2 == false &&
                this.loading_3 == false
            ) {
                this.updated_personal_employee_data = 1

                window.scrollTo(0, 0)

                this.loading = false
            }
        },
        onRutBlur() {
            this.validateRutExist()
            this.onValidateRutBlur()
        },
        validateRut: function (completed_rut) {
            completed_rut = completed_rut.replace(/‐/g, '-')

            if (!/^[0-9]+[-]{0,1}[0-9kK]{1}$/.test(completed_rut)) {
                return false
            }

            let [rut, digv] = completed_rut.split('-')

            if (digv === 'K') {
                digv = 'k'
            }

            return this.dv(rut) === digv
        },
        dv: function (T) {
            let M = 0
            let S = 1
            for (; T; T = Math.floor(T / 10))
                S = (S + (T % 10) * (9 - (M++ % 6))) % 11
            return S ? String(S - 1) : 'k'
        },
        onCellphoneInput() {
            this.cellphone_input = this.cellphone_input.replace(/\D/g, '')
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
                    }
                )

                this.validate_cellphone_status = response.data.message[0]
                if (response.data.message[0] == 1) {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                if (this.validate_cellphone_status == 1) {
                    this.validationsPassed = true
                    // this.employeeData = response.data.message[1]
                    this.fullNameRut = `
                    Trabajador: 
                    ${this.names_input} 
                    ${this.father_lastname_input} 
                    ${this.mother_lastname_input}. 
                    RUT:
                    ${this.rut_input}`

                    return this.fullNameRut
                } else {
                    this.validationsPassed = false
                }
            } catch (error) {
                console.error(
                    'Error al obtener la validación del celular:',
                    error
                )
            }
        },
        validateRutExist() {
            const accessToken = localStorage.getItem('accessToken')
            var rut = this.rut_input.split('-')

            axios
                .get('https://apijis.com/employees/validate_rut/' + rut[0], {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        accept: 'application/json',
                    },
                })
                .then((response) => {
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
                })
                .catch((error) => {
                    this.validate_rut_status = 0

                    this.validationsPassed = false
                })
        },
        onValidateRutBlur() {
            this.isValidRut = this.validateRut(this.rut_input)
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
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                const decodedData = JSON.parse(response.data.message)

                this.rut_input = decodedData.employee_data.visual_rut
                this.names_input = decodedData.employee_data.names
                this.father_lastname_input =
                    decodedData.employee_data.father_lastname
                this.mother_lastname_input =
                    decodedData.employee_data.mother_lastname
                this.gender_input = decodedData.employee_data.gender_id
                this.nationality_input =
                    decodedData.employee_data.nationality_id
                this.email_input = decodedData.employee_data.personal_email
                this.cellphone_input = decodedData.employee_data.cellphone
                this.born_date_input = decodedData.employee_data.born_date

                if (decodedData.employee_data.privilege == undefined) {
                    this.privilege_input = ''
                } else {
                    this.privilege_input = decodedData.employee_data.privilege
                }

                if (decodedData.signature == null) {
                    this.signature = ''
                } else {
                    this.signature = decodedData.signature
                }

                if (decodedData.picture == '' || decodedData.picture == null) {
                    this.uploaded_picture = ''
                } else {
                    this.uploaded_picture = decodedData.picture
                }

                localStorage.setItem('signature', decodedData.signature)
                localStorage.setItem(
                    'signature_type_id',
                    decodedData.employee_data.signature_type_id
                )

                this.full_name = decodedData.employee_data.names + ' ' + decodedData.employee_data.father_lastname + ' ' + decodedData.employee_data.mother_lastname

                this.loading = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de nacionalidades:',
                        error
                    )
                }
            }
        },
        async getBankAccountEmployee() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/employee_bank_accounts/edit/' +
                        this.$route.params.rut,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.bank_input = response.data.message.bank_id
                this.account_type_input = response.data.message.account_type_id
                this.account_number_input = response.data.message.account_number

                if (
                    this.bank_input == '' &&
                    this.account_type_input == '' &&
                    this.account_number_input == ''
                ) {
                    this.status_bank_id = 0
                } else {
                    this.status_bank_id = 1
                }

                this.loading_2 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener los daos de la cuenta bancaria:',
                        error
                    )
                }
            }
        },
        async getNationalities() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.get(
                    'https://apijis.com/nationalities/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                this.nationalities = response.data.message

                this.loading_3 = false
            } catch (error) {
                if (error.message == 'Request failed with status code 401') {
                    localStorage.removeItem('accessToken')
                    window.location.reload()
                } else {
                    console.error(
                        'Error al obtener la lista de sucursales:',
                        error
                    )
                }
            }
        },
        async getBanks() {
            const accessToken = localStorage.getItem('accessToken')

            try {
                const response = await axios.post(
                    'https://apijis.com/banks/',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${accessToken}`, // Agregar el token al encabezado de la solicitud
                        },
                    }
                )

                

                this.banks = response.data.message

                this.loading_4 = false
            } catch (error) {
                console.error('Error al obtener la lista de bancos:', error)
            }
        },
    },
    async mounted() {

        const rol_id = localStorage.getItem('rol_id')

        this.rol_id = rol_id

        await this.getBankAccountEmployee()
        await this.getBanks()
        await this.getNationalities()
        await this.getPersonalDataEmployee()

        if (this.loading == false) {
            this.signature1 = await this.$refs.signature1
        }
    },
}
</script>

<style scoped>
.example {
    margin: 0 auto;
    border: 1px solid #000;
}
</style>
