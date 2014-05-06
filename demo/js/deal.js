$(document).ready(function(e) {
	$("#area").click(function(e){
		$(this).find("dd").show();
	}).hover(function(){},function(){
		$(this).find("dd").hide(0.3)
	});
	
	$("#app, #serve, #guide").hover(function(e){
		$(this).addClass('hover').find('.arrow').html('&#xf106;');
	},function(e){
		$(this).removeClass('hover').find('.arrow').html('&#xf107;');
	});

	$("#buyer, #cart").hover(function(e){
		$(this).addClass('hover').find('.arrow').html('&#xf0d7;');
	},function(e){
		$(this).removeClass('hover').find('.arrow').html('&#xf0d8;');
	});

	$('#sorts').find('.mn').each(function(){
		$(this).ihover(function(){
				$(this).addClass('hover').find('.smn').css('top',-(this.clientHeight+2)*$(this).index()-1+'px');
			},function(){
				$(this).removeClass('hover');
			})
	});

	$('.tab').not('.single').itab();
	$('#scroll').islider({
		prev:'.prev',
		next:'.next',
		scroll: true,
		infinite:true
	});
	$('#slide').islider({
		prev: '.prev',
		next: '.next',
		delta: 3,
		infinite:true
	})
	$('#goods').find('.slide').islider();
	$('#share,#comment').islider({
		view:'.c-item',
		move: true,
		scroll: true
	})

	$('.s-item').hover(function(e) {
        $(this).find('img').css({'left':'-20px'});
    },function(e) {
        $(this).find('img').css({'left':'0'});
    });

	$('#subscription .text').focusin(function(e) {
		var that = $(this);
		that.val() == '请输入你的邮箱地址' && (that.val(''), that.css('color','black'));
    }).focusout(function(e) {
        var that = $(this);
		that.val() || (that.css('color','gray'),that.val('请输入你的邮箱地址'));
    });
	
});