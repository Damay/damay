window.onload = function(){
		var klul = document.getElementById("klul");
		var klimgs = klul.getElementsByTagName("img");

		var timer = null;
		var zongchangdu = (klimgs[0].offsetWidth + 20) * klimgs.length;

		console.log(zongchangdu);
		if( (zongchangdu%10) !=0){
			//让总长度一定是能够被10整除的， 修正
			a = zongchangdu / 10;
			a = parseInt(a);
			zongchangdu = a * 10;
		}
		console.log(zongchangdu);

		var nowleft = 0; //信号量
		klul.innerHTML = klul.innerHTML + klul.innerHTML;

		zuo();

		function zuo(){
			clearInterval(timer);
			nowleft = 0;
			klul.style.left = nowleft;
			timer = setInterval(gundong,100);		//靠这个30来控制速度

			for(var i = 0; i<=klimgs.length-1;i++){
				klimgs[i].onmouseover = function(){
					clearInterval(timer);
				}
				klimgs[i].onmouseout = function(){
					clearInterval(timer);
					timer = setInterval(gundong,100);
				}
			}
			function gundong(){
				if(nowleft != (-1) * zongchangdu){
					nowleft = nowleft - 10;	//这个10
					klul.style.left = nowleft + "px";
				}else{
					nowleft = 0;
					klul.style.left = nowleft + "px";
				}
			}
		}

	 
	}