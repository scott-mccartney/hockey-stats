import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Player } from '../../../models/player';

@Injectable()
export class PlayerApiService {

  constructor(private http: Http) {  }

  getPlayerData(id: string): Observable<any> {
    return this.http.get('../../assets/test/players/player' + id + '.json');
  }
}
