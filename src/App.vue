<template>
    <div id="app">
        <template v-if="accessToken !== null && accessToken !== ''">
            <div v-if="status_id == 1">
                <Header />
                <Siderbar />
                <router-view></router-view>
                <Footer />
            </div>
            <div v-else>
                <Header />
                <router-view></router-view>
            </div>
        </template>

        <template v-else>
            <div v-if="showForgotNewPassWordComponent">
                <ForgotNewPassword />
            </div>
            <div v-else>
                <Login />
            </div>
        </template>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import Header from './components/Header.vue'
import Siderbar from './components/Sidebar.vue'
import Home from './pages/Home.vue'
import Footer from './components/Footer.vue'
import Login from './pages/Login.vue'
import ForgotNewPassword from './pages/ForgotNewPassword.vue'

export default {
    name: 'App',
    setup() {
        const accessToken = ref(localStorage.getItem('accessToken') || '')
        const status_id = ref(localStorage.getItem('status_id') || '')

        watch(status_id, (newStatusId, oldStatusId) => {
        })

        return {
            accessToken,
            status_id,
            loading: true,
        }
    },
    components: {
        Header,
        Siderbar,
        Home,
        Footer,
        Login,
        ForgotNewPassword,
    },
    computed: {
        showForgotNewPassWordComponent() {
            return window.location.href.includes('/forgot')
        },
    },
}
</script>>

<style>
</style>
