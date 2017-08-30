import { Component, OnInit, Inject } from '@angular/core';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currView: Subscription;
  viewToDisplay: string;

  constructor(@Inject('gcRouter') private gcRouter, @Inject('data') private data) {
    // this.data.applyWallpaperUrl();
    this.viewToDisplay = 'home';
  }

  ngOnInit() {
    this.currView = this.gcRouter.subscribeCurrentView()
      .subscribe( (view: string) => {
        this.viewToDisplay = view;
      });
  }
}
