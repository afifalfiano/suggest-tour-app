<template>
    <v-container style="max-width: 600px; margin: auto" fluid fill-height>
        <v-row align="center">
            <v-col cols="12" align-self="center" class="d-flex-row align-center justify-center">
                <div class="py-20 px-10">
                {{allUser}}
                <button type="button" v-on:click="registerUser(10)">Register All</button>
                <h1 class="text-center">Log In</h1>
                <v-form
                    ref="form"
                    v-model="valid"
                    v-on:submi.prevent="submit"
                    lazy-validation
                >

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="showPassword ? 'text' : 'password'"
                    name="input-10-1"
                    label="Normal with hint text"
                    hint="At least 8 characters"
                    counter
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
                    
                    <div class="d-flex justify-center align-center pt-5">
                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="submit"
                    @keypress="submit"
                    >
                    Log In
                    </v-btn>
                    <v-btn
                    color="warning"
                    class="mr-4"
                    @click="back"
                    >
                    Back
                    </v-btn>
                    </div>
                </v-form>
                </div>
                
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    name: 'LoginApp',
    data() {
        return {
            valid: true,
            showPassword: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Min 8 characters'
            ],
        }
    },
    methods: {
        submit() {
            const valid = this.$refs.form.validate()
            if (valid) {
                const dataLogin = {
                    email: this.email,
                    password: this.password
                }
                localStorage.setItem('user', JSON.stringify(dataLogin));
                this.$router.push('/home');
            }

        },
        ...mapActions([
            'registerUser'
        ]),
        // registerAllUser: function(data) {
        //     console.log(data, 'cek');
        //   this.$store.dispatch('registerAllUser', data);
        // },
        back() {
            this.$router.push('/')
        },
        //         checkState() {
        // console.log(this.$store.state.user)
        // return this.$store.state.user;
        // },
        // checkGetter() {
        // console.log(this.$store.getters.getFirstUser, 'getter');
        // return this.$store.getters.getFirstUser;
        // }
    },
    computed:  {
        ...mapGetters([
            'allUser'
        ]),
// this.checkGetter(),
// this.checkState()
    }
}
</script>

<style scoped>

</style>