import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//para fazer two-way databind é necessário o FormsModule
import { FormsModule} from '@angular/forms';


import { HeroDetailComponent } from './hero-detail.component';
import {AppComponent} from './app.component';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HeroDetailComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {
	
	
}





