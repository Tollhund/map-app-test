import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Map';

  // addMarker(lat: number, lng: number): void {
  //
  //   let latLng = new google.maps.LatLng(lat, lng);
  //
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: latLng
  //   });
  //   this.markers.push(marker);
  // }
}
