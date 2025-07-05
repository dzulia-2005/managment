import { Component } from '@angular/core';
import {ButtonComponent} from '../../../shared/button/button.component';
import {ControlComponent} from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent,ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  standalone: true,
})
export class NewTicketComponent {

}
