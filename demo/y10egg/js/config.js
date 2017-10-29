requirejs.config({
	baseUrl:'./js/lib',
	paths:{
		app:'../app',
		jquery:'jquery.min',
		velocity:'velocity.min',
		fastclick:'fastclick',
		echo:'echo.min',
		vue:'vue.min',
		vueRouter:'vue-router.min',
		vtap:'vue-tap',
		vueScrollBehavior:'vue-scroll-behavior.min'
	},
	map:{
        '*':{
            css:'require-css.min'
        }
	},
	shim:{
		vueRouter:{deps:['vue']},
		velocity:{deps:['jquery']}
	},
	waitSeconds: 0
});

/*requirejs(['fastclick'],function(FastClick){
	 FastClick.attach(document.body);
});*/