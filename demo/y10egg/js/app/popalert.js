// 各种弹窗提示
define(['jquery'],function($){
	const pops={};

	// 等待
	pops.wait=function(){
		let el=$('.wait');
		if(el.length==0) el=$('<div class="wait"><img src="../images/wait.png" alt="" /></div>').appendTo('body');
		el.fadeIn();
		setTimeout(function(){el.fadeOut();},2000);
	};

	// alert
	pops.alert=function(txt){
		let el=$('.alert'),mask=$('.maskgray2'),c=txt || '出错啦';
		if(mask.length==0) mask=$('<div class="maskgray2"></div>').appendTo('body');
		if(el.length==0) el=$(`<div class="alert"><h1>提示</h1><p>${c}</p><h2>确定</h2></div>`).appendTo('body');
		else el.find('p').text(c);

		let els=mask.add(el).show().addClass('show');

		el.find('h2').one('click',function(){
			els.addClass('hide');
			setTimeout(function(){
				els.hide().removeClass('show hide');
			},600);
		});	
	};
	pops.waitstart=function(){
		let el=$('.waiting');
		if(el.length==0) el=$('<div class="waiting"><div><img src="../images/waiting.png" alt="" /></div></div>').appendTo('body');
		el.fadeIn();
	};
	pops.waitend=function(){
		$('.waiting').fadeOut();
	};

	// confirm
	pops.confirm=function(txt,func){
		let el=$('.confirm'),mask=$('.maskgray2'),c=txt || '继续执行操作吗？';
		if(mask.length==0) mask=$('<div class="maskgray2"></div>').appendTo('body');
		if(el.length==0) el=$(`<div class="confirm"><h1>提示</h1><p>${c}</p><dl><dt>确定</dt><dd>取消</dd></h2></dl>`).appendTo('body');
		else el.find('p').text(c);

		let els=mask.add(el).show().addClass('show');

		// 取消
		el.find('dd').one('click',function(){
			els.addClass('hide');
			setTimeout(function(){
				els.hide().removeClass('show hide');
			},600);
		});
		// 确定
		el.find('dt').one('click',function(){
			func();
			els.addClass('hide');
			setTimeout(function(){
				els.hide().removeClass('show hide');
			},600);
		});
	};

	return pops;
});

