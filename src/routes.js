import LoginApp from './components/LoginApp.vue';
import SignUp from './components/SignUp.vue';

const HomeApp = () => import('./components/HomeApp.vue');
const DetailApp = () => import('./components/DetailApp.vue');
const AccountApp = () => import('./components/AccountApp.vue');
const UpdateAccount = () => import('./components/UpdateAccount.vue');
const AddReview = () => import('./components/AddReview.vue');

export const authGuard = (to, from, next) => {
    const user = localStorage.getItem('user');
    if (user === null || user === undefined) {
        next({ path: '/login' })
    } else {
        next()
    }
}
export default [
    {
        path: '/',
        component: LoginApp,
        name: 'Login',
        redirect: "/login",
    },
    {
        path: '/login',
        component: LoginApp,
        name: 'Login'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'SignUp'
    },
    {
        path: '/home',
        component: HomeApp,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Home'
    },
    {
        path: '/home/detail/:id',
        component: DetailApp,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Detail'

    },
    {
        path: '/home/review',
        component: AddReview,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Review'

    },
    {
        path: '/home/review/:id',
        component: AddReview,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Update Review'

    },
    {
        path: '/account',
        component: AccountApp,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Account'
    },
    {
        path: '/account/update',
        component: UpdateAccount,
        beforeEnter: ((to, from, next) => {
            authGuard(to, from, next);
        }),
        name: 'Update Account'
    }
]