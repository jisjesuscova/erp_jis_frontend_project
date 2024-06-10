<template>
    <div
        id="docs-sidebar"
        class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
    >
        <div class="px-6 flex justify-center">
            <router-link
                class="flex-none text-xl font-semibold dark:text-white"
                href="javascript:;"
                aria-label="Brand"
                to="/"
            >
                <img
                    class="h-20 max-w-sm rounded-sm"
                    src="../assets/images/logo.png"
                    alt="image description"
                />
            </router-link>
        </div>
        <nav
            class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
        >
            <ul class="space-y-1.5" v-if="rol_id == 1">
                <li>
                    <router-link
                        class="flex items-center gap-x-3.5 py-2 px-2.5 bg-orange-100 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-900 dark:text-white"
                        href="javascript:;"
                        to="/"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                            />
                        </svg>
                        Inicio
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/employee/${rut}`"
                    >
                        <i class="fa-solid fa-address-card"></i>
                        Datos Personales
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/family/${rut}`"
                    >
                        <i class="fa-solid fa-people-roof"></i>
                        Familiares
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/salary_settlement/${rut}`"
                    >
                        <i class="fa-solid fa-file-contract"></i>
                        Liquidaciones
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/vacation/${rut}`"
                    >
                        <i class="fa-solid fa-plane"></i>
                        Vacaciones
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/medical_license/${rut}`"
                    >
                        <i class="fa-solid fa-truck-medical"></i>
                        Licencias
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/document_management/${rut}`"
                    >
                        <i class="fa-solid fa-file-circle-plus"></i>
                        Gestión Documental
                    </router-link>
                </li>

                <li>
                    <a
                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                        @click="logout"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Salir
                    </a>
                </li>
            </ul>
            <ul class="space-y-1.5" v-if="rol_id == 3">
                <li>
                    <router-link
                        class="flex items-center gap-x-3.5 py-2 px-2.5 bg-orange-100 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-900 dark:text-white"
                        href="javascript:;"
                        to="/"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                            />
                        </svg>
                        Inicio
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/employee/${rut}`"
                    >
                        <i class="fa-solid fa-address-card"></i>
                        Datos Personales
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/family/${rut}`"
                    >
                        <i class="fa-solid fa-people-roof"></i>
                        Familiares
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/salary_settlement/${rut}`"
                    >
                        <i class="fa-solid fa-file-contract"></i>
                        Liquidaciones
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/vacation/${rut}`"
                    >
                        <i class="fa-solid fa-plane"></i>
                        Vacaciones
                    </router-link>
                </li>

                <li>
                    <router-link
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                        :to="`/medical_license/${rut}`"
                    >
                        <i class="fa-solid fa-truck-medical"></i>
                        Licencias
                    </router-link>
                </li>

                <li class="hs-accordion" id="account-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <i class="fa-solid fa-file-circle-plus"></i>
                        Gestión Documental

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="account-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    :to="`/document_management/${rut}`"
                                >
                                    Personal
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    :to="`/requested_document_management/${rut}`"
                                >
                                    Empleados
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                        Gestión Tiempo

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                        
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/schedule"
                                >
                                <i class="fa-solid fa-calendar-days"></i>
                                    Malla Horaria
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <a
                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                        @click="logout"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Salir
                    </a>
                </li>
            </ul>
            <ul class="space-y-1.5" v-if="rol_id == 4">
                <li>
                    <router-link
                        class="flex items-center gap-x-3.5 py-2 px-2.5 bg-orange-100 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-900 dark:text-white"
                        href="javascript:;"
                        to="/"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                            />
                        </svg>
                        Inicio
                    </router-link>
                </li>
                <li class="hs-accordion" id="users-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                            ></path>
                        </svg>
                        Recursos Humanos

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="users-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul
                            class="hs-accordion-group pl-3 pt-2"
                            data-hs-accordion-always-open
                        >
                            <li class="hs-accordion" id="users-accordion-sub-1">
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    to="/employees"
                                >
                                <i class="fa-solid fa-briefcase"></i>
                                    Trabajadores
                                </router-link>
                            </li>
                            <li class="hs-accordion" id="users-accordion-sub-2">
                                <router-link
                                    to="/honoraries"
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                >
                                <i class="fa-solid fa-dollar-sign"></i>
                                    Honorarios
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="hs-accordion" id="account-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                        </svg>
                        Gestión

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="account-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <a
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                >
                                <i class="fa-solid fa-dollar-sign"></i>
                                    Honorarios
                                </a>
                            </li>
                            <li class="hs-accordion" id="users-accordion-sub-1">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
                                    Procesos

                                    <svg
                                        class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>

                                    <svg
                                        class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </button>

                                <div id="users-accordion-sub-1" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                    <ul class="pt-2 ps-2">
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/manual_inputs"
                                            >
                                                Informe de Folios
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/family_burdens"
                                            >
                                                Consumo de Apigetaway
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/family_burdens"
                                            >
                                                Estatus de Recaudación Electónica
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                    <div
                        id="account-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <a
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                >
                                <i class="fa-solid fa-dollar-sign"></i>
                                    Consumo de API
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                            ></path>
                            <path
                                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"
                            ></path>
                        </svg>
                        Gestión Documental

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/document_managements"
                                >
                                <i class="fa-solid fa-user-group"></i>
                                    Colaboradores
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Liquidaciones
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                        Gestión Tiempo

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                        
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/schedule"
                                >
                                <i class="fa-solid fa-calendar-days"></i>
                                    Malla Horaria
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                            ></path>
                            <path
                                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"
                            ></path>
                        </svg>
                        Contabilidad

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/document_managements"
                                >
                                <i class="fa-solid fa-user-group"></i>
                                    Asiento Manual
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Imputar
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Pago de Proveedores
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Procesar
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                
                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                            ></path>
                            <path
                                d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"
                            ></path>
                        </svg>
                        Abonados

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/document_managements"
                                >
                                <i class="fa-solid fa-user-group"></i>
                                    Track Dte
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Emisión
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                                    href="javascript:;"
                                    :to="`/salary_settlement`"
                                >
                                    <i class="fa-solid fa-file-contract"></i>
                                    Dte Cajero
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                        Gestión Tiempo

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                        
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/schedule"
                                >
                                <i class="fa-solid fa-calendar-days"></i>
                                    Malla Horaria
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <i class="fa-solid fa-book"></i>
                        Nómina

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/open_period"
                                >
                                    Aperturar Periodo
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/previred_indicators"
                                >
                                    Indicadores
                                </router-link>
                            </li>
                            <li class="hs-accordion" id="users-accordion-sub-1">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
                                    Input Manuales

                                    <svg
                                        class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>

                                    <svg
                                        class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </button>

                                <div id="users-accordion-sub-1" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                    <ul class="pt-2 ps-2">
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/manual_inputs"
                                            >
                                                Inputs
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/family_burdens"
                                            >
                                                Cargas Familiares
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="hs-accordion" id="users-accordion-sub-1">
                                <button type="button" class="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white">
                                    Procesar

                                    <svg
                                        class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>

                                    <svg
                                        class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </button>

                                <div id="users-accordion-sub-1" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                    <ul class="pt-2 ps-2">
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/social_law_movements"
                                            >
                                                Movimientos
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/payroll_calculation"
                                            >
                                                Nomina
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                                href="javascript:;"
                                                to="/social_laws"
                                            >
                                                Previred
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/download_salary_settlements"
                                >
                                    Liquidaciones de Sueldo
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/period_data"
                                >
                                    Periodos
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hs-accordion" id="projects-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <!-- Parte del edificio -->
                            <rect x="4" y="8" width="16" height="12"></rect>
                            <!-- Techo puntiagudo -->
                            <polygon points="2 8 12 2 22 8"></polygon>
                            <!-- Puerta -->
                            <rect x="9" y="16" width="6" height="4"></rect>
                        </svg>
                        Datos Maestros

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="projects-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/branch_offices"
                                >
                                    Sucursales
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/nationalities"
                                >
                                    Nacionalidades
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/pentions"
                                >
                                    Pensiones
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/banks"
                                >
                                    Bancos
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/payroll_item"
                                >
                                    Nominas
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/job_positions"
                                >
                                    Cargo
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/health"
                                >
                                    Salud
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/segments"
                                >
                                    Segmentos
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/principals"
                                >
                                    Principals
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="hs-accordion" id="account-accordion">
                    <a
                        class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                        href="javascript:;"
                    >
                        <i class="fa-solid fa-globe"></i>
                        Website

                        <svg
                            class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>

                        <svg
                            class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </a>

                    <div
                        id="account-accordion"
                        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    >
                        <ul class="pt-2 pl-2">
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/jis_parking_images"
                                >
                                <i class="fa-solid fa-sliders"></i>
                                    Slider 
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/jis_parking_logo"
                                >
                                <i class="fa-solid fa-flag"></i>
                                    Logo
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/about_us"
                                >
                               
                                <i class="fa-solid fa-address-book"></i>
                                    Nosotros
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/contact"
                                >
                                <i class="fa-solid fa-address-card"></i>
                                    Contacto
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                    class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                                    href="javascript:;"
                                    to="/blog"
                                >
                                <i class="fa-solid fa-blog"></i>
                                    Blog
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a
                        class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-orange-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                        @click="logout"
                        href="javascript:;"
                    >
                        <svg
                            class="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Salir
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            rol_id: '',
            rut: '',
        }
    },
    async created() {
        const rol_id = localStorage.getItem('rol_id')

        const rut = localStorage.getItem('rut')

        if (rol_id) {
            this.rol_id = rol_id
        } else {
            this.rol_id = ''
        }

        if (rut) {
            this.rut = rut
        } else {
            this.rut = ''
        }
    },
    methods: {
        logout() {
            // Elimina el token del almacenamiento local
            localStorage.removeItem('accessToken')

            window.location.reload()
        },
    },
}
</script>
<style scoped>
input:disabled {
    background-color: #ccc !important; /* Cambia el fondo a un color gris claro */
    color: #999; /* Cambia el color del texto a un tono más claro */
}

select:disabled {
    background-color: #ccc !important; /* Cambia el fondo a un color gris claro */
    color: #999; /* Cambia el color del texto a un tono más claro */
}
</style>
