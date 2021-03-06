import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerApiService } from './services/player-api.service';

import { TeamListPipe } from '../../pipes/team-list.pipe';
import { PlusMinusPipe } from '../../pipes/plus-minus.pipe';

import { PlayerComponent } from './player.component';
import { PlayerBioComponent } from './bio/player-bio.component';
import { PlayerStatsComponent } from './stats-table/player-stats.component';
import { PlayerChartsComponent } from './charts/player-charts.component';
import { StatsDataSource } from './stats-table/data-source/stats-data-source';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerBioComponent,
    PlayerStatsComponent,
    PlayerChartsComponent,
    TeamListPipe,
    PlusMinusPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    PlayerRoutingModule,
    MaterialModule
  ],
  providers: [PlayerApiService, StatsDataSource],
  bootstrap: [PlayerComponent]
})
export class PlayerModule { }
