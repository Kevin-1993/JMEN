window.onload = function(){
	//背景音乐按钮
	// $("#audio_btn").click(function(){ 
	// 	var music = document.getElementById("music");
	//     if(music.paused){ 
	//         music.play(); 
	//         $(this).attr("class","audio_btn"); 
	//     }else{ 
	//         music.pause(); 
	//         $(this).removeAttr("class"); 
	//     } 
	// }); 
	var audio_btn = document.getElementById('audio_btn');
	var music = document.getElementById("music");
	audio_btn.addEventListener('touchstart',function(event){
		    if(music.paused){ 
		        music.play(); 
		        this.setAttribute("class","audio_btn"); 
		    }else{ 
		        music.pause(); 
		        this.removeAttribute("class"); 
		    } 
		},false);

	var mySwiper = new Swiper('.swiper-container', {

	    direction: 'vertical',//Slides的滑动方向
		lazyLoading : true,//设为true开启图片延迟加载
		mousewheelControl: true,//鼠标滚轮控制slide滑动
		watchSlidesProgress: true,
		onInit: function(swiper) {
			swiper.myactive = 0;//设置第一张为0
			
		},
		onProgress: function(swiper) {
			for (var i = 0; i < swiper.slides.length; i++) {
				var slide = swiper.slides[i];
				var progress = slide.progress;
				var translate, boxShadow;

				//位移
				translate = progress * swiper.height * 0.8;
				scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
				boxShadowOpacity = 0;

				slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';

				if (i == swiper.myactive) {
					es = slide.style;
					es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
					es.zIndex=0;


				}else{
					es = slide.style;
					es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
					es.zIndex=1;
					
				}

			}

		},


		onTransitionEnd: function(swiper, speed) {

			swiper.myactive = swiper.activeIndex;//过渡结束时设置当前页面swiper.myactive = swiper.activeIndex

		},
		onSetTransition: function(swiper, speed) {

			for (var i = 0; i < swiper.slides.length; i++) {
					es = swiper.slides[i].style;
					es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
			}

		}

	});
}