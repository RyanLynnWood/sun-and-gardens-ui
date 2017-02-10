
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MaterialModule} from '@angular/material';
import {TitlebarComponent} from "./titlebar.component";




@NgModule({
	imports: [
		CommonModule,
		
		MaterialModule,
	],
	entryComponents: [],
	declarations:[
		TitlebarComponent,
		
	],
	exports: [
		TitlebarComponent
	]
})
export class TitlebarModule {

}