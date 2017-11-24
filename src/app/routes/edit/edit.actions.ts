import { EditForm } from './edit-form';
import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const UPDATE = 'Edit.Update';
export class Update implements Action {
    readonly type = UPDATE;
    constructor(public form: EditForm) { }
}

export const GET = 'Edit.Get';
export class Get implements Action {
    readonly type = GET;
    constructor(public id: number) { }
}

export const SAVE = 'Edit.Save';
export class Save implements Action {
    readonly type = SAVE;
}
