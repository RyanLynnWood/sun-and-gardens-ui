
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
// import {MaterialModule} from '@angular/material';
import {FooterComponent} from "./footer.component";
import {Routes, RouterModule} from '@angular/router'



@NgModule({
	imports: [
		CommonModule,
		RouterModule
		// MaterialModule,
	],
	entryComponents: [],
	declarations:[
		FooterComponent,
		
	],
	exports: [
		FooterComponent
	]
})
export class FooterModule {

}