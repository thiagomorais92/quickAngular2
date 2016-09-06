import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing,appRoutingProviders } from './app.routing';

//para fazer two-way databind é necessário o FormsModule
import { FormsModule} from '@angular/forms';



import {AppComponent} from './app.component';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		
	],
	providers:[appRoutingProviders],
	bootstrap: [AppComponent]
})

export class AppModule {
	
	
}





