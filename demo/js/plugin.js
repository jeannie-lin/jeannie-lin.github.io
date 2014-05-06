(function($,context){
	$.fn.ihover = function(onFunc,outFunc,delay){
		var delay = delay || 100;
		var onTimer,outTimer;

		return $(this).each(function(){
			var that = this;
			$(this).hover(function(){
				clearTimeout(outTimer);
				onTimer = setTimeout(function(){
					onFunc.apply(that)
				},delay);
			},function(){
				clearTimeout(onTimer);
				outTimer = setTimeout(function(){
					outFunc.apply(that)
				},delay);
			});
		});
	};

	$.fn.islider = function(opts){
		var options = $.extend({
			prev : '',
			next : '',
			views : '.views',
			view : '.view',
			btn : '.btn',
			delta : 1,
			infinite : false,
			scroll : false,
			during : 2000,
			move : false
		},opts || {});

		return $(this).each(function(){
			var timer;
			var that = $(this);

			var select = function(idx,ndx){
				var w = that.find(options.view).width();

				if(typeof ndx == 'undefined') {
					that.find(options.btn).removeClass('current').eq(idx).addClass('current');
					that.find(options.views).animate({'left':-w*idx},200);
				} else {
					that.find(options.btn).removeClass('current').eq(ndx).addClass('current');
					that.find(options.views).animate({
						left:-w*idx
					},300,function(){
						$(this).css({
							left:-w*ndx
						}).find(options.view+':lt('+options.delta+')').css({
							left:0
						});
					})
				}
			}

			var move = function(){
				that.find(options.view+':lt('+options.delta+')').insertAfter(that.find(options.view).last());
				timer = setTimeout(move,options.during);
			}

			var prev = function(){
				var vs = that.find(options.views);
				var v = that.find(options.view);
				var w = v.width(),m = v.length;
				var i=Math.floor(Math.abs(vs.position().left)/w);

				if(options.infinite && i == 0) {
					that.find(options.views).css({
						left:-w*m
					}).find(options.view+':lt('+options.delta+')').css({
						left:w*m
					});
					select(m-options.delta,m-options.delta);
				} else if (i > options.delta-1) {
					select(i-options.delta);
				}
			}

			var next = function(){
				var vs = that.find(options.views);
				var v = that.find(options.view);
				var w = v.width(),m = v.length;
				var i=Math.floor(Math.abs(vs.position().left)/w);

				if(options.infinite && i == m-options.delta) {
					that.find(options.view+':lt('+options.delta+')').css({
						left:w*m
					});
					select(m,0);
				} else if (i < m-options.delta) {
					select(i+options.delta);
				}
			}

			var play = function(){
				next();
				timer = setTimeout(play,options.during);
			}

			var start = function(){
				if(options.move){
					timer = setTimeout(move,options.during);
				} else if (options.scroll) {
					timer = setTimeout(play,options.during);
				}
			}

			var stop = function(){
				clearTimeout(timer);
			}

			$(this).hover(function(){
				stop();
			},function(){
				start();
			}).delegate('.prev','click',prev).delegate('.next','click',next).find(options.btn).ihover(function(){
				select($(this).index());
			},function(){

			});

			options.scroll && start();
		});
	};
	$.fn.itab = function(){
		return $(this).each(function(){
			var that = $(this);
			that.find('.tt').ihover(function(){
				var idx = $(this).index();
				var l = idx * $(this).width();

				that.find('.arrow').animate({left: l + 'px'},250);
				that.find('.tt').removeClass('current').eq(idx).addClass('current');
				that.find('.tc').removeClass('current').eq(idx).addClass('current');
			},function(){
			});
		});

	};

}(jQuery,this))