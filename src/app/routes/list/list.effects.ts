import { Contact } from './contact';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as List from './list.actions';

Injectable()
export class ListEffects {
    @Effect()
    list$: Observable<List.ListResult> =
        this.actions$
        .ofType(List.LIST)
        .switchMap(():
     Observable<{} | ReadonlyArray<Contact>> =>
     this.contactsService.list())
        .map((x: ReadonlyArray<Contact>):
        List.ListResult =>
       new List.ListResult(x)
    );


    constructor(private actions$: Actions,
        private contactsService: ContactsService) {}
}
