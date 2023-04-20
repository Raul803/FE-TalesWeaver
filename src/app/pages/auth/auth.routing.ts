import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegistryComponent} from "./registry/registry.component";

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'registry',
                component: RegistryComponent,
            },
        ],
    },
];