import { Component } from '@angular/core';
import {NewTicketComponent} from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  standalone: true,
})
export class TicketsComponent {

}
