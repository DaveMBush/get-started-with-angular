import { Contact } from './contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: ReadonlyArray<Contact> = [
    {
      id: 1,
      firstName: 'Dave',
      lastName: 'Bush',
      dateOfBirth: new Date(2000, 0, 15)
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Dough',
      dateOfBirth: new Date(1990, 5, 15)
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
