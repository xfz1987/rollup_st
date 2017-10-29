// vw检查，并初始化页面高度
define(['jquery'],function($){
	const el=$('<div style="height:0;width:1vw"></div>').appendTo('body'),w=$(window).width(),dpr=window.devicePixelRatio;
	//if(dpr>1) $('#meta').attr('content','width='+w*dpr+', initial-scale='+1/dpr+', maximum-scale='+1/dpr+', user-scalable=0');
	if(dpr>1) $('#meta').attr('content',`width=${w*dpr}, initial-scale=${1/dpr}, maximum-scale=${1/dpr}, user-scalable=0`);
	if(el.width()==$('body').width()){
		//$('html').css('cssText','font-size:'+w*dpr*0.036+'px !important;');
		$('html').css('cssText',`font-size:${w*dpr*0.036}px !important;`);
		$('.page').css('min-height',$(window).height());
	}
	el.remove();
	
	return null;
});

