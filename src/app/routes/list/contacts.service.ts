import { Contact } from './contact';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor(/*private httpClient: HttpClient*/) { }

  list(): Observable<{} | ReadonlyArray<Contact>> {
    // return this
    //     .httpClient
    //     .get<ReadonlyArray<Contact>>
    //         ('/api/contacts/list')
    //   .retry(2)
    //   .catch((e: Error) =>
    //         /* handle errors here */);
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

  delete(id: number): Observable<{}> {
    return Observable.of({});
  }

}
