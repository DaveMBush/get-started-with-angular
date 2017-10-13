import { EditForm } from './edit-form';
import { ActionReducer } from '@ngrx/store';
import * as Edit from './edit.actions';

export function editReducer(
  state: EditForm = {
      firstName: '',
      lastName: '',
      dateOfBirth: ''
  },
  action: Edit.Update): EditForm {
      switch(action.type) {
          case Edit.UPDATE:
              return action.form;
          default:
              return state;
      }
  }
export const EditReducer:
 ActionReducer<EditForm> =
   editReducer;
