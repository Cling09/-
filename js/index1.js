$(function(){
	var num = 0 ;
	var timer = null;
	$('.pic1').removeClass('no');
	$('.gps li').click(function(e){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass();
		$('.doc').stop().animate({top:-index*100+'%'},500);
		num = index;
		$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
//		$('.doc>div').eq(num).children(".title").removeClass('no').siblings().addClass('no');
if(num==0){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic1 .matter .title>img").eq(0).addClass("title1")
	$(".pic1 .matter .title>img").eq(1).addClass("title2")	
}
if(num==1){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic2 .matter .title>img").eq(0).addClass("title1")
	$(".pic2 .matter .title>img").eq(1).addClass("title2")
}
if(num==2){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic3 .matter .title>img").eq(0).addClass("title1")
	$(".pic3 .matter .title>img").eq(1).addClass("title2")	
}
if(num==3){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic4 .matter .title>img").eq(0).addClass("title1")
	$(".pic4 .matter .title>img").eq(1).addClass("title2")	
}
if(num==4){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic5 .matter .title>img").eq(0).addClass("title1")
	$(".pic5 .matter .title>img").eq(1).addClass("title2")	
}
if(num==5){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic6 .matter .title>img").eq(0).addClass("title1")
	$(".pic6 .matter .title>img").eq(1).addClass("title2")	
}
if(num==6){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic7 .matter .title>img").eq(0).addClass("title1")
	$(".pic7 .matter .title>img").eq(1).addClass("title2")	
}
	});
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer = setTimeout(function(){
			num -= d;
			if (num>6) {
				num=6
			}
			if(num<0){num=0}
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass();
			$('.doc').stop().animate({top:-num*100+'%'},500);
			$('.doc>div').eq(num).removeClass('no').siblings().addClass('no');
//		$('.doc>div').eq(num).children(".title").removeClass('no').siblings().addClass('no');

if(num==0){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic1 .matter .title>img").eq(0).addClass("title1")
	$(".pic1 .matter .title>img").eq(1).addClass("title2")	
}
if(num==1){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic2 .matter .title>img").eq(0).addClass("title1")
	$(".pic2 .matter .title>img").eq(1).addClass("title2")
}
if(num==2){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic3 .matter .title>img").eq(0).addClass("title1")
	$(".pic3 .matter .title>img").eq(1).addClass("title2")	
}
if(num==3){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic4 .matter .title>img").eq(0).addClass("title1")
	$(".pic4 .matter .title>img").eq(1).addClass("title2")	
}
if(num==4){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic5 .matter .title>img").eq(0).addClass("title1")
	$(".pic5 .matter .title>img").eq(1).addClass("title2")	
}
if(num==5){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic6 .matter .title>img").eq(0).addClass("title1")
	$(".pic6 .matter .title>img").eq(1).addClass("title2")	
}
if(num==6){
	$("#title11,#title12,#title13,#title14,#title15,#title16,#title17").removeClass("title1")
	$("#title21,#title22,#title23,#title24,#title25,#title26,#title27").removeClass("title2")
	$(".pic7 .matter .title>img").eq(0).addClass("title1")
	$(".pic7 .matter .title>img").eq(1).addClass("title2")	
}
		},300);
		
	});
	
	$('.music').click(function(event){
		$(this).toggleClass('play')
		if ($(this).hasClass('play')) {
			$('audio').get(0).play();
		} else{
			$('audio').get(0).pause();
		}
	});
	



})

