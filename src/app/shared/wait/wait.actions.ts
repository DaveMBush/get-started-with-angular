import {Action} from '@ngrx/store';

// tslint:disable:typedef
export const START = 'Wait.Start';
export class Start implements Action {
    readonly type = START;
}

export const END = 'Wait.End';
export class End implements Action {
    readonly type = END;
}

export const ADD = 'Wait.Add';
export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: number) {}
}
