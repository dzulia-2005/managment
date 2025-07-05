import { Component } from '@angular/core';
import {dummyTrafficData} from "../../dummyTraficData";

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
  standalone: true,
})
export class TrafficComponent {
  data = dummyTrafficData;
  maxTraffic = Math.max(...this.data.map((x)=>x.value));
}
