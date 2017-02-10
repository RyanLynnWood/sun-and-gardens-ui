import {Component}          from '@angular/core';

require('!!style!css!less!../css/styles.less');
// require('!!style!css!sass!../css/material.scss');



@Component({
	selector: 'my-app',
	template: require('./app.component.html')
})


export class AppComponent {
	title = '';
}
