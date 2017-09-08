import { Component, OnInit, Inject, ViewContainerRef  } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import * as FileSaver from 'file-saver';

declare let $: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  Arr = Array;
  videoIdArray = [];
  customizedImage = '';
  customizedVideo = '';
  showVideo = false;
  videoLoading = false;
  imageLoading = false;
  activeContent = 1;
  uploadSettingArea = false;
  userSetting = '';
  showSearchBarHome = true;
  showSearchBarFocus = true;


  loadFocus = false;

  constructor(@Inject('data') private data, public toastr: ToastsManager, vcr: ViewContainerRef, public sanitizer: DomSanitizer) {
    this.toastr.setRootViewContainerRef(vcr);
    this.showVideo = this.data.showVideo;
    this.videoIdArray = this.data.videoIdArray;
    this.Arr = Array.apply(null, {length: 40}).map(Number.call, Number);

    this.showSearchBarHome = this.data.showSearchBarHome;
    this.showSearchBarFocus = this.data.showSearchBarFocus;

    const loadFocusStr = localStorage.getItem('loadFocus');
    if (loadFocusStr) {
      this.loadFocus = JSON.parse(loadFocusStr);
    }
  }

  setLoadFocus(): void {
    localStorage.setItem('loadFocus', JSON.stringify( this.loadFocus ));
  }

  setShowSearchBarHome(): void {
    this.data.showSearchBarHome = this.showSearchBarHome;
    this.data.updateShowSearchBarHomeToLocalStorage();
  }

  setShowSearchBarFocus(): void {
    this.data.showSearchBarFocus = this.showSearchBarFocus;
    this.data.updateShowSearchBarFocusToLocalStorage();
  }

  ngOnInit() {
    $('.ui.accordion').accordion();
  }

  getVideoImageUrl(id: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`http://img.youtube.com/vi/${id}/0.jpg`);
  }

  setWallpaper(id: number) {
      this.data.wallpaperUrl = `../../../assets/wallpaper/wallpaper${id}.jpg`;
      this.data.applyWallpaperUrl();
  }

  setActiveContent(id: number) {
    // if (id === this.activeContent) {
    //   this.activeContent = 0;
    // }else {
    //   this.activeContent = id;
    // }
    this.activeContent = id;
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


  setDefaultVideo(id: number): void {
      this.data.videoId = id;
      this.data.showVideo = true;
      this.data.updateVideoIdToLocalStorage();
      this.data.updateShowVideoToLocalStorage();
      this.showSuccess();
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
      this.customizedVideo = '';
    } else {
      this.showError();
      this.customizedVideo = '';
    }
  }
  showSuccess() {
    this.toastr.success('Successfully change background video!', 'Success!');
  }
  showError() {
    this.toastr.error('Please enter a valid youtube url!', 'Oops!');
  }

  downloadSetting() {
    let setting: object = {};
    setting['iconArray'] = this.data.iconArray;
    setting['wallpaperUrl'] = this.data.wallpaperUrl;
    setting['videoId'] = this.data.videoId;
    setting['showVideo'] = this.data.showVideo;
    setting['showSearchBarHome'] = this.data.showSearchBarHome;
    setting['showSearchBarFocus'] = this.data.showSearchBarFocus;
    const blob: Blob = new Blob([JSON.stringify(setting)], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'Start Page Settings.txt');
  }

  uploadSetting() {
    this.uploadSettingArea = true;
  }

  updateSetting() {
    try {
      const setting: any = JSON.parse(this.userSetting);
      if ('iconArray' in setting || 'wallpaperUrl' in setting || 'videoId' in setting || 'showVideo' in setting) {
        if ('iconArray' in setting) {
          this.data.iconArray = setting['iconArray'];
          this.data.updateIconsArrayToLocalStorage();
        }
        if ('wallpaperUrl' in setting) {
          this.data.wallpaperUrl = setting['wallpaperUrl'];
          this.data.applyWallpaperUrl();
        }
        if ('videoId' in setting) {
          this.data.videoId = setting['videoId'];
          this.data.updateVideoIdToLocalStorage();
        }
        if ('showVideo' in setting) {
          this.data.showVideo = setting['showVideo'];
          this.data.updateShowVideoToLocalStorage();
        }
        if ('showSearchBarHome' in setting) {
          this.data.showSearchBarHome = setting['showSearchBarHome'];
          this.data.updateShowSearchBarHomeToLocalStorage();
        }
        if ('showSearchBarFocus' in setting) {
          this.data.showSearchBarFocus = setting['showSearchBarFocus'];
          this.data.updateShowSearchBarFocusToLocalStorage();
        }
      }else {
        this.userSetting = '';
        this.toastr.error('Please enter a valid user setting!', 'Oops!');
        return;
      }
      this.uploadSettingArea = false;
      this.userSetting = '';
      this.toastr.success('Successfully update user setting!', 'Success!');
      return;
    } catch (e) {
      this.userSetting = '';
      this.toastr.error('Please enter a valid user setting!', 'Oops!');
      return;
    }
  }

}
