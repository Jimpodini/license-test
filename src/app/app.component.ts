import { Component, OnInit } from '@angular/core';
import { config } from '../assets/config/licence-configs.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'licence-environment-test';
	clientName = config.clientName;

	ngOnInit() {}
}
