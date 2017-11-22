import { ActionReducer } from '@ngrx/store';
import * as Wait from './wait.actions';

// This could go in wait.actions.ts
export type Action =
    Wait.Add | Wait.End | Wait.Start;

export function waitReducer(
    // tslint:disable-next-line:typedef
    state = 0, action: Action): number {
    switch (action.type) {
        case Wait.ADD:
            return state + action.payload;
        default:
            return state;
    }
};

export const WaitReducer:
    ActionReducer<number> = waitReducer;
