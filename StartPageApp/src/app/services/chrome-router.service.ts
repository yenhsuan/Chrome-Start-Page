import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';


@Injectable()
export class ChromeRouterService {

  currentView: BehaviorSubject<string>;
  constructor() {
    const loadFocusStr = localStorage.getItem('loadFocus');
    if (!loadFocusStr) {
      this.currentView = new BehaviorSubject<string>('home');
    } else {
      if (JSON.parse(loadFocusStr)) {
        this.currentView = new BehaviorSubject<string>('focus');
      }
      else {
        this.currentView = new BehaviorSubject<string>('home');
      }
    }
  }

  subscribeCurrentView(): Observable<string> {
    return this.currentView.asObservable();
  }

  navigateTo(view: string): void {
    this.currentView.next(view);
  }
}
