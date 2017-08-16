import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';


import { Route } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FocusComponent } from './components/focus/focus.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SettingComponent } from './components/setting/setting.component';
import { TimeComponent } from './components/time/time.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ChromeRouterService} from './services/chrome-router.service';

import { MouseWheelDirective } from './mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FocusComponent,
    ApplicationsComponent,
    SettingComponent,
    TimeComponent,
    NavbarComponent,
    MouseWheelDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Route,
    DragulaModule
  ],
  providers: [
    {
      provide: 'gcRouter',
      useClass: ChromeRouterService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
