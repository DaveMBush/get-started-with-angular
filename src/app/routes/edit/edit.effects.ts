import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
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
            .switchMap((action: Edit.Get): Observable<{} | ReadonlyArray<Contact>> =>
                this.contactsService.get(action.id))
            // no record means we retrieved id -1
            .map((records: ReadonlyArray<Contact>):
                Contact => records[0] || {
                    id: -1,
                    firstName: '',
                    lastName: '',
                    dateOfBirth: null
                }
            )
            .map((x: Contact): EditForm =>
                ({
                    id: x.id,
                    firstName: x.firstName,
                    lastName: x.lastName,
                    dateOfBirth: x.dateOfBirth ? x.dateOfBirth.toLocaleDateString() : ''
                })
            )
            .map((x: EditForm): Edit.Update =>
                new Edit.Update(x));

    @Effect()
    save$: Observable<Edit.Get> =
        this.actions$
        .ofType(Edit.SAVE)
        .switchMap(
            (action: Edit.Save):
            Observable<EditForm>  =>
                this.store.select(
                (x: AppState) => x.edit.form)
                .first()
            )
        .switchMap(
            (form: EditForm):
            Observable<{} | number> =>
                this
                .contactsService
                .update({
                    id: form.id,
                    firstName: form.firstName,
                    lastName: form.lastName,
                    dateOfBirth: new Date(
                    form.dateOfBirth
                    )
                })
        )
        .map((id: number) => new Edit.Get(id));

    constructor(
        private actions$: Actions,
        private contactsService: ContactsService,
        private store: Store<AppState>
    ) {}
}
