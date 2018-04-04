import { PlayerSeason } from '../models/player-season';
import { PlayerGame } from '../models/player-game';
export class Player {
  id: string;
  name: string;
  birthDate: Date;
  birthCity: string;
  birthStateProv: string;
  birthCountry: string;
  gender: string;
  season: Array<PlayerSeason>;
  games: Array<PlayerGame>;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
