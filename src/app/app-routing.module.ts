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
  { path: 'games', component: GamesListComponent, children: [
    { path: ':gameid', component: GameComponent }
  ]},
  { path: 'player', children: [
    { path: ':playerid', component: PlayerComponent }
  ]},
  { path: 'settings', component: SettingsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'teams', component: TeamsListComponent, children: [
    { path: ':teamname', component: TeamComponent }]
  },
  { path: 'user', children: [
    { path: ':username', component: UserComponent, children: [
      { path: 'article', children: [
        { path: ':articleid', component: ArticleComponent }]
      }
    ]}
  ]},
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
