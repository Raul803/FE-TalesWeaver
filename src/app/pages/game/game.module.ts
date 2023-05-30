import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGameComponent } from './components/new-game/new-game.component';
import { SearchGameComponent } from './components/search-game/search-game.component';
import { CurrentGameComponent } from './components/current-game/current-game.component';
import {RouterModule} from "@angular/router";
import {GameRouting} from "./game.routing";



@NgModule({
  declarations: [
    NewGameComponent,
    SearchGameComponent,
    CurrentGameComponent
  ],
  imports: [
    RouterModule.forChild(GameRouting),
    CommonModule
  ]
})
export class GameModule { }
