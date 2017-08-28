import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  Arr = Array;
  customizedImage = '';
  imageLoading = false;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
  }

  setWallpaper(id: number) {
      this.data.wallpaperUrl = `../../../assets/wallpaper/wallpaper${id}.jpg`;
      this.data.applyWallpaperUrl();
  }

  applyCustomizedImage(): void {
      if (!this.customizedImage.trim()) {
          return;
      }

      this.imageLoading = true;
      const img = new Image();
      img.onload = () => {
        this.data.wallpaperUrl = img.src;
        this.data.applyWallpaperUrl();
        this.imageLoading = false;
      };

      img.onerror = () => {
        this.customizedImage = '';
        this.imageLoading = false;
      };
      img.src = encodeURI(this.customizedImage.trim());
  }


}
