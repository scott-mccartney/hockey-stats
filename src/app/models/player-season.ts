export class PlayerSeason {
  year: number;
  cap: number;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  team: Array<string>;
  corsi: number;
  plusMinus: number;
  ppg: number;  // Powerplay goals
  ppp: number;  // Powerplay points
  gwg: number;  // Game-winning goals
  otg: number;  // Overtime goals
  shots: number;
  hits: number;
  toi: number;  // Time-on-ice / game

  constructor(
      year: number,
      cap: number,
      gamesPlayed: number,
      goals: number,
      assists: number,
      points: number,
      team: Array<string>,
      corsi: number,
      plusMinus: number,
      ppg: number,
      ppp: number,
      gwg: number,
      otg: number,
      shots: number,
      hits: number,
      toi: number) {
    this.year = year;
    this.cap = cap;
    this.gamesPlayed = gamesPlayed;
    this.goals = goals;
    this.assists = assists;
    this.points = points;
    this.team = team;
    this.corsi = corsi;
    this.plusMinus = plusMinus;
    this.ppg = ppg;
    this.ppp = ppp;
    this.gwg = gwg;
    this.otg = otg;
    this.shots = shots;
    this.hits = hits;
    this.toi = toi;
  }
}
