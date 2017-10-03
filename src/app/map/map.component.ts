import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, AgmMarker, AgmMap } from '@agm/core';
import { MapService } from '../services/map.service';
import { IMapMarkers } from '../shared/map-markers.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: IMapMarkers[];

  // initial center position for the map
  lat: number;
  lng: number;
  // current page
  page: number;

  private timer;

  constructor(private _mapService: MapService) {
    this.page = 0;
    this.markers = this._mapService.getMapMarkers();
    this.lat = this.markers[0].lat;
    this.lng = this.markers[0].lng;

    this.timer  = setInterval(() => this.clickEvent(this.page, 'next'), 5000);
  }

  ngOnInit() {

  }

  clickEvent(page: number, btn: string) {
    if (btn === 'previous' && page !== 0) {
      this.page = this.page -= 1;
    } else if (btn === 'previous' && page === 0) {
      this.page = this.markers.length - 1;
    } else if (btn === 'next' && page !== this.markers.length - 1) {
      this.page += 1;
    } else if (btn === 'next' && page === this.markers.length - 1) {
      this.page = 0;
    } else {
      this.page = page;
    }

    this.lat = this.markers[this.page].lat;
    this.lng = this.markers[this.page].lng;

  }
}
