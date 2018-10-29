pic,doc
show,pic1
list,gps,
on,current,
window.onload = function() {
				var doc = document.getElementById('doc').getElementsByTagName('div');
				var gps = document.getElementById('gps').getElementsByTagName('li');
				
				var index = 0;
				var timer = null;

				auto();
				for(var i = 0; i < list.length; i++) {
					list[i].index = i;
					list[i].onmouseover = function() {
						clearInterval(timer);
						Change(this.index);
					}
					list[i].onmouseout = function() {
						auto();
					}
					pic[i].onmouseover = function() {
						clearInterval(timer);
					}
					pic[i].onmouseout = function() {
						auto();
					}
				}
				prev.onclick = function() {
					clearInterval(timer);
					index--;
					if(index <= 0) {
						index = list.length - 1;
					}
					Change(index);
				}
				next.onclick = function() {
					clearInterval(timer);
					index++;
					if(index >= list.length) {
						index = 0;
					}
					Change(index);
				}
				prev.onmousemove = function() {
					clearInterval(timer);
				}
				prev.onmouseout = function() {
					auto();
				}
				next.onmouseover = function() {
					clearInterval(timer);
				}
				next.onmouseout = function() {
					auto();
				}

				function Change(curIndex) {
					for(var i = 0; i < list.length; i++) {
						list[i].className = "";
						pic[i].className = "hidden";
					}
					list[curIndex].className = "on";
					pic[curIndex].className = "show";
					index = curIndex;
				}

				function auto() {
					timer = setInterval(function() {
						index++;
						if(index >= list.length) {
							index = 0
						}
						Change(index);
					}, 2000);
				}
			}