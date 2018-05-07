import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerApiService } from '../services/player-api.service';

@Component({
  selector: 'app-player-charts',
  templateUrl: './player-charts.component.html',
  styleUrls: ['./player-charts.component.css']
})
export class PlayerChartsComponent implements OnInit {

  constructor(private api: PlayerApiService) {  }

  ngOnInit() {
  }
}
