import { Routes } from '@angular/router';
import {CurrentGameComponent} from "./components/current-game/current-game.component";
import { NewGameComponent } from './components/new-game/new-game.component';
import {SearchGameComponent} from "./components/search-game/search-game.component";

export const GameRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'currentgame',
                component: CurrentGameComponent,
            },
            {
                path: 'newgame',
                component: NewGameComponent,
            },
            {
                path: 'search',
                component: SearchGameComponent,
            },
        ],
    },
];