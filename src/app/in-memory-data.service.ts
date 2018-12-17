import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Marker } from './marker';



@Injectable()
export class InMemoryDataService {
  createDb() {
    const markers = [
      // { id: 11, name: 'Mr. Nice' },
      // { id: 12, name: 'Narco' },
    ];
    return {markers};
  }
  genId(markers: Marker[]): number {
    return markers.length > 0 ? Math.max(...markers.map(marker => marker.id)) + 1 : 1;
  }

  constructor() { }
}
