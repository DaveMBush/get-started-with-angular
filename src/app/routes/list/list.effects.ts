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
            .map((): List.ListResult =>
                new List.ListResult(
                    [
                        {
                            id: 1,
                            firstName: 'Dave',
                            lastName: 'Bush',
                            dateOfBirth:
                                new Date(2000, 0, 15)
                        },
                        {
                            id: 2,
                            firstName: 'John',
                            lastName: 'Dough',
                            dateOfBirth:
                                new Date(1990, 5, 15)
                        }
                    ]
                )
            );

    constructor(private actions$: Actions) { }
}
