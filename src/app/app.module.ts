// Imports for loading & configuring the in-memory web api
import {HttpModule} from '@angular/http';

import {NgModule, NgModuleFactoryLoader}  from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// export class MyHammerConfig extends HammerGestureConfig {
// 	overrides = <any>{
// 		'swipe': {velocity: 0.4, threshold: 20} // override default settings
// 	}
// }


import {FormsModule}    from '@angular/forms';
// import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';

//routing
import {AppRouting}        from './app.routing';

//application declarations
import {AppComponent}  from './app.component';


// modules
import {HomeModule} from './home/home.module';
import {TitlebarModule} from './titlebar/titlebar.module'
import {FooterModule} from './footer/footer.module'
import {DetailModule} from './detail/detail.module'
import {MaterialModule} from '@angular/material';

// pipes
import {OrderByPipe} from "./common/orderBy.pipe"


@NgModule({
	imports     : [
		MaterialModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule,
		TitlebarModule,
		FooterModule,
		HomeModule,
		DetailModule,
		AppRouting
	],
	declarations: [
		AppComponent,
		OrderByPipe
	],
	providers   : [
		// {
		// 	provide: HAMMER_GESTURE_CONFIG,
		// 	useClass: MyHammerConfig
		// },
		// {provide: LocationStrategy, useClass: HashLocationStrategy}
	],
	bootstrap   : [AppComponent]
})


export class AppModule {

}
