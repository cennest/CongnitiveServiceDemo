import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'cognitive-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cognitive App'; 
  constructor() { } 
}
