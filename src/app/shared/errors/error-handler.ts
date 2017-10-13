import { AppState } from '../../app-state';
import { Store } from '@ngrx/store';
import { ErrorHandler as _ErrorHandler } from '@angular/core';
import * as Errors from './errors.actions';

export class ErrorHandler
    extends _ErrorHandler {
    constructor(private store:
        Store<AppState>) {
            super();
    }
// tslint:disable-next-line:no-any
handleError(error: any): void {
    super.handleError(error);
    this.store.dispatch(
        new Errors.Add(error.message)
    )
}
}
