import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/timer';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as Wait from './wait.actions';

@Injectable()
export class WaitEffects {
    @Effect()
    start$: Observable<Wait.Add> =
        this.actions$
            .ofType(Wait.START)
            .switchMap((action: Wait.Add) =>
                Observable.timer(1).take(1)
            )
            .map((): Wait.Add =>
                ({ type: Wait.ADD, payload: 1 }));

    @Effect()
    end$: Observable<Wait.Add> =
        this.actions$
            .ofType(Wait.END)
            .switchMap((action: Wait.End) =>
                Observable.timer(1).take(1)
            )
            .map((): Wait.Add =>
                ({ type: Wait.ADD, payload: -1 }));

    constructor(private actions$: Actions) {
    }
}
