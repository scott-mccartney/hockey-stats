import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { Error404Component } from './components/http-status-pages/404/error-404.component';
import { GameComponent } from './components/games/game-profile/game.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StandingsComponent } from './components/standings/standings.component';
import { StatsComponent } from './components/stats/stats.component';
import { TeamComponent } from './components/teams/team-profile/team.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'games', component: GamesListComponent },
  { path: 'games/:gameid', component: GameComponent },
  { path: 'player', loadChildren: './components/player/player.module#PlayerModule' },
  { path: 'settings', component: SettingsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'teams', component: TeamsListComponent },
  { path: 'teams/:teamname', component: TeamComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'user/:username/article/:articleid', component: ArticleComponent },
  { path: '404-not-found', component: Error404Component },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
