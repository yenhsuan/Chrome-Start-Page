import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

declare let $: any;

@Injectable()
export class DataService {

  // body, body.pushable > .pusher {
  // background: url("/assets/defaultWallpaper.jpg") no-repeat center center fixed;

  iconArray: Array<object>;
  wallpaperUrl: string;
  videoId: string;
  showVideo: boolean;
  videoIdChange: Subject<string> = new BehaviorSubject<string>(null);
  showVideoChange: Subject<boolean> = new BehaviorSubject<boolean>(null);
  iconArrayChange: Subject<Array<object>> = new BehaviorSubject<Array<object>>(null);
  videoIdArray: Array<string>;

  constructor() {

    let iconStr = this.loadIconsFromLocalStorage();
    if (!iconStr) {
      iconStr = this.loadDefaultIcons();
    }
    this.iconArray = JSON.parse(iconStr);
    this.videoIdArray = this.loadDefaultVideoIds();
    this.wallpaperUrl = this.loadWallpaperUrlFromLocalStorage();
    this.showVideo = this.loadShowVideoFromLocalStorage();
    this.videoId = this.loadVideoIdFromLocalStorage();
    this.showVideoChange.next(this.showVideo);
    this.videoIdChange.next(this.videoId);
    this.iconArrayChange.next(this.iconArray);
  }

  loadVideoIdFromLocalStorage(): string {
    const str = localStorage.getItem('videoId');
    if (str) {
      return str;
    }
    return 'PzVA6gYtPc0';
  }

  updateVideoIdToLocalStorage(): void {
    localStorage.setItem('videoId', this.videoId);
    // broadcast video id changed
    this.videoIdChange.next(this.videoId);
  }

  loadShowVideoFromLocalStorage(): boolean {
    const str = localStorage.getItem('showVideo');
    if (str) {
      return JSON.parse(str);
    }
    return true;
  }

  updateShowVideoToLocalStorage(): void {
    localStorage.setItem('showVideo', JSON.stringify(this.showVideo));
    // broadcast show video changed
    this.showVideoChange.next(this.showVideo);
  }

  updateIconsArrayToLocalStorage(): void {
    localStorage.setItem('iconArray', JSON.stringify(this.iconArray));
    // broadcast icon array changed
    this.iconArrayChange.next(this.iconArray);
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
  loadDefaultVideoIds(): Array<string> {
    return ['PzVA6gYtPc0', 'jz_QaSnlN6Q', 'bucV8Y_p0ME', '0YjLf8T0lUs', 'CmqYwvaAGec', '8IM0CSO7bsc', 'cNFPl30uSl4', 'MELEuPAAdwY', 'qmUiVrUVd_E', 'Cbmkkho3JqY', '_RGVKiQUfqo', 'STYr6DeLIW0', 'W3sAmt2K6UI', 'gKmOzevJMIg', 'ZBc5b8n6H9k', 'tkkSBE0-Tfg', 'qDxCO6VZO4Q', 'OK4HbNzZfAs'];
  }



  // subscribeIconData(): Observable<Array<object>> {
  //   return this.iconDataArray.asObservable();
  // }
}
