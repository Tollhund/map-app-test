import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const markers = [
      // { id: 11, name: 'Mr. Nice' },
      // { id: 12, name: 'Narco' },
    ];
    return {markers};
  }

  constructor() { }

}
