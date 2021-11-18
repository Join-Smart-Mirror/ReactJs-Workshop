import Home from '../Home';
import Login from '../Login'
import Settings from '../Settings'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/SettingsSuggest';
import LoginIcon from '@mui/icons-material/Login';
const routes = [
    {
        title: 'Login',
        component : Login,
        exact : false,
        strict : false,
        path : '/login',
        authorization : false,
        icon : LoginIcon,
    },

    {
        title: 'Settings',
        component : Settings,
        exact : false,
        strict : false,
        path : '/settings',
        authorization : false,
        icon: SettingsIcon
    },
    {
        title: 'Home',
        component : Home,
        exact : false,
        strict : false,
        path : '/',
        authorization : false,
        icon : HomeIcon
    },
]

export default routes;