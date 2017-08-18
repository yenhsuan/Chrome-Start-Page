import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FocusComponent } from './components/focus/focus.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { SettingComponent } from './components/setting/setting.component';
import { TimeComponent } from './components/time/time.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const route: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'focus',
    component: FocusComponent

  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'apps',
    component: ApplicationsComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

export const Route = RouterModule.forRoot(route);
