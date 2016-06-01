home_img_old = 2;
list_line = 5;
window_load = "";

function liquid(){
	site_x = $(window).width() -15;

	if(area=="home") {
		
		if(intro_home=="ok" && window_load=="ok"){
			intro_site_x = $(window).width();
			intro_site_y = $(window).height();
		
			intro_site_propor = intro_site_x/intro_site_y;

			intro_img_x = "1280";
			intro_img_y = "902";
		
			intro_img_propor = intro_img_x/intro_img_y;

			intro_adhemas_top = "620";
		
			// intro_adhemas_top_propor = intro_img_y/intro_adhemas_top;
			$("#intro .full").animate({opacity: 1.0}, {queue:false, duration:300, easing:"expoEaseOut"});			
		
			if(intro_site_propor > intro_img_propor){
				$("#intro .full").css({"width":intro_site_x+"px"});
				$("#intro .full").css({"height": "auto"});
				$("#intro .full").css({"top": Math.floor(( intro_site_y - $("#intro .full").height() )/2)+"px"});
				$("#intro .full").css({"left": "0px"});
				// $("#intro .intro_adhemas").css({"top": 	Math.floor(Math.floor(( intro_site_y - $("#intro .full").height() )/2) + (( $("#intro .full").height() / intro_img_y )*intro_adhemas_top)) + "px"});
			}else{
				$("#intro .full").css({"height":intro_site_y+"px"});			
				$("#intro .full").css({"width":"auto"});
				$("#intro .full").css({"left": Math.floor(( intro_site_x - $("#intro .full").width() )/2)+"px"});
				$("#intro .full").css({"top": "0px"});
				// $("#intro .intro_adhemas").css({"top": ( $("#intro .full").height() / intro_img_y )*intro_adhemas_top+"px"});
			}
		
		}
		
		home_img = Math.floor( (site_x-110+60) / (516+60) );
		
		if(home_img<2){
			home_img = 2;
		}
		
		if(home_img != home_img_old && home_img<=counter_area){
			// alert(home_img);
			$("#content, #header, #footer").css({"width": (home_img * (516+60))-60+"px"});
			$("#page").css({"width": (home_img * (516+60))-60+110+"px"});
			home_img_old = home_img;
		}
		
	}
	
	if((area=="tag" && window_load=="ok")){
		
		home_img = Math.floor( (site_x-40+10) / (232+10) );
		
		if(home_img<5){
			home_img = 5;
		}
		
		if(home_img != home_img_old){
			// alert(home_img);
			$("#content, #header, #footer").css({"width": (home_img * (232+10))-10+"px"});
			$("#page").css({"width": (home_img * (232+10))-10+"px"});
			home_img_old = home_img;
			list_line = home_img;
			resize_list();
		}
		
	}
}

(function($,sr){
 
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
 
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };
 
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
 
          timeout = setTimeout(delayed, threshold || 100); 
      };
  }
	// smartresize 
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
 
})(jQuery,'smartresize');
 
 
// usage:

alert_h5 = 0;

function resize_book(){
	
	extra_y = 156;
	
	site_x = $(window).width()-40;
	site_y = $(window).height()-extra_y;
	
	if (site_x % 2 == 1) {
		site_x-1;
	}
	
	default_x = 1200;
	default_y = 780;

	// default_x = 600;
	// default_y = 390;
	// 
	// $("#footer ul").hide();

	// alert($("#header").height() + $("#clear").height() + $("#footer").height());

// $("#header, #footer, #clear").hide();
// if(alert_h5==0){
// 	$("body").append("<h5>direction</h5>");
// 	$("h5").css(
// 		{
// 			'position' : 'absolute',
// 			'top': 0,
// 			'left': 0,
// 			'z-index' : 1000
// 		}
// 	);
// 	alert_h5 = 1;
// }
// $('#content').css({'width','1410px'});
// alert("$(window).width() = "+$(window).width()+" and $('#content').width() = "+$('#content').width());

	// default_x = 120;
	// default_y = 78;


// default_x = 600;
// default_y = 390;
	
	// min_y = default_y + 155;
	
	min_y = default_y;
	
	default_propor =  default_x / min_y;
	// alert(site_x);

	
	
	// if(site_x < default_x){
	// 	site_x = default_x;
	// }


	// $("#page, #book, #book li").css({"width" : site_x + "px"});
	// $("#page, #book, #book li").css({"height" : site_y-(header_y + footer_y) + "px"});
	// 
	// $("#next, #prev").hide();
	
	if(site_y > min_y && site_x > default_x){
		
		$("body").css({'overflow':'hidden'});
	
		if( (site_x/site_y) > (default_x/min_y) ){
			
			// $("h5").html("height 100%");
			
			$("#page").css(
				{
					'width' : (site_y*(default_x/min_y)) + "px"
				}
			);
			
			$("#book, #book li").css(
				{
					'height' : (site_y) + "px",
					'width' : (site_y*(default_x/min_y)) + "px"
				}
			);
			
			$("#prev, #next").css(
				{
					'height' : (site_y) + "px",
					'width' : ((site_y*(default_x/min_y))/2) + "px"
				}
			);
			
			$("#book li img").css(
				{
					'height' : (site_y) + "px",
					'width' : 'auto'
				}
			);
			
		}else{
			
			// $("h5").html("width 100%");
			
			$("#page").css(
				{
					'width' : site_x + "px"				}
			);

			$("#book, #book li").css(
				{
					'width' : site_x + "px",
					'height' : (site_x*(min_y/default_x)) + "px"
				}
			);
			
			$("#prev, #next").css(
				{
					'width' : (site_x/2) + "px",
					'height' : (site_x*(min_y/default_x)) + "px"
				}
			);
			
			$("#book li img").css(
				{
					'width' : "auto",
					'height' : (site_x*(min_y/default_x)) + "px"
				}
			);
			
		}

		$("#book").cycle({
			startingSlide: starter
		});
	
	}else{
		$("body").css({'overflow':'auto'});
	}
	// if(site_y > min_y && site_x > default_x){
	// 	// alert(site_y + ' | ' + min_y);
	// 	
	// 	// alert("+++");
	// 	
	// 	
	// 	
	// 	// if( ((site_x-default_x) / (min_y-site_y)) > default_propor ){
	// 	if( (site_x/default_x) < (min_y/site_y) ){
	// 
	// 		height_book = Math.floor(site_x / default_propor);
	// 
	// 		if(height_book % 2 == 1){
	// 			height_book --;
	// 		}
	// 		$("#page, #book, #book li").css({"width" : site_x + "px"});
	// 		$("#next, #prev").css({"width" : site_x/2 + "px"});
	// 		$("#book, #book li, #next, #prev").css({"height" : Math.floor(site_x / default_propor) + "px"});
	// 		$("#book img").css({"height" :"auto"});
	// 
	// 	}else{
	// 
	// 		$("#book, #book li, #next, #prev, #book img").css({"height" : (site_y-min_y+default_y) + "px"});
	// 		$("#book img").css({"width" : "auto"});
	// 		$("#page, #book, #book li").css({"width" : (site_y-min_y+default_y)/default_y*default_x + "px"});
	// 		$("#next, #prev").css({"width" : (site_y-min_y+default_y)/default_y*default_x/2+ "px"});
	// 
	// 	}
	// 	
	// 	$("#book").cycle({
	// 		startingSlide: starter
	// 	});
	// 
	// 
	// }
	
}

function onAfter(curr, next, opts) {
    var index = opts.currSlide;
	starter = index;
	$('#book li#page_'+index+' img').each(function(i) {
		page_title = $(this).attr("title");
		if(page_title){
			$(this).attr("src", page_title);
			$(this).attr("title","");
			$(this).addClass("loaded");
			$(this).load(function(){
				$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});
			});
		}
	});
	
	min_index = index-2;
	max_index = index+2;
	while(min_index<=max_index){
		if(min_index!=index && min_index >= 0 && min_index < (opts.slideCount + 0) ){
			$('#book li#page_'+min_index+' img').each(function(i) {
				page_title = $(this).attr("title");
				if(page_title){
					$(this).attr("src", page_title);
					$(this).attr("title","");
					$(this).addClass("loaded");
					$(this).load(function(){
						$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});
					});
				}
			});
		}
		min_index++;
	}
	
    $('#prev')[index == 0 ? 'hide' : 'show']();
    $('#next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
}

function resize_list(){
	// if(){

		i = 1;
		$(".tag_list li").each(function() {
			$(this).attr("id","list_" + i);
		});
		
		$(".tag_list li:not('."+current_tag+"')").animate({opacity: 0, height: 0, "margin-bottom": 0, top: 0, width: 0}, {queue:false, duration:800, easing:"expoEaseOut"});
		$(".tag_list li:not('."+current_tag+"')").attr("id","");
		i = 1;
		$(".tag_list li").each(function() {
			if($(this).attr("id")){
				$(this).attr("id","list_" + i);

				i = i+1;
			}
		});
		
		i = 1;
		l = 1;
		var my_top=new Array();
		// var my_img_size=new Array();
		my_top[0] = 0;
		// my_img_size[] = 0;
		content_height = 311;
		$(".tag_list li."+current_tag).each(function() {
			if(i<=list_line){
				new_top = 10;
				my_top[i] = 10;
			}else{
				new_i = i-list_line;
		
				// var p = $('#list_'+new_i);
				// var position = p.position();
				// my_top[] = position.top;
				new_top = my_top[new_i] + $('#list_'+new_i).find("img").height()+10;
				my_top[i] = new_top;
				if(content_height< (new_top + $(this).find("img").height()) ){
					content_height = new_top + $(this).find("img").height();
				}
				// alert(my_top[new_i]);
				// my_top[] = new_top;
				// alert(position.top);
				// new_top = 0;
				// alert($('#list_'+new_i).find("img").height());
			}
			$(this).animate(
				{
					opacity: 1.0,
					height: $(this).find("img").height(),
					left: (l-1)*(232+10),
					top: new_top,
					// "margin-bottom": 10,
					// "padding-left": i*10,
					width: $(this).find("img").width()
					// top: new_top
				}, 
				{
					queue:false,
					duration:800,
					easing:"expoEaseOut"
				}
			);
			i = i+1;
			l = l+1;
			if(l>list_line){
				l = 1;
			}
		});
		
		// $("#content").css({"height": content_height+"px"});
		$("#content").animate({height: content_height}, {queue:false, duration:800, easing:"expoEaseOut"});

	// }
	// $('ul.home img').each(function(i) {
	// 	$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});			
	// });
}

$(window).load(function(){
	window_load="ok";
	//if(area=="tag"){
		// resize_list();
		liquid();
	//}
});
$(document).ready(function(){

	// $('#book').load(function() {
	//   // Handler for .load() called.
	// });

	$('ul.home img').each(function(i) {
		$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});			
	});

	$('#book li img.loaded').load(function() {
		$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});
	});

	$("#header ul#menu li a").hover(
		function(){
			$(this).find("span").addClass("active");	
		},
		function(){
			$(this).find("span").removeClass("active");			
		}
	);
	
	$(".sort ul li").hover(
		function(){
			// alert("teste");
			$(this).find("ul").show();
		},
		function(){
			$(this).find("ul").hide();
		}
	);
	
	$("body.tag .sort ul ul a").click(function(){
		url = $(this).attr("class");
		title = $(this).html();
		// alert(url);
		if(url != current_tag){
			$("#title_sort").html(title);
			current_tag = url;
			resize_list();
		}
		return false;
	});
	
	$("#intro img").click(function(){
		$("#intro").hide();
		// $("#intro").animate({opacity: 0, height: '20px'}, {queue:false, duration:800, easing:"expoEaseOut"});			
		
		$("body").removeClass("intro");
	});
	
	if(area=="about") {

		$('ul.about img').each(function(i) {
			$(this).animate({opacity: 1.0}, {queue:false, duration:800, easing:"expoEaseOut"});			
		});

		$('ul.about').each(function(i) {
			$(this).cycle( {
				delay: i * 500,
				fx: 'scrollHorz',
				timeout: 5000,
				speed: 1000,
				easing: "expoEaseInOut"
			});
		});
	}
	
	if(area=="home") {
	
		$('ul.cover').each(function(i) {
			$(this).cycle( {
				delay: i * 500,
				fx: 'scrollHorz',
				timeout: 5000,
				speed: 1000,
				easing: "expoEaseInOut"
			});
		});
	
	}

	
	if(area=="category"){
		$("#book").cycle( {
			// delay: i * 500,
			fx:     'scrollHorz', 
		    // speed:  'fast', 
			slideResize: false,
		    timeout: 0,
			speed: 1000,
			easing: "expoEaseInOut",
		    next:   '#next', 
		    prev:   '#prev',
			startingSlide: starter,
		    after:   onAfter
		});

		$("#next, #prev").hover(
			function(){
				// $(this).css({'opacity':'1'});
				$(this).animate({opacity: 1}, {queue:false, duration:800, easing:"expoEaseOut"});
			},
			function(){
				$(this).animate({opacity: 0}, {queue:false, duration:800, easing:"expoEaseOut"});
			}
		);
		
		resize_book();

	}
	
	liquid();
	// $(window).smartresize(function(){  
	// 	if(area=="category"){
	// 		resize_book();
	// 	}
	// 	liquid();
	// });

	$(window).resize(function() {
		if(area=="category"){
			resize_book();
		}
		liquid();
	
	});
	
	
});