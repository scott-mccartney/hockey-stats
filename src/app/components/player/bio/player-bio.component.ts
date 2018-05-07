import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerApiService } from '../services/player-api.service';

import { Player } from '../../../models/player';

@Component({
  selector: 'app-player-bio',
  templateUrl: './player-bio.component.html',
  styleUrls: ['./player-bio.component.css']
})
export class PlayerBioComponent implements OnInit {

  @Input()
  player: Player;
  @Input()
  season: string;
  imageToShow: any;
  isImageLoading = true;

  constructor(private api: PlayerApiService) {  }

  ngOnInit() {
    this.getImageFromService();
  }

  getImageFromService() {
    this.isImageLoading = true;

    this.api.getPlayerImg(this.player.name).subscribe(res => {
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
}
