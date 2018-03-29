import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent }
];
// ,
//   { path: 'games', component: GameComponent, children: [
//     { path: '', component: GameListComponent },
//     { path: ':gameid', component: GameProfileComponent }]
//   },
//   { path: 'teams', component: TeamComponent, children: [
//     { path: '', component: TeamListComponent },
//     { path: ':teamname', component: TeamProfileComponent }]
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
