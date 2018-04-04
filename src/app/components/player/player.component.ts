import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = new Player('', '');

  constructor(private route: ActivatedRoute, private api: ApiService) {  }

  ngOnInit() {
    // Subscribe to API call for Player data, creating player with response
    this.api.getPlayerData(this.route.snapshot.params.playerid).subscribe(res => {
      this.player = this.createPlayer(res.json());
    }, err => {
      console.log(err);
    }, () => {      // Run on both success/error when finished
      console.log('Done');
    });
  }

  private createPlayer(playerJSON: Player): Player {
    return playerJSON;
  }
}
