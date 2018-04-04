export class PlayerGame {
  gameID: string;
  goals: number;
  assists: number;
  points: number;

  constructor(
      gameID: string,
      goals: number,
      assists: number,
      points: number) {
    this.gameID = gameID;
    this.goals = goals;
    this.assists = assists;
    this.points = points;
  }
}
