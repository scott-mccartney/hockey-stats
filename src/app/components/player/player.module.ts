import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { PlayerRoutingModule } from './player-routing.module';
import { ApiService } from '../../services/api.service';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    PlayerRoutingModule,
    MaterialModule
  ],
  providers: [ApiService],
  bootstrap: [PlayerComponent]
})
export class PlayerModule { }
