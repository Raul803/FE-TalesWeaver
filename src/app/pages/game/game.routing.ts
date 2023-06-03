import { Routes } from '@angular/router';
import {CurrentGameComponent} from "./components/current-game/current-game.component";
import {NewGameComponent} from "./components/new-game/new-game.component";
import {SearchGameComponent} from "./components/search-game/search-game.component";


export const GameRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'currentGame',
                component: CurrentGameComponent,
            },
            {
                path: 'newGame',
                component: NewGameComponent,
            },
            {
                path: 'searchGame',
                component: SearchGameComponent,
            },
        ],
    },
];