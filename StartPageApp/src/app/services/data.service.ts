import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  // iconDataArray = new BehaviorSubject<Array<object>>([]);
  iconArray: Array<object>;
  constructor() {

    let iconStr = this.loadIconsFromLocalStorage();
    if (!iconStr) {
      iconStr = this.loadDefaultIcons();
    }

    this.iconArray = JSON.parse(iconStr);
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


  loadDefaultIcons(): string {

    const defaultIcons = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        iconUrl: '../../assets/icon-alt/Facebook.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Google',
        url: 'https://www.facebook.com',
        iconUrl: '../../assets/icon-alt/Google.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com',
        iconUrl: '../../assets/icon-alt/Youtube I.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'Gmail',
        url: 'https://mail.google.com',
        iconUrl: '../../assets/icon-alt/Gmail.png',
        bgColor: '',
        corner: 0,
        showIconCase: false
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        iconUrl: '../../assets/icon-alt/LinkedIn.png',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'USC',
        url: 'https://www.usc.edu',
        iconUrl: '',
        bgColor: '',
        corner: 0,
        showIconCase: true
      },
      {
        name: 'USC',
        url: 'https://www.usc.edu',
        iconUrl: '',
        bgColor: 'red',
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