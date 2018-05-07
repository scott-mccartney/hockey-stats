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

    return this.http.get(this.nameImgLookup(name),
        { responseType: ResponseContentType.Blob });
  }

  private nameImgLookup(name: string): string {
    if (name === 'Vladimir Tarasenko') {
      return '../../../../assets/test/players/vladimir-tarasenko.jpg';
    } else if (name === 'Alexander Ovechkin') {
      return '../../../../assets/test/players/alexander-ovechkin.jpg';
    } else {
      return '';
    }
  }
}
