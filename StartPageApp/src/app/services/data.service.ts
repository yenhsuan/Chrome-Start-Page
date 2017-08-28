import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

declare let $: any;

@Injectable()
export class DataService {

  // body, body.pushable > .pusher {
  // background: url("/assets/defaultWallpaper.jpg") no-repeat center center fixed;

  iconArray: Array<object>;
  wallpaperUrl: string;

  constructor() {

    let iconStr = this.loadIconsFromLocalStorage();
    if (!iconStr) {
      iconStr = this.loadDefaultIcons();
    }
    this.iconArray = JSON.parse(iconStr);

    this.wallpaperUrl = this.loadWallpaperUrlFromLocalStorage();
  }

  updateIconsArrayToLocalStorage(): void {
    localStorage.setItem('iconArray', JSON.stringify(this.iconArray));
  }

  loadIconsFromLocalStorage(): string {
    const str = localStorage.getItem('iconArray');
    if (str) {
      return str;
    }

    return '';
  }

  loadWallpaperUrlFromLocalStorage(): string {
    const str = localStorage.getItem('wallpaperUrl');
    if (str) {
      return str;
    }
    return '../../../assets/defaultWallpaper.jpg';
  }

  applyWallpaperUrl(): void {
    localStorage.setItem('wallpaperUrl', this.wallpaperUrl);
    $('body').css('background', `url(${this.wallpaperUrl}) no-repeat center center fixed`);
    $('body.pushable .pusher').css('background', `url(${this.wallpaperUrl}) no-repeat center center fixed`);
  }

  loadDefaultIcons(): string {

    const defaultIcons = [
      {
        name: 'Facebook',
        url: 'http://www.facebook.com',
        iconUrl: '../../assets/icon-alt/Facebook.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Google',
        url: 'http://www.google.com',
        iconUrl: '../../assets/icon-alt/Google.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Youtube',
        url: 'http://www.youtube.com',
        iconUrl: '../../assets/icon-alt/Youtube I.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Gmail',
        url: 'http://mail.google.com',
        iconUrl: '../../assets/icon-alt/Gmail.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'LinkedIn',
        url: 'http://www.linkedin.com',
        iconUrl: '../../assets/icon-alt/LinkedIn.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      }
    ];

    return JSON.stringify(defaultIcons);
  }




  // subscribeIconData(): Observable<Array<object>> {
  //   return this.iconDataArray.asObservable();
  // }
}
