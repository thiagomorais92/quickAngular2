import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent }    from './hero-detail.component';
import { HeroListComponent} from './hero-list.component';
import {AppComponent}from './app.component';
import {  DashboardComponent } from './dashboardComponent/dashboard.component';



const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'hero/:id', component: HeroDetailComponent},
  { path: 'heroes', component:HeroListComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
