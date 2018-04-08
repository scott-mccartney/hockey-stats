import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Player } from '../../../models/player';

@Injectable()
export class PlayerApiService {

  constructor(private http: Http) {  }

  getPlayerData(name: string): Observable<any> {
    return this.http.get('../../../../assets/test/players/' + name + '.json');
  }

  getPlayerImg(name: string): Observable<any> {
    return this.http.get('../../../../assets/test/players/' + name + '.jpg',
        { responseType: ResponseContentType.Blob });
  }
}
