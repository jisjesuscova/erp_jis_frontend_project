<template>
    <nav
        v-if="rol_id == 4"
        class="relative z-0 flex border rounded-xl overflow-hidden dark:border-gray-700"
    >
        <router-link
            v-if="current_page == 'old_employee'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_employee/${this.$route.params.rut}`"
        >
            Datos Personales
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            href="javascript:;"
            :to="`/old_employee/${this.$route.params.rut}`"
        >
            Datos Personales
        </router-link>
        <router-link
            v-if="current_page == 'old_labor_data'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_labor_data/${this.$route.params.rut}`"
        >
            Datos de Contrato
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            href="javascript:;"
            :to="`/old_labor_data/${this.$route.params.rut}`"
        >
            Datos de Contrato
        </router-link>
        <router-link
            v-if="current_page == 'old_extra_data'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_extra_data/${this.$route.params.rut}`"
        >
            Datos Extras
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3"
            href="javascript:;"
            :to="`/old_extra_data/${this.$route.params.rut}`"
        >
            Datos Extras
        </router-link>
        <router-link
            v-if="current_page == 'old_salary_settlement'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_salary_settlement/${this.$route.params.rut}`"
        >
            Liquidaciones
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3"
            :to="`/old_salary_settlement/${this.$route.params.rut}`"
        >
            Liquidaciones
        </router-link>
        <router-link
            v-if="current_page == 'old_vacation'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_vacation/${this.$route.params.rut}`"
        >
            Vacaciones
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3"
            href="javascript:;"
            :to="`/old_vacation/${this.$route.params.rut}`"
        >
            Vacaciones
        </router-link>
        <router-link
            v-if="current_page == 'old_medical_license'"
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300 active"
            href="javascript:;"
            :to="`/old_medical_license/${this.$route.params.rut}`"
        >
            Licencias
        </router-link>
        <router-link
            v-else
            class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300"
            id="bar-with-underline-item-3"
            href="javascript:;"
            :to="`/old_medical_license/${this.$route.params.rut}`"
        >
            Licencias
        </router-link>
    </nav>
</template>
<script>
import MasterDataSearcher from '../components/MasterDataSearcher.vue'

export default {
    components: {
        MasterDataSearcher,
    },
    data() {
        return {
            current_page: '',
            rol_id: '',
        }
    },
    created() {
        const rol_id = localStorage.getItem('rol_id')

        var url = this.$route.fullPath

        url = url.split('/')

        this.current_page = url[1]

        this.rol_id = rol_id
    },
}
</script>

<style scoped>
.active {
    background-color: #2563eb;
    color: #fff !important;
}
</style>
