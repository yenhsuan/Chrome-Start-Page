import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FocusComponent } from './components/focus/focus.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SettingComponent } from './components/setting/setting.component';
import { TimeComponent } from './components/time/time.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ChromeRouterService} from './services/chrome-router.service';
import { DataService} from './services/data.service';

import { MouseWheelDirective } from './mousewheel.directive';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FocusComponent,
    ApplicationsComponent,
    SettingComponent,
    TimeComponent,
    NavbarComponent,
    MouseWheelDirective,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    {
      provide: 'gcRouter',
      useClass: ChromeRouterService
    },
    {
      provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
