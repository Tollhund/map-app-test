import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {LocationService } from '../location.service';
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
  //location: Location;
  visible: boolean;

  constructor(private mapService: MapService,
              private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    });

    this.getMarkers()
  }
  getMarkers(): void {
    this.mapService.getMarkers()
    .subscribe(markers => this.markers = markers)
  }
  mapClicked($event: MouseEvent) {
    console.log(this.markers);
    this.markers.push({
      id: this.markers.length,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }
  markerClicked($event: MouseEvent) {
    this.visible = false;
  }

  showMarks($event: MouseEvent) {
    this.visible = true;
  }
  saveMarks(lat: number, id: number, lng: number): void {
    this.mapService.addMarker({lat, lng, id} as Marker)
        .subscribe(marker => {
          this.markers.push(marker);
        })
        console.log('Markers saved to DB');
    }
  }
