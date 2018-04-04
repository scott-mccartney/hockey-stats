import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesListComponent } from './components/articles/articles-list/articles-list.component';
import { Error404Component } from './components/http-status-pages/404/error-404.component';
import { GameComponent } from './components/games/game-profile/game.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { StatsComponent } from './components/stats/stats.component';
import { StandingsComponent } from './components/standings/standings.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TeamComponent } from './components/teams/team-profile/team.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesListComponent,
    Error404Component,
    GameComponent,
    GamesListComponent,
    HomeComponent,
    PlayerComponent,
    SettingsComponent,
    StatsComponent,
    StandingsComponent,
    TeamComponent,
    TeamsListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
