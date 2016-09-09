import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing,appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';

//Imports for loading & configuration the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './database/in-memory-data.service';


//para fazer two-way databind é necessário o FormsModule
import { FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroListComponent} from './hero-list.component';
import {DashboardComponent} from './dashboardComponent/dashboard.component';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroListComponent,
		DashboardComponent		
	],
	providers:[appRoutingProviders],
	bootstrap: [AppComponent]
})

export class AppModule {
	
	
}





