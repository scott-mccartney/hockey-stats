import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerApiService } from './services/player-api.service';

import { Player } from '../../models/player';
import { ViewChild } from '@angular/core/src/metadata/di';
import { PlayerBioComponent } from './bio/player-bio.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = this.createBlankPlayer();
  season = 'asdf';
  pageLoaded = false;
  imageToShow: any;
  isImageLoading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: PlayerApiService) {
    this.player = this.createBlankPlayer();
    this.season = this.route.snapshot.params.season;
  }

  ngOnInit() {
    if (!this.season) {
      this.season = '2017-18';
    }
    this.loadPlayerData();
  }

  loadPlayerData(): void {
    // Subscribe to API call for Player data, creating player with response
    this.api.getPlayerData(this.route.snapshot.params.playername).subscribe(res => {
      this.player = this.createPlayer(res.json());
    }, err => {
      if (err.status === 404) {
        this.router.navigateByUrl('404-not-found');
      } else if (err.status === 500) {
        this.router.navigateByUrl('/');
      }
    }, () => { this.pageLoaded = true; });
  }

  private createBlankPlayer(): Player {
    return new Player('', '', new Date(), '', '', '', []);
  }

  private createPlayer(playerJSON: Player): Player {
    return playerJSON;
  }
}
