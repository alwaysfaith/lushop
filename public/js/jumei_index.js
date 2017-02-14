$(function(){	   
	$("ul.essd li").hover(function(){
		$(this).find('.e1').show();
	},function(){
		$(this).find('.e1').hide();
	}); 	
	
	if(screen.width > 1210 && $(window).width() > 1210)
	{
		$(".vancl_w1024").slide({mainCell:"ul",titCell:".rslides2_tabs li",titOnClassName:"rslides_here",autoPlay:true});
	}
	else
	{
		$(".vancl_n980").slide({mainCell:"ul",titCell:".rslides1_tabs li",titOnClassName:"rslides_here",autoPlay:true});
	}
	
	$(".screenAdClose").click(function(){
		easyDialog.close();	
	})

	setInterval(function(){
      $(".timebox").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
		var show_day =  obj.attr('showday');
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime() + 28800000;
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH_show=Math.floor(nMS/(1000*60*60) % 24);
        var myH=Math.floor(nMS/(1000*60*60));
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
		var a = myH+myM+myS+myMS;
        if(a>0){
			if(show_day == 'show')
			{	
				var str = "<span class='icon'></span>"+myD+"<em>天</em>"+myH_show+"<em>时</em>"+myM+"<em>分</em>"+myS+"<em>秒</em>"
			}
			else
			{
				var str = "<span class='icon'></span>"+myH+"<em>时</em>"+myM+"<em>分</em>"+myS+"<em>秒</em>"
				
			}
        }else{
			var str = "已结束！";	
		}
		obj.html(str);
      });
    }, 100);
	
	setInterval(function(){
      $(".timebox2").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
		var show_day =  obj.attr('showday');
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime() + 28800000;
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH_show=Math.floor(nMS/(1000*60*60) % 24);
        var myH=Math.floor(nMS/(1000*60*60));
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
		var a = myH+myM+myS+myMS;
        if(a>0){
			if(show_day == 'show')
			{	
				var str = "<font>离活动结束时间还有</font><b>"+myD+":"+myH_show+":"+myM+":"+myS+"</b>"
			}
			else
			{
				var str = "<font>离活动结束时间还有</font><b>"+myH+":"+myM+":"+myS+"</b>"
			}
        }else{
			var str = "<font>已结束！</font>";	
		}
		obj.html(str);
      });
    }, 100);
	
	setInterval(function(){
      $(".end_time").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
		var show_day =  obj.attr('showday');
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime() + 28800000;
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH_show=Math.floor(nMS/(1000*60*60) % 24);
        var myH=Math.floor(nMS/(1000*60*60));
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
		var a = myH+myM+myS+myMS;
        if(a>0){
			if(show_day == 'show')
			{	
				var str = '<span id="day">'+myD+'</span>天<span id="hours">'+myH_show+'</span>时<span id="min">'+myM+'</span>分<span id="seconds">'+myS+'</span>秒';
			}
			else
			{
				var str = '<span id="hours">'+myH+'</span>时<span id="min">'+myM+'</span>分<span id="seconds">'+myS+'</span>秒';
				
			}
        }else{
			var str = "<font>已结束！</font>";	
		}
		obj.html(str);
      });
    }, 100);
	
	
	

	
	function GetFixed(id,className,a,top){
		this.id=$("#"+id);
		this.a=$("."+a);
		this.div=$("."+className);
		this.arguments=arguments;
		this.init.apply(this,arguments);
	}
	GetFixed.prototype={
		init:function(){
			this.addEvent();
			this.resize();
		},
		addEvent:function(){
			var t=this.a.offset().top,that=this,length=this.arguments.length;
			var h=$(document).height(),wh=$(window).height();
			var fn=function(){
				var top=$(document).scrollTop();
				
				if(top>=t){
					that.id.css({left:that.div.offset().left,position:"fixed",top:0});
					that.id.addClass("addborder");
				}else{
					that.id.css({left:0,position:"absolute",top:length>3 ? that.arguments[length-1] : 40});
					that.id.removeClass("addborder");
				}
			}
			fn();
			$(window).scroll(function(){
				fn();
			});
		},
		resize:function(){
			var that=this;
			$(window).resize(function(){
				that.addEvent();
			});
		}
	}
	//new GetFixed("allSortBox","left_part","content");
	//new GetFixed("brand_part","right_part","pos_tips",0);
	
	
	function Banner(id,lbtn,rbtn){
		this.id=$("#"+id);
		this.lbtn=this.id.find("."+lbtn);
		this.rbtn=this.id.find("."+rbtn);
		this.index=0;
		this.init.apply(this,arguments);
		}
		Banner.prototype={
			init:function(){
				var that=this;
				function append(){
					that.li=that.id.find("li");
					that.li.css("display","none");
					that.li.eq(0).css("display","block");
					var ul=$("<ul class='btnlist'></ul>");
					var w=ul.width();
					
					for(var i=0;i<that.li.length;i++){
						var li=$("<li>");
						ul.append(li);
					}
					that.id.append(ul);
				}
				append();
			},
			hover:function(){
				this.tmp=this.id.find(".btnlist").find("li");
				var w=this.id.find(".btnlist").width();
				//this.id.find(".btnlist").css("marginLeft",-(w/2));
				this.tmp.eq(this.index).addClass("active").html(this.index+1);
				var that=this;
				this.tmp.mouseover(function(){
					that.index=that.tmp.index(this);
					that.tmp.removeClass("active").html("");
					that.tmp.eq(that.index).addClass("active").html(that.index+1);
					that.li.eq(that.index).stop(false,true).fadeIn("slow").siblings().stop(false,true).fadeOut("slow");
				});
				
				this.lbtn.click(function(){
					that.index--;
					if(that.index<0){
						that.index=that.li.length-1;
					}
					that.tmp.removeClass("active").html("");
					that.tmp.eq(that.index).addClass("active").html(that.index+1);
					that.li.eq(that.index).stop(false,true).fadeIn("slow").siblings().stop(false,true).fadeOut("slow");
				});
				this.rbtn.click(function(){
					that.index++;
					if(that.index>that.li.length-1){
						that.index=0;
					}
					that.tmp.removeClass("active").html("");
					that.tmp.eq(that.index).addClass("active").html(that.index+1);
					that.li.eq(that.index).stop(false,true).fadeIn("slow").siblings().stop(false,true).fadeOut("slow");
				});
				
				this.id.hover(function(){
					that.rbtn.stop(false,true).fadeIn();
					that.lbtn.stop(false,true).fadeIn();
					clearInterval(that.timer);
				},function(){
					that.rbtn.stop(false,true).fadeOut();
					that.lbtn.stop(false,true).fadeOut();
					auto();
				});
				
				function auto(){
					that.timer=setInterval(function(){
							that.index++;
						if(that.index>that.li.length-1){
							that.index=0;
						}
						that.tmp.removeClass("active").html("");
						that.tmp.eq(that.index).addClass("active").html(that.index+1);
						that.li.eq(that.index).stop(false,true).fadeIn("slow").siblings().stop(false,true).fadeOut("slow");
					},3000);
				}
				auto();
			}
			
		}
		
		var o=new Banner("banner","leftBtn","rightBtn");
		o.hover();
	
		var deleteBorder=function(){
			$(".brand_model").each(function(){
				var li=$(this).find("li");
				li.each(function(i){
					if((i+1)%5==0){
						$(this).addClass("noBorder");
					}
				});
				
				var mo=li.length%5;
				if(mo==0){
					for(var i=li.length-1;i>li.length-6;i--){
						li.eq(i).addClass("noBorder2");
					}
				}else{
					for(var i=li.length-1;i>li.length-mo-1;i--){
						li.eq(i).addClass("noBorder2");
					}
				}
				
				
				
			});
		}
		deleteBorder();
	
	
	
	
	
	
})