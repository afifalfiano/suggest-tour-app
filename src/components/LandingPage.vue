<template>
    <v-container style="height: 100%">
        <v-row align="center fill-height">
            <v-col cols="12" align-self="center" class="d-flex-row align-center justify-center">
                <h1 class="text-center display-2">Selamat Datang!</h1>
                <div class="d-flex align-center justify-center mt-5">
                <router-link to="/login" class="login blue rounded-lg mr-3 px-5 py-2">Masuk</router-link>
                <router-link to="/signup" class="signup green rounded-lg px-5 py-2">Daftar</router-link>
                </div>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
export default {
    name: 'LandingPage',
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .login, .signup {
        text-decoration: none;
        display:block;
        color: #fff;
    }
</style>