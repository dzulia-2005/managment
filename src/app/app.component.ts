import { Component } from '@angular/core';
import {dummyTrafficData} from './dummyTraficData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
})
export class AppComponent {
  data = dummyTrafficData;

  maxTraffic = Math.max(...this.data.map((x)=>x.value));
  currentStatus = 'online';
}
