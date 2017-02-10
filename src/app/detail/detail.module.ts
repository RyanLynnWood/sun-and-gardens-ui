
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {detailRouting} from "./detail.routing";
import {MaterialModule} from '@angular/material';
import {DetailComponent} from "./detail.component";




@NgModule({
	imports: [
		CommonModule,
		detailRouting,
		MaterialModule,
	],
	entryComponents: [],
	declarations:[
		DetailComponent,
		
	]
})
export class DetailModule {

}
