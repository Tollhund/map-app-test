import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Marker } from './marker';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MapService {
  private markersUrl = 'api/markers';

  constructor(private http: HttpClient) { }

  getMarkers (): Observable<Marker[]> {
    return this.http.get<Marker[]>(this.markersUrl)
  }
  addMarker (marker: Marker): Observable<Marker> {
    return this.http.post<Marker>(this.markersUrl, marker, httpOptions)
  }
}
