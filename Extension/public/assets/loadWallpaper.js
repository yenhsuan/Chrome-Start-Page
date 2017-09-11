// let x = localStorage.getItem('wallpaperUrl');

// if (!x) {
//     x = '../assets/defaultWallpaper.jpg';
// }
// document.body.style.setProperty ("backgroundColor", "green");
// document.body.style.setProperty( 'background', `url('${x}') no-repeat center center fixed`, 'important');
// document.body.style.setProperty('-webkit-background-size', 'cover');
// document.body.style.setProperty('background-size', 'cover', 'important');

(function () {
	if(chrome && chrome.storage) {
		chrome.storage.sync.get('wallpaperUrl', function(item){
			let bg = item['wallpaperUrl'];

			if (!bg) {
			    bg = '../../../assets/wallpaper/wallpaper1.jpg';
			}

			let preloadImg = new Image();
			preloadImg.src = bg.substring(9);

			// (new Image).src = settings.background_image;
			var css = document.createElement('style');
			css.textContent =  `#main, body, body.pushable > .pusher { background: url('${preloadImg.src}') no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover; -o-background-size: cover; background-size: cover !important;}`;
			document.head.appendChild(css);
		});
	}else {
		let bg = localStorage.getItem('wallpaperUrl');

		if (!bg) {
		    bg = '../../../assets/wallpaper/wallpaper1.jpg';
		}

		let preloadImg = new Image();
		preloadImg.src = bg.substring(9);

		// (new Image).src = settings.background_image;
		var css = document.createElement('style');
		css.textContent =  `#main, body, body.pushable > .pusher { background: url('${preloadImg.src}') no-repeat center center fixed; -webkit-background-size: cover;-moz-background-size: cover; -o-background-size: cover; background-size: cover !important;}`;
		document.head.appendChild(css);
	}

})();

