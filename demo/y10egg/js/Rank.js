const component={
	template:`<div class="page rank">
		<img src="images/frame1.png" alt="" class="frame1">
		<div class="frame">
			<h1>
				<span>姓名</span>
				<span>手机号</span>
				<span>中奖日期</span>
				<span>中奖等级</span>
			</h1>
			<ul>
				<li v-for="item in list">
					<span>{{item.name}}</span>
					<span>{{item.tel}}</span>
					<span>{{item.date}}</span>
					<span>{{item.rank}}</span>
				</li>
			</ul>
		</div>
		<img src="images/frame3.png" alt="" class="frame1">
		<button class="btn" @click="clk">领取二维码</button>
	</div>`,
	data(){
		return {
			list:[
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1},
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1},
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1},
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1},
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1},
				{name:'张某人',tel:'18088888888',date:'2017-08-08',rank:1}
			]
		}
	},
	mounted(){
	},
	methods:{
		clk(){
			this.$router.push('/qrcode');
		}
	}
};
export default component;