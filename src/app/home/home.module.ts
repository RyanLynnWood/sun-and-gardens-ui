
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {homeRouting} from "./home.routing";
import {MaterialModule} from '@angular/material';
import {HomeComponent} from "./home.component";




@NgModule({
	imports: [
		CommonModule,
		homeRouting,
		MaterialModule,
	],
	entryComponents: [],
	declarations:[
		HomeComponent,
		
	]
})
export class HomeModule {
}
