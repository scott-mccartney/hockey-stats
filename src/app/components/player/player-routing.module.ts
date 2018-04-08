import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';

const routes: Routes = [
  { path: '', component: PlayerComponent },
  { path: ':playername', component: PlayerComponent },
  { path: ':playername/season/:season', component: PlayerComponent },
  { path: '**', redirectTo: '/404-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class PlayerRoutingModule {}
