import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = this.createBlankPlayer();
  pageLoaded = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService) {  }

  ngOnInit() {
    // Subscribe to API call for Player data, creating player with response
    this.api.getPlayerData(this.route.snapshot.params.playerid).subscribe(res => {
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
