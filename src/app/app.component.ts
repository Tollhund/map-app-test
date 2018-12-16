import { Component, Inject } from '@angular/core';
import { isStorageAvailable } from 'angular-webstorage-service';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

const localStorageAvailable = isStorageAvailable(localStorage);
console.log(`Local storage available: ${localStorageAvailable}`);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Map';
  public data: any=[];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  saveInLocal(key, val): void {
      console.log('recieved= key:' + key + 'value:' + val);
      this.storage.set(key, val);
      this.data[key]= this.storage.get(key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
  }

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
