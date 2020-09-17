import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './components/game/game.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'game' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'leader-board', component: LeaderBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
