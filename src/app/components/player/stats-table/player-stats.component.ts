import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerApiService } from '../services/player-api.service';
import { PlayerSeason } from '../../../models/player-season';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  @Input()
  stats: Array<PlayerSeason>;

  constructor(private api: PlayerApiService) {  }

  ngOnInit() {
  }
}
