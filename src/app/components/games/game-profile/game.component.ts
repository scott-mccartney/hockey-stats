import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameID: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.setGameID(this.route.snapshot.params.gameid);
    }

    setGameID(id: string): void {
      this.gameID = id;
    }
}
