import { Component, OnInit, Inject, ViewContainerRef  } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare let $: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  Arr = Array;
  customizedImage = '';
  customizedVideo = '';
  showVideo = false;
  videoLoading = false;
  imageLoading = false;
  activeContent = 1;
  constructor(@Inject('data') private data, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.showVideo = this.data.showVideo;
  }

  ngOnInit() {
  }

  setWallpaper(id: number) {
      this.data.wallpaperUrl = `../../../assets/wallpaper/wallpaper${id}.jpg`;
      this.data.applyWallpaperUrl();
  }

  setActiveContent(id: number) {
    if (id === this.activeContent) {
      this.activeContent = 0;
    }else {
      this.activeContent = id;
    }
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

  applyShowVideo(): void {
    this.data.showVideo = this.showVideo;
    this.data.updateShowVideoToLocalStorage();
  }

  applyCustomizedVideo(): void {
    if (!this.customizedVideo.trim()) {
      return;
    }
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = this.customizedVideo.trim().match(regExp);
    if (match && match[2].length === 11) {
      this.data.videoId = match[2];
      this.data.showVideo = true;
      this.data.updateVideoIdToLocalStorage();
      this.data.updateShowVideoToLocalStorage();
      this.showSuccess();
    } else {
      this.showError();
    }
  }
  showSuccess() {
    this.toastr.success('Successfully change background video!', 'Success!');
  }
  showError() {
    this.toastr.error('Please enter a valid youtube url!', 'Oops!');
  }

}
