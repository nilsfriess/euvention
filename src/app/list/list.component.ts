import { Component, OnInit } from '@angular/core';
import { MdListModule } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  statuses: string[] = [
    'done',
    'left OR',
    'in use',
    'arrived'
  ];

  tickets: any[] = [
    {
      id: 1,
      name: 'Box 1',
      status: this.statuses[3]
    },
    {
      id: 2,
      name: 'Box 2',
      status: this.statuses[3]
    },
    {
      id: 3,
      name: 'Box 3',
      status: this.statuses[1]
    },
    {
      id: 4,
      name: 'Box 4',
      status: this.statuses[0]
    },
    {
      id: 5,
      name: 'Box 5',
      status: this.statuses[2]
    }
  ];

  constructor() {
    // remove tickets that are done after 5 seconds
    this.tickets.forEach((ticket, i, tickets) => {
      if (ticket.status === this.statuses[0]) {
        setTimeout(() => {
          this.tickets.splice(i, 1);
        }, 5000);
      }
    });
  }

  ngOnInit() {
  }

}
