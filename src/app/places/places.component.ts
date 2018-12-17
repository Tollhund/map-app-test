import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { PLACES } from './places-arr';
//import { Marker } from '../marker';
//import { MapsAPILoader, AgmMap } from '@agm/core';
//declare var google: any;

// interface PlaceOnMap {
//   lat: number;
//   lng: number;
//   viewport?: Object;
//   place_level_1?: string;
//   marker?: Marker;
// }

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = PLACES;
  selectedPlace: Place;

  constructor() { }

  ngOnInit() {
  }
  onMouseOver(place: Place): void {
    this.selectedPlace = place;
  }
  onPlaceClick(): void {
    console.log('Hooooooya');
  }
}
