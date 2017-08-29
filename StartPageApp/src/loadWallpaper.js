let x = localStorage.getItem('wallpaperUrl');

if (!x) {
    x = '../assets/defaultWallpaper.jpg';
}

document.body.style.setProperty( 'background', `url(${x}) no-repeat center center fixed`, 'important');
document.body.style.setProperty('-webkit-background-size', 'cover');
document.body.style.setProperty('background-size', 'cover', 'important');
