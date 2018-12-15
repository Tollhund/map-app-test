import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { PLACES } from './places-arr';

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
  onClickObj(place: Place): void {
    this.selectedPlace = place;
  }

}
