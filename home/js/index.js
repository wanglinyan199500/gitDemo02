
window.onload=function(){
	

// 我的酒仙
	$('.main-right,.myjiu').mouseenter(function(){
	// alert(this)
		$(this).find('.myjiu').css({'background':'#fff'});
		$(this).find('.myjiuxian').show();
	
});	
	$('.main-right,.myjiu').mouseleave(function(){
		$(this).find('.myjiu').css({'background':'#f2f2f2'});
	$(this).find('.myjiuxian').hide();

	})
	

		// 导航栏部分
		var Lis=document.getElementsByTagName("li")
		for(i=0;i<Lis.length;i++){
			Lis[i].onmouseover=function(){
				this.className='lihover'
				// alert(1)
			}
			Lis[i].onmouseout=function(){
			this.className=''
		}
		}
		
	

	// ppt部分
	$(function(){
		// 初始化
		$('.tu li').first().show();//找到第一个并显示
		$('.shu li').first().addClass('active')//为第一个添加一个类


		//手动控制图片的淡入与淡出
		$('.shu li').mouseover(function(){
			$(this).addClass('active').siblings('li').removeClass('active')//鼠标移入添加active类，匹配同类元素并让其他元素删除active类

			var index=$(this).index()//获取当前的索引值
			i=index//设置同步
			$('.tu li').eq(index).fadeIn().siblings().fadeOut()
			//图片eq()筛选并淡入，匹配同类元素并淡出
		})


		//自动通过时间间隔函数，控制图片的显示
		var i=0;//定义一个变量，自加
		var t=setInterval(move,2000)
	
		//点击右边箭头执行的动画
		$('.out .right').click(function(){
			move()
		})

		//点击左箭头执行的动画
		$('.out .left').click(function(){
			moveL()
		})


		//向左的
		function moveL(){
			i--;
			if (i==-1) {
				i=2;
			}
			$('.shu li').eq(i).addClass('active').siblings().removeClass('active')
			$('.tu li').eq(i).fadeIn().siblings().fadeOut()
		}


		//动画运行的核心函数  向右的
		function move(){
			i++;
			if (i==3) {
				i=0;
			}
			$('.shu li').eq(i).addClass('active').siblings().removeClass('active')
			$('.tu li').eq(i).fadeIn().siblings().fadeOut()
		}

		//鼠标移入out元素的时候停止运行动画
		$('.out').hover(function(){
			clearInterval(t);
			
		},function(){
			t=setInterval(move,2000)
		})

	})

// 抢买热卖广告
$('.contentFirst_top li').eq(0).css({'background-color': 'white','border-top':'2px solid red','border-bottom':'none'})
	$('.contentFirst_top li').mouseover(function(){
		$(this).css({'background-color': 'white','border-top':'2px solid red'});//当前对象的颜色
		$('.contentFirst_top li').not($(this)).css({'background-color': '#f9f9f9','border-top':'0px #ccc','border-bottom':'none'})//其他栏则为黑色

		idx=$(this).index('.contentFirst_top li') //index：当鼠标移到哪个li就得到他的序号
		//alert(idx)
		$('.contentFirst_bottom ul').eq(idx).show();
		$('.contentFirst_bottom ul').not($('.contentFirst_bottom ul').eq(idx)).hide();
	});

// 公告信息
	$('.contentsecond_top_news li').eq(0).css({'background-color': 'white','border-top':'2px solid red','border-bottom':'none'})
	$('.contentsecond_top_news li').mouseover(function(){
		$(this).css({'background-color': 'white','border-top':'2px solid red'});//当前对象的颜色
		$('.contentsecond_top_news li').not($(this)).css({'background-color': '#f9f9f9','border-top':'0px #ccc','border-bottom':'none'})//其他栏则为黑色

		idx=$(this).index('.contentsecond_top_news li') //index：当鼠标移到哪个li就得到他的序号
		//alert(idx)
		$('.contentsecond_top_bottom ul').eq(idx).show();
		$('.contentsecond_top_bottom ul').not($('.contentsecond_top_bottom ul').eq(idx)).hide();
	})



//热卖广告区广告one
$(function(){
		// 初始化
		$('.one_img li').first().show();//找到第一个并显示
		$('.contentsecond_one li').first().addClass('active')//为第一个添加一个类


		//手动控制图片的淡入与淡出
		$('.contentsecond_one li').mouseover(function(){
			$(this).addClass('active').siblings('li').removeClass('active')//鼠标移入添加active类，匹配同类元素并让其他元素删除active类

			var index=$(this).index()//获取当前的索引值
			i=index//设置同步
			$('.one_img li').eq(index).fadeIn().siblings().fadeOut()
			//图片eq()筛选并淡入，匹配同类元素并淡出
		})


		//自动通过时间间隔函数，控制图片的显示
		var i=0;//定义一个变量，自加
		var t=setInterval(move,2000)
	
		//动画运行的核心函数  向右的
		function move(){
			i++;
			if (i==3) {
				i=0;
			}
			$('.contentsecond_one li').eq(i).addClass('active').siblings().removeClass('active')
			$('.one_img li').eq(i).fadeIn().siblings().fadeOut()
		}

		//鼠标移入out元素的时候停止运行动画
		$('.contentsecond_centre').hover(function(){
			clearInterval(t);
			
		},function(){
			t=setInterval(move,2000)
		})

	})


//热卖广告区广告two
$(function(){
		// 初始化
		$('.two_img li').first().show();//找到第一个并显示
		$('.contentsecond_two li').first().addClass('active')//为第一个添加一个类


		//手动控制图片的淡入与淡出
		$('.contentsecond_two li').mouseover(function(){
			$(this).addClass('active').siblings('li').removeClass('active')//鼠标移入添加active类，匹配同类元素并让其他元素删除active类

			var index=$(this).index()//获取当前的索引值
			i=index//设置同步
			$('.two_img li').eq(index).fadeIn().siblings().fadeOut()
			//图片eq()筛选并淡入，匹配同类元素并淡出
		})


		//自动通过时间间隔函数，控制图片的显示
		var i=0;//定义一个变量，自加
		var t=setInterval(move,2000)
	
		//动画运行的核心函数  向右的
		function move(){
			i++;
			if (i==3) {
				i=0;
			}
			$('.contentsecond_two li').eq(i).addClass('active').siblings().removeClass('active')
			$('.two_img li').eq(i).fadeIn().siblings().fadeOut()
		}

		//鼠标移入out元素的时候停止运行动画
		$('.contentsecond_centretwo').hover(function(){
			clearInterval(t);
			
		},function(){
			t=setInterval(move,2000)
		})

	})



//限时抢购的左右按钮

$('.youhui_bottom ul').first().show();//找到第一个并显示
		$('.you_tu li').first().addClass('active')//为第一个添加一个类


		//手动控制图片的淡入与淡出
		$('.you_tu li').hover(function(){
			$(this).addClass('active').siblings('li').removeClass('active')//鼠标移入添加active类，匹配同类元素并让其他元素删除active类

			var index=$(this).index()//获取当前的索引值
			i=index//设置同步
			$('.youhui_bottom ul').eq(index).show().siblings().hide()
			//图片eq()筛选并淡入，匹配同类元素并淡出
		})



//限时抢购时间设置
showTime()
		function showTime(){
				var endtime=new Date("2018/5/05,12:20:12")//结束时间
		var nowtime=new Date()//当前时间
		var conter=parseInt((endtime.getTime()-nowtime.getTime())/1000)
		var d=parseInt(conter/(24*60*60))//得到天
		var h=parseInt(conter/(60*60)%24)//用取余得到时
		var m=parseInt(conter/60%60)
		var s=parseInt(conter%60)
		document.getElementById('youhui_shijian').innerHTML='剩余：'+d+'天'+h+'小时'+m+'分'+s+'秒'
		setTimeout(showTime,500)//setTimeout只运行一次，也就是说设定的时间到后就触发运行指定代码，运行完后即结束。如果运行的代码中再次运行同样的setTimeout命令，则可循环运行
		//而 setinterval是循环运行的，即每到设定时间间隔就触发指定代码。这是真正的定时器。
		}




//图像偏移
$('.baijiuguan_img img').hover(
		function(){
			$(this).animate({
				'margin-left':'-5px'
			},200);
		},
		function(){
				$(this).animate({
				'margin-left':'0px'
			},200);
		}
		);

$('#jiu img').hover(
		function(){
			$(this).animate({
				'margin-left':'-100px'
			},200);
		},
		function(){
				$(this).animate({
				'margin-left':'0px'
			},200);
		}
		);




//方法二：回到顶部
	topobj=document.getElementById('right_img')
	topobj.onclick=function(){
		nu=navigator.userAgent;//检查浏览器内核
		if (nu.match(/chrome/i)) {
			//谷歌
			st=document.body.scrollTop;
		if (st>200) {
			topobj.style.display='block'
		}else{
			topobj.style.display='none'
		}
		}else{
			//非谷歌
			document.documentElement.scrollTop=0;
		}
	}

// 窗口右侧缓慢回到顶部
$('.right_daohang .right_bottom #right_img').click(function(){
s=$(window).scrollTop();
v=50
sobj=setInterval(function(){
	s-=v;
	if (s<=0) {
		s=0
		clearInterval(sobj)
	}
	$(window).scrollTop(s)
},15)

})




	// 右侧广告
	var now=1;
	
	var max=8;
	img1=document.getElementById('img1')
	img2=document.getElementById('img2')
	img3=document.getElementById('img3')
	//alert(max)
	setInterval(function(){
		for(i=1;i<(max+1);i++){
			if (i==now) {
				img1.src='img/ad0'+i+'.jpg'
				
			}else{
				img1.innterHTML=i
				//alert(i)
			}
		}
		if (now==3) {
			now=1
		}else{
			now++
		}
		
	},2000)
	setInterval(function(){
		for(i=3;i<(max+1);i++){
			if (i==now) {
				img2.src='img/ad0'+i+'.jpg'
				
			}else{
				img2.innterHTML=i
				//alert(i)
			}
		}
		if (now==max) {
			now=1
		}else{
			now++
		}
		
	},2000)
	setInterval(function(){
		for(i=6;i<(max+1);i++){
			if (i==now) {
				img3.src='img/ad0'+i+'.jpg'
				
			}else{
				img3.innterHTML=i
				//alert(i)
			}
		}
		if (now==max) {
			now=1
		}else{
			now++
		}
		
	},1000);






}
	