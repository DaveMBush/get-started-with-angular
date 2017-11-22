import { EditForm } from './edit-form';
import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const UPDATE = 'Edit.Update';
export class Update implements Action {
    readonly type = UPDATE;
    constructor(public form: EditForm) {}
}
