import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import {AuthLayoutComponent} from "./views/auth-layout/auth-layout.component";
import { RegistryComponent } from './pages/auth/registry/registry.component';
import {AdminLayoutComponent} from "./views/admin-layout/admin-layout.component";
import {GameModule} from "./pages/game/game.module";

const routes: Routes = [
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
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'game',
                loadChildren: () =>
                    import('./pages/game/game.module').then((m) => m.GameModule),
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
