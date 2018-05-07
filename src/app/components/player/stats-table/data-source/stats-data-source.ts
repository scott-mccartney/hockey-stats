import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { PlayerSeason } from '../../../../models/player-season';

export class StatsDataSource extends DataSource<any> {

  dataChange: BehaviorSubject<PlayerSeason[]> = new BehaviorSubject<PlayerSeason[]>([]);

  updateData(data: any): void {
    const seasons: PlayerSeason[] = [];

    for (const s of data) {
      seasons.push(this.constructSeason(s));
    }
    this.dataChange.next(seasons);
  }

  constructSeason(season: PlayerSeason): PlayerSeason {
    return season;
  }

  get data(): PlayerSeason[] {
    return this.dataChange.value;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PlayerSeason[]> {
    return this.dataChange;
  }

  disconnect() { }
}
