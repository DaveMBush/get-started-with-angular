import { ContactsService } from './contacts.service';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
        private contactsService: ContactsService) { }
}
