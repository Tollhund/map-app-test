import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../map.service';
import { Marker } from '../marker';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  markers: Marker[];
  zoom: number = 16;
  lat: string = '';
  lng: string = '';
  location: Object;


  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

  mapClicked($event: MouseEvent) {
    console.log(this.markers);
    this.markers.push({
      id: this.markers.length,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }
}
