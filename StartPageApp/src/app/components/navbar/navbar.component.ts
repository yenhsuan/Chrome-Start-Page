import { Component, OnInit, Inject } from '@angular/core';
declare let $: any;
declare let chrome: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject('gcRouter') public gcRouter) { }

  ngOnInit() {
    $('#chromePages').popup({
        popup: '#pop1',
        on    : 'click'
    });
  }

  openAppsPage() {
    chrome.tabs.update({url: 'chrome://apps'});
  }

  openBookMark() {
    chrome.tabs.update({url: 'chrome://bookmarks/'});
  }

  openChromeSetting() {
    chrome.tabs.update({url: 'chrome://settings/'});
  }

  // triggerFavPanel(): void {
  //   $('#favSideMenu').sidebar('toggle');
  // }
}
