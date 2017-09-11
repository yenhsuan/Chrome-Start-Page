import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

declare let $: any;
declare let chrome: any;

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
  showSearchBarHome: boolean;
  showSearchBarHomeChange: Subject<boolean> = new BehaviorSubject<boolean>(null);
  showSearchBarFocus: boolean;
  showSearchBarFocusChange: Subject<boolean> = new BehaviorSubject<boolean>(null);

  constructor() {

    this.loadIconsFromLocalStorage();

    this.wallpaperUrl = this.loadWallpaperUrlFromLocalStorage();
    this.videoIdArray = this.loadDefaultVideoIds();


    this.loadShowVideoFromLocalStorage();
    this.loadVideoIdFromLocalStorage();

    this.showVideoChange.next(this.showVideo);
    this.videoIdChange.next(this.videoId);
    this.iconArrayChange.next(this.iconArray);

    this.loadShowSearchBarHomeFromLocalStorage();
    this.showSearchBarHomeChange.next(this.showSearchBarHome);

    this.loadShowSearchBarFocusFromLocalStorage();
    this.showSearchBarFocusChange.next(this.showSearchBarFocus);
  }

  loadShowSearchBarHomeFromLocalStorage(): void {
    const self = this;
    let str = localStorage.getItem('showSearchBarHome');
    if (str) {
      this.showSearchBarHome = JSON.parse(str);
    } else {
      this.showSearchBarHome = true;
    }

    if (chrome && chrome.storage) {
      chrome.storage.sync.get('showSearchBarHome', function(item){
        str = item['showSearchBarHome'];
        if (str) {
          self.showSearchBarHome = JSON.parse(str);
          self.showSearchBarHomeChange.next(self.showSearchBarHome);
        }
        self.updateShowSearchBarHomeToLocalStorage();
      });
    }
  }

  updateShowSearchBarHomeToLocalStorage(): void {
    const self = this;
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'showSearchBarHome': JSON.stringify(this.showSearchBarHome)}, function(){
      });
    localStorage.setItem('showSearchBarHome', JSON.stringify(this.showSearchBarHome));
    this.showSearchBarHomeChange.next(this.showSearchBarHome);
    }
  }

  loadShowSearchBarFocusFromLocalStorage(): void {
    const self = this;
    let str = localStorage.getItem('showSearchBarFocus');
    if (str) {
      return JSON.parse(str);
    } else {
      this.showSearchBarFocus = true;
    }
    if (chrome && chrome.storage) {
      chrome.storage.sync.get('showSearchBarFocus', function(item){
        str = item['showSearchBarFocus'];
        if (str) {
          self.showSearchBarFocus = JSON.parse(str);
          self.showSearchBarFocusChange.next(self.showSearchBarFocus);
        }
        self.updateShowSearchBarFocusToLocalStorage();
      });
    }
  }

  updateShowSearchBarFocusToLocalStorage(): void {
    const self = this;
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'showSearchBarFocus': JSON.stringify(this.showSearchBarFocus)}, function(){
      });
    }
    localStorage.setItem('showSearchBarFocus', JSON.stringify(this.showSearchBarFocus));
    this.showSearchBarFocusChange.next(this.showSearchBarFocus);
  }

  loadVideoIdFromLocalStorage(): void {
    const self = this;
    const str = localStorage.getItem('videoId');
    if (str) {
      this.videoId = str;
    } else {
      this.videoId = 'PzVA6gYtPc0';
    }

    if (chrome && chrome.storage) {
      chrome.storage.sync.get('videoId', function(item){
        const strTmp = item['videoId'];
        if (strTmp && (strTmp !== self.videoId)) {
          self.videoId = strTmp;
          self.videoIdChange.next(self.videoId);
        }
        self.updateVideoIdToLocalStorage();
      });
    }
  }

  updateVideoIdToLocalStorage(): void {
    const self = this;
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'videoId': this.videoId}, function(){
        // console.log('set videoId ' + self.videoId);
      });
    }
    if (this.videoId !== localStorage.getItem('videoId')) {
      localStorage.setItem('videoId', this.videoId);
      this.videoIdChange.next(this.videoId);
    }
  }

  loadShowVideoFromLocalStorage(): void {
    const self = this;
    let str = localStorage.getItem('showVideo');
    if (str) {
        this.showVideo = JSON.parse(str);
    } else {
      this.showVideo = true;
    }

    if (chrome && chrome.storage) {
      chrome.storage.sync.get('showVideo', function(item){
        str = item['showVideo'];
        if (str) {
          self.showVideo = JSON.parse(str);
          self.showVideoChange.next(self.showVideo);
        }
        self.updateShowVideoToLocalStorage();
      });
    }
  }

  updateShowVideoToLocalStorage(): void {
    const self = this;
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'showVideo': JSON.stringify(this.showVideo)}, function(){
        // console.log('set showVideo ' + JSON.stringify(self.showVideo));
      });
    }
    localStorage.setItem('showVideo', JSON.stringify(this.showVideo));
    this.showVideoChange.next(this.showVideo);
  }

  updateIconsArrayToLocalStorage(): void {
    const self = this;

    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'iconArray': JSON.stringify(this.iconArray)}, function(){
        // console.log('set iconArray ' + JSON.stringify(self.iconArray));
      });
    }
    localStorage.setItem('iconArray', JSON.stringify(this.iconArray));
    this.iconArrayChange.next(this.iconArray);
  }

  loadIconsFromLocalStorage(): void {
    const self = this;
    const strTmp = localStorage.getItem('iconArray');
    if (strTmp) {
      this.iconArray = JSON.parse(strTmp);
    }

    if (chrome && chrome.storage) {
      chrome.storage.sync.get('iconArray', function(item){
        const str = item['iconArray'];
        if (str) {
          self.iconArray = JSON.parse(str);
          self.updateIconsArrayToLocalStorage();
          self.iconArrayChange.next(self.iconArray);
          return;
        }
      });
    }

    if (!strTmp) {
      self.iconArray = JSON.parse(self.loadDefaultIcons());
      self.iconArrayChange.next(self.iconArray);
    }
  }

  loadWallpaperUrlFromLocalStorage(): string {
    const self = this;
    let str;
    if (chrome && chrome.storage) {
      chrome.storage.sync.get('wallpaperUrl', function(item){
        str = item['wallpaperUrl'];
        if (str) {
          self.wallpaperUrl = str;
          // $('body').css('background', `url(${self.wallpaperUrl}) no-repeat center center fixed`);
          // $('body.pushable .pusher').css('background', `url(${self.wallpaperUrl}) no-repeat center center fixed`);
          return str;
        }
        self.wallpaperUrl = '../../../assets/defaultWallpaper.jpg';
        // $('body').css('background', `url(${self.wallpaperUrl}) no-repeat center center fixed`);
        // $('body.pushable .pusher').css('background', `url(${self.wallpaperUrl}) no-repeat center center fixed`);

        return '../../../assets/defaultWallpaper.jpg';
      });
    }else {
      str = localStorage.getItem('wallpaperUrl');
      if (str) {
        return str;
      }
      return '../../../assets/defaultWallpaper.jpg';
    }
  }

  applyWallpaperUrl(): void {
    const self = this;
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({'wallpaperUrl': this.wallpaperUrl}, function(){
        // console.log('set wallpaperUrl ' + self.wallpaperUrl);
      });
    }else {
      localStorage.setItem('wallpaperUrl', this.wallpaperUrl);
    }
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
    return ['PzVA6gYtPc0',
            'jz_QaSnlN6Q',
            'bucV8Y_p0ME',
            '0YjLf8T0lUs',
            'CmqYwvaAGec',
            '8IM0CSO7bsc',
            'cNFPl30uSl4',
            'MELEuPAAdwY',
            'qmUiVrUVd_E',
            'Cbmkkho3JqY',
            '_RGVKiQUfqo',
            'STYr6DeLIW0',
            'W3sAmt2K6UI',
            'gKmOzevJMIg',
            'ZBc5b8n6H9k',
            'tkkSBE0-Tfg',
            'qDxCO6VZO4Q',
            'OK4HbNzZfAs'];
  }



  // subscribeIconData(): Observable<Array<object>> {
  //   return this.iconDataArray.asObservable();
  // }
}
