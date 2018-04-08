import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerApiService } from './services/player-api.service';
import { PlayerComponent } from './player.component';
import { PlayerBioComponent } from './bio/player-bio.component';
import { PlayerStatsComponent } from './stats-table/player-stats.component';
import { PlayerChartsComponent } from './charts/player-charts.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerBioComponent,
    PlayerStatsComponent,
    PlayerChartsComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    PlayerRoutingModule,
    MaterialModule
  ],
  providers: [PlayerApiService],
  bootstrap: [PlayerComponent]
})
export class PlayerModule { }
