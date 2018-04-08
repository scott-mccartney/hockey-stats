import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerApiService } from './services/player-api.service';

import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player = this.createBlankPlayer();
  pageLoaded = false;
  season = '';
  imageToShow: any;
  isImageLoading = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: PlayerApiService) {  }

  ngOnInit() {
    this.season = this.route.snapshot.params.season;
    if (!this.season) {
      this.season = '2017-18';
    }

    this.loadPlayerData();
    this.getImageFromService();
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

  getImageFromService() {
    this.isImageLoading = true;

    this.api.getPlayerImg(this.route.snapshot.params.playername).subscribe(res => {
      this.createImageFromBlob(res.blob());
      this.isImageLoading = false;
    }, err => {
      if (err.status === 404) {
        console.log('Player image not found: ' + err);
        this.isImageLoading = false;
      }
    });
  }

  createImageFromBlob(image: Blob) {
     const reader = new FileReader();
     reader.addEventListener('load', () => {
        this.imageToShow = reader.result;
     }, false);

     if (image) {
        reader.readAsDataURL(image);
     }
  }

  private createBlankPlayer(): Player {
    return new Player('', '', new Date(), '', '', '', []);
  }

  private createPlayer(playerJSON: Player): Player {
    return playerJSON;
  }
}
