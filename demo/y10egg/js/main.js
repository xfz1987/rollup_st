import '../css/main.scss'
import './config'
import routes from './routes'

requirejs(['jquery'], function($) {
	// vue
    requirejs(['vue','vueRouter'], function(Vue,VueRouter) {
    	Vue.use(VueRouter);

    	const router = new VueRouter({
        	routes // （缩写）相当于 routes: routes
        });

		const historyStack = {
            data: {
                history: [],
                forward: true
            },
            watch: {
                '$route' (to, from) {
                    if (this.history.length > 0 && to.path == this.history[this.history.length - 1]) {
                        this.forward = false;
                        this.history.pop();
                    } else {
                        this.forward = true;
                        this.history.push(from.path);
                    }
                }
            }
        };

        const app = new Vue({
          router,
          mixins:[historyStack],
          mounted(){
            setTimeout(()=>{
                $('#app').removeClass('load');
            },500);
          }
        }).$mount('#app')

    });

    requirejs(['app/vwcheck']);
});