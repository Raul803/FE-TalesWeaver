import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {AuthLayoutComponent} from "./views/auth-layout/auth-layout.component";
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
    { path: 'registry', component: RegistryComponent },
      // Else
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    // Auth Routes
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: () =>
                    import('./pages/auth/auth.module').then((m) => m.AuthModule),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    },
];

@NgModule({
  imports: [CommonModule,
            BrowserModule,
            RouterModule.forRoot(routes, {
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled',
              scrollOffset: [0, 0],
            })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
