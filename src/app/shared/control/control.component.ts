import {Component, input} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  standalone: true,
})
export class ControlComponent {
  label = input.required<string>();
}
