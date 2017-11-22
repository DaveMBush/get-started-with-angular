import { ActionReducer } from '@ngrx/store';
import * as Errors from './errors.actions';

export type Action =
    Errors.Add | Errors.Clear;

export function errorsReducer(
    // tslint:disable-next-line:typedef
    state: ReadonlyArray<string> = [],
    action: Action): ReadonlyArray<string> {
    switch (action.type) {
        case Errors.ADD:
            return [...state, action.message];
        case Errors.CLEAR:
            return [];
        default:
            return state;
    }
};

export const ErrorsReducer:
    ActionReducer<ReadonlyArray<string>> =
    errorsReducer;
