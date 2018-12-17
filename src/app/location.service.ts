import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }
  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/check?access_key=b71cc879debc5567afd29eabb4c0e619')
  }
}
