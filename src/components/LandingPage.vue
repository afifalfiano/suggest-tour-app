<template>
    <v-container style="height: 100%">
        <v-row align="center fill-height">
            <v-col cols="12" align-self="center" class="d-flex-row align-center justify-center">
                <h1 class="text-center display-2">Selamat Datang!</h1>
                <div class="d-flex align-center justify-center mt-5">
                <router-link to="/login" class="login blue rounded-lg mr-3 px-5 py-2">Login</router-link>
                <router-link to="/signup" class="signup green rounded-lg px-5 py-2">Sign Up</router-link>
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
        onSubmit() {
            console.log('submit');
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.title,
                content: this.content,
                id: 1
            }).then(response => {
                console.log(response, 'res')
            }).catch(err => {
                console.log(err, 'err')
            })
        }
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