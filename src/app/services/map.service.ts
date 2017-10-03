import { Injectable } from '@angular/core';
import { MAP_MARKERS } from '../shared/map-markers';
import { IMapMarkers } from '../shared/map-markers.model';

@Injectable()
export class MapService {

  constructor() { }

  getMapMarkers(): IMapMarkers[] {
    return MAP_MARKERS.slice(0);
  }

}
