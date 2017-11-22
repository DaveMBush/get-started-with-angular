import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
@Injectable()
export class ContactsService {

  constructor() { }
  list(): Observable<{} | ReadonlyArray<Contact>> {
    return Observable.from([[
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
    ]]);

  }

  delete(id: number): Observable<object> {
    return Observable.of({});
  }
}
