import LandingPage from './components/LandingPage.vue';
import LoginApp from './components/LoginApp.vue';
import SignUp from './components/SignUp.vue';
import HomeApp from './components/HomeApp.vue';
import DetailApp from './components/DetailApp.vue';
import AccountApp from './components/AccountApp.vue';

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
    {
        path: '/home/detail/:id',
        component: DetailApp,
    },
    {
        path: '/account',
        component: AccountApp,
    },
]