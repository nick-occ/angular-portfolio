import {Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {GisComponent} from './app/gis/gis.component';
import {PythonComponent} from './app/python/python.component';
import {WebdevComponent} from './app/webdev/webdev.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gis', component: GisComponent},
  {path: 'python', component: PythonComponent},
  {path: 'webdev', component: WebdevComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
