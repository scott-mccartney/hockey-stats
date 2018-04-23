import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayerApiService } from '../services/player-api.service';
import { PlayerSeason } from '../../../models/player-season';
import { StatsDataSource } from './data-source/stats-data-source';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  @Input()
  stats: Array<PlayerSeason>;
  dataSource: StatsDataSource | null;

  // displayedColumns = ['year', 'team', 'gamesPlayed', 'goals',
  //                     'assists', 'points', 'plusMinus', 'ppg',
  //                     'ppp', 'gwg', 'otg', 'shots', 'hits',
  //                     'toi', 'corsi'];
  displayedColumns = ['year', 'gamesPlayed'];

  constructor(private api: PlayerApiService, private ds: StatsDataSource) {
    this.dataSource = ds;
  }

  ngOnInit() {
    this.dataSource.updateData(this.stats);
  }

}
