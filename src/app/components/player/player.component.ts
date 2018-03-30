import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerID: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.setPlayerID(this.route.snapshot.params.playerid);
  }

  setPlayerID(id: string): void {
    this.playerID = id;
  }
}
