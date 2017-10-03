import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {appRoutes} from '../routes';
import { HomeComponent } from './home/home.component';
import { GisComponent } from './gis/gis.component';
import { PythonComponent } from './python/python.component';
import { WebdevComponent } from './webdev/webdev.component';

import { ExperienceComponent } from './shared/experience/experience.component';

import { PopoverModule } from 'ng4-popover';

import { ProjectService } from './services/project.service';
import { MapService } from './services/map.service';

import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GisComponent,
    PythonComponent,
    WebdevComponent,
    ExperienceComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCStO4EvC2zCIAGFgogE4nfAl0PL3EenG0'
    })
  ],
  providers: [ProjectService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
