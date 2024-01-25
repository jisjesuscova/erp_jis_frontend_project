<template>
    <header
        class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0"
    >
        <nav
            class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
        >
            <div class="flex items-center justify-between">
                <a
                    class="flex-none text-xl font-semibold text-white"
                    href="#"
                    aria-label="Brand"
                    >Jisparking</a
                >
                <div class="sm:hidden">
                    <button
                        type="button"
                        class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                        data-hs-overlay="#docs-sidebar"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            class="hs-collapse-open:hidden w-4 h-4"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                        <svg
                            class="hs-collapse-open:block hidden w-4 h-4"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                id="navbar-collapse-with-animation"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
                <div
                    class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7"
                >
                    <div class="relative bell-container">
                        <router-link
                            to="/alerts/15538007"
                            class="p-2 w-12 h-12 bg-orange-500 hover:bg-gray-300 focus:outline-none rounded-full flex items-center justify-center"
                        >
                            <i class="fas fa-bell text-white"></i>
                            <!-- Usar el icono de campana que prefieras -->
                        </router-link>
                        <span
                            class="absolute top-0 right-0 bg-red-500 hover:bg-gray-600 text-white w-5 h-5 rounded-full text-center text-xs flex items-center justify-center bell-number"
                        >
                            {{ totalItems }}
                            <!-- Número de alertas nuevas -->
                        </span>
                    </div>
                    <a
                        class="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
                        href="#"
                    >
                        {{ nickname }}
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            nickname: '',
            totalItems: 0,
        }
    },
    methods: {
        async getPosts() {
            const accessToken = localStorage.getItem('accessToken')
            const rut = localStorage.getItem('rut')

            this.loading = true

            const dataToSend = {
                rut: rut,
                page: 1,
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
                
                if (response.data.message.total_items != undefined) {
                    this.totalItems = response.data.message.total_items
                } else {
                    this.totalItems = 0
                }
                
            } catch (error) {
                console.error('Error al obtener la lista de alertas:', error)
            }
        },
    },
    async mounted() {
        const nickname = localStorage.getItem('nickname')
        if (nickname) {
            this.nickname = nickname
        } else {
            this.nickname = ''
        }

        await this.getPosts()
    },
}
</script>
