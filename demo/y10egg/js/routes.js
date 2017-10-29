import Login from './Login'
import Qrcode from './Qrcode'
import Rank from './Rank'
import Home from './Home'
const routes = [
	{ path: '', component: Rank },
	{ path: '/', component: Rank },
	{ path: '/login', component: Login },
	{ path: '/qrcode', component: Qrcode },
	{ path: '/rank', component: Rank },
	{ path: '/home', component: Home },
];
export default routes;