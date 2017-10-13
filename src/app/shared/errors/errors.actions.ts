import {Action} from '@ngrx/store';

// tslint:disable:typedef
export const ADD = 'Errors.Add';
export class Add implements Action {
    readonly type = ADD;
    constructor(public message: string) {
    }
}

export const CLEAR = 'Errors.Clear';
export class Clear implements Action {
    readonly type = CLEAR;
}
