import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/finally';
import * as Wait from './wait/wait.actions';

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

  constructor(private store: Store<AppState>) { }
  list(): Observable<{} | ReadonlyArray<Contact>> {
    this.store.dispatch(new Wait.Start());
    return Observable
      .timer(2000).first()
      .switchMap(() =>
        Observable.from([contacts])
      ).finally(() =>
      this.store.dispatch(new Wait.End())
    );
  }

  delete(id: number): Observable<object> {
    contacts = contacts
      .filter((x: Contact) =>
        x.id !== id)
      .reduce(
      (
        previousContact: ReadonlyArray<Contact>,
        currentContact: Contact) =>
        [...previousContact, currentContact]
      , []);
    return Observable.of({});
  }
  get(id: number):
    Observable<{} | ReadonlyArray<Contact>> {
    return Observable.from(
      [[contacts.find((x: Contact) =>
        x.id === id)]])
  }
  update(contact: Contact): Observable<number> {
    if (contact.id < 0) {
      return this.add(contact);
    }
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
          if (max < c.id) {
            return c.id;
          }
          return max;
        }
        , 0)
    contact.id = maxId + 1;
    contacts = [...contacts, contact];
    return Observable.of(contact.id);
  }

}

