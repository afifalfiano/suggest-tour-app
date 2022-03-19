import LandingPage from './components/LandingPage.vue';
import LoginApp from './components/LoginApp.vue';
import SignUp from './components/SignUp.vue';
import HomeApp from './components/HomeApp.vue';
export default [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/login',
        component: LoginApp
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/home',
        component: HomeApp,
    },
]