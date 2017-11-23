import { ContactsService } from '../../shared/contacts.service';
import { EditForm } from './edit-form';
import { Contact } from '../../shared/contact';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as Edit from './edit.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditEffects {
    @Effect()
    get$: Observable<Edit.Update> =
        this.actions$
        .ofType(Edit.GET)
        .switchMap((action: Edit.Get): Observable<{}|ReadonlyArray<Contact>> =>
          this.contactsService
            .get(action.id))
        .map((x: ReadonlyArray<Contact>): ReadonlyArray<EditForm> => x.map((c: Contact) =>
            ({
                firstName: c.firstName,
                lastName: c.lastName,
                dateOfBirth:
                  c.dateOfBirth
                   .toLocaleDateString()
            })
        ))
        .map((x: ReadonlyArray<EditForm>):
           Edit.Update =>
             new Edit.Update(x[0]));
 constructor(
   private actions$: Actions,
   private contactsService: ContactsService
  ) {}
}
