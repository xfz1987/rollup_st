// vw检查，并初始化页面高度
define(['jquery','vue','vueRouter','app/popalert'],function($,Vue,vueRouter,popalert){
	const tmp={};

	// 首页
	tmp.index={
		template: `
		<div class="page index">
			<img src="../images/logo.png" alt="" class="logo">
	        <div class="title">
	            <h1>2017年元月开门红新人峰会</h1>
	            <h2>华夏保险河南分公司营销渠道</h2>
	        </div>
	        <img src="../images/title1.png" alt="" class="imgtitle">
	        <router-link class="btn" to="/main">走进峰会</router-link>
        </div>
        `
	};

	// 主页
	tmp.main={
		template: `
		<div class="page main">
			<img src="../images/logo.png" alt="" class="logo">
	        <img src="../images/title.png" alt="" class="imgtitle">
	        <div class="btnblock">
	            <router-link to="/search">座位查询</router-link>
	            <router-link to="/schedule">峰会流程</router-link>
	            <router-link to="/notice">峰会通知</router-link>
	        </div>
	        <div class="ftbtn">
	            <router-link to="/contact"><img src="../images/tel.png" alt="">联络方式</router-link>
	            <router-link to="/intro"><img src="../images/info.png" alt="">酒店信息</router-link>
	        </div>
        </div>
        `
	};

	// 流程
	tmp.schedule={
		template: `
		<div class="page schedule">
			<h1>5月10日</h1>
	        <h2>会议报到</h2>
	        <p><span>18:00前</span>会议报到</p>
	        <p><span>18:00-19:30</span>会议用餐</p>
	        <h1>5月11日</h1>
	        <h2>峰会前奏</h2>
	        <p><span>08:00-08:30</span>星光大道</p>
	        <p><span>08:30-08:40</span>开场节目</p>
	        <p><span>08:40-08:45</span>主持开场&主旨视频</p>
	        <h2>主旨报告</h2>
	        <p><span>08:45-09:35</span>领导致辞</p>
	        <h2>颁奖盛典</h2>
	        <p><span>09:35-10:35</span>2016年二季度峰会表彰、2016年三季度峰会表彰、2017年元月新人峰会表彰</p>
	        <h2>巅峰论坛</h2>
	        <p><span>10:35-11:30</span>筑梦华夏 砥砺前行</p>
	        <h2>午餐休息</h2>
	        <p><span>11:30-13:10</span>午餐休息</p>
	        <h2>醒脑开场</h2>
	        <p><span>13:20-13:30</span>午间节目及主持开场</p>
	        <h2>名师指路</h2>
	        <p><span>13:30- 17:40</span>《中国保险业发展形势》、《组织发展才是硬道理》</p>
	        <h2>誓师启动</h2>
	        <p><span>17:40-18:10</span>光荣与梦想：决胜6月，剑指2亿</p>
	        <h2>合影留念</h2>
	        <p><span>18:10-18:30</span>峰会英雄大合影</p>
	        <h2>荣誉晚宴</h2>
	        <p><span>19:10-21:00</span>荣誉晚宴</p>
	        <h1>5月12日</h1>
	        <p><span>9:00-18:00</span>临江远眺 我心飞扬</p>
	        <h1>5月13日</h1>
	        <p><span>9:00-10:00</span>愉快返程</p>
        </div>
        `
	};

	// 介绍
	tmp.intro={
		template: `
		<div class="page intro">
			<h1>酒店介绍</h1>
        	<p>武汉恒大酒店是光谷东·红莲湖旅游度假区内首家超豪华会议度假酒店，项目坐拥100,000㎡，总投资额数十亿元，是恒大集团涉足华中地区首家旗舰酒店。酒店紧临国家二级淡水资源的万亩红莲湖，拥有无敌湖景。酒店共有7栋独立的建筑，独特的“6+1”模式包括“酒店主楼”、“国际会议中心”、“饮食中心”、“运动中心”、“健康中心”、“娱乐中心”和“商业中心”。酒店内浓郁的欧式风情建筑结合覆盖率超过70%的皇家园林，形成了园区内天然氧吧的良好生态。</p>
        </div>
        `
	};

	// 联系人
	tmp.contact={
		template: `
		<div class="page contact">
			<h1>会务联系人</h1>
	        <ul>
	            <li v-for="item in list">{{item.name}} 手机：{{item.tel}}<a :href="'tel:'+item.tel"></a></li>
	        </ul>
        </div>
        `,
        data(){
        	return {
        		list: [
                    {name:'刘志巍',tel:'13698827687'},
                    {name:'肖竹君',tel:'15890991076'},
                    {name:'程　茜',tel:'13027786892'},
                    {name:'尚哲昕',tel:'15537142996'}
                ]
        	}
        }
	};

	// 通知
	tmp.notice={
		template: `
		<div class="page notice">
			<h1>会议要求</h1>
	        <h2><span>1、</span>参加会议请提前30分钟入场；</h2>
	        <h2><span>2、</span>会议期间请将移动电话关闭或调为静音状态；</h2>
	        <h2><span>3、</span>会议期间请遵守时间，外出活动请注意安全；</h2>
	        <h2><span>4、</span>大合照期间，请积极配合工作人员及摄影师的安排；</h2>
	        <h2><span>5、</span>未尽事宜及活动变更留意相关通知；</h2>
	        <h1>会议提示</h1>
	        <h3><span>会议时间：</span>2017年5月10日 -- 2017年5月13日</h3>
	        <h3><span>会议地点：</span>武汉恒大酒店</h3>
	        <h3><span>用餐地点：</span>武汉恒大酒店一楼自助餐厅，及恒大饮食中心一楼自助餐厅</h3>
	        <h3><span>晚宴地点：</span>恒大宴会厅（恒大饮食中心一楼）</h3>
	        <h3><span>旅游安排：</span>武汉观光一日游</h3>
	        <p class="red">5月12日7:30准时在酒店大堂集合出发</p>
	        <h1>返程安排</h1>
	        <p>5月13日12点前，公司统一安排大巴送往高铁站，具体发车时间另行通知。</p>
        </div>
        `
	};

	// 搜索
	tmp.alpha={
		template: `
		<ul>
			<li v-for="item in arr">{{item}}</li>
		</ul>
        `,
        data(){
        	const arr=[];
        	for(let i=1;i<20;i++) arr.push(i);
        	return {
        		arr:arr
        	}
        }
	};
	tmp.seat={
		template: `
		<div class="seat">
			<em @click="emClk"></em>
	        <h3>2017年元月开门红新人峰会舞台</h3>
	        <h1><span>舞台中央</span></h1>
	        <alpha></alpha>
        </div>
        `,
        components:{
        	'alpha':tmp.alpha
        },
        mounted(){
        	let el=$('.seat'),html='';
        	html+='<h2>';
        	for(let i=0;i<23;i++) html+='<i></i>';
        	html+='</h2>';
        	for(let j=0;j<19;j++) {
        		html+='<p>';
        		for(let k=0;k<10;k++) html+='<i></i>';
        		html+='<b></b><b></b><b></b>';
        		for(let k=0;k<10;k++) html+='<i></i>';
        		html+='</p>';
        	}
        	el.append(html);
        },
        methods:{
        	emClk(){
        		let el=$('.seat').removeClass('show');
                setTimeout(function(){
                    el.hide();
                },600);
        	}
        }
	};
	tmp.search={
		template: `
		<div class="page search">
			<div class="block">
	            <p><b>姓名</b><input type="text" placeholder="请输入姓名" v-model="name" id="name"></p>
	            <p><b>机构</b><input type="text" readonly value="河南" id="area"></p>
	        </div>
	        <button class="btn" @click="clk">开始搜索</button>
	        <h2><span>查询结果</span></h2>
	        <div class="block" style="display: none" v-show="show">
	            <p><b>姓名：</b><span>{{personName}}</span></p>
	            <p><b>机构：</b><span>{{org}}</span></p>
	            <p><b>会议座次：</b><a @click="showSeat">查看座位图</a></p>
	            <p><b>晚宴座次：</b><span>{{dinnerSeat}}</span></p>
	            <p><b>旅游分车：</b><span>{{tourCar}}</span></p>
	        </div>
	        <seat></seat>
        </div>
        `,
        components:{
        	'seat':tmp.seat
        },
        data(){
        	return {
        		name:'',
                area:'河南',
                show:false,
                personName:'',
                dinnerSeat:'',
                org:'',
                tourCar:''
        	}
        },
        mounted(){
        	const _this=this;
        	requirejs(['jqueryweui'],function(weui){
        		$('#area').select({
		            title: '请选择地区',
		            items: ['河南', '驻马店', '焦作', '开封', '信阳', '南阳', '安阳', '鹤壁', '洛阳', '漯河', '平顶山', '濮阳', '三门峡', '商丘', '新乡', '许昌', '郑州', '周口'],
		            onClose:function(){
		                _this.area=$('#area').val();
		            }
	            });
	            $('#name').focusin(function(event) {
	                $('#area').select('close');
	            });
        	});
        },
        methods:{
        	clk(){
        		const _this=this;
        		// 下面是ajax，模拟数据
        		let res={
				    "coordinate":"0,13",
				    "createDate":"",
				    "dinnerSeat":"23号桌",
				    "meetingSeat":"11排13列",
				    "org":"南阳",
				    "personId":0,
				    "personName":"梁华峰",
				    "tourCar":"1号车"
				};
    			popalert.waitstart();
    			setTimeout(function(){
    				popalert.waitend();
    				_this.dinnerSeat=res.dinnerSeat;
    				_this.personName=res.personName;
    				_this.org=res.org;
    				_this.tourCar=res.tourCar;
    				// 下面是座位涂红
    				$('.seat i').removeClass('cur');
    				let pos=res.coordinate.split(',');
    				if(pos[0]==0) $('.seat h2 i').eq(pos[1]-1).addClass('cur');
    				else $('.seat p').eq(pos[0]-1).find('i').eq(pos[1]-1).addClass('cur');
    				_this.$nextTick(function(){
    					_this.show=true;
    				});
    			},2000);
        	},
            showSeat(){
                let el=$('.seat');
                el.show();
                el.width();
                el.addClass('show');
            }
        }
	};

	return tmp;
});

