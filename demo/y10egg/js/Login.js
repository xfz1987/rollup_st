const component={
	template:`<div class="page">
		<img class="title" src="images/title.png">
		<ul class="login">
			<li>
				<span>姓名</span><input type="text" v-model="name">
			</li>
			<li>
				<span>电话</span><input type="tel" maxlength="11" v-model="tel">
			</li>
			<li>
				<span>验证码</span><input type="text" v-model="code"><button @click="send" v-text="txt">发送验证码</button>
			</li>
		</ul>
		<button class="btn" @click="clk">确 认</button>
		<img src="images/logo.png" alt="" class="logo">
	</div>`,
	data(){
		return {
			name:'',
			tel:'',
			code:'',
			txt:'发送验证码',
			st:null
		}
	},
	mounted(){
		console.log(12344)
	},
	methods:{
		send(){
			if(this.txt!='发送验证码') return false;
			let cd=60;
			this.txt=cd+'s重新发送';
			this.st=setInterval(()=>{
				cd--;
				if(cd<1){
					clearInterval(this.st);
					this.txt='发送验证码';
				}
				else this.txt=cd+'s重新发送';
			},1000);
		},
		clk(){
			console.log(222)
			this.$router.push('/home');
		}
	}
};
export default component;