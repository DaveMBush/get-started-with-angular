import { Contact } from './contact';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

let contacts: ReadonlyArray<Contact> = [
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
    return Observable.from([contacts]);
  }

  delete(id: number): Observable<{}> {
    contacts = contacts
      .filter((x: Contact) =>
          x.id !== id)
      .reduce(
        (
     previousContact: ReadonlyArray<Contact>,
     currentContact: Contact ) =>
         [...previousContact, currentContact]
      , []);
      return Observable.of({});
    }

  get(id: number): Observable<{} | ReadonlyArray<Contact>> {
    return Observable.from(
      [[contacts.find((x: Contact) =>
        x.id === id)]])
  }

  update(contact: Contact): Observable<number> {
      const c: Contact =
        contacts.find((x: Contact) =>
            x.id === contact.id);
      c.dateOfBirth = contact.dateOfBirth;
      c.firstName = contact.firstName;
      c.lastName = contact.lastName;
      contacts = [...contacts];
      return Observable.of(contact.id);
  }

  add(contact: Contact): Observable<number> {
      const maxId: number =
        contacts.reduce(
          (max: number, c: Contact) => {
              if(max < c.id) {
                return c.id;
        }
        return max;
      }
      , 0)
      contact.id = maxId;
      contacts = [...contacts, contact];
      return Observable.of(maxId);
  }
}
