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
  seasons: Array<PlayerSeason>;
  games: Array<PlayerGame>;

  constructor(
      id: string,
      name: string,
      birthDate: Date,
      birthCity: string,
      birthStateProv: string,
      gender: string,
      seasons: Array<PlayerSeason>) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.birthCity = birthCity;
    this.birthStateProv = birthStateProv;
    this.gender = gender;
    this.seasons = seasons;
  }

  public setGames(games: Array<PlayerGame>): void {
    this.games = games;
  }
}
