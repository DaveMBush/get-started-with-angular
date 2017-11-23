import { ActionReducer } from '@ngrx/store';
import { Contact } from '../../shared/contact';
import * as List from './list.actions';

export function listReducer(
    state: ReadonlyArray<Contact> = [],
    action: List.ListResult):
    ReadonlyArray<Contact> {
    switch (action.type) {
        case List.LIST_RESULT:
            return action.rows;
        default:
            return state;
    }
}
export const ListReducer:
    ActionReducer<ReadonlyArray<Contact>> =
    listReducer;
