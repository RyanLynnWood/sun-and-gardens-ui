
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {homeRouting} from "./home.routing";
import {MaterialModule} from '@angular/material';
import {HomeComponent} from "./home.component";


// directives
import { BackgroundFixedDirective } from '../common/backgroundFixed.directive';




@NgModule({
	imports: [
		CommonModule,
		homeRouting,
		MaterialModule,
	],
	entryComponents: [],
	declarations:[
		HomeComponent,
		BackgroundFixedDirective
		
	],
	providers: [  ]
})

export class HomeModule {


}
