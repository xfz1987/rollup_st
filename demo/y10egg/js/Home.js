const component={
	template:`<div class="page home">
		<img src="images/top.png" alt="" class="top">
		<img src="images/line.png" alt="" class="line">
		<div class="egg">
			<figure @click="clk">
				<img src="images/egg11.png" alt="">
				<img src="images/egg12.png" alt="">
				<img src="images/egg13.png" alt="">
				<img src="images/egg14.png" alt="">
				<img src="images/egg15.png" alt="">
				<img src="images/egg1.png" alt="">
			</figure>
			<figure @click="clk">
				<img src="images/egg21.png" alt="">
				<img src="images/egg22.png" alt="">
				<img src="images/egg23.png" alt="">
				<img src="images/egg24.png" alt="">
				<img src="images/egg25.png" alt="">
				<img src="images/egg2.png" alt="">
			</figure>
			<figure @click="clk">
				<img src="images/egg31.png" alt="">
				<img src="images/egg32.png" alt="">
				<img src="images/egg33.png" alt="">
				<img src="images/egg34.png" alt="">
				<img src="images/egg35.png" alt="">
				<img src="images/egg3.png" alt="">
			</figure>
		</div>
		<img src="images/hammer.png" alt="" class="hammer">
		<div class="list">
			<img src="images/desk.png" alt="">
			<ul>
				<li>
					<span>张三</span>
					<span>13811000000</span>
					<span>一等奖</span>
				</li>
				<li>
					<span>张三</span>
					<span>13811000000</span>
					<span>一等奖</span>
				</li>
				<li>
					<span>张三</span>
					<span>13811000000</span>
					<span>一等奖</span>
				</li>
				<li>
					<span>张三</span>
					<span>13811000000</span>
					<span>一等奖</span>
				</li>
				<li>
					<span>张三</span>
					<span>13811000000</span>
					<span>一等奖</span>
				</li>
			</ul>
		</div>
		<img src="images/bg2.png" alt="" class="bottom">
		<div class="maskgray2"></div>
		<div class="prize">
			<img src="images/win.png" alt="">
			<h1>恭喜您，中得一等奖</h1>
			<p>需要<b>本人</b>持<span>身份证</span>和<span>兑奖码</span>到公司领取</p>
			<button class="btn" @click="go">确 认</button>
		</div>
	</div>`,
	data(){
		return {
			hammerX:0,
			hammerY:0,
			hammer:null,
			egg:null,
			runed:false
		}
	},
	mounted(){
		this.hammer=$('.hammer');
	},
	methods:{
		go(){
			this.$router.push('./login');
		},
		clk(event){
			if(this.runed) return false;
			this.runed=true;
			this.egg=$(event.target).parent();
			let index=this.egg.index();
			this.egg.find('img').fadeIn();
			let w=$(window).width();
			// 计算第一次移动位置
			this.hammerY=$('html').height()-w*3.75*(22.5+9)/100;
			switch(index){
				case 0 :
					this.hammerX='-160';
					break;
				case 1 :
					this.hammerX='-55';
					break;
				case 2 :
					this.hammerX=45;
					break;
			}
			this.hammer.addClass('move').css({transform:'translate('+this.hammerX+'%,-'+this.hammerY+'px) rotate(30deg)'});
			setTimeout(this.shake,2000);
		},
		shake(){
			this.hammer.css({transitionDuration:'1000ms',transform:'translate('+this.hammerX+'%,-'+this.hammerY+'px) rotate(20deg)'});
			setTimeout(()=>{
				this.hammer.addClass('move').css({transform:'translate('+this.hammerX+'%,-'+this.hammerY+'px) rotate(30deg)'});
			},1000);
			setTimeout(()=>{
				if(this.prize==0) this.shake();
				else this.destory();
			},2000);
		},
		destory(){
			this.hammer.css({transitionDuration:'500ms',transform:'translate('+this.hammerX+'%,-'+this.hammerY+'px) rotate(0deg)'});
			setTimeout(()=>{
				this.hammer.addClass('move').css({opacity:0,transform:'translate('+this.hammerX+'%,-'+this.hammerY+'px) rotate(30deg)'});
			},1000);
			setTimeout(this.fall,500);
		},
		fall(){
			this.egg.addClass('fall');
			setTimeout(this.popup,900);
		},
		popup(){
			let el=$('.maskgray2,.prize').show().addClass('show');
		}
	}
};
export default component;