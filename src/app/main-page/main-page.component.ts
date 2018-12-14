import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { MapService } from '../map.service';

interface marker {
	lat: number;
	lng: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  zoom: number = 16;
  lat: string = '';
  lng: string = '';
  location: Object;
  markers: marker[] = [
    {
      lat: Number("5"),
      lng: Number("3")
    }
  ];

  constructor(private map: MapService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      let mark;
      this.lat = data.latitude;
      this.lng = data.longitude;
      mark = (this.lat, this.lng)
      console.log(mark);
    })
  }

  mapClicked($event: MouseEvent) {
    console.log(this.markers);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
    });
  }
}
