import LandingPage from '../components/App';
import Signup from '../components/Signup';
import Login from '../components/Login';

const routes = [
    {
        path: '/',
        name: 'Landing Page',
        components: LandingPage,
    },
    {
        path: '/signup',
        name: 'Signup',
        components: Signup,
    },
    {
        path: '/login',
        name: 'Login',
        components: Login,
    }
];

export default routes;