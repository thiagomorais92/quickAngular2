import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//para fazer two-way databind é necessário o FormsModule
import { FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';


@NgModule({
	imports: [BrowserModule,FormsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
	
	
}





